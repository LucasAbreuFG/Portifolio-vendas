import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSend = (info: { label: string; value: string }) => {
    if (info.label === "Email") {
      const email = info.value || (import.meta.env.VITE_EMAIL ?? "lucasdeafgjob@gmail.com");
      window.location.href = `mailto:${email}`;
      return;
    }

    if (info.label === "WhatsApp") {
      // Use the configured phone number (VITE_PHONE) to build the wa.me link.
      // The displayed info.value is a label (e.g. "Entre em contato") and may not contain the number.
      const configured = import.meta.env.VITE_PHONE ?? "15998341564";
      const digits = configured.replace(/\D/g, "");
      const withCountry = digits.startsWith("55") ? digits : `55${digits}`;
      window.open(`https://wa.me/${withCountry}`, "_blank");
      return;
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: import.meta.env.VITE_EMAIL ?? "lucasdeafgjob@gmail.com" },
    { icon: Phone, label: "WhatsApp", value: import.meta.env.VITE_PHONE_DISPLAY ?? "Entre em contato" }
  ];

  return (
    <section id="contato" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 pattern-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Contato
          </h2>
          <h3 className="font-display font-bold text-3xl md:text-4xl">
            Pronto para ter um site que <span className="text-gradient">funciona de verdade?</span>
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Me chama no WhatsApp agora. Respondo rápido, faço 3 perguntas sobre seu negócio e te envio uma proposta simples e direta.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between glass-card rounded-xl overflow-hidden"
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    className="mx-4 mt-4 sm:mt-0 whitespace-nowrap w-full sm:w-auto px-6 py-3 text-sm"
                    onClick={() => handleSend(info)}
                  >
                    Falar agora comigo
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
