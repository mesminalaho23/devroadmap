import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// main.jsx - Application entry point
// main.jsx - Point d'entrée de l'application
// This file mounts the React app into the browser DOM.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
