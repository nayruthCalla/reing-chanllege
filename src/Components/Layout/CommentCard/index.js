import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import time from '../../../assets/iconmonstr-time-2.svg'
import favorite from '../../../assets/heart/iconmonstr-favorite-3.png'
import notFavorite from '../../../assets/heart/iconmonstr-favorite-2.png'

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  width: 100%;
  height: 90px;
  :hover {
    opacity: 0.4;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    /* width: 550px; */
    width: 479px;
  }
`
const Section = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: inherit;
  padding-left: 20px;
  text-decoration: none;
  width: inherit;
`
const Header = styled.header`
  display: flex;
  gap: 0.5rem;
`
const Image = styled.img``
const Text = styled.p`
  font-family: var(--secondary-font);
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
`
const CommentText = styled.h3`
  font-family: var(--secondary-font);
  font-size: var(--secondary-font-size);
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
  margin: 0;
  font-weight: bold;
`
const FavoriteContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
  width: 20%;
  align-items: center;
  border-radius: 6px;
  border: solid 1px rgba(96, 96, 96, 0.008);
  background-color: rgba(96, 96, 96, 0.08);
  padding-left: 0;
  cursor: pointer;
`
const FavoriteImage = styled(Image)`
  width: 24px;
  height: 22px;
  object-fit: contain;
`

const CommentCard = ({ date, author, url, title }) => {
  const [like, setLike] = useState(false)
  const handlerFavorite = () => {
    setLike(!like)
  }
  return (
    <Container>
      <Section href={url} target="_blank">
        <Header>
          <Image src={time} alt="time-icon" />
          <Text>
            {moment(date).fromNow()} by {author}
          </Text>
        </Header>
        <CommentText>{title}</CommentText>
      </Section>
      <FavoriteContainer onClick={handlerFavorite}>
        {like ? (
          <FavoriteImage src={favorite} alt="heart-icon" />
        ) : (
          <FavoriteImage src={notFavorite} alt="heart-icon" />
        )}
      </FavoriteContainer>
    </Container>
  )
}

CommentCard.defaultProps = {
  title: '',
  author: '',
  url: '',
}
CommentCard.propTypes = {
  author: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
}
export default CommentCard
