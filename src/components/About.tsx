import React from 'react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';

export const About: React.FC = () => {
  const interestedAreas = [
    { label: 'Corporate Finance', color: 'default' },
    { label: 'Investments', color: 'default' },
    { label: 'Business Analytics', color: 'primary' },
    { label: 'FinTech', color: 'highlight' },
    { label: 'Financial Reporting', color: 'default' },
    { label: 'IFRS', color: 'tertiary' },
    { label: 'Strategic Leadership', color: 'default' },
  ];

  return (
    <section id="about" className="w-full bg-[#131313] py-20 relative scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="mb-12">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl text-[#e5e2e1] font-bold tracking-tight uppercase">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Areas */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 rounded-xl bg-[#1c1b1b] border border-[#353534] relative overflow-hidden shadow-md">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#da291c]"></div>
              <p className="text-base md:text-lg text-[#e5e2e1] leading-relaxed">
                Aspiring professional with a strong interest in{' '}
                <span className="text-[#ffb4a8] font-semibold">Finance and Business Analytics</span>, committed to accomplishing challenges in both academic and professional spheres. Possessing skills and experience in{' '}
                <span className="text-[#ffb4a8] font-semibold">leadership</span>,{' '}
                <span className="text-[#ffb4a8] font-semibold">team management</span>, analysis, and organizing, I aspire to demonstrate reliability, integrity, and{' '}
                <span className="text-[#dfc700] font-semibold">resilience</span> to ensure collaboration and team success through my strong work ethic and positive attitude.
              </p>
            </div>

            <div className="space-y-4 text-sm md:text-base text-[#ac8883] leading-relaxed">
              <p>
                I am an undergraduate Bachelor of Business Administration student at{' '}
                <span className="text-[#e5e2e1] font-semibold">BRAC University</span>, pursuing a dual major in{' '}
                <span className="text-[#ffb4a8] font-semibold">Finance</span> and{' '}
                <span className="text-[#ffb4a8] font-semibold">Business Analytics and Information Systems (BAIS)</span>, with a minor in{' '}
                <span className="text-[#e5e2e1] font-semibold">Accounting</span>.
              </p>
              <p>
                Beyond academics, I have developed experience in organizational leadership, team management, event management, sponsorship acquisition, public speaking, and business development.
              </p>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#da291c]"></span>
                <span>INTERESTED AREAS</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {interestedAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                      area.color === 'highlight'
                        ? 'bg-[#920703]/25 border-[#da291c]/80 text-[#ffdad4]'
                        : area.color === 'primary'
                        ? 'bg-[#1c1b1b] border-[#353534] text-[#ffb4a8] hover:border-[#da291c]'
                        : area.color === 'tertiary'
                        ? 'bg-[#1c1b1b] border-[#353534] text-[#dfc700] hover:border-[#dfc700]'
                        : 'bg-[#1c1b1b] border-[#353534] text-[#e5e2e1] hover:border-[#da291c]'
                    }`}
                  >
                    {area.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4-image Gallery Showcase */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3">
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <div className="relative rounded-xl overflow-hidden border border-[#353534] group shadow-lg aspect-[3/4] bg-[#201f1f]">
                  <img
                    src={PORTFOLIO_IMAGES.about.keynote}
                    alt="Tasnim Ishraque public speaking at podium"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] md:text-[11px] uppercase tracking-wider text-[#e5e2e1] bg-[#1c1b1b]/95 px-2.5 py-1 rounded backdrop-blur-sm border border-[#353534]/50 font-semibold">
                    Keynote &amp; Academics
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-[#353534] group shadow-lg aspect-[4/3] bg-[#201f1f]">
                  <img
                    src={PORTFOLIO_IMAGES.about.personal}
                    alt="Tasnim Ishraque casual portrait"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] md:text-[11px] uppercase tracking-wider text-[#e5e2e1] bg-[#1c1b1b]/95 px-2.5 py-1 rounded backdrop-blur-sm border border-[#353534]/50 font-semibold">
                    Personal Perspective
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3 pt-6">
                <div className="relative rounded-xl overflow-hidden border border-[#353534] group shadow-lg aspect-[4/3] bg-[#201f1f]">
                  <img
                    src={PORTFOLIO_IMAGES.about.accquantum}
                    alt="Tasnim Ishraque at ACCQUANTUM event"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] md:text-[11px] uppercase tracking-wider text-[#e5e2e1] bg-[#1c1b1b]/95 px-2.5 py-1 rounded backdrop-blur-sm border border-[#353534]/50 font-semibold">
                    ACCQUANTUM 2026
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-[#353534] group shadow-lg aspect-[3/4] bg-[#201f1f]">
                  <img
                    src={PORTFOLIO_IMAGES.about.portrait}
                    alt="Tasnim Ishraque in beige suit"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/90 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[10px] md:text-[11px] uppercase tracking-wider text-[#e5e2e1] bg-[#1c1b1b]/95 px-2.5 py-1 rounded backdrop-blur-sm border border-[#353534]/50 font-semibold">
                    Executive Portrait
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
