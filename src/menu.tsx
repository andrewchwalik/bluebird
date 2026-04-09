import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MenuPage from './MenuPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuPage />
  </StrictMode>,
)
