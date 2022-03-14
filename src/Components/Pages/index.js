import { useState, useEffect } from 'react'
import styled from 'styled-components'
import AllComments from './AllComments'
import {
  getDataHackerNews,
  getFavesFromLocalStorage,
} from '../../context/actions'
import { useAppState, useAppDispatch } from '../../context/store'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  flex: 1;
  width: 100%;
`

const FilterContainer = styled.div`
  margin: 34px;
`
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
  &.active {
    border: solid 1px #1797ff;
    color: #1797ff;
  }
  &:hover {
    color: var(--azure);
    border: solid 1px var(--azure);
  }
`

const Home = () => {
  const [choice, setChoise] = useState('All')
  const [option, setOption] = useState('Angular')
  const dispatch = useAppDispatch()
  const { data, faves } = useAppState()

  useEffect(async () => {
    // if (choice === 'All') {
    await getDataHackerNews(dispatch, option)
    await getFavesFromLocalStorage(dispatch, null)
    console.log(choice)
    //  d}
  }, [option])

  return (
    <Container>
      <FilterContainer>
        <Button
          type="button"
          onClick={() => {
            setChoise('All')
          }}
        >
          All
        </Button>
        <Button
          type="button"
          onClick={() => {
            setChoise('Faves')
          }}
        >
          My faves
        </Button>
      </FilterContainer>
      <AllComments
        data={data}
        setOption={setOption}
        option={option}
        faves={faves}
      />
    </Container>
  )
}

export default Home
