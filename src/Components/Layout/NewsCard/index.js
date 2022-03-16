import styled from 'styled-components';
import moment from 'moment';
import time from '../../../assets/iconmonstr-time-2.svg';
import favorite from '../../../assets/heart/iconmonstr-favorite-3.png';
import notFavorite from '../../../assets/heart/iconmonstr-favorite-2.png';
import loadingT from '../../../assets/loading.gif';

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  width: 100%;
  min-width: 270px;
  height: 90px;
  :hover {
    opacity: 0.4;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 479px;
  }
`;
const Section = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: inherit;
  padding-left: 20px;
  text-decoration: none;
  width: inherit;
  cursor: pointer;
`;
const Header = styled.header`
  display: flex;
  gap: 0.5rem;
`;
const Image = styled.img``;
const Text = styled.p`
  font-family: var(--secondary-font);
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
  /* background: ${({ isLoading }) => (isLoading ? '#000' : 'none')}; */
  /* width: 20px; */
`;
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
`;
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
`;
const FavoriteImage = styled(Image)`
  width: 24px;
  height: 22px;
  object-fit: contain;
`;
const Loading = styled.img`
  width: 10rem;
  display: flex;
  align-self: center;
`;

function NewsCard({ hit, handlerFavorite, isLoading }) {
  return (
    <Container>
      <Section href={hit.story_url} target="_blank">
        {isLoading ? (
          <Loading src={loadingT} alt="loading" />
        ) : (
          <div>
            <Header>
              <Image src={time} alt="time-icon" />

              <Text>
                {moment(hit.created_at).fromNow() === 'an hour ago'
                  ? '1 hour ago'
                  : moment(hit.created_at).fromNow()}{' '}
                by {hit.author}
              </Text>
            </Header>

            <CommentText>{hit.story_title}</CommentText>
          </div>
        )}
      </Section>
      <FavoriteContainer
        data-test="buttonFave"
        onClick={() => {
          handlerFavorite(hit);
        }}
      >
        {hit.fave ? (
          <FavoriteImage src={favorite} alt="heart-icon" />
        ) : (
          <FavoriteImage src={notFavorite} alt="heart-icon" />
        )}
      </FavoriteContainer>
    </Container>
  );
}

export default NewsCard;
