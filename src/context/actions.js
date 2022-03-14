/* eslint-disable camelcase */
import axios from '../utils/axios'
import {
  SET_LOADING,
  GET_ALL_DATA,
  GET_FAVES_FROM_LOCALSTORAGE,
  GET_DATAHACKERNEWS_FAVES,
  ADD_DATAHACKERNEWS_FAVES,
} from './constans'

export const getFavesFromLocalStorage = (dispatch) => {
  const data = JSON.parse(localStorage.getItem('faves'))
  if (data) {
    dispatch({ type: GET_FAVES_FROM_LOCALSTORAGE, payload: data })
  }
}

export const getDataHackerNews = async (dispatch, option) => {
  try {
    dispatch({ type: SET_LOADING, payload: true })
    const { data } = await axios.get(`/search_by_date?query=${option}&page=0`)
    const faves = JSON.parse(localStorage.getItem('faves'))
    const newArr = []
    if (faves) {
      data.hits.forEach(
        ({ created_at, author, story_url, story_title, objectID }) => {
          if (!created_at || !author || !story_url || !story_title) {
            //   newArr
          } else {
            const dateExists = faves.find(
              (elementFav) => elementFav.objectID === objectID
            )
            if (dateExists) {
              newArr.push({
                objectID,
                created_at,
                author,
                story_url,
                story_title,
                fave: true,
              })
            } else {
              newArr.push({
                objectID,
                created_at,
                author,
                story_url,
                story_title,
                fave: false,
              })
            }
          }
        }
      )
    } else {
      data.hits.forEach(
        ({ created_at, author, story_url, story_title, objectID }) => {
          if (!created_at || !author || !story_url || !story_title) {
            //   newArr
          } else {
            newArr.push({
              objectID,
              created_at,
              author,
              story_url,
              story_title,
              fave: false,
            })
          }
        }
      )
    }

    localStorage.setItem('allDataHakerNews', JSON.stringify(newArr))

    dispatch({ type: GET_ALL_DATA, payload: newArr })
  } catch (e) {
    // console.error(e)
  } finally {
    dispatch({ type: SET_LOADING, payload: false })
  }
}
export const getDataHackerNewsWithFavorites = (
  dispatch,
  dataRequest,
  faves
) => {
  const newArr = []
  dataRequest.forEach(
    ({ created_at, author, story_url, story_title, objectID }) => {
      const dateExists = faves.find(
        (elementFav) => elementFav.objectID === objectID
      )
      if (dateExists) {
        newArr.push({
          objectID,
          created_at,
          author,
          story_url,
          story_title,
          fave: true,
        })
      } else {
        newArr.push({
          objectID,
          created_at,
          author,
          story_url,
          story_title,
          fave: false,
        })
      }
    }
  )

  dispatch({ type: GET_DATAHACKERNEWS_FAVES, payload: newArr })
}

export const addDataFavesToLocalStorage = (dispatch, data, newDate, option) => {
  localStorage.setItem('faves', JSON.stringify([...data, newDate]))
  dispatch({ type: ADD_DATAHACKERNEWS_FAVES, payload: data })
  getDataHackerNews(dispatch, option, [...data, newDate])
}
