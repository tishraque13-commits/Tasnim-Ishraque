import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* 12. CLOSING HERO */}
      <section id="closing" className="w-full bg-[#0e0e0e] py-24 relative overflow-hidden border-t border-[#353534]/40 scroll-mt-24">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[520px] h-[300px] rounded-full bg-[#920703]/20 blur-[130px] opacity-50"></div>
          <div className="w-[260px] h-[260px] rounded-full bg-[#da291c]/15 blur-[90px] opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 lg:px-12 flex flex-col items-center text-center">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#da291c] to-transparent mb-6 rounded-full"></div>
          
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl md:text-[54px] text-[#e5e2e1] font-extrabold tracking-widest uppercase">
            Tasnim Ishraque
          </h2>
          
          <p className="mt-4 text-base md:text-lg text-[#ac8883] max-w-xl leading-relaxed">
            Thank you for exploring my portfolio.
          </p>
          
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm uppercase tracking-widest text-[#e6bdb7] font-semibold">
            <span className="text-[#ffb4a8]">Finance</span>
            <span className="text-[#dfc700] font-bold">|</span>
            <span className="text-[#ffb4a8]">Business Analytics</span>
            <span className="text-[#dfc700] font-bold">|</span>
            <span className="text-[#ffb4a8]">Research</span>
          </div>
        </div>
      </section>

      {/* FOOTER BAR */}
      <footer className="w-full bg-[#131313] border-t border-[#353534] py-6 relative">
        <div className="max-w-[1280px] mx-auto px-5 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs md:text-sm text-[#ac8883]">
            © {new Date().getFullYear()} Tasnim Ishraque. All Rights Reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-[#ac8883] hover:text-[#ffb4a8] transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <span className="material-symbols-outlined text-[18px] group-hover:-translate-y-0.5 transition-transform">
              arrow_upward
            </span>
          </button>
        </div>
      </footer>
    </>
  );
};
