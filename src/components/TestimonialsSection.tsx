import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Artur Rodrigues",
    role: "Software Engineer",
    content: "Lucas é uma pessoa sensacional para trabalhar junto. Muito dedicado, capacitado e de ótima convivência. Sempre atento ao que vai gerar valor para a empresa e a equipe. Tem ótimas hard e soft skills e sempre agrega no time.",
    rating: 5,
  },
  {
    name: "Matheus Marques",
    role: "Squad Leader",
    content: "Lucas é um profissional muito orientado a resultados, tive a oportunidade de trabalhar lado a lado com ele em grandes projetos de tecnologia. Possuí uma comunicação técnica excelente e domina hard skills de desenvolvimento de software. Lucas pode e vai atender as necessidades de qualquer empresa.",
    rating: 5,
  },
  {
    name: "Cezar Mezzalira",
    role: "Senior Software Engineer",
    content: "Tive a oportunidade de trabalhar com o Lucas por 8 meses, dos quais 6 fui seu tech lead.O Lucas é um profissional dedicado, que sempre está em busca de novos desafios.Nos projetos que atuamos, ele esteve também a frente da comunicação com o cliente, sempre sendo cordial e respeitoso com todos.Tecnicamente o Lucas sempre trazia ótimas soluções, sempre respeitando os demais colegas e ouvindo as opiniões de todos.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            O que dizem meus clientes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A satisfação dos meus clientes é minha maior conquista. Veja o que eles têm a dizer sobre nosso trabalho juntos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
