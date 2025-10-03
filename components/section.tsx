import type React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-2 md:py-12", className)}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
