"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const services = [
  {
    category: "Strategy OS",
    description:
      "The foundation for scalable growth. We design the roadmap for your brand, positioning, messaging, and measurable goals that give every creative move a clear direction. Strategy first. Always.",
    deliverables: ["Positioning", "Messaging", "Campaign Planning", "Creative Direction"],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    category: "Content Engine",
    description:
      "Storytelling that scales. From creative direction to full-service production, we craft content that moves—visually, emotionally, and strategically. Every asset serves a purpose and every campaign builds momentum.",
    deliverables: ["Social Media", "Content Creation", "Video Editing"],
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  },
  {
    category: "Performance Hub",
    description:
      "Where creativity meets conversion. We turn content into measurable growth through ads, SEO, and analytics. No vanity metrics—only performance you can track, test, and scale.",
    deliverables: ["Paid Advertising", "SEO", "Growth Strategy"],
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    category: "WebOps",
    description:
      "Design, development, and maintenance built for growth. From landing pages to full-scale builds, we design websites that perform. Speed, SEO, and conversion at the core—your online presence built to scale.",
    deliverables: ["Web Applications", "Landing Pages", "E-Commerce"],
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
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
              <span className="text-xs font-medium text-primary tracking-wider">SERVICES</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1]">
              Systems That Build, <span className="gradient-text">Scale, and Grow</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              We build structured systems that connect creativity with performance—everything a modern founder needs to
              turn vision into measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  categoryRefs.current[index] = el
                }}
                className={`group relative p-8 bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover-lift hover:shadow-xl ${visibleCategories.includes(index) ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-125" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-125" />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors flex-shrink-0">
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
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {service.category}
                    </h3>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed font-serif">{service.description}</p>

                  <div className="pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Deliverables</div>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 bg-muted border border-border text-xs font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                        >
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
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
