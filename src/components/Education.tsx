import React from 'react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="w-full bg-[#0e0e0e] py-20 scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="mb-14">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl text-[#e5e2e1] font-bold tracking-tight uppercase">
            EDUCATION
          </h2>
          <p className="text-sm md:text-base text-[#ac8883] mt-1 max-w-xl">
            My academic journey and educational background.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative pl-6 md:pl-10 space-y-10">
          {/* Vertical Connecting Rail */}
          <div className="absolute left-2 md:left-3.5 top-3 bottom-3 w-0.5 bg-[#353534]"></div>

          {/* 1. BRAC UNIVERSITY */}
          <div className="relative group">
            <div className="absolute -left-6 md:-left-10 top-1.5 w-5 h-5 rounded-full bg-[#131313] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#da291c] ring-4 ring-[#920703]/40"></div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-[#1c1b1b] border border-[#353534] shadow-md group-hover:bg-[#201f1f] transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-sm">
                      <img
                        src={PORTFOLIO_IMAGES.logos.bracUni}
                        alt="BRAC University Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-16 h-11 px-1.5 py-1 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <img
                        src={PORTFOLIO_IMAGES.logos.bracBusinessSchool}
                        alt="BRAC Business School Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#ffb4a8] font-semibold">
                      UNIVERSITY EDUCATION
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight mt-0.5">
                      BRAC UNIVERSITY
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-semibold mt-1">
                      Bachelor of Business Administration (BBA)
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="px-2.5 py-1 rounded bg-[#201f1f] border border-[#353534] text-[#ffb4a8] text-xs font-semibold">
                        Dual Major: Finance and BAIS
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#201f1f] border border-[#353534] text-[#e5e2e1] text-xs font-semibold">
                        Minor: Accounting
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-[#353534] text-[#e6bdb7] text-[11px] font-semibold self-start md:self-auto shrink-0 uppercase tracking-wider">
                  May 2024 – Present
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="mt-6 pt-6 border-t border-[#353534] grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-lg bg-[#353534]/70 border border-[#353534] flex flex-col justify-center">
                  <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#ac8883] mb-1 font-semibold">
                    CGPA
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#dfc700] font-bold">
                    3.97 <span className="text-xs font-normal text-[#ac8883]">/ 4.00</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#353534]/70 border border-[#353534] flex flex-col justify-center">
                  <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#ac8883] mb-1 font-semibold">
                    Credits Completed
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold">
                    90 / 148 <span className="text-xs font-normal text-[#ac8883]">Credits</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#353534]/70 border border-[#353534] flex flex-col justify-center">
                  <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#ac8883] mb-1 font-semibold">
                    Current Academic Status
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-semibold">
                    8th Semester
                  </div>
                  <div className="text-xs text-[#ac8883] mt-0.5">Fall 2026</div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#353534]/70 border border-[#353534] flex flex-col justify-center">
                  <div className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#ac8883] mb-1 font-semibold">
                    University Year
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-semibold">
                    3rd Year
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ADAMJEE CANTONMENT COLLEGE */}
          <div className="relative group">
            <div className="absolute -left-6 md:-left-10 top-1.5 w-5 h-5 rounded-full bg-[#131313] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ac8883]"></div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-[#1c1b1b] border border-[#353534] shadow-md group-hover:bg-[#201f1f] transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={PORTFOLIO_IMAGES.logos.adamjeeCollege}
                      alt="Adamjee Cantonment College Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#ac8883] font-semibold">
                      COLLEGE
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight mt-0.5">
                      ADAMJEE CANTONMENT COLLEGE
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-semibold mt-1">
                      Higher Secondary Certificate (HSC)
                    </p>
                    <p className="text-sm text-[#ac8883] mt-0.5">
                      Group: Business Studies
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-2 shrink-0">
                  <div className="px-3 py-1 rounded-full bg-[#353534] text-[#e6bdb7] text-[11px] font-semibold self-start md:self-end uppercase">
                    2023
                  </div>
                  <div className="px-5 py-2 rounded-lg bg-[#353534]/70 border border-[#353534] text-center">
                    <div className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#dfc700] font-bold">
                      5.00 / 5.00
                    </div>
                    <div className="text-[10px] uppercase text-[#ac8883] font-semibold">GPA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. IDEAL SCHOOL AND COLLEGE */}
          <div className="relative group">
            <div className="absolute -left-6 md:-left-10 top-1.5 w-5 h-5 rounded-full bg-[#131313] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ac8883]"></div>
            </div>

            <div className="p-6 md:p-8 rounded-xl bg-[#1c1b1b] border border-[#353534] shadow-md group-hover:bg-[#201f1f] transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src={PORTFOLIO_IMAGES.logos.idealSchool}
                      alt="Ideal School and College Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#ac8883] font-semibold">
                      SCHOOL
                    </span>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight mt-0.5">
                      IDEAL SCHOOL AND COLLEGE
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-semibold mt-1">
                      Secondary School Certificate (SSC)
                    </p>
                    <p className="text-sm text-[#ac8883] mt-0.5">
                      Group: Science
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-2 shrink-0">
                  <div className="px-3 py-1 rounded-full bg-[#353534] text-[#e6bdb7] text-[11px] font-semibold self-start md:self-end uppercase">
                    2021
                  </div>
                  <div className="px-5 py-2 rounded-lg bg-[#353534]/70 border border-[#353534] text-center">
                    <div className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#dfc700] font-bold">
                      5.00 / 5.00
                    </div>
                    <div className="text-[10px] uppercase text-[#ac8883] font-semibold">GPA</div>
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
