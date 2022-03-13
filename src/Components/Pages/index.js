import styled from 'styled-components'
import AllComments from './AllComments'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
`

const FilterContainer = styled.div``
const Button = styled.button`
  width: 98px;
  height: 31px;
  padding: 3px 16px 0 17px;
  border-radius: 2px;
  border: solid 1px #d6d6d6;
  font-family: var(--secondary-font);
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #606060;
  cursor: pointer;
  background: none;
  :hover {
    color: var(--azure);
    border: solid 1px var(--azure);
  }
`

const Home = () => {
  return (
    <Container>
      <FilterContainer>
        <Button>All</Button>
        <Button>My faves</Button>
      </FilterContainer>
      <AllComments />
    </Container>
  )
}

export default Home
