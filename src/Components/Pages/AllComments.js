/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import SelectCustom from '../Layout/SelectCustom'
import selectValues from '../../utils/selectValues'
import CommentCard from '../Layout/CommentCard'
import Loading from '../Layout/Loading/Loading'
import { getDataHackerNews } from '../../context/actions'
import { useAppDispatch } from '../../context/store'

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

const AllComments = ({ choice }) => {
  const [option, setOption] = useState('Angular')
  const [upadateData, setUpadateData] = useState([])
  const [onlyFaves, setOnlyFaves] = useState([])
  // const { isLoading } = useAppState()

  const dispatch = useAppDispatch()

  useEffect(async () => {
    await getDataHackerNews(dispatch, option)
    setUpadateData(JSON.parse(localStorage.getItem('allDataHakerNews')))
    setOnlyFaves(JSON.parse(localStorage.getItem('faves')))
  }, [option, choice])

  const handlerFavorite = ({
    objectID,
    created_at,
    author,
    story_url,
    story_title,
    fave,
  }) => {
    if (!fave) {
      const changeToLike = {
        objectID,
        created_at,
        author,
        story_url,
        story_title,
        fave: true,
      }
      setOnlyFaves([...onlyFaves, changeToLike])
      localStorage.setItem(
        'faves',
        JSON.stringify([...onlyFaves, changeToLike])
      )
      const newArr = upadateData.map((e) => {
        if (e.objectID === objectID) {
          return changeToLike
        }
        return e
      })
      localStorage.setItem('allDataHakerNews', JSON.stringify(newArr))
      setUpadateData(newArr)
    } else {
      const removeFave = onlyFaves.filter(
        (element) => element.objectID !== objectID
      )
      localStorage.setItem('faves', JSON.stringify(removeFave))
      setOnlyFaves(removeFave)
      const newArr = upadateData.map((e) => {
        if (e.objectID === objectID) {
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
      {choice === 'All' ? (
        <SelectCustom
          defaultValue="Select your news"
          options={selectValues}
          setOption={setOption}
        />
      ) : null}
      {upadateData.length === 0 ? (
        <LoadingConatiner>
          <Loading />
        </LoadingConatiner>
      ) : (
        <CommentsConatiner>
          {choice === 'All'
            ? upadateData.map((hit) =>
                !hit.created_at ||
                !hit.author ||
                !hit.story_url ||
                !hit.story_title ? null : (
                  <CommentCard
                    key={hit.objectID}
                    hit={hit}
                    handlerFavorite={handlerFavorite}
                  />
                )
              )
            : onlyFaves.map((hit) =>
                !hit.created_at ||
                !hit.author ||
                !hit.story_url ||
                !hit.story_title ? null : (
                  <CommentCard
                    key={hit.objectID}
                    hit={hit}
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
