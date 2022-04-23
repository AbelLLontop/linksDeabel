import App from './App';
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalCSS from './styles/global.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalCSS/>
    <App />
  </React.StrictMode>
)
