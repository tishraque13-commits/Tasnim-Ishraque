import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
  onViewCv?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onViewCv }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#explore-menu-btn') && !target.closest('#explore-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Professional Experience' },
    {
      id: 'extracurricular',
      label: 'Extracurricular Activities',
      subLinks: [
        { id: 'org-ielc', label: '↳ IELC (2019–2022)' },
        { id: 'org-amuna', label: '↳ A-MUNA (2022–2024)' },
        { id: 'org-finact', label: '↳ FINACT (2026–Present)' },
      ],
    },
    { id: 'research', label: 'Research & Publications' },
    { id: 'achievements-awards', label: 'Achievements & Awards' },
    { id: 'skills', label: 'Skills & Competencies' },
    { id: 'references', label: 'References' },
  ];

  const handleScroll = (id: string) => {
    setDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-[#353534]">
      <div className="h-20 max-w-[1280px] mx-auto px-5 lg:px-12 flex items-center justify-between">
        {/* Monogram Brand */}
        <a 
          href="#home"
          onClick={(e) => { e.preventDefault(); handleScroll('home'); }}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#353534] border border-[#353534] flex items-center justify-center font-['Plus_Jakarta_Sans'] text-lg text-[#e5e2e1] group-hover:border-[#da291c] transition-colors">
            <span className="tracking-tight font-bold">T</span>
            <span className="text-[#da291c] tracking-tight font-bold">I</span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Plus_Jakarta_Sans'] text-base uppercase tracking-wider text-[#e5e2e1] font-bold group-hover:text-[#ffb4a8] transition-colors">
              Tasnim Ishraque
            </span>
            <span className="text-[11px] text-[#ac8883] tracking-widest uppercase font-medium">
              BRAC UNIVERSITY
            </span>
          </div>
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Explore Briefing Dropdown */}
          <div className="relative">
            <button
              id="explore-menu-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1c1b1b] border border-[#353534] hover:border-[#da291c] text-[#e5e2e1] hover:text-[#ffb4a8] transition-all text-sm font-semibold cursor-pointer"
              aria-expanded={dropdownOpen}
            >
              <span>Explore Briefing</span>
              <span className={`material-symbols-outlined text-[18px] text-[#ac8883] transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#ffb4a8]' : ''}`}>
                expand_more
              </span>
            </button>

            {dropdownOpen && (
              <div 
                id="explore-dropdown"
                className="absolute right-0 top-full pt-1.5 z-50 w-72"
              >
                <div className="p-2 rounded-xl bg-[#1c1b1b] border border-[#353534] shadow-2xl backdrop-blur-2xl ring-1 ring-[#353534] max-h-[80vh] overflow-y-auto">
                  <div className="px-3 py-1 text-[11px] uppercase tracking-widest text-[#ac8883] border-b border-[#353534] mb-1 font-semibold">
                    Executive Index
                  </div>
                  <nav className="flex flex-col gap-0.5">
                    {navLinks.map((link) => (
                      <div key={link.id} className="flex flex-col">
                        <button
                          onClick={() => handleScroll(link.id)}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
                            activeSection === link.id
                              ? 'bg-[#da291c] text-[#fff5f3] font-bold'
                              : 'text-[#e6bdb7] hover:bg-[#2a2a2a] hover:text-[#e5e2e1]'
                          }`}
                        >
                          {link.label}
                        </button>
                        {link.subLinks && (
                          <div className="pl-4 flex flex-col gap-0.5 my-0.5">
                            {link.subLinks.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => handleScroll(sub.id)}
                                className="w-full text-left px-2 py-1 rounded text-xs text-[#ac8883] hover:text-[#ffb4a8] hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                              >
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </div>

          {/* View CV CTA */}
          <a
            href="/Tasnim_Ishraque_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onViewCv) {
                e.preventDefault();
                onViewCv();
              }
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#353534] border border-[#da291c]/80 text-[#e5e2e1] hover:bg-[#da291c] hover:text-[#fff5f3] transition-all text-sm font-semibold group shadow-[0_0_20px_rgba(218,41,28,0.2)] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] text-[#ffb4a8] group-hover:text-[#fff5f3] transition-colors">
              visibility
            </span>
            <span className="hidden sm:inline">View CV</span>
          </a>

          {/* Profile Circle Icon */}
          <div className="w-8 h-8 rounded-full bg-[#ffb4a8] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#690000] text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
