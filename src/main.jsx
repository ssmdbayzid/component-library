import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
    <RouterProvider router={router}/>
    </PrimeReactProvider>
  </React.StrictMode>,
)
