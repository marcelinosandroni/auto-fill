import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './pages/Overview'
import Features from './pages/Features'
import DesignPreview from './pages/DesignPreview'
import UserFlows from './pages/UserFlows'
import Roadmap from './pages/Roadmap'
import Architecture from './pages/Architecture'

type Page = 'overview' | 'features' | 'design' | 'flows' | 'roadmap' | 'architecture'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('overview')

  const renderPage = () => {
    switch (currentPage) {
      case 'overview': return <Overview />
      case 'features': return <Features />
      case 'design': return <DesignPreview />
      case 'flows': return <UserFlows />
      case 'roadmap': return <Roadmap />
      case 'architecture': return <Architecture />
      default: return <Overview />
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1 ml-64 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto animate-slide-up">
          {renderPage()}
        </div>
      </main>
    </div>
  )
}

export default App
