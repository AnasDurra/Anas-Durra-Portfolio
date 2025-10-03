import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { featuredProjects, secondaryProjects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              A collection of my work spanning enterprise systems, event platforms, and full-stack applications. Each
              project showcases different aspects of modern web development.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>

            {secondaryProjects.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {secondaryProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </main>
  )
}
