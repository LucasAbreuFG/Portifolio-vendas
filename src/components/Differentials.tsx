import { Eye, MessageSquare, Wrench, FileText, Target, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const differentials = [
  {
    icon: Eye,
    title: "Entrega no prazo combinado, sem surpresas",
    description: "Você recebe proposta com prazo por escrito. Se atrasar, aviso antes e explico o motivo.",
  },
  {
    icon: MessageSquare,
    title: "Linguagem simples, zero 'tecniquês'",
    description: "Explico tudo de forma clara. Você não precisa entender de programação para trabalhar comigo.",
  },
  {
    icon: Wrench,
    title: "Treinamento incluído",
    description: "Ensino você a trocar textos, fotos e informações básicas sozinho, sem depender de dev para tudo.",
  },
  {
    icon: FileText,
    title: "Suporte de 30 dias após entrega",
    description: "Qualquer ajuste pequeno ou dúvida nos primeiros 30 dias, eu resolvo sem custo extra.",
  },
  {
    icon: Target,
    title: "Site pronto para celular",
    description: "Hoje 70% dos acessos vêm do celular. Seu site vai funcionar perfeitamente em qualquer tela.",
  },
];

export const Differentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projetos" className="py-20 md:py-32 border-t border-border bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="font-mono text-sm text-primary mb-2">04 —</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Meus valores</h2>
          <p className="text-xl text-muted-foreground">
            Tudo que faço é focado em entregar valor real para o seu negócio, com transparência e comunicação clara: 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
              className="group border border-border p-8 bg-card rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
