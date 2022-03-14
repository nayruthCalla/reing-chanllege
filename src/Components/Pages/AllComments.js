/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import SelectCustom from '../Layout/SelectCustom'
import selectValues from '../../utils/selectValues'
import CommentCard from '../Layout/CommentCard'
import Loading from '../Layout/Loading/Loading'
import {
  getDataHackerNews,
  getDataHackerNewsWithFavorites,
} from '../../context/actions'
import { useAppState, useAppDispatch } from '../../context/store'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const LoadingConatiner = styled(Container)`
  margin-top: 10%;
`

const CommentsConatiner = styled.section`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

const AllComments = () => {
  const [option, setOption] = useState('Angular')
  const [upadateData, setUpadateData] = useState([])
  const [favesData, setFavesData] = useState([])
  const [onlyFaves, setOnlyFaves] = useState([])

  const dispatch = useAppDispatch()
  const { isLoading, data, faves } = useAppState()

  useEffect(async () => {
    // if (choice === 'All') {
    await getDataHackerNews(dispatch, option)
    await getDataHackerNewsWithFavorites(dispatch, data, faves)
    const a = JSON.parse(localStorage.getItem('faves'))
    if (a) {
      setOnlyFaves(JSON.parse(localStorage.getItem('faves')))
    }

    setUpadateData(JSON.parse(localStorage.getItem('allDataHakerNews')))
    //  d}
  }, [option])

  // console.log(data, 'mira mi data')

  const handlerFavorite = (i) => {
    if (!i.fave) {
      setOnlyFaves([...onlyFaves, i])
      localStorage.setItem('faves', JSON.stringify([...onlyFaves, i]))
      const newArr = upadateData.map((e) => {
        if (e.objectID === i.objectID) {
          return {
            objectID: e.objectID,
            created_at: e.created_at,
            author: e.author,
            story_url: e.story_url,
            story_title: e.story_title,
            fave: true,
          }
        }
        return e
      })
      localStorage.setItem('allDataHakerNews', JSON.stringify(newArr))
      setUpadateData(newArr)
    } else {
      const removeFave = onlyFaves.filter(
        (element) => element.objectID !== i.objectID
      )
      localStorage.setItem('faves', JSON.stringify(removeFave))
      setOnlyFaves(removeFave)
      const newArr = upadateData.map((e) => {
        if (e.objectID === i.objectID) {
          return {
            objectID: e.objectID,
            created_at: e.created_at,
            author: e.author,
            story_url: e.story_url,
            story_title: e.story_title,
            fave: false,
          }
        }
        return e
      })
      setUpadateData(newArr)
    }
  }

  return (
    <Container>
      <SelectCustom
        defaultValue="Select your news"
        options={selectValues}
        setOption={setOption}
      />
      {isLoading ? (
        <LoadingConatiner>
          <Loading />
        </LoadingConatiner>
      ) : (
        <CommentsConatiner>
          {upadateData.map((hit) =>
            !hit.created_at ||
            !hit.author ||
            !hit.story_url ||
            !hit.story_title ? null : (
              <CommentCard
                key={hit.objectID}
                hit={hit}
                setFaves={setFavesData}
                faves={favesData}
                handlerFavorite={handlerFavorite}
              />
            )
          )}
        </CommentsConatiner>
      )}
    </Container>
  )
}

export default AllComments
