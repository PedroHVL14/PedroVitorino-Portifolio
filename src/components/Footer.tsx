
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Pedro<span className="text-primary-400">.dev</span></h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Desenvolvimento de websites profissionais e responsivos com React, 
              ajudando empresas a expandir sua presença online.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/PedroHVL14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pedro-vitorino-8b9a0424b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">Habilidades</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Rua Porto Rico, 3399<br />
                Jales, São Paulo, Brasil
              </li>
              <li className="text-gray-400">
                pedro.vitorino.lima@gmail.com
              </li>
              <li className="text-gray-400">
                +55 17 99705-2846
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-gray-500">
            &copy; {currentYear} Pedro Vitorino. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 mt-2 md:mt-0">
            Desenvolvido com React e Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
