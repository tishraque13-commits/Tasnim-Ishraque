import React, { useState } from 'react';
import { PORTFOLIO_IMAGES } from '../data/portfolioData';
import { Modal } from './Modal';

export const Extracurricular: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{
    id: string;
    title: string;
    badge: string;
    badgeColor?: 'primary' | 'tertiary' | 'outline';
    subtitle: string;
    desc?: string;
    contentTitle: string;
    contentDesc: string;
    tagText: string;
    icon: string;
  } | null>(null);

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

  return (
    <section id="extracurricular" className="w-full bg-[#0e0e0e] py-20 relative scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px]">groups</span>
            <span>ORGANIZATIONAL LEADERSHIP AND MANAGEMENT</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl text-[#e5e2e1] font-bold tracking-tight uppercase">
            EXTRACURRICULAR ACTIVITIES
          </h2>
          <p className="text-sm md:text-base text-[#ac8883] mt-1 max-w-3xl leading-relaxed">
            A track record of executive positions, leadership opportunities, and member mentoring across all educational institutional organizations.
          </p>
        </div>

        {/* 1. LEADERSHIP JOURNEY TIMELINE CARDS */}
        <div className="mb-16 p-6 md:p-8 rounded-2xl bg-[#1c1b1b] border border-[#353534] shadow-xl relative overflow-hidden">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#da291c] animate-pulse"></span>
            <span>LEADERSHIP JOURNEY &amp; INSTITUTIONAL PROGRESSION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1: IELC */}
            <button
              onClick={() => scrollTo('org-ielc')}
              className="group relative z-10 flex flex-col p-6 rounded-xl bg-[#201f1f] border border-[#353534] hover:border-[#da291c] transition-all duration-300 shadow-md hover:-translate-y-1 text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#353534] border border-[#353534] p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={PORTFOLIO_IMAGES.logos.ielcBadge}
                    alt="IELC Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="px-2.5 py-1 rounded bg-[#2a2a2a] text-[#ac8883] text-[11px] font-semibold uppercase tracking-wider">
                  01 // 2019 – 2022
                </span>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-bold group-hover:text-[#ffb4a8] transition-colors">
                Ideal English Language Club (IELC)
              </div>
              <div className="text-xs text-[#ffb4a8] font-medium mt-1">
                Organizing Secretary
              </div>
              <div className="text-xs text-[#ac8883] mt-0.5">
                Ideal School and College
              </div>
              <div className="mt-4 pt-2 border-t border-[#353534] flex items-center text-[11px] font-semibold text-[#da291c] gap-1 uppercase tracking-wider">
                <span>Explore Activities</span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_downward</span>
              </div>
            </button>

            {/* Step 2: A-MUNA */}
            <button
              onClick={() => scrollTo('org-amuna')}
              className="group relative z-10 flex flex-col p-6 rounded-xl bg-[#201f1f] border border-[#353534] hover:border-[#da291c] transition-all duration-300 shadow-md hover:-translate-y-1 text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#353534] border border-[#353534] p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={PORTFOLIO_IMAGES.logos.amunaBadge}
                    alt="A-MUNA Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="px-2.5 py-1 rounded bg-[#2a2a2a] text-[#ac8883] text-[11px] font-semibold uppercase tracking-wider">
                  02 // 2022 – 2024
                </span>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-bold group-hover:text-[#ffb4a8] transition-colors">
                Adamjee Model United Nations Association (A-MUNA)
              </div>
              <div className="text-xs text-[#ffb4a8] font-medium mt-1">
                Organizing Secretary (Core Panel)
              </div>
              <div className="text-xs text-[#ac8883] mt-0.5">
                Adamjee Cantonment College
              </div>
              <div className="mt-4 pt-2 border-t border-[#353534] flex items-center text-[11px] font-semibold text-[#da291c] gap-1 uppercase tracking-wider">
                <span>Explore Activities</span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_downward</span>
              </div>
            </button>

            {/* Step 3: FINACT */}
            <button
              onClick={() => scrollTo('org-finact')}
              className="group relative z-10 flex flex-col p-6 rounded-xl bg-[#201f1f] border border-[#da291c]/80 hover:border-[#da291c] transition-all duration-300 shadow-lg hover:-translate-y-1 ring-1 ring-[#da291c]/30 text-left cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#353534] border border-[#da291c]/60 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={PORTFOLIO_IMAGES.logos.finactBadge}
                    alt="FINACT Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-2.5 py-1 rounded-full bg-[#920703]/40 border border-[#da291c]/60 text-[#ffdad4] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                    CURRENT ROLE
                  </span>
                  <span className="text-xs text-[#ac8883] font-semibold">2026 – Present</span>
                </div>
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-base md:text-lg text-[#e5e2e1] font-bold group-hover:text-[#ffb4a8] transition-colors">
                Finance &amp; Accounting Club of BRAC University (FINACT)
              </div>
              <div className="font-['Plus_Jakarta_Sans'] text-sm md:text-base text-[#dfc700] font-bold mt-1">
                Assistant Director
              </div>
              <div className="text-xs text-[#ac8883] mt-0.5">
                BRAC University
              </div>
              <div className="mt-4 pt-2 border-t border-[#353534] flex items-center text-[11px] font-semibold text-[#da291c] gap-1 uppercase tracking-wider">
                <span>Explore Activities</span>
                <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_downward</span>
              </div>
            </button>
          </div>
        </div>

        {/* PART 2: DEDICATED SECTIONS */}
        <div className="space-y-16">
          {/* ==================== 01: IELC ==================== */}
          <div id="org-ielc" className="scroll-mt-24 p-6 md:p-10 rounded-2xl bg-[#1c1b1b] border border-[#353534] shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#353534] mb-8">
              <div className="flex items-start md:items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#353534] border border-[#353534] p-2 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                  <img
                    src={PORTFOLIO_IMAGES.logos.ielcOfficial}
                    alt="IELC Official Logo"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#ffb4a8]">
                      EXECUTIVE LEADERSHIP
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#920703]/30 border border-[#da291c]/60 text-[#ffdad4] text-[11px] font-semibold uppercase tracking-wider">
                      2019 – 2022
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl text-[#e5e2e1] font-bold tracking-tight uppercase">
                    IDEAL ENGLISH LANGUAGE CLUB (IELC)
                  </h3>
                  <div className="mt-1 font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-extrabold uppercase tracking-wide text-[#dfc700] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#da291c] text-[24px]">workspace_premium</span>
                    <span>ORGANIZING SECRETARY</span>
                  </div>
                  <div className="text-xs text-[#ac8883] mt-0.5">
                    Ideal School and College
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#353534] border border-[#353534] text-[#e5e2e1] text-[11px] font-bold uppercase tracking-wider">
                  Banasree Branch
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#920703]/40 border border-[#da291c]/80 text-[#ffdad4] text-[11px] font-bold uppercase tracking-wider">
                  Tenure: 2019 – 2022
                </span>
              </div>
            </div>

            <div className="space-y-10">
              {/* Profile */}
              <div className="p-5 md:p-6 rounded-xl bg-[#1c1b1b] border border-[#353534] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#da291c]"></div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                  <span>ORGANIZATIONAL PROFILE &amp; OVERVIEW</span>
                </div>
                <p className="text-sm md:text-base text-[#e5e2e1] leading-relaxed">
                  Spearheaded club activities as the <span className="text-[#ffb4a8] font-bold">sole executive panel member</span> at the Banasree Branch of Ideal School and College, with leading student engagement, event management, and multi-branch coordination across <span className="text-[#dfc700] font-bold">three major campuses</span>.
                </p>
              </div>

              {/* Highlights */}
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#dfc700] mb-4 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#dfc700]">analytics</span>
                  <span>ORGANIZATIONAL HIGHLIGHTS</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between">
                    <div className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#dfc700] tracking-tight">
                      70+
                    </div>
                    <div className="mt-2">
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        Trained and Mentored Members
                      </div>
                      <div className="text-xs text-[#ac8883] mt-1">
                        Active executive and cohort development
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#ffb4a8] tracking-tight">
                        2
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#920703]/40 border border-[#da291c]/60 text-[#ffdad4] text-[10px] uppercase font-bold">
                        Auspice
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        Yearly Magazines Launched
                      </div>
                      <div className="text-xs text-[#ac8883] mt-1">
                        Editorial curation and club publication
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between">
                    <div className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#e5e2e1] tracking-tight">
                      3
                    </div>
                    <div className="mt-2">
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        Workshops Organized
                      </div>
                      <div className="text-xs text-[#ac8883] mt-1">
                        Skill-building and competitive training tracks
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects & Initiatives */}
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-4 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#ffb4a8]">rocket_launch</span>
                  <span>PROJECTS &amp; INITIATIVES</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project 1 */}
                  <div className="p-6 md:p-8 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#920703]/40 border border-[#da291c]/80 text-[#ffdad4] text-[11px] font-bold uppercase tracking-wider">
                            Volunteer
                          </span>
                          <span className="text-[11px] uppercase text-[#ac8883]">
                            Project 01
                          </span>
                        </div>
                        <h4 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight">
                          3rd National English Language Carnival
                        </h4>
                      </div>
                      <p className="text-sm text-[#ac8883] leading-relaxed">
                        Contributed as a volunteer and gained valuable organizational and event management insights through direct involvement in the execution of the carnival.
                      </p>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#ac8883] mb-2 font-semibold">
                          Competition Segments
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['English Olympiad', 'Spelling Bee', 'Multimedia Presentation', 'Public Speaking'].map((seg, i) => (
                            <span key={i} className="px-2.5 py-1 rounded bg-[#2a2a2a] border border-[#353534] text-xs font-medium text-[#e5e2e1]">
                              {seg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="p-6 md:p-8 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#da291c] text-[#fff5f3] text-[11px] font-bold uppercase tracking-wider">
                            Event Organization
                          </span>
                          <span className="px-2.5 py-0.5 rounded bg-[#353534] border border-[#353534] text-[#dfc700] text-[11px] uppercase tracking-wider font-semibold">
                            Online Intra-School Event
                          </span>
                          <span className="text-[11px] uppercase text-[#ac8883]">
                            Project 02
                          </span>
                        </div>
                        <h4 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight">
                          Eloquence 1.0
                        </h4>
                      </div>
                      <p className="text-sm text-[#ac8883] leading-relaxed">
                        Organized the inspection and coordination of the intra-school event, which was hosted online during the COVID-19 pandemic.
                      </p>
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#ac8883] mb-2 font-semibold">
                          Event Formats &amp; Remote Execution
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['Online Coordination', 'Crisis Protocol', 'Digital Adjudication', 'Intra-School Forum'].map((seg, i) => (
                            <span key={i} className="px-2.5 py-1 rounded bg-[#2a2a2a] border border-[#353534] text-xs font-medium text-[#e5e2e1]">
                              {seg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Archives and Certifications */}
              <div className="pt-2 space-y-6">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#ffb4a8]">collections_bookmark</span>
                    <span>ARCHIVES &amp; GALLERY</span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-xl text-[#e5e2e1] font-bold tracking-tight">
                    EVENT ARCHIVES AND CERTIFICATIONS
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      id: 'ielc-photos',
                      title: 'EVENT PHOTOGRAPHS',
                      desc: 'Photographic archive of IELC activities (National Carnival, Eloquence 1.0, workshops, organizational activities).',
                      badge: 'IELC Visual Archive',
                      badgeColor: 'primary' as const,
                      subtitle: 'Banasree & Main Campus • 2019–2022',
                      icon: 'photo_camera',
                      actionText: 'Open Gallery',
                      contentTitle: 'Photographic Records Repository Ready',
                      contentDesc: 'High-resolution event photography from 3rd National English Language Carnival, Eloquence 1.0, and campus workshops are indexed and lightbox-preview ready.',
                      tagText: 'Upload-Ready State • Banasree & Main Campus',
                    },
                    {
                      id: 'ielc-leadership',
                      title: 'CERTIFICATE OF LEADERSHIP',
                      desc: 'Dedicated archive for Organizing Secretary leadership certificate.',
                      badge: 'Tenure Recognition // 2019 – 2022',
                      badgeColor: 'tertiary' as const,
                      subtitle: 'Ideal English Language Club • Ideal School and College',
                      icon: 'workspace_premium',
                      actionText: 'View Certificate',
                      contentTitle: 'Certificate of Leadership Document Frame',
                      contentDesc: 'Official verification acknowledging executive leadership tenure as Organizing Secretary across three major campuses (2019 – 2022).',
                      tagText: 'Document Frame Active • Verified Tenure',
                    },
                    {
                      id: 'ielc-volunteer',
                      title: 'CERTIFICATE OF VOLUNTEER',
                      desc: 'Dedicated archive for volunteer recognition and participation certificates (including 3rd National Carnival).',
                      badge: 'Recognition & Participation',
                      badgeColor: 'primary' as const,
                      subtitle: '3rd National Carnival • 2020',
                      icon: 'volunteer_activism',
                      actionText: 'View Certificate',
                      contentTitle: 'Volunteer Citation Document Frame',
                      contentDesc: 'Recognizing operational contributions in registration logistics, competition coordination, and volunteer oversight at the 3rd National Carnival.',
                      tagText: 'Archive Ready • Carnival Volunteer Citation',
                    },
                    {
                      id: 'ielc-others',
                      title: 'OTHERS',
                      desc: 'Additional certificates, institutional recognition, and official archival documents.',
                      badge: 'Institutional Records',
                      badgeColor: 'outline' as const,
                      subtitle: 'Official Documents & Facilitation Credentials',
                      icon: 'folder_special',
                      actionText: 'View Documents',
                      contentTitle: 'Institutional Records Dossier',
                      contentDesc: 'Includes Eloquence 1.0 intra-school event organizing leadership credentials, magazine editorial contributions, and workshop facilitation certificates.',
                      tagText: 'Additional Credentials Archive Frame',
                    },
                  ].map((card) => (
                    <button
                      key={card.id}
                      onClick={() => setActiveModal(card)}
                      className="group relative rounded-xl overflow-hidden border border-[#353534] bg-[#201f1f] hover:border-[#da291c] p-6 flex flex-col justify-between cursor-pointer transition-all hover:bg-[#2a2a2a] shadow-md text-left"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-[#353534] border border-[#353534] flex items-center justify-center text-[#ffb4a8] group-hover:bg-[#da291c] group-hover:text-[#fff5f3] transition-colors">
                          <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                        </div>
                        <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold tracking-wide group-hover:text-[#ffb4a8] transition-colors">
                          {card.title}
                        </div>
                        <p className="text-xs text-[#ac8883] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#353534] flex items-center justify-between text-[11px] uppercase font-bold text-[#ffb4a8] tracking-wider">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          {card.actionText}
                        </span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 02: A-MUNA ==================== */}
          <div id="org-amuna" className="scroll-mt-24 p-6 md:p-10 rounded-2xl bg-[#1c1b1b] border border-[#353534] shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#353534] mb-8">
              <div className="flex items-start md:items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#353534] border border-[#353534] p-2 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                  <img
                    src={PORTFOLIO_IMAGES.logos.amunaOfficial}
                    alt="Adamjee Model United Nations Association Logo"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#ffb4a8]">
                      EXECUTIVE LEADERSHIP
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#920703]/30 border border-[#da291c]/60 text-[#ffdad4] text-[11px] font-semibold uppercase tracking-wider">
                      2022 – 2024
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl text-[#e5e2e1] font-bold tracking-tight uppercase">
                    ADAMJEE MODEL UNITED NATIONS ASSOCIATION (A-MUNA)
                  </h3>
                  <div className="mt-1 font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-extrabold uppercase tracking-wide text-[#dfc700] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#da291c] text-[24px]">workspace_premium</span>
                    <span>ORGANIZING SECRETARY</span>
                  </div>
                  <div className="text-xs text-[#ac8883] mt-0.5">
                    Adamjee Cantonment College
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#353534] border border-[#353534] text-[#e5e2e1] text-[11px] font-bold uppercase tracking-wider">
                  Adamjee Cantonment College
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#920703]/40 border border-[#da291c]/80 text-[#ffdad4] text-[11px] font-bold uppercase tracking-wider">
                  Tenure: 2022 – 2024
                </span>
              </div>
            </div>

            <div className="space-y-10">
              {/* Profile */}
              <div className="p-5 md:p-6 rounded-xl bg-[#1c1b1b] border border-[#353534] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#da291c]"></div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                  <span>ORGANIZATIONAL PROFILE &amp; OVERVIEW</span>
                </div>
                <p className="text-sm md:text-base text-[#e5e2e1] leading-relaxed">
                  Spearheaded the <span className="text-[#ffb4a8] font-bold">number one college MUN club</span> with delegation preparations, with <span className="text-[#dfc700] font-bold">record-breaking most best delegations</span>, and event management and organizing of <span className="text-[#ffb4a8] font-bold">first ever national MUN competition</span> organized by Adamjee Cantonment College.
                </p>
              </div>

              {/* Special Recognitions */}
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#dfc700] mb-4 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#dfc700]">military_tech</span>
                  <span>SPECIAL RECOGNITIONS</span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-6 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between group hover:border-[#da291c] transition-all">
                    <div className="flex items-start justify-between">
                      <div className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#dfc700] tracking-tight">
                        5
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-[#353534] flex items-center justify-center text-[#dfc700]">
                        <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        Best Delegations
                      </div>
                      <div className="text-xs text-[#ac8883] mt-1">
                        Record-setting collegiate achievements
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between group hover:border-[#da291c] transition-all">
                    <div className="flex items-start justify-between">
                      <div className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#ffb4a8] tracking-tight">
                        50+
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-[#353534] flex items-center justify-center text-[#ffb4a8]">
                        <span className="material-symbols-outlined text-[20px]">groups</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        Members Mentored
                      </div>
                      <div className="text-xs text-[#ac8883] mt-1">
                        Delegation training &amp; crisis coaching
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between group hover:border-[#dfc700] transition-all">
                    <div className="flex items-start justify-between">
                      <div className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#dfc700] tracking-tight">
                        5
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-[#353534] flex items-center justify-center text-[#dfc700]">
                        <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        Individual Awards
                      </div>
                      <div className="text-xs text-[#ac8883] mt-1">
                        Personal competitive accolades won
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between group hover:border-[#da291c] transition-all">
                    <div className="flex items-start justify-between">
                      <div className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl font-extrabold text-[#ffb4a8] tracking-tight leading-none mt-2">
                        EB Break
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-[#353534] flex items-center justify-center text-[#ffb4a8]">
                        <span className="material-symbols-outlined text-[20px]">verified</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        Within 1 Year
                      </div>
                      <div className="text-xs text-[#ac8883] mt-1">
                        Rapid collegiate leadership advancement
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects & Initiatives */}
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-4 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#ffb4a8]">rocket_launch</span>
                  <span>PROJECTS &amp; INITIATIVES</span>
                </div>

                <div className="space-y-6">
                  {/* AMUN Session I */}
                  <div className="p-6 md:p-8 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#da291c] text-[#fff5f3] text-[11px] font-bold uppercase tracking-wider">
                            Under Secretary General (USG) of Corporate Affairs
                          </span>
                          <span className="px-2.5 py-0.5 rounded bg-[#353534] border border-[#353534] text-[#dfc700] text-[11px] uppercase tracking-wider font-semibold">
                            National Conference
                          </span>
                          <span className="text-[11px] uppercase text-[#ac8883]">
                            Project 01
                          </span>
                        </div>
                        <h4 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight">
                          Adamjee Model United Nations (AMUN) Session I
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          'Served as the Under Secretary General (USG) of Corporate Affairs.',
                          'Organized the first ever national level MUN conference hosted by Adamjee Cantonment College in 2023.',
                          'Served as the lead of Corporate Affairs to facilitate the collaboration of sponsorship and partnerships with various organizations for the club and event management.',
                          'Contributed in other key areas including, Delegate Affairs, Academics, Hospitality, and Logistics.',
                        ].map((point, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#1c1b1b]/80 border border-[#353534]/60">
                            <span className="material-symbols-outlined text-[20px] text-[#ffb4a8] shrink-0 mt-0.5">
                              check_circle
                            </span>
                            <p className="text-sm md:text-base text-[#e5e2e1] leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-[#ac8883] mb-2 font-semibold">
                          Key Focus Areas &amp; Archival Portfolio
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { label: 'Corporate Affairs', icon: 'handshake' },
                            { label: 'Partnerships', icon: 'apartment' },
                            { label: 'Conference Organization', icon: 'gavel' },
                            { label: 'Logistics', icon: 'local_shipping' },
                            { label: 'Photographs & Banners Repository', icon: 'photo_camera' },
                          ].map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded bg-[#2a2a2a] border border-[#353534] text-xs font-medium text-[#e5e2e1] flex items-center gap-1.5">
                              <span className="material-symbols-outlined text-[14px] text-[#ffb4a8]">{tag.icon}</span>
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project 2 & 3 Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 md:p-8 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#920703]/40 border border-[#da291c]/80 text-[#ffdad4] text-[11px] font-bold uppercase tracking-wider">
                              Executive Board &amp; Organizing
                            </span>
                            <span className="text-[11px] uppercase text-[#ac8883]">
                              Project 02
                            </span>
                          </div>
                          <h4 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight">
                            Adamjee Intra Model United Nations (AIMUN) Session IV
                          </h4>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1c1b1b]/80 border border-[#353534]/60">
                            <span className="material-symbols-outlined text-[20px] text-[#ffb4a8] shrink-0 mt-0.5">check_circle</span>
                            <p className="text-sm text-[#e5e2e1] leading-relaxed">
                              Organized the fourth installment of the intra-college MUN conference while mentoring members.
                            </p>
                          </div>
                          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1c1b1b]/80 border border-[#353534]/60">
                            <span className="material-symbols-outlined text-[20px] text-[#ffb4a8] shrink-0 mt-0.5">check_circle</span>
                            <p className="text-sm text-[#e5e2e1] leading-relaxed">
                              Served as part of the Executive Board as Rapporteur in the SPECPOL committee.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-[#ac8883] mb-2 font-semibold">
                            Executive Roles &amp; Mentorship
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {['Executive Board (EB)', 'Rapporteur - SPECPOL', 'Intra-College MUN', 'Dossier & Records Ready'].map((item, i) => (
                              <span key={i} className="px-2.5 py-1 rounded bg-[#2a2a2a] border border-[#353534] text-xs font-medium text-[#e5e2e1]">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 rounded-xl bg-[#201f1f] border border-[#353534] shadow-md flex flex-col justify-between">
                      <div className="space-y-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#920703]/40 border border-[#da291c]/80 text-[#ffdad4] text-[11px] font-bold uppercase tracking-wider">
                              Intra-College Engagement
                            </span>
                            <span className="text-[11px] uppercase text-[#ac8883]">
                              Project 03
                            </span>
                          </div>
                          <h4 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl text-[#e5e2e1] font-bold tracking-tight">
                            Talent Hunt
                          </h4>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1c1b1b]/80 border border-[#353534]/60">
                            <span className="material-symbols-outlined text-[20px] text-[#ffb4a8] shrink-0 mt-0.5">check_circle</span>
                            <p className="text-sm text-[#e5e2e1] leading-relaxed">
                              Organized intra-college events as part of the talent hunt competition organized by Adamjee Cantonment College.
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-[#ac8883] mb-2 font-semibold">
                            Engagement Dimensions
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {['Event Organization', 'Intra-College Competitions', 'Talent Identification'].map((item, i) => (
                              <span key={i} className="px-2.5 py-1 rounded bg-[#2a2a2a] border border-[#353534] text-xs font-medium text-[#e5e2e1]">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Archives and Certifications */}
              <div className="pt-2 space-y-6">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#ffb4a8]">collections_bookmark</span>
                    <span>ARCHIVES &amp; GALLERY</span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-xl text-[#e5e2e1] font-bold tracking-tight">
                    EVENT ARCHIVES AND CERTIFICATIONS
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      id: 'amuna-photos',
                      title: 'EVENT PHOTOGRAPHS',
                      desc: 'Photographic archive of AMUN Session I, AIMUN IV, Talent Hunt, proceedings & Executive Board photography.',
                      badge: 'A-MUNA Visual Archive',
                      badgeColor: 'primary' as const,
                      subtitle: 'Adamjee Cantonment College • 2022–2024',
                      icon: 'photo_camera',
                      actionText: 'Open Gallery',
                      contentTitle: 'Diplomatic Photographic Repository Ready',
                      contentDesc: 'Photographs from AMUN Session I, AIMUN IV Executive Board, and Adamjee Cantonment College talent hunt sessions are indexed.',
                      tagText: 'Upload-Ready State • Adamjee Cantonment College',
                    },
                    {
                      id: 'amuna-leadership',
                      title: 'CERTIFICATE OF LEADERSHIP',
                      desc: 'Dedicated archive for Organizing Secretary executive leadership certificate at A-MUNA.',
                      badge: 'Tenure Recognition // 2022 – 2024',
                      badgeColor: 'tertiary' as const,
                      subtitle: 'Adamjee Model United Nations Association',
                      icon: 'workspace_premium',
                      actionText: 'View Certificate',
                      contentTitle: 'Certificate of Leadership Document Frame',
                      contentDesc: 'Official verification recognizing executive leadership and organizational directorship in Adamjee Model United Nations Association (2022 – 2024).',
                      tagText: 'Document Frame Active • Verified Tenure',
                    },
                    {
                      id: 'amuna-organizer',
                      title: 'CERTIFICATE OF ORGANIZER',
                      desc: 'Dedicated archive for conference organizing recognition (AMUN Session I Secretariat & AIMUN IV).',
                      badge: 'Conference Governance',
                      badgeColor: 'primary' as const,
                      subtitle: 'AMUN Session I & AIMUN IV',
                      icon: 'verified',
                      actionText: 'View Certificate',
                      contentTitle: 'Conference Organizer Citation Document Frame',
                      contentDesc: 'Recognizing operational leadership in organizing Adamjee Cantonment College\'s first national level MUN conference and internal session execution.',
                      tagText: 'Archive Ready • AMUN Session I Organizer Citation',
                    },
                    {
                      id: 'amuna-achievement',
                      title: 'CERTIFICATE OF ACHIEVEMENT',
                      desc: 'Dedicated archive for individual delegate awards, Best Delegate honors, and competitive distinctions.',
                      badge: 'Accolades & Honors',
                      badgeColor: 'outline' as const,
                      subtitle: 'Competitive Debate & MUN Distinctions',
                      icon: 'emoji_events',
                      actionText: 'View Documents',
                      contentTitle: 'Competitive Honors & Awards Dossier',
                      contentDesc: 'Official verification frame for Best Delegate honors at Adamjee Intra MUN Session III, diplomatic recognitions, and collegiate distinctions.',
                      tagText: 'Achievement Records Frame Ready',
                    },
                  ].map((card) => (
                    <button
                      key={card.id}
                      onClick={() => setActiveModal(card)}
                      className="group relative rounded-xl overflow-hidden border border-[#353534] bg-[#201f1f] hover:border-[#da291c] p-6 flex flex-col justify-between cursor-pointer transition-all hover:bg-[#2a2a2a] shadow-md text-left"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-[#353534] border border-[#353534] flex items-center justify-center text-[#ffb4a8] group-hover:bg-[#da291c] group-hover:text-[#fff5f3] transition-colors">
                          <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                        </div>
                        <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold tracking-wide group-hover:text-[#ffb4a8] transition-colors">
                          {card.title}
                        </div>
                        <p className="text-xs text-[#ac8883] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#353534] flex items-center justify-between text-[11px] uppercase font-bold text-[#ffb4a8] tracking-wider">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          {card.actionText}
                        </span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 03: FINACT (FLAGSHIP) ==================== */}
          <div id="org-finact" className="scroll-mt-24 p-6 md:p-10 rounded-2xl bg-[#1c1b1b] border border-[#da291c]/80 shadow-2xl relative overflow-hidden">
            {/* Top Header Card */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#353534] mb-8">
              <div className="flex items-start md:items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-[#353534] border border-[#da291c]/60 p-2 flex items-center justify-center shrink-0 shadow-md overflow-hidden">
                  <img
                    src={PORTFOLIO_IMAGES.logos.finactOfficial}
                    alt="FINACT Official Logo"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#ffb4a8]">
                      EXECUTIVE LEADERSHIP
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#920703]/30 border border-[#da291c]/60 text-[#ffdad4] text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                      CURRENT POSITION
                    </span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl text-[#e5e2e1] font-bold tracking-tight uppercase">
                    FINANCE AND ACCOUNTING CLUB OF BRAC UNIVERSITY (FINACT)
                  </h3>
                  <div className="mt-1 font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-extrabold uppercase tracking-wide text-[#dfc700] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#da291c] text-[24px]">workspace_premium</span>
                    <span>ASSISTANT DIRECTOR</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-xs text-[#ac8883] font-medium">BRAC UNIVERSITY</span>
                    <span className="text-[#ac8883]/60 text-xs">•</span>
                    <span className="text-xs text-[#ffb4a8] font-semibold uppercase tracking-wider">
                      DEPARTMENT OF MARKETING AND COMMUNICATIONS
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
                <span className="px-3.5 py-1.5 rounded-lg bg-[#353534] border border-[#353534] text-[#e5e2e1] text-[11px] font-bold uppercase tracking-wider">
                  BRAC University
                </span>
                <span className="px-3.5 py-1.5 rounded-lg bg-[#920703]/40 border border-[#da291c]/80 text-[#ffdad4] text-[11px] font-bold uppercase tracking-wider">
                  Tenure: 2026 – Present
                </span>
              </div>
            </div>

            <div className="space-y-10">
              {/* 1. LEADERSHIP PROGRESSION TIMELINE */}
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-4 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">timeline</span>
                  <span>LEADERSHIP PROGRESSION</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                  {/* Milestone 01 */}
                  <div className="p-5 rounded-xl bg-[#201f1f] border border-[#353534] flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] text-[#ac8883] uppercase tracking-widest font-semibold">
                          01 // MILESTONE
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#353534] text-[#ac8883] text-[10px] uppercase font-medium">
                          March 2026
                        </span>
                      </div>
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        GENERAL MEMBER
                      </div>
                      <p className="text-xs text-[#ac8883] mt-1 leading-relaxed">
                        Joined FINACT general member body and actively contributed to foundational club initiatives.
                      </p>
                    </div>
                  </div>

                  {/* Milestone 02 */}
                  <div className="p-5 rounded-xl bg-[#201f1f] border border-[#353534] flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] text-[#ffb4a8] uppercase tracking-widest font-semibold">
                          02 // ADVANCEMENT
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#353534] text-[#ac8883] text-[10px] uppercase font-medium">
                          July 2026
                        </span>
                      </div>
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        SENIOR EXECUTIVE
                      </div>
                      <p className="text-xs text-[#ac8883] mt-1 leading-relaxed">
                        Promoted to senior executive standing upon exceptional operational and collaborative delivery.
                      </p>
                    </div>
                  </div>

                  {/* Milestone 03: Current Assistant Director */}
                  <div className="p-5 rounded-xl bg-[#201f1f] border border-[#da291c]/80 ring-1 ring-[#da291c]/40 flex flex-col justify-between shadow-lg">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-0.5 rounded-full bg-[#920703]/40 border border-[#da291c]/60 text-[#ffdad4] text-[10px] uppercase font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                          CURRENT POSITION
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#353534] text-[#ffdad4] text-[10px] uppercase font-semibold">
                          November 2026
                        </span>
                      </div>
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#dfc700] font-bold">
                        ASSISTANT DIRECTOR
                      </div>
                      <p className="text-xs text-[#e6bdb7] mt-1 leading-relaxed">
                        Appointed Assistant Director directing Marketing &amp; Communications and leading flagship sponsorship tracks.
                      </p>
                    </div>
                  </div>

                  {/* Milestone 04: Prospective Governing Body */}
                  <div className="p-5 rounded-xl bg-[#201f1f]/60 border border-dashed border-[#ac8883]/40 flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] text-[#dfc700] uppercase tracking-widest font-semibold flex items-center gap-1">
                          <span>04 // PROSPECTIVE</span>
                          <span className="material-symbols-outlined text-[13px]">help_outline</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#353534] text-[#ac8883] text-[10px] uppercase font-medium">
                          2027
                        </span>
                      </div>
                      <div className="font-['Plus_Jakarta_Sans'] text-base text-[#ac8883] font-bold flex items-center gap-1.5">
                        <span>GOVERNING BODY</span>
                        <span className="material-symbols-outlined text-[16px] text-[#dfc700]" title="Anticipated">help</span>
                      </div>
                      <p className="text-xs text-[#ac8883] mt-1 leading-relaxed">
                        Anticipated fast-track pathway towards Governing Body leadership stewardship in 2027.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. ORGANIZATIONAL PROFILE & OVERVIEW */}
              <div className="p-5 md:p-6 rounded-xl bg-[#1c1b1b] border border-[#353534] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#da291c]"></div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
                  <span>ORGANIZATIONAL PROFILE &amp; OVERVIEW</span>
                </div>
                <p className="text-sm md:text-base text-[#e5e2e1] leading-relaxed">
                  Overseeing the corporate outreach, brand collaboration, event partnerships, club promotions, and other administrative duties, within BRAC University's premier Finance and Accounting Club. Gaining <span className="text-[#ffb4a8] font-bold">double promotion</span> from General Member to Senior Executive following stellar organizational impact, and presently serving as <span className="text-[#dfc700] font-bold">Assistant Director</span> with fast-tracked towards the <span className="text-[#ffb4a8] font-bold">Governing Body in 2027</span>, showing leadership and management prowess.
                </p>
              </div>

              {/* 3. PROJECTS AND INITIATIVES: FLAGSHIP ACCQUANTUM 2026 */}
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#dfc700] mb-4 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#dfc700]">rocket_launch</span>
                  <span>PROJECTS AND INITIATIVES</span>
                </div>

                <div className="p-6 md:p-8 rounded-2xl bg-[#201f1f] border border-[#353534] shadow-lg space-y-8">
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#353534]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#da291c] text-[#fff5f3] text-[11px] font-bold uppercase tracking-wider">
                          Flagship Project
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-[#353534] border border-[#353534] text-[#dfc700] text-[11px] uppercase tracking-wider font-semibold">
                          National Competition
                        </span>
                        <span className="text-[11px] uppercase text-[#ac8883]">
                          October 2026
                        </span>
                      </div>
                      <h4 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl text-[#e5e2e1] font-bold tracking-tight">
                        ACCQUANTUM 2026
                      </h4>
                      <p className="text-sm md:text-base text-[#ffb4a8] font-medium mt-1">
                        BRAC University's first-ever national Accounting Case Competition.
                      </p>
                    </div>
                    <div className="px-3.5 py-1.5 rounded-lg bg-[#353534] border border-[#353534] text-[#e6bdb7] text-[11px] uppercase font-semibold">
                      Leadership: Sponsorship • Judge • Host
                    </div>
                  </div>

                  {/* Pillar A: SPONSORSHIP AND PARTNERSHIPS */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#da291c]"></span>
                      <h5 className="font-['Plus_Jakarta_Sans'] text-lg md:text-xl text-[#e5e2e1] font-bold tracking-tight uppercase">
                        A. SPONSORSHIP AND PARTNERSHIPS
                      </h5>
                    </div>
                    <div className="space-y-2 text-sm text-[#ac8883] leading-relaxed">
                      <p>
                        Served as the Leader of Sponsorship and Partnerships department of the first-ever accounting case competition organized by BRAC University in October 2026.
                      </p>
                      <p>
                        Secured sponsorships and partnerships with various key organizations, most notably:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-[#2a2a2a] border border-[#da291c]/60 shadow-md flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#0e0e0e] flex items-center justify-center text-[#ffb4a8]">
                            <span className="material-symbols-outlined text-[22px]">menu_book</span>
                          </div>
                          <div>
                            <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                              ACCA Bangladesh
                            </div>
                            <div className="text-xs text-[#ac8883]">
                              Chartered Professional Accounting Body
                            </div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#920703]/40 text-[#ffdad4] text-[10px] uppercase font-bold">
                          Knowledge Partner
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#2a2a2a] border border-[#dfc700]/60 shadow-md flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#0e0e0e] flex items-center justify-center text-[#dfc700]">
                            <span className="material-symbols-outlined text-[22px]">workspace_premium</span>
                          </div>
                          <div>
                            <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                              HeadStart
                            </div>
                            <div className="text-xs text-[#ac8883]">
                              Professional Accountancy Services
                            </div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#c1ac00]/30 text-[#dfc700] text-[10px] uppercase font-bold">
                          Bronze Sponsor
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#ac8883] mb-2">
                        Other notable Partners
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'The Business Standard',
                          'Markedium',
                          'Savoy',
                          'Mahwush',
                          'Vivien Lifestyle',
                          'Radio Carnival',
                          'Dhaka FM 90.4',
                        ].map((partner, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-lg bg-[#2a2a2a] border border-[#353534] text-[#e5e2e1] text-xs font-medium">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pillar B: JUDGE MANAGEMENT */}
                  <div className="space-y-4 pt-6 border-t border-[#353534]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#dfc700]"></span>
                      <h5 className="font-['Plus_Jakarta_Sans'] text-lg md:text-xl text-[#e5e2e1] font-bold tracking-tight uppercase">
                        B. JUDGE MANAGEMENT
                      </h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-3 p-4 rounded-xl bg-[#2a2a2a] border border-[#353534] text-center flex flex-col justify-center items-center">
                        <div className="font-['Plus_Jakarta_Sans'] text-4xl md:text-5xl font-extrabold text-[#dfc700] leading-none">
                          25
                        </div>
                        <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold mt-1">
                          Judges Secured
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-[#ac8883] mt-0.5">
                          Across All 3 Rounds
                        </div>
                      </div>
                      <div className="md:col-span-9 space-y-2 text-sm text-[#ac8883] leading-relaxed">
                        <p>
                          Secured <span className="text-[#dfc700] font-bold">25 judges</span> for all three rounds of ACCQUANTUM 2026, ensuring representation from various accounting professionals.
                        </p>
                        <p>
                          Collaborated with <span className="text-[#e5e2e1] font-medium">ACCA Bangladesh</span> and <span className="text-[#e5e2e1] font-medium">HeadStart</span> in securing judges, experts, calibrators, case formation, and solution packs for the event.
                        </p>
                      </div>
                    </div>

                    {/* Distinguished Guests */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-[#dfc700]">gavel</span>
                        <span>DISTINGUISHED GRAND FINALE GUESTS</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-[#2a2a2a] border border-[#da291c]/70 shadow-md">
                          <span className="px-2 py-0.5 rounded bg-[#da291c] text-[#fff5f3] text-[10px] uppercase font-bold">
                            CHIEF GUEST
                          </span>
                          <h6 className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold mt-2">
                            Mr. Masud Khan
                          </h6>
                          <p className="text-xs text-[#dfc700] font-medium mt-0.5">Chairman</p>
                          <p className="text-xs text-[#ac8883] mt-0.5">
                            Bangladesh Securities and Exchange Commission (BSEC)
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#2a2a2a] border border-[#353534] shadow-md">
                          <span className="px-2 py-0.5 rounded bg-[#353534] text-[#dfc700] text-[10px] uppercase font-bold">
                            SPECIAL GUEST
                          </span>
                          <h6 className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold mt-2">
                            Mr. Md. Kausar Alam, FCMA
                          </h6>
                          <p className="text-xs text-[#ffb4a8] font-medium mt-0.5">President</p>
                          <p className="text-xs text-[#ac8883] mt-0.5">
                            Institute of Cost and Management Accountants of Bangladesh (ICMAB)
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-[#2a2a2a] border border-[#353534] shadow-md">
                          <span className="px-2 py-0.5 rounded bg-[#353534] text-[#dfc700] text-[10px] uppercase font-bold">
                            SPECIAL GUEST
                          </span>
                          <h6 className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold mt-2">
                            Mrs. Prawma Tapashi Khan
                          </h6>
                          <p className="text-xs text-[#ffb4a8] font-medium mt-0.5">Country Manager</p>
                          <p className="text-xs text-[#ac8883] mt-0.5">
                            ACCA Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pillar C: HOST MANAGEMENT */}
                  <div className="space-y-4 pt-6 border-t border-[#353534]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#da291c]"></span>
                      <h5 className="font-['Plus_Jakarta_Sans'] text-lg md:text-xl text-[#e5e2e1] font-bold tracking-tight uppercase">
                        C. HOST MANAGEMENT
                      </h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-[#2a2a2a] border border-[#353534] flex items-start gap-3">
                        <span className="material-symbols-outlined text-[24px] text-[#ffb4a8] shrink-0 mt-0.5">
                          campaign
                        </span>
                        <div>
                          <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                            Nationwide Roadshows Co-Hosting
                          </div>
                          <p className="text-sm text-[#ac8883] mt-1 leading-relaxed">
                            Co-hosted various roadshows at various universities during ACCQUANTUM 2026, leading promotional briefings and collegiate engagement.
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-[#2a2a2a] border border-[#353534] flex items-start gap-3">
                        <span className="material-symbols-outlined text-[24px] text-[#dfc700] shrink-0 mt-0.5">
                          co_present
                        </span>
                        <div>
                          <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                            Workshop 1 &amp; Opening Ceremony
                          </div>
                          <p className="text-sm text-[#ac8883] mt-1 leading-relaxed">
                            Co-hosted the Workshop 1 and Opening Ceremony of ACCQUANTUM 2026, coordinating protocol, speaker introductions, and participant facilitation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. OTHER CONTRIBUTIONS */}
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-4 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#ffb4a8]">assignment</span>
                  <span>OTHER CONTRIBUTIONS</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[#201f1f] border border-[#353534] flex flex-col justify-between shadow-sm group hover:border-[#da291c] transition-all">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#353534] flex items-center justify-center text-[#ffb4a8] mb-3">
                        <span className="material-symbols-outlined text-[22px]">credit_card</span>
                      </div>
                      <h6 className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        DBBL Prepaid Card Campaign
                      </h6>
                      <p className="text-xs text-[#ac8883] mt-1.5 leading-relaxed">
                        Contributed in the Dutch Bangla Bank-BRAC University Prepaid Card Campaign driving student adoption.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#201f1f] border border-[#353534] flex flex-col justify-between shadow-sm group hover:border-[#da291c] transition-all">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#353534] flex items-center justify-center text-[#dfc700] mb-3">
                        <span className="material-symbols-outlined text-[22px]">celebration</span>
                      </div>
                      <h6 className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        FINTRO Ceremony
                      </h6>
                      <p className="text-xs text-[#ac8883] mt-1.5 leading-relaxed">
                        Co-hosted and organized FINTRO, the freshers connect ceremony of FINACT welcoming incoming students.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-[#201f1f] border border-[#353534] flex flex-col justify-between shadow-sm group hover:border-[#da291c] transition-all">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#353534] flex items-center justify-center text-[#e6bdb7] mb-3">
                        <span className="material-symbols-outlined text-[22px]">domain</span>
                      </div>
                      <h6 className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold">
                        Industry Visits
                      </h6>
                      <p className="text-xs text-[#ac8883] mt-1.5 leading-relaxed">
                        Attended industry visits to VISA and Western Marine LTD for experiential financial exposure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. FINACT Archives & Certifications */}
              <div className="pt-2 space-y-6">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#ac8883] mb-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#ffb4a8]">collections_bookmark</span>
                    <span>ARCHIVES &amp; GALLERY</span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] text-xl text-[#e5e2e1] font-bold tracking-tight">
                    EVENT ARCHIVES AND CERTIFICATIONS
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      id: 'finact-photos',
                      title: 'EVENT PHOTOGRAPHS',
                      desc: 'ACCQUANTUM 2026, roadshows, Workshop 1, Grand Finale, FINTRO, DBBL campaign, and industry visits.',
                      badge: 'FINACT Visual Archive',
                      badgeColor: 'primary' as const,
                      subtitle: 'BRAC University FINACT • 2026',
                      icon: 'photo_camera',
                      actionText: 'Open Gallery',
                      contentTitle: 'Photographic Records Repository Ready',
                      contentDesc: 'High-resolution gallery indexing roadshow sessions across universities, executive judge panel sessions, and grand finale ceremony.',
                      tagText: 'Upload-Ready State • BRAC University FINACT',
                    },
                    {
                      id: 'finact-leadership',
                      title: 'CERTIFICATE OF LEADERSHIP',
                      desc: 'Dedicated archive for Assistant Director and executive leadership certificates and appointments within FINACT.',
                      badge: 'Tenure Recognition // 2026 – Present',
                      badgeColor: 'tertiary' as const,
                      subtitle: 'Finance and Accounting Club of BRAC University',
                      icon: 'workspace_premium',
                      actionText: 'View Certificate',
                      contentTitle: 'Executive Leadership Document Frame',
                      contentDesc: 'Official verification acknowledging directorship in Marketing & Communications and leadership progression from Senior Executive to Assistant Director.',
                      tagText: 'Document Frame Active • Verified FINACT Directorship',
                    },
                    {
                      id: 'finact-organizer',
                      title: 'CERTIFICATE OF ORGANIZER',
                      desc: 'Dedicated archive for organizing ACCQUANTUM 2026, university roadshows, Workshop 1, and club sessions.',
                      badge: 'Competition Governance',
                      badgeColor: 'primary' as const,
                      subtitle: 'ACCQUANTUM 2026 Organizer Citation',
                      icon: 'verified',
                      actionText: 'View Certificate',
                      contentTitle: 'National Case Competition Organizer Citation',
                      contentDesc: 'Recognizing operational and partnership execution for BRAC University\'s inaugural national accounting competition.',
                      tagText: 'Archive Ready • ACCQUANTUM 2026 Organizer',
                    },
                    {
                      id: 'finact-achievement',
                      title: 'CERTIFICATE OF ACHIEVEMENT',
                      desc: 'Accolades, Best Volunteer citation, departmental distinctions, and executive appreciation records.',
                      badge: 'Honors & Commendations',
                      badgeColor: 'outline' as const,
                      subtitle: 'Distinctions & Commendations',
                      icon: 'emoji_events',
                      actionText: 'View Documents',
                      contentTitle: 'Excellence & Distinction Citation Frame',
                      contentDesc: 'Official verification frame for Best Volunteer commendation, exceptional corporate sponsorship delivery, and institutional distinction.',
                      tagText: 'Achievement Records Frame Ready',
                    },
                  ].map((card) => (
                    <button
                      key={card.id}
                      onClick={() => setActiveModal(card)}
                      className="group relative rounded-xl overflow-hidden border border-[#353534] bg-[#201f1f] hover:border-[#da291c] p-6 flex flex-col justify-between cursor-pointer transition-all hover:bg-[#2a2a2a] shadow-md text-left"
                    >
                      <div className="space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-[#353534] border border-[#353534] flex items-center justify-center text-[#ffb4a8] group-hover:bg-[#da291c] group-hover:text-[#fff5f3] transition-colors">
                          <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                        </div>
                        <div className="font-['Plus_Jakarta_Sans'] text-base text-[#e5e2e1] font-bold tracking-wide group-hover:text-[#ffb4a8] transition-colors">
                          {card.title}
                        </div>
                        <p className="text-xs text-[#ac8883] leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-[#353534] flex items-center justify-between text-[11px] uppercase font-bold text-[#ffb4a8] tracking-wider">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          {card.actionText}
                        </span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal?.title || ''}
        badge={activeModal?.badge}
        badgeColor={activeModal?.badgeColor}
        subtitle={activeModal?.subtitle}
      >
        <p className="text-sm text-[#ac8883] leading-relaxed">
          {activeModal?.desc}
        </p>

        <div className="rounded-xl border border-[#353534] bg-[#201f1f] p-8 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#353534] flex items-center justify-center text-[#ffb4a8] mb-3">
            <span className="material-symbols-outlined text-[32px]">
              {activeModal?.icon}
            </span>
          </div>
          <div className="font-['Plus_Jakarta_Sans'] text-lg text-[#e5e2e1] font-bold">
            {activeModal?.contentTitle}
          </div>
          <p className="text-xs text-[#ac8883] mt-1.5 max-w-md leading-relaxed">
            {activeModal?.contentDesc}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#920703]/30 border border-[#da291c]/60 text-[#ffdad4] text-[11px] uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
            <span>{activeModal?.tagText}</span>
          </div>
        </div>
      </Modal>
    </section>
  );
};
