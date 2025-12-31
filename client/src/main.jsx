import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/context.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="123685581345-86ouue1628da7p74ri2p3bcub2psdefv.apps.googleusercontent.com">
    <StrictMode>
      <BrowserRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </BrowserRouter>
    </StrictMode>
    <Toaster
      reverseOrder={false}
      position='top-right'
      toastOptions={{
        duration: "200",
        success: {
          style: {
            background: '#303030',
            color: "whitesmoke"
          },
        },
        error: {
          style: {
            background: '#303030',
            color: "whitesmoke"
          },
        },
      }} />
  </GoogleOAuthProvider>
)
