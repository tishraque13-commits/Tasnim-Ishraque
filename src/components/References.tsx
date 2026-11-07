import React from 'react';

export const References: React.FC = () => {
  const references = [
    {
      num: 'REFERENCE 01',
      icon: 'school',
      iconColor: 'primary',
      name: 'Dr. Riyashad Ahmed',
      titles: [
        'Assistant Dean of Graduate Programs (MBA & EMBA)',
        'Associate Professor of Finance',
      ],
      org: 'BRAC Business School, BRAC University',
      email: 'riyashad@bracu.ac.bd',
    },
    {
      num: 'REFERENCE 02',
      icon: 'account_balance',
      iconColor: 'tertiary',
      name: 'Suman Paul Chowdhury, PhD',
      titles: [
        'Associate Professor, Accounting',
      ],
      org: 'BRAC Business School, BRAC University',
      email: 'spc@bracu.ac.bd',
    },
    {
      num: 'REFERENCE 03',
      icon: 'business_center',
      iconColor: 'primary',
      name: 'Raqibul Faiaze Mohammad Ikramah, FCCA, CPA',
      titles: [
        'Head of Financial Accounting and Reporting and Deputy Director, Grameenphone',
        'Vice Chair, Members Advisory Committee (MAC), ACCA Bangladesh',
      ],
      org: 'Grameenphone & ACCA Bangladesh',
      email: 'Raqibul.faiaze@grameenphone.com',
    },
  ];

  return (
    <section id="references" className="w-full bg-[#131313] py-20 scroll-mt-24 border-t border-[#353534]/40">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#da291c] mb-2 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>VERIFIED ENDORSEMENTS // ACADEMIC &amp; CORPORATE</span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl md:text-4xl text-[#e5e2e1] font-bold tracking-tight uppercase">
              REFERENCES
            </h2>
            <p className="text-sm md:text-base text-[#ac8883] mt-1 max-w-xl">
              Academic and Professional References
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a2a2a] text-[#ac8883] text-[11px] uppercase tracking-wider font-semibold self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#dfc700]"></span>
            <span>Direct Academic &amp; Industry Verification</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 rounded-xl bg-[#1c1b1b] border border-[#353534] flex flex-col justify-between shadow-md transition-all duration-300 group ${
                ref.iconColor === 'tertiary'
                  ? 'hover:border-[#dfc700]/80'
                  : 'hover:border-[#da291c]/80'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-xl bg-[#353534] border border-[#353534] flex items-center justify-center transition-colors shadow-sm ${
                      ref.iconColor === 'tertiary'
                        ? 'text-[#dfc700] group-hover:bg-[#dfc700] group-hover:text-[#131313]'
                        : 'text-[#ffb4a8] group-hover:bg-[#da291c] group-hover:text-[#fff5f3]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">
                      {ref.icon}
                    </span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      ref.iconColor === 'tertiary'
                        ? 'bg-[#353534] text-[#dfc700]'
                        : 'bg-[#353534] text-[#ffb4a8]'
                    }`}
                  >
                    {ref.num}
                  </span>
                </div>

                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-white font-bold tracking-tight">
                    {ref.name}
                  </h3>
                  <div className="mt-2 space-y-1">
                    {ref.titles.map((title, i) => (
                      <p
                        key={i}
                        className="text-xs text-[#dfc700] font-semibold leading-snug"
                      >
                        {title}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs text-[#ac8883] mt-2 leading-relaxed">
                    {ref.org}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#353534]">
                <a
                  href={`mailto:${ref.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#e5e2e1] hover:text-[#ffb4a8] transition-colors py-1 group/link"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#ffb4a8] group-hover/link:text-[#da291c] transition-colors">
                    mail
                  </span>
                  <span className="tracking-wide break-all">{ref.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
