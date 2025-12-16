import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "SWYFT",
      description: "Co-founder & Core UI/UX Designer. End-to-end design for the logistics platform.",
      link: "www.swyft.africa",
      tags: ["UI/UX", "Co-founder", "Logistics"],
      image: "/images/swyft-app.png",
    },
    {
      title: "NIMA",
      description: "Co-founder & Core UI/UX Designer. Designing the future of AI-powered shopping.",
      link: "www.shopnima.ai",
      tags: ["UI/UX", "Co-founder", "AI"],
      image: "/images/nima-dark.png",
    },
    {
      title: "GRATON ACADEMY",
      description: "Core UI/UX Designer. Transforming education through innovative digital experiences.",
      link: "www.gratonacademy.com",
      tags: ["UI/UX", "Education", "Web Design"],
      image: "/images/graton-academy.png",
    },
  ]

  return (
    <section id="portfolio" className="container mx-auto px-6 py-20 md:py-32">
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">PORTFOLIO</p>
          <p className="text-xl text-muted-foreground">Explore my recent work as a core designer and co-founder.</p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group space-y-6">
              <div className="relative aspect-[2/1] rounded-lg overflow-hidden bg-muted/40 border border-border/40">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                  <a
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>{project.link}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider bg-muted/50 rounded-full border border-border/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
