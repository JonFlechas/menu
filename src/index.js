import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import App2 from '../../birthday-reminder/src/App'

// const allApps = [<App />, <App2></App2>]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
