import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";
import { TechBadge } from "@/components/tech-badge";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { ArrowRight, Download, Award } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              {profile.title}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              {profile.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {profile.quickFacts.map((fact) => (
              <div
                key={fact}
                className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full"
              >
                <Award className="h-4 w-4 text-primary" />
                <span>{fact}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="/Anas_Durra_CV.pdf"
                download="anas_durra_cv.pdf"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Quick About */}
      <Section className="bg-muted/50">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          <p className="text-lg text-muted-foreground text-center text-pretty leading-relaxed">
            {profile.bio}
          </p>
          <div className="flex justify-center">
            <Button asChild variant="link">
              <Link href="/about">
                Learn more about me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explore my work on enterprise systems, event platforms, and
              full-stack applications
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Skills Overview */}
      <Section className="bg-muted/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">Technical Skills</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    ...profile.skills.languages,
                    ...profile.skills.frameworks,
                  ].map((skill) => (
                    <TechBadge key={skill} tech={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">State & UI Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {[...profile.skills.stateData, ...profile.skills.ui].map(
                    (skill) => (
                      <TechBadge key={skill} tech={skill} />
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Testing & Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {[...profile.skills.testing, ...profile.skills.databases].map(
                    (skill) => (
                      <TechBadge key={skill} tech={skill} />
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.tools.map((skill) => (
                    <TechBadge key={skill} tech={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-6 p-8 rounded-2xl bg-primary/5 border border-primary/20">
          <h2 className="text-3xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            I'm always interested in hearing about new opportunities and
            collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
