import { motion } from "framer-motion";
import useRevealAnimation from "../hooks/useRevealAnimation";

const qualifications = [
  {
    title: "B.E. in Computer Science and Engineering",
    institute: "Prathyusha Engineering College, Anna University",
    duration: "2021 - 2025",
    grade: "8.5 CGPA",
  },
];

const experiences = [
  { role: "Python Developer Intern", company: "Pantech eLearning", duration: "Mar 2023 - Apr 2023" },
  { role: "React Developer", company: "Unmute", duration: "Jul 2024 - Aug 2024" },
  { role: "Software Developer", company: "EfaTech Solutions", duration: "Apr 2025 - Aug 2025" },
];

export default function QualificationExperience() {
  const { ref, inView } = useRevealAnimation();

  return (
    <section
      id="qualification"
      className="py-20 px-6 md:px-20 bg-transparent bg-opacity-80 backdrop-blur-sm text-white max-w-7xl mx-auto"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-16"
      >
        {/* Qualification */}
        <div>
          <h2 className="text-5xl font-extrabold mb-10 text-center md:text-left">Qualification</h2>
          <ul className="space-y-10 relative border-l-2 border-gray-500 pl-14">
            {qualifications.map(({ title, institute, duration, grade }, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[25px] top-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full border-2 border-gray-900 shadow-md" />

                <h3 className="font-semibold text-xl leading-snug">{title}</h3>
                <p className="italic text-gray-300">{institute}</p>
                <p className="text-gray-400">{duration}</p>
                <p className="text-gray-400">Grade: {grade}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-5xl font-extrabold mb-10 text-center md:text-left">Experience</h2>
          <ul className="space-y-10 relative border-l-2 border-gray-500 pl-14">
            {experiences.map(({ role, company, duration }, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-[25px] top-1 w-5 h-5 bg-gradient-to-r from-blue-500 to-green-400 rounded-full border-2 border-gray-900 shadow-md" />

                <h3 className="font-semibold text-xl leading-snug">{role}</h3>
                <p className="italic text-gray-300">{company}</p>
                <p className="text-gray-400">{duration}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
