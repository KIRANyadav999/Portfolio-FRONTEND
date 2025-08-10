import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import useRevealAnimation from "../hooks/useRevealAnimation";

export default function Contact() {
  const { ref, inView } = useRevealAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("https://portfolio-backend-1z8g.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
      else setError("Failed to send message");
    } catch {
      setError("Server error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 bg-transparent bg-opacity-75 backdrop-blur-lg text-white rounded-xl shadow-lg"
    >
      {/* Left: Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-8 flex-1"
      >
        <h2 className="text-5xl font-extrabold mb-8">Get In Touch</h2>
        <p className="text-lg font-medium tracking-wide text-gray-400">
          Feel free to connect with me for collaborations, projects, or just to
          say hello!
        </p>

        <div className="space-y-6 text-gray-400 font-semibold text-lg">
          <div className="flex items-center gap-4">
            <FaEnvelope size={24} />
            <span>ambatikiranbabuyadav99@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt size={24} />
            <span>+91 93911 00961</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ambatikiranbabu/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/KIRANyadav999"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Right: Form */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        {sent ? (
          <p className="text-green-400 text-center text-2xl font-semibold">
            Thanks! Your message has been sent 🎉
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-4 rounded-lg bg-gray-800 text-white font-semibold focus:outline-none focus:ring-4 focus:ring-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-4 rounded-lg bg-gray-800 text-white font-semibold focus:outline-none focus:ring-4 focus:ring-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              required
              className="p-4 rounded-lg bg-gray-800 text-white font-semibold focus:outline-none focus:ring-4 focus:ring-gray-600"
            />
            {error && <p className="text-red-600 font-semibold">{error}</p>}
            <button
              type="submit"
              className="bg-white text-black font-bold py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
