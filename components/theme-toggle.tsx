"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"
import { useEffect, useRef } from "react"

export function ThemeToggle() {
  const { theme, toggleTheme, isAnimating } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isAnimating && buttonRef.current) {
      const button = buttonRef.current
      const rect = button.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Get all animatable elements
      const elements = document.querySelectorAll(
        "section, nav, header, footer, .card, .service-card, .process-step, .testimonial-card, .stat-card, button, a, h1, h2, h3, p",
      )

      elements.forEach((element) => {
        const el = element as HTMLElement
        const elRect = el.getBoundingClientRect()
        const elCenterX = elRect.left + elRect.width / 2
        const elCenterY = elRect.top + elRect.height / 2

        // Calculate distance from toggle button
        const distance = Math.sqrt(Math.pow(elCenterX - centerX, 2) + Math.pow(elCenterY - centerY, 2))

        // Convert distance to delay (closer = faster)
        const delay = Math.min(distance / 2, 1000) // Max 1000ms delay

        // Apply staggered animation
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
      })

      // Reset transitions after animation
      setTimeout(() => {
        elements.forEach((element) => {
          const el = element as HTMLElement
          el.style.transition = ""
        })
      }, 2000)
    }
  }, [isAnimating])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-md border border-border bg-background hover:bg-muted transition-all duration-300 flex items-center justify-center group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Ripple effect on click */}
      {isAnimating && <div className="absolute inset-0 animate-ping bg-primary/20 rounded-md" />}

      {/* Icons with rotation animation */}
      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-foreground transition-all duration-500 ${
            theme === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-foreground transition-all duration-500 ${
            theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>

      {/* Corner markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}
