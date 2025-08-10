import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Enthusiastic Software Engineer", "Creative Coder", "Full Stack Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let timeout;
    if (typed.length < roles[index].length) {
      timeout = setTimeout(() => setTyped(roles[index].slice(0, typed.length + 1)), 90);
    } else {
      timeout = setTimeout(() => {
        setTyped("");
        setIndex((i) => (i + 1) % roles.length);
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [typed, index]);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative text-white bg-tranparent   px-6 md:px-20">
      <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-extrabold">
           <span style={{ fontFamily: "'Bright Demo', sans-serif" }}>Hi, I'm Kiran</span>
        </motion.h1>
        <p className="text-xl md:text-3xl tracking-wide font-semibold text-gray-300 min-h-[2.5rem]">
          {typed}
          <span className="animate-pulse">|</span>
        </p>
        <div className="flex gap-6 mt-6">
          <a
            href="/Kiran_Babu_Ambati.pdf"
            download
            className="px-7 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:bg-gray-300 transition"
          >
            Download Resume
          </a>
          <a
            href="#about"
            className="px-7 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition"
          >
            Know Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 text-white animate-bounce text-lg select-none w-full text-center">
        ↓ Scroll Down
      </div>
    </section>
  );
}
