"use client"

import { Mail, Phone, Linkedin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  onBack?: () => void
}

export function Footer({ onBack }: FooterProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mwinzigrace5@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mwinzigrace5@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254112362870",
      href: "https://wa.me/254112362870",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Grace Mwinzi",
      href: "https://www.linkedin.com/in/grace-mwinzi-3b09242aa",
    },
  ]

  if (onBack) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background relative px-6">
        <Button variant="ghost" onClick={onBack} className="absolute top-8 left-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Button>

        <div className="max-w-2xl w-full space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-lg font-medium group-hover:text-accent transition-colors">{info.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border/40">
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Let's Create Something Amazing Together</h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-lg font-medium group-hover:text-accent transition-colors">{info.value}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="container mx-auto px-6 py-6">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Grace Mutheu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
