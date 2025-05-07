
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  className?: string;
}

export function Contact({ className }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon."
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className={cn("section-padding", className)}>
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-slide-in">Get in Touch</h2>
          <p className="text-muted-foreground mb-8 animate-slide-in" style={{ animationDelay: "100ms" }}>
            Have a project in mind or just want to chat? Send me a message and I'll get back to you.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4 animate-slide-in" style={{ animationDelay: "200ms" }}>
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 animate-slide-in" style={{ animationDelay: "300ms" }}>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                hello@example.com
              </a>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-medium mb-1">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-medium mb-1">Social</h3>
              <div className="flex gap-4 justify-center md:justify-end">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
