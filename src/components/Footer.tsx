import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/lucas-abreu-garcia/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/LucasAbreuFG", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/lucas_abreu.fg/", label: "Instagram" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold">
            <span className="text-gradient">LUCAS</span>
            <span className="text-foreground"> DE ABREU</span>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © Copyright {currentYear}. Made by Lucas de Abreu</p>
        </div>
      </div>
    </footer>
  );
};
