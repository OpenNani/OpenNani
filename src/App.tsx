import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { ChatArea } from './components/ChatArea'
import { Settings } from './components/Settings'

type View = 'chat' | 'settings'

function App() {
  const [currentView, setCurrentView] = useState<View>('chat')
  const [message, setMessage] = useState('')

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        onSettingsClick={() => setCurrentView('settings')}
        onChatClick={() => setCurrentView('chat')}
      />
      {currentView === 'chat' ? (
        <ChatArea message={message} setMessage={setMessage} />
      ) : (
        <Settings />
      )}
    </div>
  )
}

export default App
