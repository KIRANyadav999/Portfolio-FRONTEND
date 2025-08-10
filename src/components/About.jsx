import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 max-w-7xl mx-auto bg-transparent backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
      >
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white relative inline-block">
            About Me
            <span className="block w-16 h-1 bg-gradient-to-r from-pink-500 to-yellow-400 mt-2 rounded-full"></span>
          </h2>
        </div>

        {/* Right Side - Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed"
        >
          I am a passionate software developer specializing in building highly interactive,
          modern, and animated web applications. With a strong focus on clean code and smooth
          user experience, I enjoy turning ideas into functional and beautiful digital experiences.
          I constantly learn and strive to bring creativity and quality to every project.
        </motion.p>
      </motion.div>
    </section>
  );
}
