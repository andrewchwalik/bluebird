import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OurStoryPage from './OurStoryPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OurStoryPage />
  </StrictMode>,
)
