"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    let progress = 0
    const animate = () => {
      if (progress < 1) {
        progress += 0.01
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.strokeStyle = `rgba(95, 108, 56, ${0.1 * progress})`
        ctx.lineWidth = 1

        for (let x = 0; x < canvas.width; x += 40) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
          ctx.stroke()
        }

        for (let y = 0; y < canvas.height; y += 40) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }

        ctx.strokeStyle = `rgba(95, 108, 56, ${0.15 * progress})`
        ctx.lineWidth = 2

        ctx.beginPath()
        ctx.moveTo(0, canvas.height * 0.3)
        ctx.lineTo(canvas.width * 0.4 * progress, canvas.height * 0.7)
        ctx.stroke()

        ctx.strokeStyle = `rgba(95, 108, 56, ${0.2 * progress})`
        ctx.lineWidth = 1
        for (let i = 0; i < 5; i++) {
          const x = canvas.width * 0.15 + i * 30
          ctx.beginPath()
          ctx.moveTo(x, canvas.height * 0.8)
          ctx.lineTo(x, canvas.height * 0.8 + 10)
          ctx.stroke()
        }

        requestAnimationFrame(animate)
      }
    }
    animate()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
        style={{
          opacity: 0.6,
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-up">
            <div className="inline-block px-4 py-1.5 border border-primary/30 bg-primary/5 rounded-sm mb-4 animate-pulse-subtle">
              <span className="text-sm font-medium text-primary tracking-wide">PASSION × PERFORMANCE</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1]">
              Passion-Built. <span className="gradient-text">Performance-Proven.</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up delay-100 font-serif">
            We act as your remote marketing department, combining strategy, content, and performance to build brands
            that last.
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-150 font-serif">
            CoBuilt was built on one belief: when passion meets structure, great things happen. We partner with founders
            who care deeply about what they do, bringing them the systems, creative firepower, and discipline to turn
            that passion into measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up delay-200">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <a href="#contact">Build Your Growth Engine</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 h-12 bg-transparent hover:bg-primary/5 border-2 hover:border-primary transition-all duration-300"
            >
              <a href="#work">See Our Results</a>
            </Button>
          </div>

          <div className="pt-16 animate-fade-up delay-300">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-6">Trusted by founders at</div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {["TechCorp", "InnovateLabs", "GrowthCo", "BuildFast", "ScaleUp"].map((company) => (
                <div key={company} className="text-lg font-bold tracking-tight hover:opacity-100 transition-opacity">
                  {company}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 animate-fade-up delay-400">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground group cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary animate-pulse-subtle">
                <path d="M10 2L10 18M2 10L18 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
              <span className="group-hover:text-primary transition-colors">Scroll to explore our process</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20 transition-transform duration-500"
        style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }}
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20 transition-transform duration-500"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      />

      <div className="absolute top-1/3 right-12 w-24 h-24 border border-primary/10 rotate-45" />
      <div className="absolute bottom-1/4 left-16 w-32 h-32 border border-primary/10" />
    </section>
  )
}
