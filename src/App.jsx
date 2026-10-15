import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectGallery from './components/ProjectGallery';
import ExperienceTimeline from './components/ExperienceTimeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#fafbfc] text-slate-800 selection:bg-indigo-500/20 selection:text-indigo-900 font-sans antialiased overflow-x-hidden">
      {/* Real interactive mouse cursor with canvas trail & contextual pill */}
      <CustomCursor />

      {/* Top progress indicator */}
      <ScrollProgress />

      {/* Floating navigation dock */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main sections */}
      <main id="main-content">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <ProjectGallery />
        <ExperienceTimeline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Dual-Track Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
