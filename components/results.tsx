"use client"

import { useEffect, useRef, useState } from "react"

const metrics = [
  { value: "50+", label: "Projects Launched", description: "Across web, mobile, and creative campaigns" },
  { value: "$10M+", label: "Revenue Generated", description: "For our partner companies and growing" },
  { value: "200K+", label: "Users Reached", description: "Through products and campaigns we've built" },
  { value: "98%", label: "Client Satisfaction", description: "Would recommend us to others" },
]

export function Results() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 bg-muted/30 blueprint-grid relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-3 py-1 border border-primary/30 bg-background rounded-sm">
              <span className="text-xs font-medium text-primary tracking-wider">METRICS</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Real Impact, <span className="gradient-text">Measured Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              Tangible outcomes from years of founder partnerships. Measurable proof that passion and precision perform
              best together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`relative p-8 bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover-lift group ${
                  isVisible ? `animate-scale-in delay-${(index + 1) * 100}` : "opacity-0"
                }`}
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary/30 group-hover:border-primary transition-colors" />

                <div className="space-y-3 text-center">
                  <div className="text-5xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                    {metric.value}
                  </div>
                  <div className="text-lg font-bold text-foreground">{metric.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
