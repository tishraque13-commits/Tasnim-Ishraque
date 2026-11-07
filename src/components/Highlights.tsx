import React from 'react';

export const Highlights: React.FC = () => {
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

  const highlights = [
    {
      num: '01 // ACADEMIC',
      title: '3.97 / 4.00 CGPA',
      desc: null,
      btnLabel: 'View Educational Credentials',
      target: 'education',
    },
    {
      num: '02 // SPECIALIZATION',
      title: 'FINANCE + BAIS',
      desc: 'Dual Major | Minor in Accounting',
      btnLabel: 'Review Coursework Track',
      target: 'education',
    },
    {
      num: '03 // GOVERNANCE',
      title: 'ASSISTANT DIRECTOR',
      desc: 'Finance and Accounting Club of BRAC University (FINACT)',
      btnLabel: 'Read Leadership History',
      target: 'extracurricular',
    },
    {
      num: '04 // INSTRUCTION',
      title: 'STUDENT TUTOR (ST)',
      desc: 'BRAC Business School, BRAC University',
      btnLabel: 'Examine Role Responsibilities',
      target: 'experience',
    },
  ];

  return (
    <section id="highlights" className="w-full bg-[#0e0e0e] py-20 scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">grid_view</span>
              <span>EXECUTIVE DIGEST</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl text-[#e5e2e1] font-bold tracking-tight">
              MY HIGHLIGHTS
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#ac8883] max-w-lg">
            A snapshot of my academic journey, professional experience, research, and leadership contributions.
          </p>
        </div>

        {/* 4 Shortcut Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(item.target)}
              className="group p-8 rounded-xl bg-[#1c1b1b] hover:bg-[#201f1f] border border-[#353534] hover:border-[#da291c]/80 transition-all duration-300 shadow-md flex flex-col justify-between text-left cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[#ac8883] mb-6">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-[#ffb4a8]">
                    {item.num}
                  </span>
                  <span className="material-symbols-outlined text-[#ac8883] group-hover:text-[#ffb4a8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    north_east
                  </span>
                </div>
                <div className="font-['Plus_Jakarta_Sans'] text-2xl text-[#e5e2e1] font-bold tracking-tight group-hover:text-[#ffb4a8] transition-colors">
                  {item.title}
                </div>
                {item.desc && (
                  <p className="text-sm text-[#ac8883] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
              <div className="mt-8 pt-2 text-xs font-semibold text-[#da291c] group-hover:text-[#ffb4a8] flex items-center gap-1">
                <span>{item.btnLabel}</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                  chevron_right
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
