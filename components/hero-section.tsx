"use client"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onNavigate?: (view: "work" | "contact") => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  if (onNavigate) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/landing-background.png" alt="Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-background/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-8 px-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground">Grace Mutheu</h1>

          <p className="text-xl md:text-2xl text-muted-foreground">Let's Connect</p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mwinzigrace5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/in/grace-mwinzi-3b09242aa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => onNavigate("work")}
              className="bg-foreground/20 text-foreground hover:bg-foreground/30 backdrop-blur-sm px-12 py-6 text-lg rounded-full"
            >
              Work
            </Button>
            <Button
              size="lg"
              onClick={() => onNavigate("contact")}
              className="bg-foreground/20 text-foreground hover:bg-foreground/30 backdrop-blur-sm px-12 py-6 text-lg rounded-full"
            >
              Contact
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "6", label: "Projects Taken Part In" },
    { number: "2", label: "Startups Co-founded" },
    { number: "100%", label: "Commitment" },
  ]

  return (
    <section id="home" className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Content */}
        <div className="lg:col-span-4 space-y-6">
          <p className="text-xl text-muted-foreground">Hey, I'm Grace,</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-balance">A UI/UX DESIGNER</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transforming complex ideas into intuitive, visually compelling digital experiences. Core designer and
            co-founder for scalable startups.
          </p>
          <Button
            size="lg"
            className="mt-4 bg-foreground text-background hover:bg-foreground/90 font-medium tracking-wider"
          >
            <a href="#contact">CONTACT ME</a>
          </Button>
        </div>

        {/* Center Image */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-full scale-110 -z-10" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
              <Image src="/images/grace-profile.jpg" alt="Grace Mutheu" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Right Stats */}
        <div className="lg:col-span-4 space-y-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-1">
              <p className="text-4xl md:text-5xl font-bold">{stat.number}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
