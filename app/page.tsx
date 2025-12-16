"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesBanner } from "@/components/services-banner"
import { ProjectsGrid } from "@/components/projects-grid"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [view, setView] = useState<"landing" | "work" | "contact">("landing")

  if (view === "landing") {
    return <HeroSection onNavigate={setView} />
  }

  if (view === "contact") {
    return <Footer onBack={() => setView("landing")} />
  }

  return (
    <main className="min-h-screen bg-background">
      <Header onBack={() => setView("landing")} />
      <ServicesBanner />
      <ProjectsGrid />
      <AboutSection />
      <PortfolioSection />
    </main>
  )
}
