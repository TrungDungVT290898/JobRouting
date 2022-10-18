import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ScopedCssBaseline } from '@mui/material'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ScopedCssBaseline>
    {/* The rest of your application */}
    <App />
  </ScopedCssBaseline>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
