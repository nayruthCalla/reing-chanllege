import { useState } from 'react'
import styled from 'styled-components'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const PaginationContainer = styled.footer`
  display: flex;
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
  /* :disabled {
    background: #dddddd;
  } */
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

const Pagination = ({ numberPage, setPage, page }) => {
  const [isActive, setIsActive] = useState(0)
  const [sum, setSum] = useState(1)

  const handlerClick = (element) => {
    setPage(element)
    setIsActive(element)
  }
  const handlerNextPage = () => {
    setPage(page + 1)
    setIsActive(isActive + 1)
    if (isActive >= 8) {
      setSum(sum + 1)
      setIsActive(8)
    }
  }
  const handlerBackPage = () => {
    setPage(page - 1)

    if (isActive === 1) {
      setIsActive(0)
      setSum(sum - 1)
    } else {
      setIsActive(isActive - 1)
    }
  }
  return (
    <PaginationContainer>
      <PaginationButton onClick={handlerBackPage} disabled={isActive < 1}>
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
          <Span>{element + sum}</Span>
        </PaginationButton>
      ))}
      <PaginationButton onClick={handlerNextPage} disabled={isActive > 49}>
        <FaAngleRight />
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Pagination
