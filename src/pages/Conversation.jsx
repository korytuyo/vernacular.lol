import { useState, useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Send, Lightbulb, Volume2, Mic } from 'lucide-react'
import { scenarios } from '../data/scenarios'

export default function Conversation() {
  const { id } = useParams()
  const scenario = scenarios.find((s) => s.id === parseInt(id))
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (scenario) {
      setMessages([
        { role: 'system', content: scenario.starterPrompt },
      ])
    }
  }, [scenario])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!scenario) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-500">Scenario not found.</p>
      </div>
    )
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input.trim() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulated AI response (replace with actual API call)
    setTimeout(() => {
      const aiResponse = {
        role: 'assistant',
        content: getSimulatedResponse(messages.length),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="min-h-screen pt-16 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/practice" className="text-gray-400 hover:text-gray-600 no-underline">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h2 className="text-sm font-semibold text-gray-900">{scenario.title}</h2>
              <p className="text-xs text-gray-500">{scenario.aiRole.split(',')[0]}</p>
            </div>
          </div>
          <button
            onClick={() => setShowHint(!showHint)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              showHint ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500 hover:bg-amber-50'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hint bar */}
      {showHint && (
        <div className="bg-amber-50 border-b border-amber-100 px-4 py-3">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-amber-700 mb-1">KEY PHRASES TO TRY:</p>
            <div className="flex flex-wrap gap-2">
              {scenario.keyPhrases.map((phrase, i) => (
                <button
                  key={i}
                  onClick={() => setInput(phrase)}
                  className="px-3 py-1 bg-white rounded-lg text-sm text-amber-800 border border-amber-200 hover:bg-amber-100 transition-colors"
                >
                  {phrase}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Scenario context */}
          <div className="bg-green-50 rounded-2xl p-4 border border-green-100 mb-6">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">SCENARIO</p>
            <p className="text-sm text-gray-700">{scenario.context}</p>
          </div>

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs sm:max-w-md rounded-2xl px-4 py-3 ${
                msg.role === 'user'
                  ? 'bg-green-700 text-white'
                  : msg.role === 'system'
                  ? 'bg-gray-100 text-gray-700 italic'
                  : 'bg-white border border-gray-200 text-gray-800'
              }`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
                {msg.role === 'assistant' && (
                  <button className="mt-2 text-gray-400 hover:text-green-600">
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-100 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0">
            <Mic className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type in Yoruba or English..."
            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-xl bg-green-700 text-white flex items-center justify-center hover:bg-green-800 transition-colors disabled:opacity-50 shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Simulated responses for demo purposes
function getSimulatedResponse(messageCount) {
  const responses = [
    "O se pupo! You greeted well. In Yoruba culture, the younger person always greets first. Now, try saying 'E ku irole' - that means 'Good evening.' Can you use it in a sentence?",
    "Daradara! That is correct. You are learning fast. Remember, the tone matters in Yoruba. 'Owo' with a mid tone means 'hand,' but with a low tone it means 'money.' Let us practice more.",
    "Mo dupe! I am pleased with your progress. A Yoruba elder would say: 'Omo ti a ko ni, ko se e fi s'eru' - A child that is well trained cannot be exchanged for a slave. You are training yourself well.",
    "Pele o! Do not worry about mistakes. Even native speakers practice their tones. Try again, and this time, think about whether the tone goes up, stays flat, or goes down.",
  ]
  return responses[messageCount % responses.length]
}
