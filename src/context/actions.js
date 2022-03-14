import axios from '../utils/axios'
import {
  SET_LOADING,
  GET_ALL_DATA,
  GET_FAVES_FROM_LOCALSTORAGE,
} from './constans'

export const getFavesFromLocalStorage = (dispatch) => {
  const data = localStorage.getItem('favesData')
  if (data) {
    dispatch({ type: GET_FAVES_FROM_LOCALSTORAGE, payload: data })
  }
}

export const getDataHackerNews = async (dispatch, option) => {
  try {
    dispatch({ type: SET_LOADING, payload: true })
    const { data } = await axios.get(`/search_by_date?query=${option}&page=0`)
    dispatch({ type: GET_ALL_DATA, payload: data.hits })
  } catch (e) {
    // console.error(e)
  } finally {
    dispatch({ type: SET_LOADING, payload: false })
  }
}
