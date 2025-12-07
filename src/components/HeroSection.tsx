import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDown, Code2, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative pattern-bg overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
        >
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            +5 anos de experiência
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
        >
        <span className="text-gradient">Sites profissionais </span>
         para pequenos negócios que precisam vender mais e 
         <span className="text-gradient"> ter maior autoridade</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
            <span className="text-gradient"> Consultorias técnicas</span>,          
            <span className="text-gradient"> criação rápida de sites </span>
            e <span className="text-gradient"> landing pages</span>        
            , com WhatsApp integrado e painel simples para você atualizar sozinho.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#projetos" className="gap-2">
              <Code2 size={20} />
              Quero um orçamento gratuito
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contato">Falar Comigo</a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-[-85px] left-[50.55%]  -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
