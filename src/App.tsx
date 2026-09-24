import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '@/features/landing/pages/LandingPage'
import DocsApp from '@/apps/DocsApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page - Rota principal */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Product Artifact Viewer - Documentação */}
        <Route path="/docs/*" element={<DocsApp />} />
        
        {/* TODO: Dashboard será adicionado na TASK-1.8 */}
        {/* <Route path="/dashboard/*" element={<DashboardApp />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
