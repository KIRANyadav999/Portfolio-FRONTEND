import { motion } from "framer-motion";
import useRevealAnimation from "../hooks/useRevealAnimation";

import pythonIcon from "../assets/images/skills/python.png";
import javaIcon from "../assets/images/skills/java.png";
import reactIcon from "../assets/images/skills/react-js.png";
import nodeIcon from "../assets/images/skills/nodejs.png";
import expressIcon from "../assets/images/skills/express.png";
import htmlIcon from "../assets/images/skills/html.png";
import cssIcon from "../assets/images/skills/css.png";
import tailwindIcon from "../assets/images/skills/tailwindcss.png";
import sqlIcon from "../assets/images/skills/sql.png";
import mongodbIcon from "../assets/images/skills/mongodb.png";
import jsIcon from "../assets/images/skills/javascript.png";
import gitIcon from "../assets/images/skills/git.png";

const skills = [
  { name: "Python", icon: pythonIcon },
  { name: "Java", icon: javaIcon },
  { name: "React.js", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Git", icon: gitIcon },
];

export default function Skills() {
  const { ref, inView } = useRevealAnimation();

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 max-w-7xl mx-auto bg-transparent backdrop-blur-sm"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-bold mb-12 text-center text-white">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">
          {skills.map(({ name, icon }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.15 }}
              className="flex flex-col items-center cursor-pointer"
              title={name}
            >
              {/* Bigger, colorful, with gradient border */}
              <div className="p-[3px] rounded-2xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">
                <div className="bg-black/40 rounded-2xl p-4 backdrop-blur-md">
                  <img
                    src={icon}
                    alt={name}
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
              <p className="mt-2 text-gray-200 font-medium">{name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
