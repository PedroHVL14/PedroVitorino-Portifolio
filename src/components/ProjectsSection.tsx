
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample project data - you can replace these with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Responsivo",

    description: "Site de e-commerce completo com carrinho de compras, páginas de produto e processo de checkout.",
    image: "https://private-user-images.githubusercontent.com/115195952/429708424-2060a6d4-6098-4824-8534-ca18a64b9b55.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDM2Mzg5NzcsIm5iZiI6MTc0MzYzODY3NywicGF0aCI6Ii8xMTUxOTU5NTIvNDI5NzA4NDI0LTIwNjBhNmQ0LTYwOTgtNDgyNC04NTM0LWNhMThhNjRiOWI1NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQwM1QwMDA0MzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZTM2ODcyMjZkNThiNGQ0YzZiYTc4NWRmNDdlMGI0MWYxODVjMzE2ZjJiZjVmMjEzNjU0MWFjMjg3NDE2ZWJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rb0hTxckjzQ-fr01otI9UrjXfPcxan4ajRI1kf4hpB4",
    tags: ["React", "Tailwind CSS", "Node.js"],
    demoLink: "https://compra-certa-online.lovable.app/",
    codeLink: "https://github.com/PedroHVL14/Projeto-E-Commerce-Compra-Certa"
  },
  {
    id: 2,
    title: "Dashboard Administrativo",
    description: "Painel administrativo para gerenciamento de conteúdo com gráficos, tabelas e formulários.",
    image: "images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React", "Chart.js", "Material UI"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Aplicativo de Tarefas",
    description: "Aplicativo para gerenciamento de tarefas com categorias, prioridades e lembretes.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Firebase", "Styled Components"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Site Institucional",
    description: "Site institucional para empresa de tecnologia com seções de serviços, portfolio e contato.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "GSAP", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#"
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
            Confira alguns dos projetos que desenvolvi com React
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
