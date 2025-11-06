"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "FinTech Platform",
    category: "Product Design & Development",
    description: "Built a complete banking platform from strategy to launch, serving 50K+ users.",
    metrics: ["50K+ Users", "99.9% Uptime", "4.8★ Rating"],
    testimonial: "CoBuilt delivered our MVP in 8 weeks. Their technical expertise and strategic input were invaluable.",
    client: "Michael Chen, CTO",
  },
  {
    title: "Healthcare SaaS",
    category: "Brand & Web Development",
    description: "Designed and developed a patient management system with HIPAA compliance.",
    metrics: ["HIPAA Compliant", "200+ Clinics", "$2M ARR"],
    testimonial: "They understood healthcare compliance better than most agencies. True partners.",
    client: "Dr. Sarah Williams, Founder",
  },
  {
    title: "E-Commerce Rebuild",
    category: "Technical Architecture",
    description: "Migrated legacy platform to modern stack, improving performance by 300%.",
    metrics: ["300% Faster", "60% Cost Reduction", "2M+ Products"],
    testimonial: "The performance improvements directly impacted our bottom line. Worth every penny.",
    client: "James Rodriguez, VP Engineering",
  },
  {
    title: "Social Media Growth",
    category: "Content & Community",
    description: "Grew Instagram following from 5K to 150K in 6 months through strategic content.",
    metrics: ["150K Followers", "8% Engagement", "500K+ Reach"],
    testimonial: "Finally, an agency that understands both content and strategy. Game-changing results.",
    client: "Emma Thompson, CMO",
  },
]

export function Work() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(projects.length).fill(false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        },
        { threshold: 0.2 },
      )

      if (ref) observer.observe(ref)
      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section id="work" className="py-32 lg:py-40 bg-muted/30 blueprint-grid-dense relative overflow-hidden">
      <div className="absolute top-40 left-10 w-64 h-64 border border-primary/5 rotate-45" />
      <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/5 -rotate-12" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-3 py-1 border border-primary/30 bg-background rounded-sm">
              <span className="text-xs font-medium text-primary tracking-wider">CASE STUDIES</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Real Projects, <span className="gradient-text">Real Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              Every project starts as a partnership. {"Here's"} what the founders {"we've"} built with have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative p-8 bg-card border-2 border-border hover:border-primary transition-all duration-500 hover-lift hover:shadow-2xl overflow-hidden ${
                  visibleCards[index] ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-primary/5" />
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          className="text-primary/20"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                  </svg>
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="absolute -top-8 -left-8 w-4 h-4 border-l-2 border-t-2 border-primary/20 group-hover:border-primary/60 group-hover:scale-150 transition-all duration-300" />
                  <div className="absolute -top-8 -right-8 w-4 h-4 border-r-2 border-t-2 border-primary/20 group-hover:border-primary/60 group-hover:scale-150 transition-all duration-300" />

                  <div className="space-y-2">
                    <div className="text-xs text-primary font-medium tracking-wider uppercase">{project.category}</div>
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="px-3 py-1.5 bg-muted border border-border text-xs font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border space-y-2">
                    <p className="text-sm italic text-muted-foreground leading-relaxed">"{project.testimonial}"</p>
                    <div className="text-xs font-medium text-foreground">— {project.client}</div>
                  </div>

                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-4 transition-all duration-300 cursor-pointer">
                      <span>View Full Case Study</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
