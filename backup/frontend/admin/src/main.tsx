import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./shared/styles/global.css";
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider } from './shared/components';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
