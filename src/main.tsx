import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './routes/Routers.tsx'
import '../src/styles/main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
)
