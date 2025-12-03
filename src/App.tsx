import { Sidebar } from './components/Sidebar'
import { ChatArea } from './components/ChatArea'

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <ChatArea />
    </div>
  )
}

export default App
