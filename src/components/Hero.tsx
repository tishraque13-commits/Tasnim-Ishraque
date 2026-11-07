import React from 'react';

interface HeroProps {
  onViewCv?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewCv }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: 'smooth',
      });
    }
  };

  const highlightCards = [
    {
      icon: 'school',
      title: '3.97 / 4.00 CGPA',
      target: 'education',
    },
    {
      icon: 'hub',
      title: 'FINANCE + BAIS',
      subtitle: 'Dual Major | Minor in Accounting',
      target: 'education',
    },
    {
      icon: 'shield_person',
      title: 'ASSISTANT DIRECTOR',
      subtitle: 'Finance and Accounting Club of BRAC University (FINACT)',
      target: 'extracurricular',
    },
    {
      icon: 'how_to_reg',
      title: 'STUDENT TUTOR (ST)',
      subtitle: 'BRAC Business School, BRAC University',
      target: 'experience',
    },
  ];

  return (
    <section 
      id="home"
      className="relative w-full overflow-hidden bg-[#131313] py-16 md:py-24 flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] scroll-mt-24"
    >
      {/* Atmospheric Crimson Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[780px] h-[520px] rounded-full bg-[#920703]/25 blur-[130px] opacity-70"></div>
        <div className="w-[340px] h-[340px] rounded-full bg-[#da291c]/20 blur-[90px] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 lg:px-12 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#920703]/40 border border-[#da291c]/40 text-[#e6bdb7] text-[11px] font-semibold uppercase tracking-widest shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
          <span>BRAC UNIVERSITY</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="mt-4 font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[72px] font-extrabold text-[#e5e2e1] tracking-tight uppercase max-w-4xl">
          Tasnim Ishraque
        </h1>

        {/* Introduction Paragraph */}
        <p className="mt-6 text-base md:text-lg text-[#ac8883] max-w-2xl leading-relaxed">
          An aspiring finance professional and academic researcher with a passion for financial analysis, business intelligence, organizational leadership, and the intersection of finance and technology.
        </p>

        {/* 4 Horizontal Highlight Cards */}
        <div className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {highlightCards.map((card, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(card.target)}
              className="group flex flex-col justify-between p-6 rounded-xl bg-[#1c1b1b] hover:bg-[#201f1f] border border-[#353534]/50 hover:border-[#da291c]/50 transition-all duration-300 shadow-md hover:-translate-y-1 text-left cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-[#353534] flex items-center justify-center text-[#da291c] group-hover:bg-[#da291c] group-hover:text-[#fff5f3] transition-colors">
                <span className="material-symbols-outlined text-[20px]">{card.icon}</span>
              </div>
              <div className="mt-4">
                <div className="font-['Plus_Jakarta_Sans'] text-lg text-[#e5e2e1] font-bold tracking-tight">
                  {card.title}
                </div>
                {card.subtitle && (
                  <div className="text-xs text-[#ac8883] mt-1 group-hover:text-[#e6bdb7] transition-colors leading-snug">
                    {card.subtitle}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/tasnim-ishraque-2a6347298/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#2a2a2a] hover:bg-[#920703] text-[#e5e2e1] transition-all text-sm font-semibold shadow-md cursor-pointer group"
          >
            <svg
              className="w-[18px] h-[18px] fill-current text-[#ffb4a8] transition-colors"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>VIEW LINKEDIN</span>
          </a>
          <button
            onClick={() => scrollTo('about')}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#da291c] hover:bg-[#be0f09] text-[#fff5f3] transition-all text-sm font-semibold shadow-xl shadow-[#da291c]/25 cursor-pointer"
          >
            <span>EXPLORE MY PORTFOLIO</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
