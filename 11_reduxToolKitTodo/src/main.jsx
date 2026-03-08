import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  //store is a property and the value passed as store is the one we created in store.js
  <Provider store={store}> 
    <App />
  </Provider>,
)
