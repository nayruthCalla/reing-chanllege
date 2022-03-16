import { useState } from 'react'
import styled from 'styled-components'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const PaginationContainer = styled.footer`
  display: flex;
  margin-top: 50px;
`

const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 0 8px 0 0;
  padding: 9px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  &.active {
    background-color: #1890ff;
    color: #fff;
  }
  :hover {
    opacity: 0.7;
  }
`
const Span = styled.span`
  width: 8px;
  height: 22px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 25px;
  letter-spacing: normal;
  text-align: center;
`

const Pagination = ({ setPage, page }) => {
  const [isActive, setIsActive] = useState(0)

  const [numberPage, setNumberPage] = useState([0, 1, 2, 3])

  const handlerClick = (element) => {
    setPage(element)
    setIsActive(element)
  }
  const handlerNextPage = () => {
    const newArr = numberPage.map((e) => e + 1)
    setNumberPage(newArr)
    setPage(page + 1)
    setIsActive(isActive + 1)
  }
  const handlerBackPage = () => {
    const newArr = numberPage.map((e) => e - 1)
    setNumberPage(newArr)
    setPage(page - 1)
    setIsActive(isActive - 1)
  }

  return (
    <PaginationContainer>
      <PaginationButton onClick={handlerBackPage} disabled={isActive === 0}>
        <FaAngleLeft />
      </PaginationButton>
      {numberPage.map((element, index) => (
        <PaginationButton
          className={`${isActive === element ? 'active' : ''}`}
          key={index}
          onClick={() => {
            handlerClick(element)
          }}
        >
          <Span>{element + 1}</Span>
        </PaginationButton>
      ))}
      <PaginationButton onClick={handlerNextPage} disabled={isActive > 49}>
        <FaAngleRight />
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Pagination
