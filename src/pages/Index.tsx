import { Header } from "@/components/Header";
import { SocialSidebar } from "@/components/SocialSidebar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Differentials } from "@/components/Differentials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Differentials />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
