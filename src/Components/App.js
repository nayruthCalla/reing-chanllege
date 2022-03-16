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
  @media screen and (min-width: 1024px) {
    align-self: flex-start;
    padding: 0px 114px 1px 150px;
  }
`
const Footer = styled.footer`
  padding: 3rem 0 1rem 0;
`
const Link = styled.a`
  text-decoration: none;
  font-family: var(--principal-font);
  font-size: 14px;
  color: #3e3f3ab8;
`

const App = () => {
  return (
    <Container>
      <Header>
        <Title>HACKER NEWS</Title>
      </Header>
      <Home />
      <Footer>
        <Link href="https://iamp.netlify.app/ia/nayruthCalla" target="_blank">
          Made by NayruthCalla
        </Link>
      </Footer>
    </Container>
  )
}

export default App
