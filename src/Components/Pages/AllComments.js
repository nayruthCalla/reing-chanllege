import styled from 'styled-components'
import SelectCustom from '../Layout/SelectCustom'
import selectValues from '../../utils/selectValues'
import CommentCard from '../Layout/CommentCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 0;
`

const AllComments = () => {
  return (
    <Container>
      <SelectCustom defaultValue="Select your news" options={selectValues} />
      <CommentCard />
    </Container>
  )
}

export default AllComments
