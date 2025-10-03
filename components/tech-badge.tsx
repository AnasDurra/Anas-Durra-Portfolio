import { Badge } from "@/components/ui/badge"

interface TechBadgeProps {
  tech: string
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <Badge variant="secondary" className="font-mono text-xs">
      {tech}
    </Badge>
  )
}
