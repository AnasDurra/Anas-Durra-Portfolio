import { Section } from "@/components/section";
import { profile } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Languages, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Education</h2>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">{profile.education.degree}</p>
                  <p className="text-muted-foreground">
                    {profile.education.institution}
                  </p>
                  <p className="text-sm text-primary">
                    {profile.education.achievement}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Languages className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Languages</h2>
                </div>
                <ul className="space-y-2">
                  {profile.languages.map((lang) => (
                    <li key={lang} className="text-muted-foreground">
                      {lang}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold">Location</h2>
                </div>
                <p className="text-muted-foreground">{profile.location}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Professional Focus</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Frontend Excellence</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Specialized in React and Next.js, building scalable and
                    performant user interfaces
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    End-to-end delivery from database design to frontend
                    implementation
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Enterprise Systems</h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    Experience building complex ERP systems and workflow
                    automation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
