import Image from "next/image"

export function ProjectsGrid() {
  const projects = [
    { name: "SWYFT", logo: "/images/swyft-logo.png" },
    { name: "MUNCHEZ", logo: "/images/munchez-logo.png" },
    { name: "GRATON", logo: "/images/graton-logo.png" },
    { name: "NIMA", logo: "/images/nima-logo.png" },
  ]

  return (
    <section id="projects" className="container mx-auto px-6 py-20 md:py-32">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">KEY PROJECTS DESIGNED</p>
          <p className="text-xl text-muted-foreground">Core designer for these leading platforms.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="aspect-square bg-background rounded-lg border border-border/40 flex items-center justify-center hover:bg-muted/30 transition-colors cursor-pointer p-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.logo || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
