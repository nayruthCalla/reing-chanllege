/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
import axios from '../utils/axios'
import { SET_LOADING, GET_ALL_DATA } from './constans'

export const getDataHackerNews = async (dispatch, option, page) => {
  try {
    dispatch({ type: SET_LOADING, payload: true })
    const { data } = await axios.get(
      `/search_by_date?query=${option}&page=${page}`
    )
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
