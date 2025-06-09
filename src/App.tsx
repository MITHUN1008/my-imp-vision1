
import { useState } from 'react'
import { Github, Code2, Sparkles, Terminal, FileText, Zap } from 'lucide-react'

function App() {
  const [activeDemo, setActiveDemo] = useState<'counter' | 'chat' | 'code'>('counter')
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState<{text: string, isUser: boolean}[]>([])
  const [codeExample, setCodeExample] = useState(`function createApp() {
  return {
    name: "My App",
    framework: "React + Vite",
    features: ["AI-powered", "Real-time", "Modern"]
  }
}`)

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, isUser: true }])
      // Simulate AI response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          text: "I can help you build that! Let me create the components for you.", 
          isUser: false 
        }])
      }, 1000)
      setMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bolt.DIY
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">AI-Powered Development Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build apps with{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI assistance
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Create, edit, and deploy full-stack applications using natural language. 
            No setup required, just start building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all transform hover:scale-105">
              Start Building
            </button>
            <button className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-lg font-semibold transition-all">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 px-6 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Interactive Demo
          </h2>
          
          {/* Demo Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-white/10 rounded-lg p-1">
              {[
                { id: 'counter', label: 'Counter App', icon: Code2 },
                { id: 'chat', label: 'AI Chat', icon: Terminal },
                { id: 'code', label: 'Code Editor', icon: FileText }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveDemo(id as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                    activeDemo === id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeDemo === 'counter' && (
              <>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">Counter Demo</h3>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-400 mb-6">{count}</div>
                    <div className="space-x-4">
                      <button
                        onClick={() => setCount(count + 1)}
                        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                      >
                        Increment
                      </button>
                      <button
                        onClick={() => setCount(count - 1)}
                        className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
                      >
                        Decrement
                      </button>
                      <button
                        onClick={() => setCount(0)}
                        className="px-6 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">How it works</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Simple React state management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Event handling with onClick</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Responsive design with Tailwind</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Real-time UI updates</span>
                    </li>
                  </ul>
                </div>
              </>
            )}

            {activeDemo === 'chat' && (
              <>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">AI Chat Interface</h3>
                  <div className="h-64 bg-gray-900/50 rounded-lg p-4 mb-4 overflow-y-auto">
                    {chatMessages.length === 0 ? (
                      <p className="text-gray-400 text-center">Start a conversation...</p>
                    ) : (
                      chatMessages.map((msg, index) => (
                        <div key={index} className={`mb-3 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                          <div className={`inline-block p-3 rounded-lg max-w-xs ${
                            msg.isUser 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-700 text-gray-100'
                          }`}>
                            {msg.text}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-gray-900/50 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">AI Features</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Natural language processing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Code generation from descriptions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Real-time collaboration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Intelligent suggestions</span>
                    </li>
                  </ul>
                </div>
              </>
            )}

            {activeDemo === 'code' && (
              <>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">Code Editor</h3>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                    <textarea
                      value={codeExample}
                      onChange={(e) => setCodeExample(e.target.value)}
                      className="w-full h-48 bg-transparent text-green-400 resize-none focus:outline-none"
                    />
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
                      Run Code
                    </button>
                    <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg transition-colors">
                      Format
                    </button>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">Editor Features</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Syntax highlighting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Auto-completion</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Live preview</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Version control integration</span>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Bolt.DIY?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Build and deploy applications in minutes, not hours"
              },
              {
                icon: Code2,
                title: "Full Stack",
                description: "Frontend, backend, and database - all in one platform"
              },
              {
                icon: Sparkles,
                title: "AI-Powered",
                description: "Let AI handle the complex parts while you focus on creativity"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Bolt.DIY
            </h3>
          </div>
          <p className="text-gray-400 mb-8">
            The future of web development is here. Start building today.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
