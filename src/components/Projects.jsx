import { ExternalLink } from "lucide-react";
import React from "react";

const projectData = [
  {
    id: 1,
    title: "Crypto Trading",
    description:
      "A web application for trading cryptocurrencies with real-time data and analytics.",
    image: "../../public/crypto.png",
    technologies: ["Vuejs", "PHP", "MYSQL"],
    liveUrl: "https://alphabitco.com/",
  },
  {
    id: 1,
    title: "HR Solutions",
    description:
      "A web application for HR solution, provides best talents for your org. ",
    image: "../../public/jobsplanat.png",
    technologies: ["React Js", "Tailwind CSS"],
    liveUrl: "https://india-staffing-connect.vercel.app/",
  },
  {
    id: 1,
    title: "Crypto trading",
    description:
      "A web application for trading cryptocurrencies with real-time data and analytics.",
    image: "../../public/crypto.png",
    technologies: ["Vuejs", "PHP", "MYSQL"],
    liveUrl: "#",
  },
];
function Projects() {
  return (
    <section id="projects" className="py-24 px-10 flex items-center ">
      <div>
        <h1 className="font-semibold text-3xl ">My Projects</h1>
        <p className="py-8 text-lg text-gray-700 font-semibold">
          Here are some of my recent projects. Each one presented unique
          challenges and opportunities to grow my skills.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col h-full border border-yellow-300 shadow-lg rounded-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill transition-transform duration-500 hover:scale-110 rounded-xl"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-700 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 flex-grow mb-2 font-semibold">
                  {project.description}
                </p>
                <div className="flex flex-wrap mp-4 gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex p-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-gray-700 hover:text-yellow-300 transition-color ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
