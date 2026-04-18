import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JobsPage from './JobsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JobsPage />
  </StrictMode>,
)
