
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "blog", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b py-3" 
          : "bg-transparent py-5",
        className
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold">
          John Doe
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {["home", "about", "projects", "blog", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-foreground/80",
                activeSection === item ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeSection === item && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground" />
              )}
            </button>
          ))}
        </div>
        
        <ThemeToggle />
      </div>
    </nav>
  );
}
