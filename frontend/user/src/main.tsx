import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/global.css";
import App from './App/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from './shared/components'
import { StoreProvider } from './services/StoreProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
)
