
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample project data - you can replace these with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Responsivo",

    description: "Site de e-commerce completo com carrinho de compras, páginas de produto e processo de checkout.",
    image: "https://i.ibb.co/5W3GfN1T/Captura-de-tela-2025-04-02-205138.png",
    tags: ["React", "Tailwind CSS", "Node.js"],
    demoLink: "https://compra-certa-online.lovable.app/",
    codeLink: "https://github.com/PedroHVL14/Projeto-E-Commerce-Compra-Certa"
  },
  {
    id: 2,
    title: "Dashboard Administrativo",
    description: "Painel administrativo para gerenciamento de conteúdo com gráficos, tabelas e formulários.",
    image: "https://i.ibb.co/Bhdnpbs/Captura-de-tela-2025-04-03-144831.png",
    tags: ["React", "Chart.js", "Material UI"],
    demoLink: "https://content-compass-admin.lovable.app/",
    codeLink: "https://github.com/PedroHVL14/React-Projeto_Dashboard-Admin"
  },
  {
    id: 3,
    title: "Aplicativo de Tarefas",
    description: "Aplicativo para gerenciamento de tarefas com categorias, prioridades e lembretes.",
    image: "https://i.ibb.co/KpP8QG8Y/Captura-de-tela-2025-04-03-153658.png",
    tags: ["React", "Firebase", "Styled Components"],
    demoLink: "https://github.com/PedroHVL14/React_Projeto-Organizer",
    codeLink: "https://github.com/PedroHVL14/React_Projeto-Organizer"
  },
  {
    id: 4,
    title: "Site Institucional",
    description: "Site institucional para empresa de tecnologia com seções de serviços, portfolio e contato.",
    image: "https://i.ibb.co/xKTKHzzr/image.png",
    tags: ["React", "GSAP", "Tailwind CSS"],
    demoLink: "https://tech-spark-hub.lovable.app/",
    codeLink: "https://github.com/PedroHVL14/React-Projeto_Site-Institucional"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-4">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Confira alguns dos projetos que desenvolvi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-primary-600 text-primary-600 hover:bg-primary-50"
                    asChild
                  >
                    <a
                      href={project.demoLink.startsWith("http") ? project.demoLink : `https://${project.demoLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                    asChild
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Código</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-primary-600 hover:bg-primary-700 text-white"
            size="lg"
            asChild
          >
            <a href="#contact">Vamos trabalhar juntos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
