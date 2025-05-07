
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectsProps {
  className?: string;
}

export function Projects({ className }: ProjectsProps) {
  const projects = [
    {
      id: 1,
      title: "Minimal Portfolio Website",
      description: "A clean and minimal portfolio website for a photographer showcasing their work with a focus on imagery.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A feature-rich task management application with drag-and-drop functionality and team collaboration.",
      tags: ["TypeScript", "React", "Redux"],
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with product filtering, cart functionality, and secure payment processing.",
      tags: ["Next.js", "Stripe", "Prisma"],
      link: "#"
    },
    {
      id: 4,
      title: "Health & Wellness App",
      description: "A mobile-first application for tracking fitness goals, nutrition, and wellness activities.",
      tags: ["React Native", "Firebase", "GraphQL"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className={cn("section-padding", className)}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card 
              key={project.id} 
              className="animate-slide-in overflow-hidden"
              style={{ animationDelay: `${100 * i}ms` }}
            >
              <div className="h-48 bg-muted/50" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="outline" size="sm" className="w-full">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
