"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Resume } from "./resume"
import AsciiTitle from "./ascii-title"
import { AdvancedTyping } from "./advanced-typing"

interface Command {
  command: string
  output: string | JSX.Element
}

interface TerminalProps {
  config: {
    name: string
    social: {
      github?: string
      linkedin?: string
      email?: string
    }
    ps1_hostname: string
    ps1_username: string
    resume_url?: string
    colors: {
      light: {
        background: string
        foreground: string
        yellow: string
        green: string
        gray: string
        blue: string
        red: string
      }
    }
  }
}

const Terminal: React.FC<TerminalProps> = ({ config }) => {
  const [history, setHistory] = useState<Command[]>([
    {
      command: "welcome",
      output: (
        <AdvancedTyping speed={30}>
          <div>
            Welcome to Patrick Dunn's interactive resume portfolio!
            <br />
            <br />
            I'm a cryptocurrency data analyst. Specializing in data scraping, analysis, visualization, and creating
            datasets.
            <br />
            <br />
            I'm open to contract work regarding custom tools and web development using various libraries (React,
            Tailwind CSS, Bootstrap, Vue.js, Angular, etc.).
            <br />
            <br />
            Type <span className="text-red-500">help</span> to see available commands and learn more about my skills and
            experience.
          </div>
        </AdvancedTyping>
      ),
    },
  ])
  const [historyIndex, setHistoryIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [input, setInput] = useState<string>("")
  const [typedCommands, setTypedCommands] = useState<number[]>([])
  const [typingCommandIndex, setTypingCommandIndex] = useState<number | null>(null)
  const [typingSpeed, setTypingSpeed] = useState(30)

  const getRandomTypingSpeed = () => {
    // Random speed between 20ms and 80ms
    return Math.floor(Math.random() * 60) + 20
  }

  // Update typing speed randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setTypingSpeed(getRandomTypingSpeed())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [history])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  useEffect(() => {
    // Mark the welcome message as typed after a delay
    const timer = setTimeout(() => {
      setTypedCommands([0])
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const newCommand: Command = {
      command: input,
      output: processCommand(input),
    }

    setHistory([...history, newCommand])
    setTypingCommandIndex(history.length) // Set the typing index to the new command
    setInput("")
    setHistoryIndex(0)
  }

  const processCommand = (cmd: string): string | JSX.Element => {
    const command = cmd.toLowerCase().trim()

    if (command === "help") {
      return (
        <AdvancedTyping speed={30}>
          <div className="py-1">
            <p>Available commands:</p>
            <p className="pl-2">
              <span className="text-green-400">about</span> - Learn about me
            </p>
            <p className="pl-2">
              <span className="text-green-400">skills</span> - View my technical skills
            </p>
            <p className="pl-2">
              <span className="text-green-400">projects</span> - See my projects
            </p>
            <p className="pl-2">
              <span className="text-green-400">services</span> - View my contract work offerings
            </p>
            <p className="pl-2">
              <span className="text-green-400">contact</span> - Get my contact information
            </p>
            <p className="pl-2">
              <span className="text-green-400">resume</span> - View my resume
            </p>
            <p className="pl-2">
              <span className="text-green-400">clear</span> - Clear the terminal
            </p>
          </div>
        </AdvancedTyping>
      )
    } else if (command === "about") {
      return (
        <AdvancedTyping speed={30}>
          <div className="py-1">
            <p>Hi, I'm {config.name}!</p>
            <p className="pt-1">
              I'm a Cryptocurrency Data Analyst with expertise in data scraping, analysis, and visualization.
            </p>
            <p className="pt-1">
              I help clients make informed investment decisions through detailed market reports and automated trading
              strategies.
            </p>
            <p className="pt-1">
              Additionally, I offer web design services and develop custom tools for clients who need specialized
              solutions.
            </p>
            <p className="pt-1">Available for contract work at $55.00/hr with availability of more than 30 hrs/week.</p>
          </div>
        </AdvancedTyping>
      )
    } else if (command === "skills") {
      return (
        <AdvancedTyping speed={30}>
          <div className="py-1">
            <p className="font-semibold">Technical Skills:</p>
<ul className="pl-4 space-y-1">
  <li>• Programming Languages: 
    <span className="text-green-400">[Up To Date as of 3/21/25]</span>
    <br/>CSS, JavaScript (JS), TypeScript (TS), Python
  </li>
  <li>• Python Ecosystem:
    <br/>- Data: Pandas, Scrapy, BeautifulSoup
    <br/>- ML/AI: TensorFlow, Scikit-learn
    <br/>- Automation: Pyrogram, Telethon
  </li>
  <li>• Web Development:
    <br/>- Frontend: Angular, React
    <br/>- Design: Responsive websites, UI/UX
  </li>
  <li>• Data Visualization:
    <br/>Tableau, Matplotlib
  </li>
  <li>• Data Engineering:
    <br/>ETL pipelines, Big Data processing, Statistical analysis
  </li>
  <li>• Tool Development:
    <br/>- Trading bots (Algorithmic strategies)
    <br/>- Web scrapers (Custom data collection)
    <br/>- Automation tools (Process optimization)
  </li>
  <li>• Analytical Methods:
    <br/>Predictive modeling, Alpha/Beta testing frameworks, Insight generation
  </li>
</ul>
          </div>
        </AdvancedTyping>
      )
    } else if (command === "projects") {
      return (
        <AdvancedTyping speed={30}>
          <div className="py-1">
            <p>My Projects:</p>
            <p className="pl-2 pt-1">
              1. <span className="text-blue-400">Terminal Website</span> - This interactive terminal-styled portfolio
            </p>
            <p className="pl-2 pt-1">
              2. <span className="text-blue-400">Project Alpha</span> - A full-stack web application
            </p>
            <p className="pl-2 pt-1">
              3. <span className="text-blue-400">Data Visualizer</span> - Interactive data visualization tool
            </p>
          </div>
        </AdvancedTyping>
      )
    } else if (command === "services") {
      return (
        <AdvancedTyping speed={30}>
          <div className="py-1">
            <p className="font-semibold">Contract Work Services:</p>
            <ul className="pl-4 space-y-2 mt-2">
              <li>
                <span className="text-blue-400 font-medium">Web Design & Development</span>
                <p className="pl-2">
                  Custom websites, portfolio sites, and web applications tailored to your specific needs.
                </p>
              </li>
              <li>
                <span className="text-blue-400 font-medium">Custom Tool Development</span>
                <p className="pl-2">Specialized tools for cryptocurrency trading, data analysis, and automation.</p>
              </li>
              <li>
                <span className="text-blue-400 font-medium">Cryptocurrency Data Analysis</span>
                <p className="pl-2">
                  In-depth market analysis, trend identification, and actionable investment insights.
                </p>
              </li>
              <li>
                <span className="text-blue-400 font-medium">Trading Bot Development</span>
                <p className="pl-2">Automated trading solutions with customized algorithms and strategies.</p>
              </li>
            </ul>
            <p className="mt-3">Rate: $55.00/hr | Availability: More than 30 hrs/week (Open to contract-to-hire)</p>
            <p className="mt-1">
            </p>
          </div>
        </AdvancedTyping>
      )
    } else if (command === "contact") {
      return (
        <AdvancedTyping speed={30}>
          <div className="py-1">
            <p>Contact Information:</p>
            {config.social.email && (
              <p className="pl-2">
                Email:{" "}
                <a href={`mailto:${config.social.email}`} className="text-blue-400 underline">
                  {config.social.email}
                </a>
              </p>
            )}
          </div>
        </AdvancedTyping>
      )
    } else if (command === "resume") {
      return <Resume />
    } else if (command === "clear") {
      setTimeout(() => {
        setHistory([])
      }, 100)
      return ""
    } else {
      return (
        <AdvancedTyping speed={30}>
          {`Command not found: ${command}. Type 'help' to see available commands.`}
        </AdvancedTyping>
      )
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < history.length) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - newIndex]?.command || "")
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        if (newIndex === 0) {
          setInput("")
        } else {
          setInput(history[history.length - newIndex]?.command || "")
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      // Simple tab completion
      const commands = ["help", "about", "skills", "projects", "services", "contact", "resume", "clear"]
      const matchingCommands = commands.filter((cmd) => cmd.startsWith(input.toLowerCase()))

      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0])
      }
    }
  }

  const handleTypingComplete = (index: number) => {
    setTypedCommands((prev) => [...prev, index])
  }

  return (
    <div className="container mx-auto p-4 h-full overflow-auto font-mono" onClick={() => inputRef.current?.focus()}>
      <div className="mb-6">
        <AsciiTitle />
        <p className="text-gray-400 mt-2">
          Welcome to my interactive terminal. Type <span className="text-red-500">help</span> to get started.
        </p>
      </div>

      <div className="terminal-history space-y-2">
        {history.map((item, i) => (
          <div key={i} className="terminal-line">
            <div className="flex">
              <span className="text-green-400">{config.ps1_username}</span>
              <span className="text-white">@</span>
              <span className="text-blue-400">{config.ps1_hostname}</span>
              <span className="text-white">:~$ </span>
              <span className="ml-1">{item.command}</span>
            </div>
            <div className="pl-4 terminal-output">
              {typeof item.output === "string" ? (
                typedCommands.includes(i) ? (
                  item.output
                ) : (
                  <AdvancedTyping speed={typingSpeed} onComplete={() => handleTypingComplete(i)}>
                    {item.output}
                  </AdvancedTyping>
                )
              ) : typedCommands.includes(i) ? (
                item.output
              ) : (
                <div className="typing-container">
                  {item.output}
                  {typingCommandIndex === i && <span className="animate-pulse ml-1">▋</span>}
                </div>
              )}
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400">{config.ps1_username}</span>
          <span className="text-white">@</span>
          <span className="text-blue-400">{config.ps1_hostname}</span>
          <span className="text-white">:~$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="ml-1 flex-1 bg-transparent outline-none caret-white"
            autoFocus
          />
        </form>
      </div>
      <div ref={bottomRef} />
      <style jsx>{`
        .terminal-output {
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  )
}

export default Terminal

