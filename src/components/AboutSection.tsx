import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "Consultorias técnicas", "Criação de Sistemas de gestão de clientes (CRM)", "Criação de sites", "Integrações de sistemas", "Resolução de bugs"
];

const highlights = [
  "Mais de 50 projetos entregues com sucesso",
  "Mais de 100 mil pessoas impactadas",
  "Ótimização de sistemas trazendo segundos de ouro para usuários",
  "Suporte técnico dedicado visando sempre a geração de valor",
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Sobre Mim
            </h2>
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Conheça um pouco mais{" "}
              <span className="text-gradient">sobre minha jornada</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou um <span className="text-foreground font-medium">Desenvolvedor</span> com 
                mais de 5 anos de experiência criando soluções digitais e resolvendo os problemas mais complexos da atualidade.
                Meu foco é desenvolver sites e sistemas que não apenas impressionam visualmente, 
                mas também <span className="text-foreground font-medium">geram resultados verdadeiro</span>.
              </p>
              <p>
                Se você busca um profissional que entende de negócios e tecnologia, 
                estou pronto para <span className="text-foreground font-medium">transformar sua ideia em realidade</span>.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Tecnologias
            </h2>
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-8">
              Minhas <span className="text-gradient">habilidades</span>
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "5+", label: "Anos de Exp." },
                { value: "10+", label: "Projetos" },
                { value: "100%", label: "Dedicação" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="font-display font-bold text-2xl text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Clients Worked (styled) */}
            <div className="mt-8">
              <h4 className="font-display font-bold text-2xl md:text-3xl mb-4 text-gradient">
                Grandes clientes trabalhados
              </h4>
              <div className="mt-2 grid grid-cols-3 gap-6">
                {[
                  { name: "Serasa Experian", logo: "/images/clients/serasa.jpg" },
                  { name: "Caixa (CVP)", logo: "/images/clients/caixa.png" },
                  { name: "Via Varejo", logo: "/images/clients/viavarejo.png"},
                ].map((client, index) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.05, duration: 0.35 }}
                    className="glass-card rounded-xl p-4 text-center flex flex-col items-center justify-center"
                  >
                    <div className="font-display font-semibold text-base text-foreground">
                      {client.name}
                    </div>
                    {client.logo && (
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={100}
                        height={100}
                        className="mt-3 w-[80px] h-[80px] object-cover rounded-sm"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
