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
                <span className="text-xs font-medium text-primary tracking-wider">OUR PHILOSOPHY</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
                Your Success Is <span className="gradient-text">Our Success</span>
              </h2>
            </div>

            <div className={`space-y-6 ${isVisible ? "animate-slide-in-right delay-100" : "opacity-0"}`}>
              <p className="text-lg leading-relaxed text-muted-foreground font-serif">
                We only partner with founders who are serious about execution. When you work with CoBuilt, you get a
                team that treats your project like our own — because we measure our success by yours.
              </p>
              <div className="pt-4 border-l-2 border-primary pl-6 bg-primary/5 py-4 hover:bg-primary/10 transition-colors">
                <p className="text-base leading-relaxed text-foreground font-medium italic">
                  {
                    "No cookie-cutter solutions. No endless revisions. Just strategic thinking, quality execution, and a partnership built to last."
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "You Get", value: "Strategic Clarity", description: "Not just execution", delay: "delay-200" },
              { label: "You Get", value: "Hands-On Partners", description: "Not distant vendors", delay: "delay-300" },
              { label: "You Get", value: "Long-Term Support", description: "Not one-off projects", delay: "delay-400" },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative p-6 bg-card border border-border group hover:border-primary/50 transition-all duration-300 hover-lift hover:shadow-lg ${isVisible ? `animate-scale-in ${item.delay}` : "opacity-0"}`}
              >
                <div className="absolute top-2 right-2 w-2 h-2 border border-primary/30 group-hover:border-primary transition-colors" />
                <div className="absolute top-2 left-2 w-2 h-2 border border-primary/10" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border border-primary/10" />

                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">{item.label}</div>
                  <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
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
