
import { Check } from "lucide-react";

const skills = [
  {
    category: "Front-End",
    items: ["React.js", "HTML5", "CSS3/SASS", "JavaScript (ES6+)", "Tailwind CSS", "Responsive Design"]
  },
  {
    category: "Back-End",
    items: ["Python", "Node.js (Básico)", "REST APIs", "Firebase"]
  },
  {
    category: "Ferramentas",
    items: ["Git/GitHub", "VS Code", "Figma (Básico)", "NPM/Yarn", "Chrome DevTools"]
  },
  {
    category: "Soft Skills",
    items: ["Comunicação Clara", "Trabalho em Equipe", "Resolução de Problemas", "Gerenciamento de Tempo", "Adaptabilidade"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Minhas Habilidades
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Competências técnicas e pessoais que trago para seus projetos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="flex-shrink-0 p-1 bg-primary-100 text-primary-600 rounded-full mr-3">
                      <Check size={14} />
                    </span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary-50 rounded-xl p-8 border border-primary-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            Por que trabalhar comigo?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Comunicação Eficiente</h4>
              <p className="text-gray-600 text-sm">
                Habilidade de expressar ideias complexas de forma clara e compreensível, facilitando o processo de desenvolvimento.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Código de Qualidade</h4>
              <p className="text-gray-600 text-sm">
                Desenvolvimento de código limpo, bem estruturado e seguindo as melhores práticas da indústria.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-medium text-gray-800 mb-2">Foco em Resultados</h4>
              <p className="text-gray-600 text-sm">
                Comprometimento com a entrega de soluções que realmente atendam às necessidades do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
