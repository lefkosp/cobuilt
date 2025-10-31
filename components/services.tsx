"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const services = [
  {
    category: "Digital Products",
    items: [
      {
        title: "Web Applications",
        description: "Custom web apps that scale with your business",
        outcome: "Launch faster, scale smarter",
        icon: "M3 6h18M3 12h18M3 18h18",
      },
      {
        title: "Landing Pages",
        description: "High-converting pages that turn visitors into customers",
        outcome: "2-3x higher conversion rates",
        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      },
      {
        title: "E-Commerce",
        description: "Online stores optimized for revenue and retention",
        outcome: "Sell more, manage less",
        icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
      },
    ],
  },
  {
    category: "Brand & Content",
    items: [
      {
        title: "Social Media",
        description: "Strategic content that builds engaged communities",
        outcome: "Grow your audience organically",
        icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
      },
      {
        title: "Content Creation",
        description: "Compelling stories that resonate with your audience",
        outcome: "Stand out in crowded markets",
        icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      },
      {
        title: "Video Editing",
        description: "Professional clips that capture attention and drive action",
        outcome: "Higher engagement, more shares",
        icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      },
    ],
  },
  {
    category: "Growth & Ads",
    items: [
      {
        title: "Paid Advertising",
        description: "Data-driven campaigns that maximize ROI",
        outcome: "Lower CAC, higher LTV",
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      },
      {
        title: "Social Management",
        description: "Full-service community engagement and growth",
        outcome: "Build loyal communities",
        icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      },
      {
        title: "Growth Strategy",
        description: "Roadmaps for sustainable, profitable scaling",
        outcome: "Predictable growth systems",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
    ],
  },
]

export function Services() {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = categoryRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCategories((prev) => [...new Set([...prev, index])])
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
    <section id="services" ref={sectionRef} className="py-32 lg:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-40 left-10 w-32 h-32 border border-primary/5 rotate-12 pointer-events-none" />
      <div className="absolute bottom-20 right-16 w-40 h-40 border-2 border-primary/5 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-3 py-1 border border-primary/30 bg-primary/5 rounded-sm">
              <span className="text-xs font-medium text-primary tracking-wider">WHAT WE BUILD</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
              Everything You Need to <span className="gradient-text">Grow Online</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              From digital products to brand presence, we handle the complete stack so you can focus on your business.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                ref={(el) => {
                  categoryRefs.current[categoryIndex] = el
                }}
                className={`space-y-6 ${visibleCategories.includes(categoryIndex) ? "animate-fade-up" : "opacity-0"}`}
              >
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  <h3 className="text-2xl font-bold text-primary tracking-tight">{category.category}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className={`group relative p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift hover:shadow-lg ${visibleCategories.includes(categoryIndex) ? `animate-scale-in delay-${(serviceIndex + 1) * 100}` : "opacity-0"}`}
                    >
                      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-125" />
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-125" />

                      <div className="mb-4 w-12 h-12 flex items-center justify-center border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                        </svg>
                      </div>

                      <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>

                      <div className="flex items-center gap-2 text-xs font-medium text-primary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{service.outcome}</span>
                      </div>

                      <div className="absolute bottom-2 right-2 w-8 h-px bg-primary/20 group-hover:w-16 transition-all duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center p-8 border-2 border-primary/20 bg-primary/5">
            <p className="text-lg font-serif mb-4 text-foreground">
              Need a custom solution? We build exactly what your business needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#contact">Discuss Your Project</a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Limited spots available — we only take 3-4 projects per quarter
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
