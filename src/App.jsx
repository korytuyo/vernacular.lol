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
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const location = useLocation()
  const isConversation = location.pathname.startsWith('/practice/')
  const isAuth = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-950 transition-colors">
      {!isConversation && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/lessons" element={<ProtectedRoute><Lessons /></ProtectedRoute>} />
          <Route path="/lessons/:id" element={<ProtectedRoute><LessonDetail /></ProtectedRoute>} />
          <Route path="/proverbs" element={<ProtectedRoute><Proverbs /></ProtectedRoute>} />
          <Route path="/practice" element={<ProtectedRoute><Practice /></ProtectedRoute>} />
          <Route path="/practice/:id" element={<ProtectedRoute><Conversation /></ProtectedRoute>} />
        </Routes>
      </main>

      {!isConversation && !isAuth && <Footer />}
    </div>
  )
}
