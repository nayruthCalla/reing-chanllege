import { useState } from 'react'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 240px;
  position: absolute;
  z-index: 1;
`
const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 12px 5px 12px;
  border-radius: 4px;
  border: solid 1px #2e2e2e70;
  background-color: #fff;
  font-size: 1.7rem;
  color: #343434;
  cursor: pointer;
`
const Image = styled.img`
  margin-left: 1.5rem;
`

const Select = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0;
  width: 100%;
  margin: 0 0 0 1px;
  box-shadow: 0 2px 2px 0 #dad8d8;
  background-color: #fff;
  position: absolute;
  top: 38px;
`
const Option = styled.li`
  list-style: none;
  width: 100%;
`
const OptionButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
  cursor: pointer;
  border: none;
  background: none;
  :hover {
    background-color: #7e7e7e12;
  }
`

const Span = styled.span`
  font-family: var(--secondary-font);
  font-size: var(--secondary-font-size);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;
`

const SelectCustom = ({ defaultValue, options }) => {
  const [showSelect, setShowSelect] = useState(false)
  const [buttonText, setbuttonText] = useState(defaultValue)

  const handlerClick = (text) => {
    setbuttonText(text)
  }
  return (
    <Container>
      <Button
        type="button"
        onClick={() => {
          setShowSelect(!showSelect)
        }}
      >
        <Span>{buttonText}</Span>
        <FaAngleDown />
      </Button>
      {showSelect ? (
        <Select>
          {options.map(({ text, icon }, index) => (
            <Option key={index}>
              <OptionButton
                onClick={() => {
                  handlerClick(text)
                }}
              >
                {icon ? <Image src={icon} alt={`${text}-icon`} /> : null}
                <Span icon={icon}>{text}</Span>
              </OptionButton>
            </Option>
          ))}
        </Select>
      ) : null}
    </Container>
  )
}

export default SelectCustom
