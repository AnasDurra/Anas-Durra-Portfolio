import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/tech-badge";
import { ExternalLink, Github, Star, BookOpen } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative flex flex-col h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1">
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="gap-1 bg-primary/10 text-primary border-primary/20 shadow-sm">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </Badge>
        </div>
      )}

      <CardHeader className="space-y-3 pb-4">
        <CardTitle className="text-balance text-2xl font-semibold tracking-tight leading-tight pr-20">
          {project.name}
        </CardTitle>
        <CardDescription className="text-pretty text-base leading-relaxed text-muted-foreground">
          {project.summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pt-0">
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
            {project.tech.length > 6 && (
              <Badge
                variant="outline"
                className="text-xs font-medium bg-muted/50 hover:bg-muted transition-colors"
              >
                +{project.tech.length - 6} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-6 border-t border-border/50 bg-muted/20">
        <div className="flex flex-wrap gap-2 w-full">
          {project.liveUrl && (
            <Button
              asChild
              size="sm"
              className="flex-1 min-w-[120px] gap-2 shadow-sm transition-all hover:shadow-md"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}

          {project.secondLiveUrl && (
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="flex-1 min-w-[120px] gap-2 shadow-sm transition-all hover:shadow-md"
            >
              <a
                href={project.secondLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Demo 2
              </a>
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 w-full">
          {project.repoUrls[0] && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 min-w-[120px] gap-2 transition-all hover:bg-accent bg-transparent"
            >
              <a
                href={project.repoUrls[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            </Button>
          )}

          {project.docUrl && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="flex-1 min-w-[120px] gap-2 transition-all hover:bg-accent bg-transparent"
            >
              <a
                href={project.docUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="h-4 w-4" />
                Documentation
              </a>
            </Button>
          )}

          {project.featured && (
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="flex-1 min-w-[120px] transition-all hover:bg-accent font-medium"
            >
              <Link href={`/projects/${project.slug}`}>Read Case Study →</Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
