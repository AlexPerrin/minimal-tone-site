
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AboutProps {
  className?: string;
}

export function About({ className }: AboutProps) {
  return (
    <section
      id="about"
      className={cn("section-padding bg-muted/30", className)}
    >
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 animate-slide-in" style={{ animationDelay: "100ms" }}>
            <p className="text-lg">
              I'm a freelance designer and developer with over 7 years of experience creating minimal,
              functional digital experiences for clients across various industries.
            </p>
            <p className="text-lg">
              My passion lies in crafting clean, user-focused interfaces and writing maintainable,
              efficient code that brings those designs to life.
            </p>
            <p className="text-lg">
              When I'm not designing or coding, you can find me hiking in the mountains,
              experimenting with new recipes, or diving into a good book.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Design",
                skills: ["UI/UX Design", "Figma", "Design Systems", "Prototyping"]
              },
              {
                title: "Development",
                skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
              },
              {
                title: "Tools",
                skills: ["Git", "VS Code", "Vercel", "GitHub"]
              },
              {
                title: "Services",
                skills: ["Web Development", "UI/UX Design", "Consulting", "Mentoring"]
              }
            ].map((category, i) => (
              <Card 
                key={category.title} 
                className="animate-slide-in" 
                style={{ animationDelay: `${200 + i * 100}ms` }}
              >
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {category.skills.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
