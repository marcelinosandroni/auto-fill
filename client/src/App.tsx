import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '@/features/landing/pages/LandingPage'
import DocsApp from '@/apps/DocsApp'
import DashboardApp from '@/apps/DashboardApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page - Rota principal */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Dashboard - Área logada */}
        <Route path="/dashboard/*" element={<DashboardApp />} />
        
        {/* Product Artifact Viewer - Documentação */}
        <Route path="/docs/*" element={<DocsApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
