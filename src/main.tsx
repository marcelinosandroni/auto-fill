import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DependencyProvider } from '@/providers/DependencyProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DependencyProvider>
      <App />
    </DependencyProvider>
  </React.StrictMode>,
)
