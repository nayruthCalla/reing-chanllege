import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 240px;
  position: relative;
`

const CommentCard = () => {
  return (
    <Container>
      <h1>card</h1>
    </Container>
  )
}

export default CommentCard
