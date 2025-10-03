import { Section } from "@/components/section";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always interested in hearing about new opportunities,
              collaborations, or just connecting with fellow developers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Send me a message</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>LinkedIn</CardTitle>
                    <CardDescription>Connect professionally</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent"
                >
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    View Profile
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Github className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>GitHub</CardTitle>
                    <CardDescription>Check out my code</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent"
                >
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    View Repositories
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle>Location</CardTitle>
                    <CardDescription>Where I'm based</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{profile.location}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Looking for My CV?</h2>
                <p className="text-muted-foreground text-pretty">
                  Download my full resume to learn more about my experience,
                  skills, and projects.
                </p>
                <Button asChild size="lg">
                  <a href={profile.links.cv} download="anas_durra_cv.pdf">
                    Download CV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  );
}
