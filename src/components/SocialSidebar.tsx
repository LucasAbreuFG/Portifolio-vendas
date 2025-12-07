import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/lucas-abreu-garcia/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/LucasAbreuFG", label: "GitHub" },
  { icon: Instagram, href: "https://www.instagram.com/lucas_abreu.fg/", label: "Instagram" },
  { icon: Mail, href: `mailto:${import.meta.env.VITE_EMAIL ?? "lucasdeafgjob@gmail.com"}`, label: "Email" },
];

export const SocialSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-5"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1 }}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group"
          aria-label={social.label}
        >
          <social.icon size={18} className="group-hover:scale-110 transition-transform" />
        </motion.a>
      ))}
      <div className="w-px h-20 bg-border mx-auto mt-2" />
    </motion.aside>
  );
};
