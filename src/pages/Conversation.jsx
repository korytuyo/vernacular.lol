import { useState, useRef, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Send, Lightbulb, Volume2, Mic, LogOut, Brain } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { buildSystemPrompt, sendMessage, analyzeConversation } from '../lib/aiTutor'
import Ijapa from '../components/mascot/Ijapa'

export default function Conversation() {
  const { currentLanguage } = useLanguage()
  const { id } = useParams()
  const navigate = useNavigate()
  const scenario = currentLanguage.scenarios.find((s) => s.id === parseInt(id))
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [systemPrompt, setSystemPrompt] = useState('')
  const [sessionStart] = useState(Date.now())
  const [showEndDialog, setShowEndDialog] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [sessionReport, setSessionReport] = useState(null)
  const messagesEndRef = useRef(null)

  const userId = 'demo-user'

  // Determine Ijapa's expression based on conversation state
  const getMascotExpression = () => {
    if (analyzing) return 'thinking'
    if (isTyping) return 'thinking'
    if (sessionReport) {
      if (sessionReport.overallScore >= 4) return 'celebrating'
      return 'encouraging'
    }
    const lastMsg = messages[messages.length - 1]
    if (lastMsg?.role === 'assistant') return 'speaking'
    return 'resting'
  }

  useEffect(() => {
    if (scenario) {
      setMessages([
        { role: 'system', content: scenario.starterPrompt },
      ])
      buildSystemPrompt(userId, scenario).then(prompt => {
        setSystemPrompt(prompt)
      }).catch(() => {
        setSystemPrompt(`You are a Yoruba language tutor. Scenario: ${scenario.context}`)
      })
    }
  }, [scenario])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!scenario) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-500 dark:text-slate-400">Scenario not found.</p>
      </div>
    )
  }

  const handleSend = async () => {
    if (!input.trim()) return
    const userMessage = { role: 'user', content: input.trim() }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsTyping(true)

    try {
      const response = await sendMessage(systemPrompt, messages, input.trim())
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Pele o! I had trouble responding. Let us try again.",
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleEndSession = async () => {
    setAnalyzing(true)
    const durationSeconds = Math.round((Date.now() - sessionStart) / 1000)
    try {
      const report = await analyzeConversation(userId, scenario, messages, durationSeconds)
      setSessionReport(report)
    } catch (error) {
      setSessionReport({
        summary: "Session completed. Analysis will be available next time.",
        overallScore: 3,
        strengths: [],
        weaknesses: [],
      })
    } finally {
      setAnalyzing(false)
    }
  }

  // Session report view
  if (sessionReport) {
    const scoreLabels = ['', 'Getting started', 'Building up', 'Making progress', 'Strong', 'Fluent']
    const scoreColors = ['', 'text-red-600 dark:text-red-400', 'text-amber-600 dark:text-amber-400', 'text-amber-500 dark:text-amber-400', 'text-green-600 dark:text-green-400', 'text-green-700 dark:text-green-300']

    return (
      <div className="min-h-screen pt-16 flex items-center justify-center px-4 bg-gray-50 dark:bg-slate-950">
        <div className="w-full max-w-lg">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm">
            {/* Ijapa at the top of the report */}
            <div className="flex flex-col items-center mb-4">
              <Ijapa expression={getMascotExpression()} size={72} />
              <p className="text-xs text-gray-400 dark:text-slate-500 mt-1">
                {sessionReport.overallScore >= 4 ? 'Ijapa is impressed!' : 'Ijapa believes in you!'}
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-green-700 dark:text-green-400" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Session Report</h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">{sessionReport.summary}</p>

            {/* Score */}
            <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-4 mb-4">
              <p className="text-xs text-gray-400 dark:text-slate-500 font-semibold uppercase mb-1">Performance</p>
              <p className={`text-xl font-bold ${scoreColors[sessionReport.overallScore]}`}>
                {scoreLabels[sessionReport.overallScore]}
              </p>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full ${
                      i <= sessionReport.overallScore ? 'bg-green-500' : 'bg-gray-200 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Strengths */}
            {sessionReport.strengths?.length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-gray-400 dark:text-slate-500 font-semibold uppercase mb-2">What went well</p>
                <div className="space-y-1">
                  {sessionReport.strengths.map((s, i) => (
                    <p key={i} className="text-sm text-green-700 dark:text-green-400 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">+</span> {s}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Weaknesses */}
            {sessionReport.weaknesses?.length > 0 && (
              <div className="mb-4">
                <p className="text-xs text-gray-400 dark:text-slate-500 font-semibold uppercase mb-2">To work on next</p>
                <div className="space-y-1">
                  {sessionReport.weaknesses.map((w, i) => (
                    <p key={i} className="text-sm text-amber-700 dark:text-amber-400 flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">~</span> {w}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Memory note */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-3 mb-6 border border-green-100 dark:border-green-800/50">
              <p className="text-xs text-green-700 dark:text-green-400">
                <Brain className="w-3.5 h-3.5 inline mr-1" />
                Ijapa will remember this session. Next time, he will build on what you practiced today and help reinforce areas that need work.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Link
                to="/practice"
                className="flex-1 py-2.5 text-center bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 font-semibold rounded-xl text-sm hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors no-underline"
              >
                All Scenarios
              </Link>
              <Link
                to="/dashboard"
                className="flex-1 py-2.5 text-center bg-green-700 dark:bg-green-600 text-white font-semibold rounded-xl text-sm hover:bg-green-800 dark:hover:bg-green-700 transition-colors no-underline"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 flex flex-col bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/practice" className="text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 no-underline">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Ijapa expression={getMascotExpression()} size={36} />
            <div>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{scenario.title}</h2>
              <p className="text-xs text-gray-500 dark:text-slate-400">{scenario.aiRole.split(',')[0]}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                showHint ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' : 'bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 hover:bg-amber-50 dark:hover:bg-amber-900/20'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowEndDialog(true)}
              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 flex items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              title="End session"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hint bar */}
      {showHint && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-800/50 px-4 py-3">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">KEY PHRASES TO TRY:</p>
            <div className="flex flex-wrap gap-2">
              {scenario.keyPhrases.map((phrase, i) => (
                <button
                  key={i}
                  onClick={() => setInput(phrase)}
                  className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-sm text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
                >
                  {phrase}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* End session dialog */}
      {showEndDialog && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-sm w-full">
            <div className="flex justify-center mb-3">
              <Ijapa expression="encouraging" size={56} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">End this session?</h3>
            <p className="text-sm text-gray-600 dark:text-slate-400 mb-4 text-center">
              Ijapa will analyze this conversation, note what you did well, and remember areas to reinforce next time.
            </p>
            {analyzing ? (
              <div className="text-center py-4">
                <Ijapa expression="thinking" size={64} />
                <p className="text-sm text-gray-600 dark:text-slate-400 mt-2">Ijapa is reviewing your session...</p>
              </div>
            ) : (
              <div className="flex gap-3">
                <button
                  onClick={() => setShowEndDialog(false)}
                  className="flex-1 py-2.5 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 font-semibold rounded-xl text-sm"
                >
                  Keep practicing
                </button>
                <button
                  onClick={handleEndSession}
                  className="flex-1 py-2.5 bg-green-700 dark:bg-green-600 text-white font-semibold rounded-xl text-sm"
                >
                  End and review
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Scenario context */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4 border border-green-100 dark:border-green-800/50 mb-6">
            <p className="text-xs font-semibold text-green-700 dark:text-green-400 uppercase tracking-wider mb-1">SCENARIO</p>
            <p className="text-sm text-gray-700 dark:text-slate-300">{scenario.context}</p>
          </div>

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {/* Ijapa avatar for AI/system messages */}
              {msg.role !== 'user' && (
                <div className="shrink-0 mr-2 mt-1">
                  <Ijapa
                    expression={msg.role === 'system' ? 'resting' : 'speaking'}
                    size={32}
                  />
                </div>
              )}
              <div className={`max-w-xs sm:max-w-md rounded-2xl px-4 py-3 ${
                msg.role === 'user'
                  ? 'bg-green-700 dark:bg-green-600 text-white'
                  : msg.role === 'system'
                  ? 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 italic'
                  : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-slate-200'
              }`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
                {msg.role === 'assistant' && (
                  <button className="mt-2 text-gray-400 dark:text-slate-500 hover:text-green-600 dark:hover:text-green-400">
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="shrink-0 mr-2 mt-1">
                <Ijapa expression="thinking" size={32} />
              </div>
              <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-300 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-300 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors shrink-0">
            <Mic className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type in Yoruba or English..."
            className="flex-1 px-4 py-2.5 border border-gray-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 rounded-xl bg-green-700 dark:bg-green-600 text-white flex items-center justify-center hover:bg-green-800 dark:hover:bg-green-700 transition-colors disabled:opacity-50 shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
