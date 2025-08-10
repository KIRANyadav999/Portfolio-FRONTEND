import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Qualification", "Projects", "Contact"];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const top =
        target.offsetTop - (window.innerHeight / 2) + target.offsetHeight / 2;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%]">
      {/* Gradient Border Wrapper */}
      <div className="rounded-full p-[2px] bg-none border-2">
        <nav className="rounded-full w-full px-8 py-4 flex justify-between items-center text-white bg-black/30 backdrop-blur-md">
          <span className="text-3xl font-bold tracking-wide" style={{ fontFamily: "'Bright Demo', sans-serif" }}>Ambati Kiran Babu</span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="relative px-2 py-1 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-orange-400 
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r from-pink-500 to-orange-400 
                hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-2 mx-auto bg-transparent text-white backdrop-blur-md rounded-xl w-56 shadow-lg flex flex-col divide-y divide-gray-700">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="px-6 py-3 hover:bg-gradient-to-r from-pink-500 to-orange-400 hover:text-white transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
