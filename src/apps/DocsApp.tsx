import { useState } from 'react'
import Sidebar, { type Page } from '../components/Sidebar'
import Overview from '../pages/Overview'
import Features from '../pages/Features'
import DesignPreview from '../pages/DesignPreview'
import UserFlows from '../pages/UserFlows'
import Roadmap from '../pages/Roadmap'
import Architecture from '../pages/Architecture'
import DesignSystem from '../pages/DesignSystem'
import OnboardingFlow from '../pages/OnboardingFlow'
import StatesPreview from '../pages/StatesPreview'
import CopyPreview from '../pages/CopyPreview'

export default function DocsApp() {
  const [currentPage, setCurrentPage] = useState<Page>('overview')

  const renderPage = () => {
    switch (currentPage) {
      case 'overview': return <Overview />
      case 'features': return <Features />
      case 'design': return <DesignPreview />
      case 'flows': return <UserFlows />
      case 'roadmap': return <Roadmap />
      case 'architecture': return <Architecture />
      case 'designsystem': return <DesignSystem />
      case 'onboarding': return <OnboardingFlow />
      case 'states': return <StatesPreview />
      case 'copy': return <CopyPreview />
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
