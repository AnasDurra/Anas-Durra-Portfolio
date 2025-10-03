import { Section } from "@/components/section"
import { profile } from "@/data/profile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function AwardsPage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Awards & Recognition</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Academic achievements and professional recognition
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {profile.awards.map((award, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-balance">{award.title}</CardTitle>
                      <CardDescription className="mt-2">{award.org}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Academic Excellence</h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  Graduated top of class from Damascus University with a B.Sc. in Software Engineering. Achieved the #1
                  rank in the National Graduation Exam (IT, 2024) across all Syrian universities, demonstrating
                  exceptional technical knowledge and problem-solving abilities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  )
}
