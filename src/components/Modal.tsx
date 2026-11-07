import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  badgeColor?: 'primary' | 'tertiary' | 'outline';
  subtitle?: string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  badge,
  badgeColor = 'primary',
  subtitle,
  children,
}) => {
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

  const badgeColorClasses = {
    primary: 'text-[#ffb4a8] bg-[#920703]/30 border-[#da291c]/60',
    tertiary: 'text-[#dfc700] bg-[#c1ac00]/20 border-[#dfc700]/50',
    outline: 'text-[#ac8883] bg-[#2a2a2a] border-[#353534]',
  }[badgeColor];

  return (
    <div className="fixed inset-0 z-50 bg-[#0e0e0e]/90 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-[#1c1b1b] border border-[#353534] shadow-2xl p-6 md:p-8 flex flex-col max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#353534]">
          <div>
            {badge && (
              <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border mb-1.5 ${badgeColorClasses}`}>
                {badge}
              </span>
            )}
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl md:text-2xl font-bold text-[#e5e2e1] tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-[#ac8883] mt-0.5">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#2a2a2a] hover:bg-[#da291c] hover:text-[#fff5f3] text-[#e5e2e1] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            type="button"
          >
            Close [×]
          </button>
        </div>

        <div className="py-4 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};
