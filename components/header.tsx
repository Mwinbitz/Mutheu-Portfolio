"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onBack?: () => void
}

export function Header({ onBack }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  if (!onBack) return null

  return (
    <div
      className={`fixed top-6 left-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
      }`}
    >
      <Button
        variant="secondary"
        onClick={onBack}
        size="icon"
        className="w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>
    </div>
  )
  // </CHANGE>
}
