import { useState } from "react";
import chatImage from "../assets/images/projects/chat.png";
import efaImage from "../assets/images/projects/efa.png";
import tourImage from "../assets/images/projects/tour.png";
import mineImage from "../assets/images/projects/mine.png";
import libraryImage from "../assets/images/projects/library.png";

const projects = [
  {
    title: "Portfolio Website",
    image: mineImage,
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
  },
  {
    title: "EFA Tech Solutions",
    image: efaImage,
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://efatechsolutions.com",
  },
  {
    title: "Library Management System",
    image: libraryImage,
    techStack: ["Java", "SQL", "OOPS"],
    link: "https://github.com/KIRANyadav999",
  },
  {
    title: "Chat Application",
    image: chatImage,
    techStack: ["React.js", "Tailwind CSS", "Socket.io","Express Js"],
    link: "https://chat-app-socketio00.netlify.app/",
  },
  {
    title: "Tourism Website",
    image: tourImage,
    techStack: ["React.js", "Tailwind CSS", "Socket.io","Express Js"],
    link: "https://github.com/KIRANyadav999",
  },
];

const PROJECTS_PER_PAGE = 3;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const goToPage = (page) => {
    if (page < 0) page = totalPages - 1;
    else if (page >= totalPages) page = 0;
    setCurrentPage(page);
  };

  // Slice projects to show only current page's projects
  const visibleProjects = projects.slice(
    currentPage * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE
  );

  return (
    <section
      id="projects"
      className="py-20 bg-transparent backdrop-blur-sm text-white px-6 md:px-20"
    >
      <h2 className="text-5xl font-extrabold mb-12 text-center">Projects</h2>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Projects Grid */}
        <div className="flex justify-center gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-[320px] p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 shadow-lg overflow-visible"
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:rotate-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover grayscale-0 hover:grayscale-0 transition duration-500"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 rounded-full px-3 py-1 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          aria-label="Previous Projects"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 shadow-lg focus:outline-none"
        >
          &#8592;
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          aria-label="Next Projects"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 shadow-lg focus:outline-none"
        >
          &#8594;
        </button>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-4 h-4 rounded-full transition-colors ${
                i === currentPage ? "bg-pink-500" : "bg-gray-500"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
