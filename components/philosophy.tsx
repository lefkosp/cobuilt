"use client"

import { useEffect, useRef, useState } from "react"

export function Philosophy() {
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
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-32 lg:py-40 bg-muted/30 blueprint-grid relative overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-40 h-40 border-2 border-primary/5 rotate-12 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="inline-block px-3 py-1 border border-primary/30 bg-background rounded-sm">
                <span className="text-xs font-medium text-primary tracking-wider">PHILOSOPHY</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
                Built on Partnership. <span className="gradient-text">Driven by Passion.</span>
              </h2>
            </div>

            <div className={`space-y-6 ${isVisible ? "animate-slide-in-right delay-100" : "opacity-0"}`}>
              <p className="text-lg leading-relaxed text-muted-foreground font-serif">
                We only work with founders who care as deeply about their vision as we do about bringing it to life.
                Every project is treated like our own—because when your brand wins, we win too.
              </p>
              <div className="pt-4 border-l-2 border-primary pl-6 bg-primary/5 py-4 hover:bg-primary/10 transition-colors">
                <p className="text-base leading-relaxed text-foreground font-medium italic">
                  No templates. No shortcuts. Just genuine collaboration, strategic clarity, and a partnership designed
                  to build lasting success.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Strategic Clarity",
                value: "Structure before execution",
                description: "We bring systems that make your creative process measurable and scalable",
                delay: "delay-200",
              },
              {
                label: "Hands-On Partnership",
                value: "Your in-house team",
                description: "Work directly with a team that feels like your department, not an agency on retainer",
                delay: "delay-300",
              },
              {
                label: "Long-Term Growth",
                value: "Built for sustainability",
                description: "We build for lasting success, not one-off wins. Every launch starts a bigger story",
                delay: "delay-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative p-6 bg-card border border-border group hover:border-primary/50 transition-all duration-300 hover-lift hover:shadow-lg ${isVisible ? `animate-scale-in ${item.delay}` : "opacity-0"}`}
              >
                <div className="absolute top-2 right-2 w-2 h-2 border border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute top-2 left-2 w-2 h-2 border border-primary/10" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border border-primary/10" />

                <div className="space-y-2">
                  <div className="text-xs text-primary tracking-wider uppercase font-medium">{item.label}</div>
                  <div className="text-xl font-bold text-foreground group-hover:scale-105 transition-transform inline-block">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.description}</div>
                </div>

                <div className="absolute bottom-2 left-2 w-8 h-px bg-primary/20 group-hover:w-16 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
