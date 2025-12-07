import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X, User } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Note: header will not be fixed on mobile; keep it fixed on md+ via tailwind classes.

  const handleAboutClick = () => {
    setIsProfileOpen(false);
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`md:fixed md:top-0 md:left-0 md:right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Avatar Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsProfileOpen(true)}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300 animate-pulse" />
              <Avatar className="relative h-24 w-24 border-2 border-primary ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300">
                <AvatarImage src="/images/clients/logolucas.png" alt="Foto do desenvolvedor" />
                <AvatarFallback className="bg-card text-primary font-display font-bold">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </motion.button>

            {/* Logo */}
            <a href="#inicio" className="font-display font-bold text-xl text-foreground">
              <span className="text-gradient">LUCAS</span>
              <span className="text-foreground"> DE ABREU</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="#contato">Contratar</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-card mt-2 mx-6 rounded-xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" asChild>
                <a href="#contato">Contratar</a>
              </Button>
            </div>
          </motion.nav>
        )}
      </motion.header>

      {/* Profile Modal */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="glass-card border-primary/20 max-w-md">
          <DialogHeader className="text-center items-center">
            <div className="relative mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full opacity-50 blur-md" />
              <Avatar className="relative h-32 w-32 border-4 border-primary">
                <AvatarImage src="/images/clients/logolucas.png" alt="Foto do desenvolvedor" />
                <AvatarFallback className="bg-card text-primary font-display font-bold text-3xl">
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
            </div>
            <DialogTitle className="text-2xl font-display text-gradient">
              Lucas de Abreu
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base mt-2">
              Desenvolvedor Full-Stack Senior
            </DialogDescription>
          </DialogHeader>
          
          <div className="text-center space-y-4 mt-2">
            <p className="text-foreground/90 leading-relaxed">
              Especialista em criar soluções digitais de alto impacto. 
              Com mais de 5 anos de experiência, transformo ideias em 
              sistemas robustos e sites que convertem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button 
                variant="hero" 
                onClick={handleAboutClick}
              >
                Ver mais sobre mim
              </Button>
              <Button 
                variant="glass" 
                onClick={() => setIsProfileOpen(false)}
              >
                Fechar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
