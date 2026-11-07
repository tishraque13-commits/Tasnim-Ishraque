import React, { useState, useEffect } from 'react';
import { CV_URL } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'document' | 'pdf'>('document');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#0e0e0e]/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-5xl h-[94vh] rounded-2xl bg-[#1c1b1b] border border-[#353534] shadow-2xl flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-[#353534] bg-[#131313] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#da291c] text-[#fff5f3] flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[20px]">badge</span>
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-base md:text-lg font-bold text-[#e5e2e1] leading-tight">
                Tasnim Ishraque — Executive Curriculum Vitae
              </h3>
              <p className="text-xs text-[#ac8883]">
                BRAC University • BBA in Finance &amp; Business Analytics (CGPA 3.97)
              </p>
            </div>
          </div>

          {/* Controls & Mode Switcher */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-lg bg-[#201f1f] border border-[#353534] p-0.5 text-xs font-semibold">
              <button
                onClick={() => setViewMode('document')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'document'
                    ? 'bg-[#da291c] text-[#fff5f3]'
                    : 'text-[#ac8883] hover:text-[#e5e2e1]'
                }`}
              >
                Executive Document
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#da291c] text-[#fff5f3]'
                    : 'text-[#ac8883] hover:text-[#e5e2e1]'
                }`}
              >
                PDF View
              </button>
            </div>

            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2a2a2a] hover:bg-[#353534] text-[#e5e2e1] text-xs font-semibold uppercase tracking-wider transition-all"
              title="Open raw PDF file in new browser tab"
            >
              <span>Open PDF</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="px-3 py-1.5 rounded-lg bg-[#2a2a2a] hover:bg-[#da291c] hover:text-[#fff5f3] text-[#e5e2e1] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              Close [×]
            </button>
          </div>
        </div>

        {/* Viewport Content */}
        {viewMode === 'pdf' ? (
          <div className="flex-1 w-full bg-[#131313] p-1 sm:p-2 relative flex flex-col">
            <iframe
              src={`${CV_URL}#toolbar=1&navpanes=0`}
              title="Tasnim Ishraque Curriculum Vitae PDF"
              className="w-full flex-1 rounded-xl border border-[#353534]/50 bg-white"
            />
          </div>
        ) : (
          <div className="flex-1 w-full overflow-y-auto bg-[#0e0e0e] p-4 sm:p-8">
            {/* Authentic White Paper Format CV */}
            <div className="max-w-[850px] mx-auto bg-white text-[#111111] p-6 sm:p-12 rounded-xl shadow-2xl font-serif text-[14px] leading-relaxed border border-[#353534]/20">
              
              {/* Header */}
              <div className="text-center pb-4 border-b-2 border-black/80">
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide font-sans text-black">
                  Tasnim Ishraque
                </h1>
                <p className="text-xs sm:text-sm text-gray-700 mt-1">
                  B-C, R-04, H-26, Banasree, Rampura, Dhaka-1219, Bangladesh &nbsp;|&nbsp; +880 1624-746160
                </p>
                <p className="text-xs sm:text-sm text-gray-800 font-medium mt-0.5">
                  <a href="mailto:tasnim.ishraque@g.bracu.ac.bd" className="text-blue-700 hover:underline">
                    tasnim.ishraque@g.bracu.ac.bd
                  </a>
                  &nbsp;|&nbsp; BRACU Student ID: <strong>24304417</strong>
                </p>
              </div>

              {/* Objective */}
              <div className="mt-5">
                <h2 className="text-sm font-bold uppercase tracking-wider font-sans border-b border-black/40 pb-0.5 text-black">
                  Objective
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-gray-800 leading-normal text-justify">
                  Aspiring professional with a strong interest in Finance and Business Analytics, committed to accomplishing challenges in both academic and professional spheres. Possessing skills and experience in leadership, team management, analysis, and organizing, I aspire to demonstrate reliability, integrity, and resilience to ensure collaboration and team success through my strong work ethic and positive attitude.
                </p>
              </div>

              {/* Education */}
              <div className="mt-5">
                <h2 className="text-sm font-bold uppercase tracking-wider font-sans border-b border-black/40 pb-0.5 text-black">
                  Education
                </h2>
                <div className="mt-2 space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline font-sans font-bold text-xs sm:text-sm">
                      <span>Bachelor of Business Administration — BRAC University</span>
                      <span className="font-normal italic text-xs">May 2024 – Present</span>
                    </div>
                    <div className="text-xs italic text-gray-600">Kha 224 Bir Uttam Rafiqul Islam Ave, Dhaka-1212, Bangladesh</div>
                    <div className="text-xs font-semibold text-gray-900 mt-0.5">
                      Dual Major: Finance and Business Analytics and Information Systems (BAIS) | Minor: Accounting
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-0.5">
                      <li>CGPA <strong>3.97</strong> out of 4.00 (end of 7th / Summer 2026 semester)</li>
                      <li><strong>90 / 148</strong> credits completed (<strong>102 / 148</strong> by 8th / Fall 2026 semester)</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-sans font-bold text-xs sm:text-sm">
                      <span>Higher Secondary Certificate — Adamjee Cantonment College</span>
                      <span className="font-normal italic text-xs">Passed 2023</span>
                    </div>
                    <div className="text-xs italic text-gray-600">Dhaka Cantonment, Dhaka-1206</div>
                    <ul className="list-disc list-inside text-xs text-gray-800 mt-0.5">
                      <li>Business Studies Group, GPA 5.00</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-sans font-bold text-xs sm:text-sm">
                      <span>Secondary School Certificate — Ideal School and College</span>
                      <span className="font-normal italic text-xs">Passed 2021</span>
                    </div>
                    <div className="text-xs italic text-gray-600">Banasree Branch, Dhaka-1219</div>
                    <ul className="list-disc list-inside text-xs text-gray-800 mt-0.5">
                      <li>Science Group, GPA 5.00</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mt-5">
                <h2 className="text-sm font-bold uppercase tracking-wider font-sans border-b border-black/40 pb-0.5 text-black">
                  Experience
                </h2>
                <div className="mt-2 space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline font-sans font-bold text-xs sm:text-sm">
                      <span>Student Tutor (ST), BRAC Business School</span>
                      <span className="font-normal italic text-xs">2026 – Present</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-0.5">
                      <li>Appointed as a <strong>Student Tutor (ST)</strong> at BRAC Business School, BRAC University, in <strong>October 2026</strong> as an undergraduate student of Bachelor of Business Administration</li>
                      <li>Assist and support faculty members <strong>15 hours weekly</strong> with academic activities and support students’ learning</li>
                      <li>Contribute <strong>7.5 hours weekly</strong> in desk duty and <strong>1 hour weekly</strong> in the Tutorial sessions</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-sans font-bold text-xs sm:text-sm">
                      <span>Co-Founder, Pixobyte Graphics</span>
                      <span className="font-normal italic text-xs">2020 – 2023</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-0.5">
                      <li>Co-founded and managed an <strong>online graphic-design medium</strong>, PixoByte Graphics, overseeing operations, finance, and business development</li>
                      <li>Progressed from <strong>Head of Finance to Chief Executive</strong>, managing financial and operational activities</li>
                      <li>Managed client and project coordination and organizational growth, overseeing domestic and international clients</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Extracurricular Activities */}
              <div className="mt-5">
                <h2 className="text-sm font-bold uppercase tracking-wider font-sans border-b border-black/40 pb-0.5 text-black">
                  Extracurricular Activities
                </h2>
                <div className="mt-2 space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline font-sans font-bold text-xs sm:text-sm">
                      <span>Assistant Director, Finance and Accounting Club of BRAC University (FINACT)</span>
                      <span className="font-normal italic text-xs">2026 – Present</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-0.5">
                      <li>Earned <strong>Double Promotion</strong> to Senior Executive from General Member of the Marketing and Communications department in July 2026, and received promotion to <strong>Assistant Director</strong> in November 2026</li>
                      <li>Organized <strong>ACCQUANTUM 2026</strong>, BRAC University’s first and FINACT’s flagship Accounting Case Competition from September 2026 to October 2026</li>
                      <li><strong>Led the Sponsorship and Partnerships Department</strong> of ACCQUANTUM 2026 by securing various sponsorships and Partnerships and mentored the members of the department</li>
                      <li>Contributed to the <strong>Judge Management Department of ACCQUANTUM 2026</strong> with communicating and coordinating Judges from renowned Organizations for all rounds of the competition</li>
                      <li>Contributed to the <strong>Hosting Department of ACCQUANTUM 2026</strong> with hosting various Roadshows for the event and as the <strong>Host of Workshop 01 of ACCQUANTUM 2026</strong> held at BRAC University</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-sans font-bold text-xs sm:text-sm">
                      <span>Organizing Secretary, Adamjee Model United Nations Association (A-MUNA)</span>
                      <span className="font-normal italic text-xs">2022 – 2024</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-0.5">
                      <li>Appointed as <strong>Organizing Secretary (Core Panel)</strong> for the 2023–2024 session</li>
                      <li>Led Adamjee Model United Nations Association to <strong>5 Best Delegation awards</strong> from 2022–2023</li>
                      <li>Organized Adamjee Model United Nations Session I as <strong>Under Secretary General (USG) of Corporate Affairs</strong>, February 16–18, 2023</li>
                      <li>Mentored 50+ club members in organizational leadership and management responsibilities, and organized various inter-college events from 2023–2024</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-sans font-bold text-xs sm:text-sm">
                      <span>Organizing Secretary, Ideal English Language Club (IELC)</span>
                      <span className="font-normal italic text-xs">2019 – 2022</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-800 mt-1 space-y-0.5">
                      <li>Appointed as <strong>Organizing Secretary</strong> for the 2020–2021 session</li>
                      <li>Organized the 3rd Ideal English Language Club National English Language Carnival, 2019</li>
                      <li>Mentored 70+ club members across 3 school branches in organizational leadership and management responsibilities, and organized various inter-school events from 2020–2022</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Papers */}
              <div className="mt-5">
                <h2 className="text-sm font-bold uppercase tracking-wider font-sans border-b border-black/40 pb-0.5 text-black">
                  Papers &amp; Publications
                </h2>
                <div className="mt-2 text-xs text-gray-800 leading-normal">
                  <p>
                    Disha, N. A., Shawrin, T. S., Oara, H. I., Megh, A. A., Punno, S. R., &amp; <strong>Ishraque, T.</strong> (2026). The Impact of Artificial Intelligence Dependency on Critical Thinking Skills and Intellectual Curiosity Among University Students in Bangladesh. In <em>Proceedings of the International Conference on Artificial Intelligence, Digital Transformation, Higher Education Advancement, and Business Analytics 2026</em> (p. 23).
                  </p>
                  <a 
                    href="https://www.linkedin.com/posts/international-conference-on-ai-dt-higher-education-advancement-business-analytics-2026_conferance-booklet-activity-7501153128357163008-07qC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline text-[11px] block mt-1"
                  >
                    View Conference Booklet Activity ↗
                  </a>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-5">
                <h2 className="text-sm font-bold uppercase tracking-wider font-sans border-b border-black/40 pb-0.5 text-black">
                  Achievements &amp; Awards
                </h2>
                <ul className="mt-2 list-disc list-inside text-xs text-gray-800 space-y-1">
                  <li><strong>Best Volunteer of ACCQUANTUM 2026</strong>, BRAC University’s first and Finance and Accounting Club of BRAC University’s flagship national accounting competition</li>
                  <li><strong>Best Student Paper</strong> (Track: Business and Management Studies) at the International Conference on AI, DT, Higher Education Advancement &amp; Business Analytics 2026, issued by <strong>Rochester Institute of Technology, Dubai (RIT Dubai)</strong> and <strong>Daffodil International University (RAK Campus, UAE)</strong></li>
                  <li>Recipient of the <strong>Duke of Edinburgh's International Bronze Award</strong> for 2025</li>
                  <li><strong>Semi-Finalist</strong> of EconProdigy 7.0, organized by NSU Young Economists' Forum (NSU YEF), 2025</li>
                  <li><strong>Rapporteur</strong>, UNGA Fourth Committee – SPECPOL, Adamjee Intra Model United Nations Session IV, 2024</li>
                  <li><strong>Special Mention</strong>, Delhi Public School International Model United Nations Session VI, 2023</li>
                  <li><strong>Best Delegate</strong>, Sunnydale Model United Nations Session II, 2022</li>
                  <li><strong>Special Mention</strong>, North South University International Model United Nations, 2022</li>
                  <li><strong>Outstanding Strategist</strong>, Oxford International School Model United Nations, 2022</li>
                  <li><strong>Best Delegate</strong>, Adamjee Intra Model United Nations Session III, 2022</li>
                </ul>
              </div>

              {/* Skills */}
              <div className="mt-5">
                <h2 className="text-sm font-bold uppercase tracking-wider font-sans border-b border-black/40 pb-0.5 text-black">
                  Skills &amp; Attributes
                </h2>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="border border-gray-300 p-2.5 rounded bg-gray-50">
                    <span className="font-bold font-sans text-gray-900 block mb-1">Technical / Software</span>
                    <p className="text-gray-700">Microsoft Office 365 (Word, Excel, PowerPoint), Google Workspace, Microsoft Power BI, SPSS, Orange Data Mining, Adobe Photoshop, Adobe Illustrator, Canva</p>
                  </div>
                  <div className="border border-gray-300 p-2.5 rounded bg-gray-50">
                    <span className="font-bold font-sans text-gray-900 block mb-1">Professional Attributes</span>
                    <p className="text-gray-700">Financial Valuation, Capital Budgeting, Financial Statement Analysis, Academic Research, Public Speaking, Graphic Designing, Organizational Leadership, Documentation &amp; Editing</p>
                  </div>
                </div>
              </div>

              {/* References */}
              <div className="mt-5 pt-2">
                <h2 className="text-sm font-bold uppercase tracking-wider font-sans border-b border-black/40 pb-0.5 text-black">
                  References
                </h2>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <p className="font-bold text-gray-900">Dr. Riyashad Ahmed</p>
                    <p className="text-gray-600">Assistant Dean of Graduate Programs, Associate Professor of Finance</p>
                    <p className="text-gray-600">BRAC Business School</p>
                    <a href="mailto:riyashad@bracu.ac.bd" className="text-blue-700 hover:underline">riyashad@bracu.ac.bd</a>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">Suman Paul Chowdhury, PhD</p>
                    <p className="text-gray-600">Associate Professor, Accounting</p>
                    <p className="text-gray-600">BRAC Business School</p>
                    <a href="mailto:spc@bracu.ac.bd" className="text-blue-700 hover:underline">spc@bracu.ac.bd</a>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">Raqibul Faiaze Mohammad Ikramah</p>
                    <p className="text-gray-600">FCCA, CPA • Head of Financial Accounting &amp; Reporting, Grameenphone</p>
                    <p className="text-gray-600">Vice Chair, MAC, ACCA Bangladesh</p>
                    <a href="mailto:Raqibul.faiaze@grameenphone.com" className="text-blue-700 hover:underline">Raqibul.faiaze@grameenphone.com</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};
