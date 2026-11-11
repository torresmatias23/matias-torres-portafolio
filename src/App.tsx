import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Contribution from './components/sections/Contribution';
import CVSection from './components/sections/CVSection';
import Hero from './components/sections/Hero';
import ProfessionalSummary from './components/sections/ProfessionalSummary';
import Projects from './components/sections/Projects';
import TechnicalTraining from './components/sections/TechnicalTraining';
import Technologies from './components/sections/Technologies';
import WorkStyle from './components/sections/WorkStyle';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Experience from './components/sections/Experience';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[linear-gradient(155deg,#071526_0%,#020617_40%,#0b1423_75%,#020617_100%)] text-slate-100">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <ProfessionalSummary />
        <About />
        <Experience />
        <TechnicalTraining />
        <Contribution />
        <WorkStyle />
        <Projects />
        <Technologies />
        <CVSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
