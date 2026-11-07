import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Extracurricular } from './components/Extracurricular';
import { Research } from './components/Research';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { References } from './components/References';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    const sectionIds = [
      'home',
      'highlights',
      'about',
      'education',
      'experience',
      'extracurricular',
      'org-ielc',
      'org-amuna',
      'org-finact',
      'research',
      'achievements-awards',
      'skills',
      'references',
      'closing',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] selection:bg-[#da291c] selection:text-[#fff5f3]">
      <Navbar activeSection={activeSection} onViewCv={() => setIsCvOpen(true)} />
      
      <main className="w-full pt-20 bg-[#131313] min-h-[calc(100vh-200px)]">
        <Hero onViewCv={() => setIsCvOpen(true)} />
        <Highlights />
        <About />
        <Education />
        <Experience />
        <Extracurricular />
        <Research />
        <Achievements />
        <Skills />
        <References />
        <Footer />
      </main>

      {/* Interactive CV Document Viewer */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
