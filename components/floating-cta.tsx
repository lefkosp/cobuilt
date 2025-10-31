"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past hero section (roughly 100vh)
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Button
        asChild
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 h-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 group"
      >
        <a href="#contact" className="flex items-center gap-2">
          <span>Start Your Project</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </Button>
    </div>
  )
}
