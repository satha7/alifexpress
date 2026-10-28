import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../data/transportData';

export const FloatingContact: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 9000);
    return () => clearTimeout(timer);
  }, []);

  const defaultWhatsappText = encodeURIComponent(
    'السلام عليكم، أرغب بحجز نقل لأليفي بين مدن المملكة. يرجى تزويدي بالتفاصيل وأقرب رحلة.'
  );

  return (
    <>
      {/* Desktop & Tablet Floating Action Buttons (Fixed on bottom right/left) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3 select-none">
        
        {/* Floating Tooltip / Speech bubble */}
        {showTooltip && (
          <div className="relative bg-stone-900 text-white text-xs font-semibold py-2 px-3.5 rounded-2xl shadow-xl flex items-center gap-2 border border-stone-700 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>جاهزون لخدمتكم وتأكيد الحجز فوراً!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-stone-400 hover:text-white mr-1 cursor-pointer"
              aria-label="إغلاق التنبيه"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Arrow */}
            <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-stone-900 rotate-45 border-r border-b border-stone-700"></div>
          </div>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${CONTACT_WHATSAPP}?text=${defaultWhatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3.5 rounded-full shadow-2xl shadow-emerald-900/30 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="محادثة واتساب سريعة للحجز"
        >
          {/* Pulsing Aura */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-pulse pointer-events-none"></span>
          
          <MessageCircle className="w-6 h-6 fill-current relative z-10" />
          <span className="font-bold text-sm tracking-wide hidden sm:inline relative z-10">
            واتساب فوري للحجز
          </span>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </a>

        {/* Phone Floating Button */}
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="group relative flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white px-4 py-3 rounded-full shadow-xl shadow-stone-900/40 border border-stone-700/60 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="اتصال هاتفي مباشر"
        >
          <Phone className="w-5 h-5 text-emerald-400 fill-current" />
          <span className="font-semibold text-xs sm:text-sm hidden sm:inline">
            اتصال هاتفي ({CONTACT_PHONE_DISPLAY})
          </span>
        </a>

      </div>

      {/* Mobile Bottom Fixed Action Bar (Sticky on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-3 sm:hidden shadow-2xl flex items-center gap-3">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_WHATSAPP}?text=${defaultWhatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] active:bg-[#1fae53] text-white py-3 px-3 rounded-xl font-bold text-sm shadow-md"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>احجز عبر واتساب</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 bg-stone-900 active:bg-stone-800 text-white py-3 px-3 rounded-xl font-bold text-sm shadow-md"
        >
          <Phone className="w-4 h-4 text-emerald-400 fill-current" />
          <span>اتصال مباشر</span>
        </a>
      </div>
    </>
  );
};
