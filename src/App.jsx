import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Lessons from './pages/Lessons'
import LessonDetail from './pages/LessonDetail'
import Proverbs from './pages/Proverbs'
import Practice from './pages/Practice'
import Conversation from './pages/Conversation'

export default function App() {
  const location = useLocation()
  const isConversation = location.pathname.startsWith('/practice/')
  const isAuth = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <div className="min-h-screen flex flex-col">
      {!isConversation && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonDetail />} />
          <Route path="/proverbs" element={<Proverbs />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:id" element={<Conversation />} />
        </Routes>
      </main>

      {!isConversation && !isAuth && <Footer />}
    </div>
  )
}
