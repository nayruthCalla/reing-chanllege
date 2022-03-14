import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './Components/App'
import { AppProvider } from './context/store'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
