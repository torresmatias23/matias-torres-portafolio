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

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-30 bg-[linear-gradient(135deg,#020617_0%,#07111f_38%,#101827_72%,#020617_100%)]" />
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_12%_10%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.18),transparent_32%),radial-gradient(circle_at_55%_48%,rgba(14,165,233,0.08),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(168,85,247,0.1),transparent_28%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      <Header />
      <main>
        <Hero />
        <ProfessionalSummary />
        <About />
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
