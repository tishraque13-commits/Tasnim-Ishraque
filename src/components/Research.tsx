import React from 'react';

export const Research: React.FC = () => {
  const authors = [
    { num: 1, name: 'Ms. Nadia Afroze Disha', isSelf: false },
    { num: 2, name: 'Tabassum Sumaiya Shawrin', isSelf: false },
    { num: 3, name: 'Humayara Iqbal Oara', isSelf: false },
    { num: 4, name: 'Sanzela Reza', isSelf: false },
    { num: 5, name: 'Arisha Ariana Megh', isSelf: false },
    { num: 6, name: 'Tasnim Ishraque', isSelf: true, roleBadge: 'Author & Presenter' },
  ];

  return (
    <section id="research" className="w-full bg-[#131313] py-20 relative overflow-hidden scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">school</span>
            <span>ACADEMIC RESEARCH</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl text-[#e5e2e1] font-bold tracking-tight uppercase">
            RESEARCH &amp; PUBLICATIONS
          </h2>
        </div>

        <div className="p-6 md:p-10 rounded-2xl bg-[#1c1b1b] border border-[#353534] shadow-2xl relative">
          <div className="space-y-8">
            {/* Badges & Title */}
            <div className="space-y-4 pb-6 border-b border-[#353534]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#c1ac00]/25 border border-[#dfc700]/60 text-[#dfc700] text-[11px] uppercase font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">military_tech</span>
                  BEST STUDENT PAPER
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#920703]/40 border border-[#da291c]/70 text-[#ffdad4] text-[11px] uppercase font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                  INTERNATIONAL CONFERENCE
                </span>
                <span className="px-3.5 py-1 rounded-full bg-[#353534] border border-[#353534] text-[#e5e2e1] text-[11px] uppercase font-semibold">
                  Accepted Abstract / Conference Paper
                </span>
              </div>

              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl md:text-[34px] text-[#e5e2e1] font-extrabold tracking-tight leading-snug">
                “The Impact of Artificial Intelligence Dependency on Critical Thinking Skills and Intellectual Curiosity Among University Students in Bangladesh.”
              </h3>
            </div>

            {/* Two Column Layout: Overview & Affiliation vs Authors */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
                <div className="p-5 md:p-6 rounded-xl bg-[#201f1f] border border-[#353534] relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#da291c]"></div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ffb4a8] mb-1.5 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">analytics</span>
                    <span>RESEARCH OVERVIEW</span>
                  </div>
                  <p className="text-sm md:text-base text-[#e5e2e1] leading-relaxed">
                    The study examines how <span className="text-[#ffb4a8] font-bold">dependency on artificial intelligence</span> may influence <span className="text-[#dfc700] font-bold">critical thinking skills</span> and <span className="text-[#dfc700] font-bold">intellectual curiosity</span> among undergraduate students from different departments across public and private universities in Bangladesh.
                  </p>
                </div>

                <div className="p-5 md:p-6 rounded-xl bg-[#201f1f] border border-[#353534]">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#ffb4a8]">account_tree</span>
                    <span>CONFERENCE &amp; INSTITUTIONAL AFFILIATION</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[20px] text-[#dfc700] shrink-0 mt-0.5">event</span>
                      <div>
                        <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                          International Conference on Artificial Intelligence, Digital Transformation, Higher Education Advancement &amp; Business Analytics 2026
                        </div>
                        <p className="text-xs text-[#ac8883] mt-1">
                          Premier interdisciplinary international academic conference exploring emerging technology in higher education.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <span className="material-symbols-outlined text-[20px] text-[#ffb4a8] shrink-0 mt-0.5">domain</span>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#ac8883] font-semibold">
                          Conference Organizers
                        </div>
                        <div className="text-sm text-[#e5e2e1] font-medium mt-0.5 leading-relaxed">
                          Primarily by Rochester Institute of Technology (RIT Dubai), Daffodil International University - RAK Campus, with support of Northumbria University London, and Birmingham City University UK.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Authors List */}
              <div className="lg:col-span-5">
                <div className="p-5 md:p-6 rounded-xl bg-[#201f1f] border border-[#353534] h-full flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-1 flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#ffb4a8]">group</span>
                      <span>AUTHORS</span>
                    </div>
                    <p className="text-xs text-[#ac8883] mb-3">
                      Complete authorship sequence in verified research order:
                    </p>
                    <ol className="space-y-2">
                      {authors.map((author) => (
                        <li
                          key={author.num}
                          className={`flex items-center justify-between p-2 rounded-lg text-sm transition-all ${
                            author.isSelf
                              ? 'bg-[#920703]/35 border border-[#da291c]/80 text-[#e5e2e1] ring-1 ring-[#da291c]/40 font-semibold'
                              : 'bg-[#2a2a2a] text-[#e5e2e1]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                                author.isSelf
                                  ? 'bg-[#da291c] text-[#fff5f3]'
                                  : 'bg-[#353534] text-[#ac8883]'
                              }`}
                            >
                              {author.num}
                            </span>
                            <span className={author.isSelf ? 'text-[#ffdad4]' : ''}>
                              {author.name}
                            </span>
                          </div>
                          {author.roleBadge && (
                            <span className="px-2 py-0.5 rounded bg-[#da291c] text-[#fff5f3] text-[10px] uppercase font-bold tracking-wider">
                              {author.roleBadge}
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* My Contribution */}
            <div className="space-y-4 pt-6 border-t border-[#353534]">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">person_pin</span>
                  <span>MY CONTRIBUTION</span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] text-xl text-[#e5e2e1] font-bold tracking-tight">
                  Execution Pillars &amp; Directorship Roles
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 md:p-6 rounded-xl bg-[#201f1f] border border-[#353534] flex flex-col justify-between shadow-md">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-[#353534] text-[#ffb4a8] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">science</span>
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#ac8883] font-bold">
                      01. RESEARCH
                    </div>
                    <p className="text-sm text-[#ac8883] leading-relaxed">
                      Contributed to the research and development of the study.
                    </p>
                  </div>
                </div>

                <div className="p-5 md:p-6 rounded-xl bg-[#201f1f] border border-[#353534] flex flex-col justify-between shadow-md">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-lg bg-[#353534] text-[#ffb4a8] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">slideshow</span>
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-[#ac8883] font-bold">
                      02. PRESENTATION PREPARATION
                    </div>
                    <p className="text-sm text-[#ac8883] leading-relaxed">
                      Prepared the presentation slides for the research paper and conference presentation.
                    </p>
                  </div>
                </div>

                <div className="p-5 md:p-6 rounded-xl bg-[#201f1f] border-2 border-[#da291c]/80 ring-1 ring-[#da291c]/40 flex flex-col justify-between shadow-xl">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#da291c] text-[#fff5f3] flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined text-[22px]">mic</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#920703]/40 border border-[#da291c]/70 text-[#ffdad4] text-[10px] uppercase font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                        CONFERENCE SPOTLIGHT
                      </span>
                    </div>
                    <div className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#dfc700] font-extrabold uppercase tracking-wide">
                      03. SOLE PRESENTER
                    </div>
                    <p className="text-sm text-[#e5e2e1] font-medium leading-relaxed">
                      Served as the sole presenter of the research paper during the international conference, delivering the presentation and participating in the conference Q&amp;A session.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Row */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#353534]">
              <div className="flex items-center gap-2 text-[#ac8883] text-xs">
                <span className="material-symbols-outlined text-[18px] text-[#dfc700]">verified</span>
                <span>Double-blind reviewed and commended by international adjudication council</span>
              </div>
              <a
                href="mailto:tasnim.ishraque@g.bracu.ac.bd?subject=Inquiry%20Regarding%20Research%20Paper%20-%20Tasnim%20Ishraque"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#da291c] hover:bg-[#be0f09] text-[#fff5f3] text-sm font-semibold transition-all shadow-xl shadow-[#da291c]/25 cursor-pointer"
              >
                <span>VIEW PUBLICATIONS</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
