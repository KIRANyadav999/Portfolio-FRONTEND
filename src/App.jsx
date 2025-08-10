import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import QualificationExperience from "./components/QualificationExperience";
import Footer from "./components/Footer";
import Galaxy from './components/Galaxy';

export default function App() {
  return (
    <>
      <div style={{ 
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -100,
  pointerEvents: 'none'
}}>
  <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1.5}
    glowIntensity={0.5}
    saturation={0.8}
    hueShift={240}
  />
</div>
      {/*<div style={{ position: 'relative', zIndex: 10 }}>*/}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <QualificationExperience />
      <Projects />
      <Contact />
      <Footer />
      {/*</div>*/}
    </>
  );
}