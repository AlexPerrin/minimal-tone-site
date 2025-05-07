
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogProps {
  className?: string;
}

export function Blog({ className }: BlogProps) {
  const posts = [
    {
      id: 1,
      title: "Designing for Accessibility",
      excerpt: "A deep dive into creating accessible web experiences that work for everyone.",
      date: "Apr 12, 2023",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of Front-end Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of front-end development.",
      date: "Mar 24, 2023",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Building a Design System from Scratch",
      excerpt: "A step-by-step guide to creating a cohesive design system for your projects.",
      date: "Feb 18, 2023",
      readTime: "10 min read"
    }
  ];

  return (
    <section id="blog" className={cn("section-padding bg-muted/30", className)}>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Blog</h2>
        <div className="space-y-6 max-w-3xl">
          {posts.map((post, i) => (
            <Card 
              key={post.id} 
              className="animate-slide-in"
              style={{ animationDelay: `${100 * i}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="link" className="px-0">
                  Read more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button variant="outline">View all posts</Button>
        </div>
      </div>
    </section>
  );
}
