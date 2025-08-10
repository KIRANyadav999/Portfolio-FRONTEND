import { useEffect, useRef } from "react";
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

export default function Projects() {
  const scrollRef = useRef();
  const animationRef = useRef();
  const offsetRef = useRef(0);

  // Smooth infinite scroll using translateX
  useEffect(() => {
    const speed = 0.5; // pixels per frame
    const step = () => {
      offsetRef.current -= speed;
      const container = scrollRef.current;
      if (!container) return;

      // Reset when we've scrolled past half of the total width
      if (Math.abs(offsetRef.current) >= container.scrollWidth / 2) {
        offsetRef.current = 0;
      }

      container.style.transform = `translateX(${offsetRef.current}px)`;
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-transparent backdrop-blur-sm text-white px-6 md:px-20"
    >
      <h2 className="text-5xl font-extrabold mb-12 text-center">Projects</h2>

      <div className="overflow-hidden w-full">
        <div
          ref={scrollRef}
          className="flex space-x-8 select-none"
          style={{ willChange: "transform" }}
        >
          {[...projects, ...projects].map((project, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-[320px] p-[2px] rounded-xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 shadow-lg overflow-visible"
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-80 hover:rotate-1">
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
      </div>
    </section>
  );
}
