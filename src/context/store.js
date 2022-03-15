import { createContext, useContext, useReducer } from 'react'
import { SET_LOADING, GET_ALL_DATA } from './constans'

const AppStateContext = createContext()
const AppDispatchContext = createContext()

const initialState = {
  isLoading: false,
  dataWhitFaves: [],
}

const appReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
    case GET_ALL_DATA: {
      return {
        ...state,
        dataWhitFaves: action.payload,
      }
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

const useAppState = () => {
  const context = useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider')
  }
  return context
}

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider')
  }
  return context
}

export { AppProvider, useAppState, useAppDispatch }
