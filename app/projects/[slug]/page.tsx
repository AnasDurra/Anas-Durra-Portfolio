import { Section } from "@/components/section"
import { TechBadge } from "@/components/tech-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/data/projects"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects
    .filter((p) => p.featured)
    .map((project) => ({
      slug: project.slug,
    }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project || !project.featured) {
    notFound()
  }

  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <Button asChild variant="ghost" size="sm">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">{project.name}</h1>
              <p className="text-xl text-muted-foreground text-pretty">{project.summary}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}

                {project.repoUrls.map((url, idx) => (
                  <Button key={idx} asChild variant="outline">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {project.repoUrls.length > 1 ? `Repository ${idx + 1}` : "Repository"}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.role}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Key Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground text-pretty">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {project.outcomes.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Outcomes & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground text-pretty">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          <div className="pt-8 border-t">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Discuss This Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
