
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-200 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h2 className="text-primary-600 font-medium text-lg mb-3">Olá, eu sou</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight">
                Pedro Vitorino
              </h1>
              <p className="text-2xl md:text-3xl font-medium text-gray-700 mt-2">
                Desenvolvedor Front-End React
              </p>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Especializado em criar websites modernos, responsivos e de alto desempenho 
              que ajudam empresas a expandir sua presença online e alcançar mais clientes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 text-lg"
                size="lg"
              >
                Ver Projetos
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 text-lg"
                size="lg"
              >
                Fale Comigo
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full blur-md opacity-50"></div>
              <div className="relative bg-white p-2 rounded-full shadow-xl">
                <img 
                  src="https://i.ibb.co/ycSt07sb/photo.png" 
                  alt="Pedro Vitorino" 
                  className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex flex-col items-center text-gray-500 hover:text-primary-600 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Descubra mais</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
