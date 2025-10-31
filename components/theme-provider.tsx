"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  isAnimating: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [isAnimating, setIsAnimating] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme") as Theme | null
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle("dark", stored === "dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsAnimating(true)
    const newTheme = theme === "light" ? "dark" : "light"

    // Start cascade animation
    setTimeout(() => {
      setTheme(newTheme)
      localStorage.setItem("theme", newTheme)
      document.documentElement.classList.toggle("dark", newTheme === "dark")

      // End animation after cascade completes
      setTimeout(() => {
        setIsAnimating(false)
      }, 1500)
    }, 100)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, isAnimating }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
