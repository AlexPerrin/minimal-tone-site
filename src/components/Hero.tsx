
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      id="home"
      className={cn(
        "section-padding min-h-screen flex flex-col justify-center items-start",
        className
      )}
    >
      <div className="max-w-3xl space-y-4 animate-slide-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Hello, I'm John Doe
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          A passionate designer & developer creating minimal, functional experiences for the web.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button
            size="lg"
            className="rounded-full"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View projects
          </Button>
        </div>
      </div>
    </section>
  );
}
