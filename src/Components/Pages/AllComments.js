/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import SelectCustom from '../Layout/SelectCustom'
import selectValues from '../../utils/selectValues'
import CommentCard from '../Layout/CommentCard'
import Loading from '../Layout/Loading/Loading'
import {
  addDataFavesToLocalStorage,
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

const AllComments = ({ data, faves, setOption, option }) => {
  // const [option, setOption] = useState('Angular')
  const [upadateData, setUpadateData] = useState([])
  const [favesData, setFavesData] = useState([])

  const dispatch = useAppDispatch()
  const { isLoading, dataWhitFaves } = useAppState()

  useEffect(async () => {
    // if (choice === 'All') {

    await getDataHackerNewsWithFavorites(dispatch, data, faves)

    //  d}
  }, [option])

  console.log(data, 'mira mi data', upadateData)

  const handlerFavorite = ({ objectID, date, author, url, title }) => {
    const searchId = faves.find((element) => element.objectID === objectID)
    if (!searchId) {
      addDataFavesToLocalStorage(
        dispatch,
        faves,
        {
          objectID,
          date,
          author,
          url,
          title,
          fave: true,
        },
        option
      )
      setUpadateData(dataWhitFaves)
    } else {
      const removeFave = faves.filter(
        (element) => element.objectID !== objectID
      )
      localStorage.setItem('faves', JSON.stringify(removeFave))
      // setFaves(removeFave)
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
