import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/context.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="123685581345-86ouue1628da7p74ri2p3bcub2psdefv.apps.googleusercontent.com">
    <StrictMode>
      <BrowserRouter>
        <ContextProvider>
          <App />
        </ContextProvider>
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>
)
