import React, { useState } from 'react';
import { Modal } from './Modal';

interface AwardItem {
  id: string;
  badge: string;
  badgeType?: string;
  year: string;
  category?: string;
  title: string;
  sub: string;
  desc: string;
  certTitle: string;
  certIssuer: string;
}

export const Achievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<AwardItem | null>(null);

  const topAchievements: AwardItem[] = [
    {
      id: 'top-1',
      badge: 'RESEARCH • 2026',
      year: '2026',
      category: 'CONFERENCE HONOR',
      title: 'Best Student Paper',
      sub: 'International Conference on Artificial Intelligence, Digital Transformation, Higher Education Advancement & Business Analytics 2026',
      desc: 'Recognized in connection with my research on the impact of artificial intelligence dependency on critical thinking skills and intellectual curiosity among university students in Bangladesh.',
      certTitle: 'Best Student Paper Award Citation',
      certIssuer: 'Rochester Institute of Technology (RIT Dubai) & DIU',
    },
    {
      id: 'top-2',
      badge: 'LEADERSHIP • 2026',
      year: '2026',
      category: 'ORGANIZATIONAL EXCELLENCE',
      title: 'Best Organizer',
      sub: 'ACCQUANTUM 2026',
      desc: 'Recognition for organizational leadership, event management, and contributions to extracurricular initiatives.',
      certTitle: 'ACCQUANTUM 2026 Best Organizer Citation',
      certIssuer: 'Finance and Accounting Club of BRAC University (FINACT)',
    },
    {
      id: 'top-3',
      badge: 'BRONZE • 2025',
      year: '6 November 2025',
      category: 'GLOBAL DISTINCTION',
      title: "Duke of Edinburgh's International Award",
      sub: 'Level: Bronze Standard',
      desc: "Successfully completed the Bronze level of the Duke of Edinburgh's International Award, demonstrating commitment to personal development, perseverance, and engagement beyond academics.",
      certTitle: "Duke of Edinburgh's International Award - Bronze Certificate",
      certIssuer: "The Duke of Edinburgh's Award Foundation Bangladesh",
    },
  ];

  const otherAchievements: AwardItem[] = [
    {
      id: 'other-1',
      badge: 'Economics Competition',
      year: '2025',
      title: 'EconProdigy 7.0 — Semi-Finalist',
      sub: 'Recognition: Semi-finalist • NSU Young Entrepreneurs Society (NSU YES)',
      desc: 'Advanced to the semi-final stage of EconProdigy 7.0, demonstrating analytical thinking and competitive problem-solving.',
      certTitle: 'EconProdigy 7.0 Semi-Finalist Certificate',
      certIssuer: 'NSU Young Entrepreneurs Society',
    },
    {
      id: 'other-2',
      badge: 'Executive Board',
      year: '2024',
      title: 'Rapporteur — UNGA Fourth Committee (SPECPOL)',
      sub: 'Position: Rapporteur • UNGA Fourth Committee (SPECPOL) | AIMUN Session IV',
      desc: 'Served on the Executive Board as Rapporteur for the Special Political and Decolonization Committee (SPECPOL), overseeing diplomatic protocol and proceedings.',
      certTitle: 'Executive Board Appointment Citation',
      certIssuer: 'Adamjee Cantonment College MUN Association',
    },
    {
      id: 'other-3',
      badge: 'Model United Nations',
      year: '2023',
      title: 'Special Mention — DPSIMUN Session VI',
      sub: 'Recognition: Special Mention • Delhi Public School International Model United Nations Session VI',
      desc: 'Awarded Special Mention honor in competitive diplomatic committee negotiations representing international diplomatic policy at DPSIMUN VI.',
      certTitle: 'Special Mention Diplomatic Accolade',
      certIssuer: 'DPS International Model United Nations',
    },
    {
      id: 'other-4',
      badge: 'Highest Accolade',
      badgeType: 'highest',
      year: '2022',
      title: 'Best Delegate — Sunnydale MUN Session II',
      sub: 'Recognition: Best Delegate • Sunnydale Model United Nations Session II',
      desc: 'Secured the premiere individual distinction of Best Delegate, displaying parliamentary mastery, crisis management, and resolution drafting leadership.',
      certTitle: 'Best Delegate Award Citation',
      certIssuer: 'Sunnydale Model United Nations Secretariat',
    },
    {
      id: 'other-5',
      badge: 'Collegiate Conference',
      year: '2022',
      title: 'Special Mention — NSU International MUN',
      sub: 'Recognition: Special Mention • North South University International Model United Nations',
      desc: "Conferred Special Mention accolade at one of the nation's foremost university-level international conferences for nuanced multilateral debate.",
      certTitle: 'Special Mention Delegation Certificate',
      certIssuer: 'North South University International MUN',
    },
    {
      id: 'other-6',
      badge: 'Specialized Accolade',
      year: '2022',
      title: 'Outstanding Strategist — Oxford International School MUN',
      sub: 'Recognition: Outstanding Strategist • Oxford International School Model United Nations (OISMUN)',
      desc: 'Commended for exceptional geopolitical strategy, tactical consensus-building, and high-impact policy formulations throughout committee sessions.',
      certTitle: 'Outstanding Strategist Distinction',
      certIssuer: 'Oxford International School MUN Secretariat',
    },
    {
      id: 'other-7',
      badge: 'Highest Accolade',
      badgeType: 'highest',
      year: '2022',
      title: 'Best Delegate — AIMUN Session III',
      sub: 'Recognition: Best Delegate • Adamjee Intra Model United Nations Session III',
      desc: 'Earned premier delegate honor in competitive intra-collegiate committee simulation, spearheading bloc consensus and winning top award.',
      certTitle: 'Best Delegate Award Citation',
      certIssuer: 'Adamjee Cantonment College MUN Association',
    },
    {
      id: 'other-8',
      badge: 'Debating Accolade',
      year: '2019–2020',
      title: 'Runners-up — English Debate',
      sub: 'Recognition: Runners-up (English) • 8th Ideal Debating Club (IDC) Inter Class Debate Competition',
      desc: 'Achieved the runners-up position in the English category of the 8th Ideal Debating Club Inter Class Debate Competition.',
      certTitle: 'English Debate Runners-up Certificate',
      certIssuer: 'Ideal Debating Club (IDC)',
    },
    {
      id: 'other-9',
      badge: 'Public Speaking',
      year: '2019',
      title: '3rd Place — Secondary Level, EarthTalk',
      sub: 'Recognition: 3rd Place — Secondary Level • 3rd National Earth & Space Summit 2019',
      desc: 'Secured third place in the Secondary Level EarthTalk public speaking competition at the 3rd National Earth & Space Summit.',
      certTitle: '3rd Place Public Speaking Distinction',
      certIssuer: 'National Earth & Space Summit Committee',
    },
    {
      id: 'other-10',
      badge: 'Institutional Delegation',
      year: '2019',
      title: 'English Olympiad Team Representative',
      sub: 'Recognition: English Olympiad Team Representative • Ideal English Language Club (IELC)',
      desc: 'Represented the Ideal English Language Club in the English Olympiad team during the 2019 session.',
      certTitle: 'English Olympiad Delegation Verification',
      certIssuer: 'Ideal English Language Club (IELC)',
    },
  ];

  return (
    <section id="achievements-awards" className="w-full bg-[#0e0e0e] py-20 relative overflow-hidden scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
            <span>MERIT &amp; DISTINCTIONS // HONORS</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl text-[#e5e2e1] font-bold tracking-tight uppercase">
            ACHIEVEMENTS &amp; AWARDS
          </h2>
          <p className="text-sm md:text-base text-[#ac8883] mt-1 max-w-2xl leading-relaxed">
            Recognitions, accomplishments, and milestones reflecting my academic journey, leadership, and extracurricular engagement.
          </p>
        </div>

        {/* TOP THREE FEATURED ACHIEVEMENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {topAchievements.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 md:p-8 rounded-2xl bg-[#1c1b1b] border-2 border-[#da291c]/80 ring-1 ring-[#da291c]/40 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:bg-[#201f1f] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
                    idx === 0 
                      ? 'bg-[#c1ac00]/25 border border-[#dfc700]/60 text-[#dfc700]'
                      : idx === 1 
                      ? 'bg-[#920703]/40 border border-[#da291c]/70 text-[#ffdad4]'
                      : 'bg-[#c1ac00]/25 border border-[#dfc700]/60 text-[#dfc700]'
                  }`}>
                    <span className="material-symbols-outlined text-[26px]">
                      {idx === 0 ? 'military_tech' : idx === 1 ? 'emoji_events' : 'workspace_premium'}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#920703]/40 border border-[#da291c]/70 text-[#ffdad4] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                    {item.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#dfc700] font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight mt-1">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#ffb4a8] font-semibold mt-1 leading-snug">
                    {item.sub}
                  </div>
                </div>

                <p className="text-sm text-[#ac8883] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#353534]">
                <button
                  onClick={() => setSelectedCert(item)}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#da291c] hover:bg-[#be0f09] text-[#fff5f3] text-xs font-semibold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <span>VIEW CERTIFICATE</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SUBSECTION: OTHER ACHIEVEMENTS & RECOGNITIONS */}
        <div className="space-y-6">
          <div className="border-b border-[#353534] pb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#da291c]"></span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight uppercase">
                OTHER ACHIEVEMENTS &amp; RECOGNITIONS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherAchievements.map((item) => (
              <div
                key={item.id}
                className="p-6 md:p-8 rounded-xl bg-[#1c1b1b] border border-[#353534] hover:border-[#da291c] shadow-md flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      item.badgeType === 'highest'
                        ? 'bg-[#920703]/40 border border-[#da291c]/80 text-[#ffdad4]'
                        : 'bg-[#353534] border border-[#353534] text-[#dfc700]'
                    }`}>
                      {item.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#201f1f] text-[#ac8883] text-[10px] uppercase font-semibold">
                      {item.year}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-bold mt-1 group-hover:text-[#ffb4a8] transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-xs text-[#ac8883] mt-0.5 leading-snug">
                      {item.sub}
                    </div>
                  </div>

                  <p className="text-sm text-[#ac8883] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#353534] flex items-center justify-between">
                  <span className="text-[11px] uppercase text-[#ac8883] font-medium">
                    Verification Archive
                  </span>
                  <button
                    onClick={() => setSelectedCert(item)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#ffb4a8] hover:text-[#da291c] transition-colors cursor-pointer"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || ''}
        badge={selectedCert?.badge}
        badgeColor={selectedCert?.badgeType === 'highest' ? 'primary' : 'tertiary'}
        subtitle={selectedCert?.sub}
      >
        <p className="text-sm text-[#ac8883] leading-relaxed">
          {selectedCert?.desc}
        </p>

        <div className="rounded-xl border border-[#353534] bg-[#201f1f] p-8 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#353534] flex items-center justify-center text-[#dfc700] mb-3">
            <span className="material-symbols-outlined text-[32px]">workspace_premium</span>
          </div>
          <div className="font-['Plus_Jakarta_Sans'] text-lg text-[#e5e2e1] font-bold">
            {selectedCert?.certTitle}
          </div>
          <p className="text-xs text-[#ac8883] mt-1.5 max-w-md">
            Issuer: <span className="text-[#e5e2e1] font-semibold">{selectedCert?.certIssuer}</span> • Year: {selectedCert?.year}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c1ac00]/20 border border-[#dfc700]/50 text-[#dfc700] text-[11px] uppercase font-semibold">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            <span>Credential Verification Dossier Ready</span>
          </div>
        </div>
      </Modal>
    </section>
  );
};
