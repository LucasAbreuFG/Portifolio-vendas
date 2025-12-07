import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Globe, Rocket, RefreshCw, Clock, Users, CheckCircle } from "lucide-react";

const packages = [
  {
    icon: Globe,
    title: "Site Institucional Profissional",
    description: "Ideal para negócios que precisam mostrar serviços, horários e facilitar contato. Inclui até 5 páginas (Home, Sobre, Serviços, Galeria, Contato), botão direto para WhatsApp e Google Maps integrado.",
    target: "Clínicas, salões, escritórios, oficinas, profissionais autônomos",
    deadline: "7-10 dias",
    price: "R$ 1.200",
  },
  {
    icon: Rocket,
    title: "Landing Page que Converte",
    description: "Página única focada em vender um serviço específico ou capturar leads. Design limpo, call-to-action forte, formulário de contato e conexão com WhatsApp.",
    target: "Lançamentos, eventos, infoprodutos, promoções",
    deadline: "5-7 dias",
    price: "R$ 800",
  },
  {
    icon: RefreshCw,
    title: "Repaginação e Otimização",
    description: "Seu site já existe mas está lento, confuso ou não gera contatos? Faço análise, reorganizo conteúdo, melhoro velocidade e adiciono botões de ação estratégicos.",
    target: "Negócios com site desatualizado ou mal estruturado",
    deadline: "5-7 dias",
    price: "R$ 600",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleRequestQuote = (packageTitle: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no pacote "${packageTitle}". Gostaria de saber mais detalhes.`);
    
    const configured = import.meta.env.VITE_PHONE ?? "15998341564";
    const digits = configured.replace(/\D/g, "");
    const withCountry = digits.startsWith("55") ? digits : `55${digits}`;
    window.open(`https://wa.me/${withCountry}?text=${message}`, "_blank");
  };

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Serviços
          </h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl">
            Pacotes sob medida para o <span className="text-gradient">seu negócio</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Soluções claras, prazos definidos e preços justos. Escolha o pacote ideal para suas necessidades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <pkg.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h4 className="font-display font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                  {pkg.description}
                </p>

                {/* Target audience */}
                <div className="flex items-start gap-2 mb-3">
                  <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Para quem:</span> {pkg.target}
                  </span>
                </div>

                {/* Deadline */}
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">Prazo:</span> {pkg.deadline}
                  </span>
                </div>

                {/* Price */}
                <div className="border-t border-border/50 pt-6 mt-auto">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-sm text-muted-foreground">A partir de</span>
                    <span className="font-display font-bold text-2xl text-primary">{pkg.price}</span>
                  </div>

                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={() => handleRequestQuote(pkg.title)}
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Solicitar orçamento
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
