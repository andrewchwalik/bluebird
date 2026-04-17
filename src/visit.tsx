import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import VisitPage from './VisitPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VisitPage />
  </StrictMode>,
)
