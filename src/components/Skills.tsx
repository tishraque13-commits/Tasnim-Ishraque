import React from 'react';

export const Skills: React.FC = () => {
  const technicalSkills = [
    'MS Word',
    'MS Excel',
    'PowerPoint',
    'Canva',
    'Google Workspace',
    'Microsoft Power BI',
    'SPSS',
    'Orange ML Mining',
    'Adobe Illustrator',
    'Adobe Photoshop',
  ];

  const professionalSkills = [
    'Financial Valuation',
    'Capital Budgeting',
    'Cost of Capital',
    'Financial Statement Analysis',
    'Ratio Analysis',
    'Academic Research',
    'Public Speaking',
    'Graphic Designing',
    'Organizational Leadership',
    'Documentation, Proofreading, and Editing',
  ];

  return (
    <section id="skills" className="w-full bg-[#0e0e0e] py-20 scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="mb-14">
          <div className="text-[11px] font-semibold text-[#da291c] uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#da291c] animate-pulse"></span>
            <span>EXPERTISE OVERVIEW</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl uppercase tracking-tight text-[#e5e2e1] font-bold">
            SKILLS &amp; Attributes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#1c1b1b] border border-[#353534] flex flex-col shadow-md">
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#353534] mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#da291c]"></span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg md:text-xl uppercase tracking-wider text-[#e5e2e1] font-bold">
                TECHNICAL SKILLS
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 rounded bg-[#201f1f] border border-[#353534] text-[#e5e2e1] text-xs md:text-sm font-medium hover:border-[#da291c] hover:text-[#ffb4a8] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#1c1b1b] border border-[#353534] flex flex-col shadow-md">
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#353534] mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#da291c]"></span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg md:text-xl uppercase tracking-wider text-[#e5e2e1] font-bold">
                PROFESSIONAL SKILLS
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {professionalSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 rounded bg-[#201f1f] border border-[#353534] text-[#e5e2e1] text-xs md:text-sm font-medium hover:border-[#da291c] hover:text-[#ffb4a8] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
