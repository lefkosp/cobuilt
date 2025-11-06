"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Discover & Define",
    description:
      "We immerse ourselves in your world: goals, customers, challenges, and untapped potential. This stage shapes every decision that follows.",
    benefit: "You get: Deep understanding of your market and a validated strategic foundation",
  },
  {
    number: "02",
    title: "Design & Structure",
    description:
      "We turn clarity into a plan. Through visual direction, content strategy, and systems thinking, we lay the foundation for consistent growth.",
    benefit: "You get: Clear roadmap with visual direction and structured systems ready to execute",
  },
  {
    number: "03",
    title: "Build & Execute",
    description:
      "We build the assets, campaigns, and systems that bring your strategy to life—efficiently, collaboratively, and without friction.",
    benefit: "You get: High-quality execution with full transparency and direct access to your team",
  },
  {
    number: "04",
    title: "Grow & Refine",
    description:
      "Once live, we track, test, and optimise. Every win becomes a new blueprint for scaling your next stage of growth.",
    benefit: "You get: Continuous optimization and strategic guidance as you scale to new heights",
  },
]

export function Process() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSteps, setActiveSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollY = window.scrollY + window.innerHeight / 2

      const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / (sectionHeight * 0.8)))
      setScrollProgress(progress)

      const newActiveSteps: number[] = []
      stepsRef.current.forEach((stepEl, index) => {
        if (stepEl) {
          const stepTop = stepEl.offsetTop
          const stepMiddle = stepTop + stepEl.offsetHeight / 2
          if (scrollY >= sectionTop + stepMiddle - 200) {
            newActiveSteps.push(index)
          }
        }
      })
      setActiveSteps(newActiveSteps)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-32 lg:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-3 py-1 border border-primary/30 bg-muted/50 rounded-sm">
              <span className="text-xs font-medium text-primary tracking-wider">PROCESS</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
              From Blueprint to <span className="gradient-text">Build Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              Our process isn't linear—it's collaborative, transparent, and built to grow alongside you. Every stage
              compounds into the next, turning strategy into momentum and momentum into measurable growth.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden lg:block">
              <div
                className="absolute inset-0 bg-border/30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 8px, rgb(var(--border) / 0.3) 8px, rgb(var(--border) / 0.3) 16px)",
                }}
              />
              <div
                className="absolute top-0 left-0 w-full bg-primary transition-all duration-300 ease-out"
                style={{
                  height: `${scrollProgress * 100}%`,
                  boxShadow: "0 0 8px rgb(var(--primary) / 0.5)",
                }}
              />

              {steps.map((_, index) => (
                <div
                  key={index}
                  className="absolute left-0 w-4 h-px bg-border"
                  style={{ top: `${(index / (steps.length - 1)) * 100}%` }}
                />
              ))}
            </div>

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => (
                <div key={index} ref={(el) => (stepsRef.current[index] = el)} className="relative lg:pl-24">
                  <div
                    className={`absolute left-8 top-8 -translate-x-1/2 w-5 h-5 rounded-full border-2 transition-all duration-500 hidden lg:block z-10 ${
                      activeSteps.includes(index) ? "border-primary scale-125" : "border-border/50 scale-100"
                    }`}
                    style={{
                      boxShadow: activeSteps.includes(index) ? "0 0 12px rgb(var(--primary) / 0.4)" : "none",
                    }}
                  >
                    <div
                      className={`absolute inset-0.5 rounded-full transition-all duration-700 ease-out ${
                        activeSteps.includes(index)
                          ? "bg-primary scale-100 opacity-100"
                          : "bg-transparent scale-50 opacity-0"
                      }`}
                    />
                    {activeSteps.includes(index) && (
                      <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-75" />
                    )}
                  </div>

                  <div
                    className={`transition-all duration-700 ${
                      activeSteps.includes(index) ? "opacity-100 translate-x-0" : "opacity-40 translate-x-4"
                    }`}
                  >
                    <div
                      className={`p-8 lg:p-10 bg-card border-2 transition-all duration-500 relative ${
                        activeSteps.includes(index) ? "border-primary shadow-xl shadow-primary/10" : "border-border"
                      }`}
                    >
                      <div
                        className={`absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 transition-colors duration-500 ${
                          activeSteps.includes(index) ? "border-primary" : "border-primary/30"
                        }`}
                      />
                      <div
                        className={`absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 transition-colors duration-500 ${
                          activeSteps.includes(index) ? "border-primary" : "border-primary/30"
                        }`}
                      />
                      <div
                        className={`absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 transition-colors duration-500 ${
                          activeSteps.includes(index) ? "border-primary" : "border-primary/30"
                        }`}
                      />
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 transition-colors duration-500 ${
                          activeSteps.includes(index) ? "border-primary" : "border-primary/30"
                        }`}
                      />

                      <div className="space-y-4">
                        <div
                          className={`text-5xl lg:text-6xl font-bold transition-all duration-500 ${
                            activeSteps.includes(index) ? "text-primary scale-100" : "text-muted-foreground scale-95"
                          }`}
                        >
                          {step.number}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold">{step.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground font-serif max-w-xl">
                          {step.description}
                        </p>
                        <div className="pt-4 flex items-start gap-3 bg-primary/5 p-4 border-l-2 border-primary">
                          <svg
                            className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-sm font-medium text-foreground">{step.benefit}</p>
                        </div>
                      </div>

                      <div className="mt-6 h-1 bg-muted overflow-hidden">
                        <div
                          className={`h-full bg-primary transition-all duration-1000 ${
                            activeSteps.includes(index) ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
