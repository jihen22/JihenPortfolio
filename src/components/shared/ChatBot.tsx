'use client'

import { useState, useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  text: string
  sender: 'user' | 'jihen'
  timestamp: Date
}

const CV_DATA = {
  name: 'Jihen Messaoud',
  title: 'Full-Stack AI Developer',
  headline: 'AI-Driven Solutions & Cloud Innovation | Software Engineering Master\'s Graduate',
  location: 'Gafsa, Tunisia',
  email: 'jihenmessaoud992@gmail.com',
  linkedin: 'linkedin.com/in/jihenme',
  github: 'github.com/jihen22',
  summary: 'Results-driven Full-Stack Developer with expertise in AI-powered solutions and cloud architecture. Proven track record in designing scalable microservices, implementing CI/CD pipelines, and delivering enterprise-grade applications.',
  currentRole: 'Full-Stack AI Developer Intern at AiLine (Jan – Aug 2025)',
  skills: ['Angular', 'React', 'Spring Boot', 'Node.js', 'Azure', 'Docker', 'Kubernetes', 'NLP', 'Machine Learning', 'CI/CD'],
  languages: ['Arabic (Native)', 'English (Bilingual)', 'French (Bilingual)', 'German (Elementary)', 'Spanish (Limited)'],
  education: 'Professional Master\'s Degree in Software Engineering from ISIMM (Sep 2023 – Oct 2025)',
  thesis: 'Development of AI-Powered Solution for Organizational Culture Alignment',
}

const GREETING_MESSAGES = [
  `Hey, thanks for stopping by! 👋 I'm Jihen. Hope you find something cool here! Feel free to ask me anything about my work, projects, or background. I'm always happy to chat!`,
  `What's up! 🚀 I'm Jihen, and I'm stoked you're here. Whether you want to know about my tech stack, recent projects, or just want to connect, I'm all ears. What's on your mind?`,
  `Hey there! 👨‍💻 Welcome to my corner of the internet. I'm Jihen, a full-stack developer passionate about AI and cloud solutions. Ask me anything – I love talking about tech, innovation, and building cool stuff!`,
]

const BOT_RESPONSES: Record<string, string> = {
  'who are you': `Hey! I'm ${CV_DATA.name}, a ${CV_DATA.title} based in ${CV_DATA.location}. I'm really passionate about building intelligent solutions that solve real-world problems. ${CV_DATA.summary} I love working at the intersection of AI and cloud technologies, and I'm always excited to tackle new challenges and learn cutting-edge technologies. Whether it's architecting microservices, implementing machine learning models, or optimizing DevOps pipelines, I'm all in!`,

  'what do you do': `Right now, I'm working as a ${CV_DATA.currentRole}, where I get to do some really exciting stuff! I'm building AI-powered platforms that help organizations align their values and culture. On the technical side, I'm architecting microservices solutions, implementing NLP and ML algorithms, and setting up robust CI/CD pipelines with Azure DevOps. It's been an incredible journey working with cutting-edge technologies like Angular, Spring Boot, PostgreSQL, and Elasticsearch. The best part? I get to work on problems that actually matter and make a real impact on how companies operate.`,

  'skills': `I've got a pretty solid toolkit! My core skills include: ${CV_DATA.skills.join(', ')}, and more. But beyond just the tech stack, I'm really strong in microservices architecture, DevOps practices, and Agile methodologies. I'm experienced with Domain-Driven Design, event-driven architecture, and building scalable systems that can handle real-world demands. I'm also passionate about staying current with emerging technologies – whether it's the latest in AI/ML, cloud platforms, or development frameworks. I believe in continuous learning and always pushing myself to master new tools and techniques.`,

  'experience': `I've had the privilege of working across different industries and roles, which has given me a well-rounded perspective on software development. Most recently, I was a Full-Stack AI Developer at AiLine, where I architected microservices solutions and built interactive dashboards for C-level executives. Before that, I worked as a Web Developer at Enterprise eSolutions, where I built an intelligent Laravel CRUD generator that reduced database setup time by 60% for an 8-developer team. I also had an internship at Compagnie des Phosphates de Gafsa (CPG), where I engineered an enterprise employee management system that streamlined workflows and saved 15+ staff hours monthly. Each role has taught me something valuable about building robust, scalable, and user-centric applications.`,

  'education': `I'm a recent graduate with a ${CV_DATA.education}. My thesis was all about "${CV_DATA.thesis}" – basically, I developed an AI-powered platform that uses NLP and machine learning to help organizations understand and align their culture with their values. It was a fascinating project that combined everything I love: AI, software architecture, and solving real business problems. Beyond my degree, I've also completed an Erasmus+ Summer School in IT at Universidad de Alcalá in Spain, where I dove deep into cybersecurity, big data, and data integration technologies like PySpark, Docker, and Tableau. I'm a big believer in continuous learning, so I'm always taking courses and certifications to stay ahead of the curve!`,

  'languages': `I'm multilingual! I speak ${CV_DATA.languages.join(', ')}. Growing up in Tunisia and being exposed to different cultures has given me a unique perspective. I'm fluent in Arabic, English, and French, which helps me collaborate with diverse teams and understand different markets. I also have some German and Spanish under my belt, which I'm always working to improve. Being multilingual has definitely helped me in my career, especially when working with international teams and clients.`,

  'contact': `I'd love to connect! You can reach me at ${CV_DATA.email} – feel free to drop me a message anytime. I'm also pretty active on LinkedIn at ${CV_DATA.linkedin}, where I share insights about AI, cloud architecture, and software development. You can also check out my GitHub at ${CV_DATA.github} to see some of my projects and contributions. Whether you want to discuss potential opportunities, collaborate on a project, or just chat about tech, I'm always open to connecting with like-minded people!`,

  'projects': `I've worked on some really cool projects that I'm proud of! AiLine Pro is probably my most ambitious – it's an AI-powered culture platform that uses NLP and machine learning to help organizations align their values. Then there's the Automated Monetary Management DevOps Pipeline, which showcases my DevOps expertise with full CI/CD automation and testing at every stage. I also built an Advanced CRUD Generator with Laravel that intelligently creates CRUD operations and admin interfaces from database schemas – it's a productivity game-changer! And the Employee Manager Application is a full-stack system with Angular frontend, Spring Boot backend, and comprehensive testing. Each project has taught me something new and pushed me to grow as a developer.`,

  'location': `I'm based in ${CV_DATA.location}, Tunisia – a beautiful country with a rich history! While I'm currently working remotely, I'm always open to opportunities that allow me to collaborate with talented people from around the world. The remote work setup has been fantastic for me, as it's allowed me to work on exciting projects while staying connected to my roots. If you're ever in Tunisia or want to chat about tech over a virtual coffee, I'm always up for it!`,

  'hello': GREETING_MESSAGES[0],
  'hi': GREETING_MESSAGES[0],
}

function findBestResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase()

  for (const [key, response] of Object.entries(BOT_RESPONSES)) {
    if (lowerMessage.includes(key)) {
      return response
    }
  }

  return `That's a great question! I appreciate the curiosity. Feel free to ask me about my skills, experience, education, projects, or how to get in touch. I'm here to chat about anything related to my work and background. What else would you like to know?`
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Show greeting on mount with animation delay
    const timer = setTimeout(() => {
      const greeting = GREETING_MESSAGES[Math.floor(Math.random() * GREETING_MESSAGES.length)]
      setMessages([{
        id: '1',
        text: greeting,
        sender: 'jihen',
        timestamp: new Date(),
      }])
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const playMessageSound = () => {
    // Create a simple beep sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 800
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    } catch (e) {
      // Fallback: silent if Web Audio API fails
    }
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    playMessageSound()

    // Simulate realistic typing time (1.5-2 seconds)
    const typingDelay = 1500 + Math.random() * 500
    setTimeout(() => {
      const botResponse = findBestResponse(input)
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'jihen',
        timestamp: new Date(),
      }])
      setIsLoading(false)
      playMessageSound()
    }, typingDelay)
  }

  return (
    <>
      {/* Floating button when closed */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true)
            setIsVisible(true)
          }}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Open chat with Jihen"
        >
          💬
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className={cn(
          "fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[80vh] flex flex-col rounded-2xl border border-border bg-card shadow-2xl transition-all duration-500 ease-out",
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8 pointer-events-none"
        )}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-to-r from-primary/10 to-primary/5 rounded-t-2xl">
            <div>
              <h3 className="font-semibold text-foreground">Jihen</h3>
           <p className="text-xs text-muted-foreground">{"Let's chat! 💬"}</p>
            </div>
            <button
              onClick={() => {
                setIsVisible(false)
                setTimeout(() => setIsOpen(false), 300)
              }}
              className="p-1 hover:bg-muted rounded-md transition-colors hover:rotate-90 duration-300"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={cn(
              'flex gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300',
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div
              className={cn(
                'max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed',
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none shadow-md'
                  : 'bg-muted text-foreground rounded-bl-none shadow-sm'
              )}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2 justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="bg-muted text-foreground px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2.5 h-2.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2.5 h-2.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-background/50 rounded-b-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2.5 rounded-full border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-sm transition-all duration-200"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
        </div>
      )}
    </>
  )
}

