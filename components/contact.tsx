"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect, useRef } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 lg:py-40 bg-muted/30 blueprint-grid relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="inline-block px-3 py-1 border border-primary/30 bg-background rounded-sm">
              <span className="text-xs font-medium text-primary tracking-wider">GET STARTED</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Ready to Build <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-serif">
              Book a free 30-minute strategy call. {"We'll"} discuss your vision, challenges, and how we can help you
              execute.
            </p>
            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No commitment required</span>
              </div>
            </div>
          </div>

          <div
            className={`bg-card border-2 border-border p-8 md:p-12 relative hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl ${isVisible ? "animate-scale-in delay-100" : "opacity-0"}`}
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-primary/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-primary/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-primary/40" />

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    Name *{focusedField === "name" && <span className="text-xs text-primary">●</span>}
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="border-border focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    Email *{focusedField === "email" && <span className="text-xs text-primary">●</span>}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="border-border focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                  Company
                  {focusedField === "company" && <span className="text-xs text-primary">●</span>}
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  className="border-border focus:border-primary transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  What are you looking to build? *
                  {focusedField === "message" && <span className="text-xs text-primary">●</span>}
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="border-border focus:border-primary resize-none transition-all duration-300"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Book Your Strategy Call
                </Button>
                <p className="text-xs text-muted-foreground">
                  {"We'll"} respond within 24 hours to schedule your free consultation
                </p>
              </div>
            </form>
          </div>

          <div
            className={`mt-16 grid md:grid-cols-3 gap-8 text-center ${isVisible ? "animate-fade-up delay-200" : "opacity-0"}`}
          >
            {[
              { label: "Email", value: "hello@cobuilt.co", href: "mailto:hello@cobuilt.co" },
              { label: "Based In", value: "San Francisco, CA", href: null },
              { label: "Response Time", value: "< 24 hours", href: null },
            ].map((item, i) => (
              <div key={i} className="space-y-2 group">
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors link-underline inline-block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-lg font-medium">{item.value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 mt-24">
        <div className="max-w-6xl mx-auto pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 border-2 border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:rotate-180">
                <span className="text-primary font-bold text-sm group-hover:text-primary-foreground transition-colors">
                  CB
                </span>
              </div>
              <span className="font-bold text-xl">CoBuilt</span>
            </div>

            <div className="text-sm text-muted-foreground">© 2025 CoBuilt. Built with precision.</div>

            <div className="flex items-center gap-6">
              {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-sm hover:text-primary transition-colors link-underline">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
