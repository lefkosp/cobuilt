"use client"

import { useEffect, useState } from "react"

export function EasterEggs() {
  const [konamiProgress, setKonamiProgress] = useState(0)
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  useEffect(() => {
    // Console welcome message with ASCII art
    const consoleStyles = ["color: #5f6c38", "font-size: 14px", "font-weight: bold", "font-family: monospace"].join(";")

    const asciiArt = `
    ╔═══════════════════════════════════════════════════════════╗
    ║                                                           ║
    ║   ██████╗ ██████╗ ██████╗ ██╗   ██╗██╗██╗  ████████╗    ║
    ║  ██╔════╝██╔═══██╗██╔══██╗██║   ██║██║██║  ╚══██╔══╝    ║
    ║  ██║     ██║   ██║██████╔╝██║   ██║██║██║     ██║       ║
    ║  ██║     ██║   ██║██╔══██╗██║   ██║██║██║     ██║       ║
    ║  ╚██████╗╚██████╔╝██████╔╝╚██████╔╝██║███████╗██║       ║
    ║   ╚═════╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═╝       ║
    ║                                                           ║
    ║              Blueprint Meets Craft                        ║
    ║                                                           ║
    ╚═══════════════════════════════════════════════════════════╝
    
    👷 Welcome, fellow builder!
    
    We see you're checking under the hood. We like that.
    
    🎯 Fun fact: This site was crafted with the same care
       we bring to every project. No shortcuts, just craft.
    
    💡 Try the Konami code for a surprise...
    
    📬 Want to build something together?
       → hello@cobuilt.com
    
    ⚡ Built with: Next.js, React, Tailwind CSS, and ❤️
    `

    console.log(`%c${asciiArt}`, consoleStyles)

    // Time-based greeting
    const hour = new Date().getHours()
    let greeting = "Good evening"
    if (hour < 12) greeting = "Good morning"
    else if (hour < 18) greeting = "Good afternoon"

    console.log(
      `%c${greeting}! The time is ${new Date().toLocaleTimeString()}. Perfect time to build something great.`,
      "color: #adc178; font-size: 12px;",
    )

    // Developer tools detection
    const devtoolsDetection = () => {
      const threshold = 160
      const widthThreshold = window.outerWidth - window.innerWidth > threshold
      const heightThreshold = window.outerHeight - window.innerHeight > threshold

      if (widthThreshold || heightThreshold) {
        console.log(
          "%c🔍 DevTools detected! Welcome, inspector.",
          "color: #5f6c38; font-size: 14px; font-weight: bold;",
        )
        console.log(
          "%cLike what you see? We're always looking for talented developers.",
          "color: #adc178; font-size: 12px;",
        )
      }
    }

    window.addEventListener("resize", devtoolsDetection)

    // Copy detection
    const handleCopy = () => {
      console.log("%c📋 Nice! Feel free to share our work.", "color: #5f6c38; font-size: 12px; font-weight: bold;")
      console.log("%cJust remember: we build custom solutions, not templates 😉", "color: #adc178; font-size: 11px;")
    }

    document.addEventListener("copy", handleCopy)

    // Page visibility change (tab switching)
    const originalTitle = document.title
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "👷 Come back and build with us!"
      } else {
        document.title = originalTitle
        setTimeout(() => {
          document.title = originalTitle
        }, 2000)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    // Konami code easter egg
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiProgress]) {
        setKonamiProgress((prev) => {
          const newProgress = prev + 1
          if (newProgress === konamiCode.length) {
            // Konami code completed!
            console.log(
              "%c🎉 KONAMI CODE ACTIVATED! 🎉",
              "color: #5f6c38; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);",
            )
            console.log("%c🏗️ You've unlocked the secret builder's badge!", "color: #adc178; font-size: 14px;")
            console.log("%cYou're clearly someone who pays attention to details.", "color: #adc178; font-size: 12px;")
            console.log(
              "%cWe should talk. Seriously. → hello@cobuilt.com",
              "color: #5f6c38; font-size: 14px; font-weight: bold;",
            )

            // Visual celebration
            document.body.style.animation = "rainbow-bg 2s ease-in-out"
            setTimeout(() => {
              document.body.style.animation = ""
            }, 2000)

            return 0 // Reset
          }
          return newProgress
        })
      } else {
        setKonamiProgress(0)
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    // Subtle cursor trail (very minimal)
    let cursorTrailTimeout: NodeJS.Timeout
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(cursorTrailTimeout)
      cursorTrailTimeout = setTimeout(() => {
        const trail = document.createElement("div")
        trail.className = "cursor-trail"
        trail.style.left = `${e.clientX}px`
        trail.style.top = `${e.clientY}px`
        document.body.appendChild(trail)

        setTimeout(() => {
          trail.remove()
        }, 800)
      }, 50)
    }

    // Only add cursor trail on desktop
    if (window.innerWidth > 768) {
      document.addEventListener("mousemove", handleMouseMove)
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", devtoolsDetection)
      document.removeEventListener("copy", handleCopy)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("keydown", handleKeyPress)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [konamiProgress, konamiCode])

  return null
}
