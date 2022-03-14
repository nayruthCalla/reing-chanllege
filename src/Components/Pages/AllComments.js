/* eslint-disable camelcase */
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import SelectCustom from '../Layout/SelectCustom'
import selectValues from '../../utils/selectValues'
import CommentCard from '../Layout/CommentCard'
import Loading from '../Layout/Loading/Loading'
import { getDataHackerNews } from '../../context/actions'
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
  const dispatch = useAppDispatch()
  const { isLoading, data } = useAppState()

  useEffect(async () => {
    await getDataHackerNews(dispatch, option)
  }, [option])
  // console.log(option, data, isLoading)
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
          {data.map(
            ({ created_at, author, story_url, story_title, objectID }) => (
              <CommentCard
                key={objectID}
                date={created_at}
                author={author}
                url={story_url}
                title={story_title}
              />
            )
          )}
        </CommentsConatiner>
      )}
    </Container>
  )
}

export default AllComments
