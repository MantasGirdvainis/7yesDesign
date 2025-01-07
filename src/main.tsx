import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.scss'
import App from './App.tsx'
import './assets/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)