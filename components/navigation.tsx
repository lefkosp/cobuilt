"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const debounceTimer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    }

    const visibleSections = new Map<string, number>()

    const sectionMapping: Record<string, string> = {
      testimonials: "work",
      results: "work",
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          visibleSections.set(entry.target.id, entry.intersectionRatio)
        } else {
          visibleSections.delete(entry.target.id)
        }
      })

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }

      debounceTimer.current = setTimeout(() => {
        let maxRatio = 0
        let newActiveSection = ""

        visibleSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio
            newActiveSection = id
          }
        })

        const mappedSection = sectionMapping[newActiveSection] || newActiveSection

        const navSections = ["services", "philosophy", "process", "work", "about", "contact"]
        if (mappedSection && maxRatio > 0.1 && navSections.includes(mappedSection)) {
          setActiveSection(mappedSection)
        } else if (visibleSections.size === 0) {
          setActiveSection("")
        }
      }, 50)
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ["services", "philosophy", "process", "work", "testimonials", "results", "about", "contact"]
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!navRef.current || !activeSection) {
      setIndicatorStyle({ left: 0, width: 0, opacity: 0 })
      return
    }

    const activeLink = navRef.current.querySelector(`a[href="#${activeSection}"]`)

    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()

      setIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      })
    }
  }, [activeSection])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:rotate-180">
              <span className="text-primary font-bold text-sm group-hover:text-primary-foreground transition-colors">
                CB
              </span>
            </div>
            <span className="font-bold text-xl tracking-tight">CoBuilt</span>
          </a>

          <div className="hidden md:flex items-center gap-8 relative" ref={navRef}>
            {/* Sliding indicator background */}
            <div
              className="absolute bottom-0 h-0.5 bg-primary transition-all duration-500 ease-out"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />

            {/* Blueprint-style corner markers for active link */}
            {activeSection && (
              <div
                className="absolute -top-1 h-6 pointer-events-none transition-all duration-500 ease-out"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                }}
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary/40" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-primary/40" />
              </div>
            )}

            {[
              { href: "#services", label: "Services" },
              { href: "#philosophy", label: "Philosophy" },
              { href: "#process", label: "Process" },
              { href: "#work", label: "Work" },
              { href: "#about", label: "About" },
            ].map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative py-2 ${
                    isActive ? "text-primary scale-105" : "text-foreground/70 hover:text-foreground hover:scale-105"
                  }`}
                >
                  {item.label}
                  {/* Subtle glow effect on active */}
                  {isActive && <div className="absolute inset-0 bg-primary/5 -z-10 blur-sm rounded" />}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#contact">Start Building</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
