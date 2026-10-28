import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Shield, Clock, MapPin } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../data/transportData';
import { PolicyTab } from './LegalPoliciesModal';

interface NavbarProps {
  onOpenPolicy?: (tab: PolicyTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPolicy }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      
      {/* Top Announcement Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">
              تغطية يومية شاملة لجميع مدن ومحافظات المملكة 🇸🇦 | سرعة في التوصيل وتكييف مستمر 24/7
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-emerald-300">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>استلام وتسليم بنفس اليوم أو خلال 24 ساعة</span>
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>عناية بيطرية وتحديثات بالفيديو</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-900 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <span className="text-2xl select-none" role="img" aria-label="أليف إكسبرس">🐾</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">أليف إكسبرس</span>
                <span className="text-[10px] font-bold bg-amber-500/15 text-amber-800 border border-amber-500/30 px-1.5 py-0.5 rounded-md">سريع وآمن</span>
              </div>
              <p className="text-xs text-stone-500 font-medium">نقل الحيوانات الأليفة بين مدن المملكة</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <a href="#fast-quote" className="hover:text-emerald-700 transition-colors">
              حاسبة المسار والواتساب
            </a>
            <a href="#coverage" className="hover:text-emerald-700 transition-colors">
              مدن ومناطق المملكة
            </a>
            <a href="#specialized-care" className="hover:text-emerald-700 transition-colors">
              عناية القطط والطيور
            </a>
            <a href="#fleet" className="hover:text-emerald-700 transition-colors">
              تجهيزات الأسطول
            </a>
            <a href="#checklist" className="hover:text-emerald-700 transition-colors">
              إرشادات السفر
            </a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">
              الأسئلة الشائعة
            </a>
          </nav>

          {/* Header Action Buttons (Direct Contact Only - No site booking) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="flex items-center gap-2 text-stone-800 hover:text-emerald-800 font-bold text-sm px-3.5 py-2.5 rounded-xl hover:bg-stone-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>

            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent('السلام عليكم، أرغب بحجز نقل لأليفي بين مدن المملكة.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-emerald-600/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>احجز عبر واتساب</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:bg-stone-100 focus:outline-none cursor-pointer"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2 text-base font-semibold text-stone-800">
            <a
              href="#fast-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              حاسبة المسار والواتساب
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              مدن ومناطق المملكة
            </a>
            <a
              href="#specialized-care"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              عناية القطط والطيور
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              تجهيزات الأسطول والتكييف
            </a>
            <a
              href="#checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              إرشادات وتجهيز الأليف
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-stone-50"
            >
              الأسئلة الشائعة
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPolicy?.('privacy');
              }}
              className="text-right px-3 py-2 rounded-lg hover:bg-stone-50 text-emerald-800 font-bold cursor-pointer"
            >
              السياسات والشروط (إعلانات جوجل)
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 space-y-2.5">
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent('السلام عليكم، أرغب بحجز نقل لأليفي بين مدن المملكة.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl shadow-sm text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>محادثة واتساب للحجز الفوري</span>
            </a>

            <a
              href={`tel:${CONTACT_PHONE}`}
              className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white font-bold py-3 px-4 rounded-xl text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>اتصال هاتفي ({CONTACT_PHONE_DISPLAY})</span>
            </a>
          </div>
        </div>
      )}

    </header>
  );
};
