import styled from 'styled-components'
import Home from './Pages'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
`
const Title = styled.h1`
  width: 208px;
  height: 28px;
  object-fit: contain;
  font-family: var(--principal-font);
  font-size: var(--principal-font-size);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #3b3b3b;
`
const Footer = styled.footer``

const App = () => {
  return (
    <Container>
      <Header>
        <Title>HACKER NEWS</Title>
      </Header>
      <Home />
      <Footer>
        <p>Made by NayruthCalla</p>
      </Footer>
    </Container>
  )
}

export default App
