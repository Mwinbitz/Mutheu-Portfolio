import { Paintbrush, Smartphone, Layers, Package } from "lucide-react"

export function ServicesBanner() {
  const services = [
    {
      icon: Paintbrush,
      title: "UI/UX DESIGN",
      description: "Intuitive and engaging experiences tailored for your audience.",
    },
    {
      icon: Smartphone,
      title: "WEB & MOBILE APPS",
      description: "Responsive, pixel-perfect designs optimized for all devices.",
    },
    {
      icon: Layers,
      title: "PROTOTYPING",
      description: "Interactive mockups to bring ideas to life swiftly.",
    },
    {
      icon: Package,
      title: "DESIGN SYSTEMS",
      description: "Scalable frameworks for consistent product evolution.",
    },
  ]

  return (
    <section id="services" className="bg-muted/30 py-16 border-y border-border/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-sm font-bold tracking-wider">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
