import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CounterAppWithCustomHooks from './01-useState/CounterAppWithCustomHooks'
//import HooksApp from './HooksApp.jsx'
//import CounterApp from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterAppWithCustomHooks />
  </React.StrictMode>,
)
