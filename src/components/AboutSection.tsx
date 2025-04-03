
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  const downloadCV = () => {
    // Criar um link para download
    const link = document.createElement('a');
    link.href = '/cv-pedro-vitorino.pdf'; // Caminho para o arquivo CV
    link.download = 'CV-Pedro-Vitorino.pdf'; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Conheça um pouco mais sobre minha trajetória e objetivos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-primary-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Desenvolvedor de sites especializados para seu negócio
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Sou um desenvolvedor front-end especializado em React, focado em criar 
              experiências web modernas e intuitivas que ajudam empresas a se destacarem 
              no ambiente digital.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Meu objetivo é contribuir como programador em uma equipe inovadora, aplicando 
              minhas habilidades em linguagens como Python e JavaScript para desenvolver 
              soluções eficientes e escaláveis que atendam às necessidades específicas de 
              cada cliente.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Com excelentes habilidades de comunicação, consigo expressar ideias complexas 
              de forma clara e concisa, facilitando a colaboração em equipe e a compreensão 
              de requisitos e objetivos em projetos.
            </p>
            
            <div className="pt-4">
              <Button 
                onClick={downloadCV} 
                className="bg-primary-600 hover:bg-primary-700 text-white transition-all transform hover:scale-105 duration-300"
              >
                <Download size={18} />
                Download Currículo
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md border border-primary-100 transform transition-all hover:-translate-y-1 duration-300">
              <div className="text-primary-600 text-4xl font-bold mb-2">2+</div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">Anos de Experiência</h4>
              <p className="text-gray-600 text-sm">Desenvolvimento front-end</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md border border-primary-100 transform transition-all hover:-translate-y-1 duration-300">
              <div className="text-primary-600 text-4xl font-bold mb-2">15+</div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">Projetos</h4>
              <p className="text-gray-600 text-sm">Concluídos com sucesso</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md border border-primary-100 transform transition-all hover:-translate-y-1 duration-300">
              <div className="text-primary-600 text-4xl font-bold mb-2">10+</div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">Clientes Satisfeitos</h4>
              <p className="text-gray-600 text-sm">Relacionamentos duradouros</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-lg shadow-md border border-primary-100 transform transition-all hover:-translate-y-1 duration-300">
              <div className="text-primary-600 text-4xl font-bold mb-2">5+</div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">Tecnologias</h4>
              <p className="text-gray-600 text-sm">Dominadas para seus projetos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
