import styled from 'styled-components'
import SelectCustom from '../Layout/SelectCustom'
import selectValues from '../../utils/selectValues'
import CommentCard from '../Layout/CommentCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const CommentsConatiner = styled.section`
  margin: 20px;
`

const AllComments = () => {
  return (
    <Container>
      <SelectCustom defaultValue="Select your news" options={selectValues} />
      <CommentsConatiner>
        <CommentCard
          date="2022-03-13T18:32:56.000Z"
          author="bhawks"
          url="https://finance.yahoo.com/news/goldman-sachs-ceo-demanded-employees-210608499.html"
          title="CEO demanded all employees return full-time to the office. Only half showed up"
        />
      </CommentsConatiner>
    </Container>
  )
}

export default AllComments
