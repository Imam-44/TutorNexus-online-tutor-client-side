import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/Router.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import LoadingProvider from './context/LoadingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LoadingProvider>
           <RouterProvider router={router}/>
      </LoadingProvider>
    </AuthProvider>
  </StrictMode>,
)
