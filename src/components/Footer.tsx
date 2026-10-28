import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../data/transportData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white pt-16 pb-24 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-xl shadow-md">
                🐾
              </div>
              <span className="text-2xl font-black text-white tracking-tight">أليف إكسبرس</span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed max-w-md">
              الخدمة الرائدة والمتخصصة في نقل الحيوانات الأليفة (القطط، الطيور وببغاوات الزينة، والحيوانات الأليفة) بين كافة مدن ومحافظات المملكة العربية السعودية بسيارات مكيفة ومجهزة ومتابعة بالفيديو.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>مركبات مجهزة بيطرياً وتكييف متواصل 24 ساعة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">روابط سريعة</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#fast-quote" className="hover:text-emerald-400 transition-colors">
                  حاسبة المسار ومولّد الواتساب
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-emerald-400 transition-colors">
                  تغطية مدن ومناطق المملكة
                </a>
              </li>
              <li>
                <a href="#specialized-care" className="hover:text-emerald-400 transition-colors">
                  عناية القطط والطيور
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-emerald-400 transition-colors">
                  تجهيزات التكييف والأسطول
                </a>
              </li>
              <li>
                <a href="#checklist" className="hover:text-emerald-400 transition-colors">
                  دليل تجهيز الأليف للسفر
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Booking */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              طريقة الحجز والتواصل المباشر
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              الحجز متاح عبر الاتصال الهاتفي أو محادثة الواتساب فقط دون أي وسيط أو تسجيل معقد:
            </p>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent('السلام عليكم، أرغب بحجز نقل لأليفي بين مدن المملكة.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>واتساب للحجز الفوري: {CONTACT_PHONE_DISPLAY}</span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center gap-3 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-stone-700 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>اتصال مباشر: {CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>متاحون لاستقبال الطلبات على مدار الساعة 24/7</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} أليف إكسبرس لنقل الحيوانات الأليفة بين مدن المملكة. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 text-stone-400">
            <span>صُنعت برحمة وحب لخدمة الحيوانات الأليفة ومربيها</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
