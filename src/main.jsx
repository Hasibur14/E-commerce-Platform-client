import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './Provider/AuthProvider.jsx'
import { router } from './Routes/Routes.jsx'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
   
          <RouterProvider router={router}></RouterProvider>
      <Toaster/>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
)
