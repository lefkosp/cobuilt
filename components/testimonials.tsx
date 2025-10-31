"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote:
      "CoBuilt didn't just build our product — they became part of our team. Their strategic input shaped our entire go-to-market approach.",
    author: "Sarah Chen",
    role: "Founder & CEO",
    company: "TechFlow",
    metric: "Launched in 6 weeks",
  },
  {
    quote:
      "Finally, an agency that actually understands startups. They move fast, think strategically, and deliver quality that rivals in-house teams.",
    author: "Marcus Rodriguez",
    role: "Co-Founder",
    company: "GrowthLabs",
    metric: "3x conversion rate",
  },
  {
    quote:
      "Working with CoBuilt felt like having a technical co-founder. They challenged our assumptions and built something better than we imagined.",
    author: "Emily Watson",
    role: "Founder",
    company: "BuildFast",
    metric: "$500K raised post-launch",
  },
]

export function Testimonials() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(testimonials.length).fill(false))
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
    <section className="py-32 lg:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-20 w-40 h-40 border border-primary/5 rotate-12 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-3 py-1 border border-primary/30 bg-muted/50 rounded-sm">
              <span className="text-xs font-medium text-primary tracking-wider">TESTIMONIALS</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Built With <span className="gradient-text">Real Founders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              {"Don't"} take our word for it — hear from the founders {"we've"} partnered with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative p-8 bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover-lift hover:shadow-xl ${
                  visibleCards[index] ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-125" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-all duration-300 group-hover:scale-125" />

                <div className="space-y-6">
                  <svg className="w-8 h-8 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-base leading-relaxed font-serif italic text-foreground">{testimonial.quote}</p>

                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="font-bold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="inline-block px-2 py-1 bg-primary/10 border border-primary/20 text-xs font-medium text-primary mt-2">
                      {testimonial.metric}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
