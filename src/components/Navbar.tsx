
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold font-heading text-primary-700">
              Pedro<span className="text-gray-800">.dev</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Habilidades
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Projetos
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-primary-600 hover:bg-primary-700 text-white"
              >
                Contato
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 w-full text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 w-full text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 w-full text-left"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 w-full text-left"
            >
              Projetos
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white"
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
