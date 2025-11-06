"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
    <section id="about" ref={sectionRef} className="py-32 lg:py-40 bg-background relative overflow-hidden">
      <div
        className={`absolute top-20 right-0 w-64 h-64 opacity-5 transition-all duration-1000 ${isVisible ? "translate-x-0" : "translate-x-20"}`}
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z" stroke="currentColor" strokeWidth="2" />
          <path d="M100 20 L100 180 M20 60 L180 140 M180 60 L20 140" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className={`lg:col-span-2 space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <div className="inline-block px-3 py-1 border border-primary/30 bg-muted/50 rounded-sm">
                <span className="text-xs font-medium text-primary tracking-wider">ABOUT</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
                Built on Craft, <span className="gradient-text">Backed by Purpose</span>
              </h2>
            </div>

            <div className={`lg:col-span-3 space-y-8 ${isVisible ? "animate-slide-in-right delay-100" : "opacity-0"}`}>
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-foreground font-serif">
                  We're a boutique team that partners with founders who care deeply about what they build. Every detail
                  matters, every project gets full focus, and every outcome reflects shared pride—not just deliverables.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  CoBuilt began with a belief that great brands come from partnership, not transactions. We stay
                  intentionally small so we can work deeply, combining creativity, precision, and accountability to help
                  founders build work worth standing behind.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                {[
                  {
                    value: "Boutique",
                    label: "By Design",
                    description: "Purposefully small for expert attention",
                    delay: "delay-200",
                  },
                  {
                    value: "Hands-On",
                    label: "By Nature",
                    description: "Work directly with strategists and builders",
                    delay: "delay-300",
                  },
                  {
                    value: "Built for",
                    label: "Longevity",
                    description: "Partnerships, not projects",
                    delay: "delay-400",
                  },
                  {
                    value: "Craft",
                    label: "Over Scale",
                    description: "Exceptional work, not endless output",
                    delay: "",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`space-y-3 p-6 border-l-2 border-primary bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover-lift group ${isVisible ? `animate-scale-in ${stat.delay}` : "opacity-0"}`}
                  >
                    <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform inline-block">
                      {stat.value}
                    </div>
                    <div className="text-base font-medium text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                ))}
              </div>

              <div className={`pt-8 space-y-4 ${isVisible ? "animate-fade-up delay-400" : "opacity-0"}`}>
                <h3 className="text-2xl font-bold">How We Work</h3>
                <ul className="space-y-3">
                  {[
                    "Strategy leads everything—before pixels, before posts",
                    "You work with the people actually building your brand",
                    "We stay through launch and beyond. Success is measured in longevity",
                    "Expect honesty, not flattery. Real partnerships require both",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="mt-1.5 w-1.5 h-1.5 bg-primary flex-shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
