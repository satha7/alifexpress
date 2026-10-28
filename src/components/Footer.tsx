import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../data/transportData';
import { PolicyTab } from './LegalPoliciesModal';

interface FooterProps {
  onOpenPolicy?: (tab: PolicyTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="bg-stone-950 text-white pt-16 pb-28 sm:pb-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust & Google Ads Transparency Strip */}
        <div className="bg-stone-900/90 rounded-2xl p-4 sm:p-6 mb-12 border border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">المقر الرئيسي والتغطية:</span>
              <span>الرياض، المملكة العربية السعودية — أسطول يغطي كافة المدن 🇸🇦</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">ساعات العمل والتشغيل:</span>
              <span>نعمل 24 ساعة يومياً طوال أيام الأسبوع لاستقبال الرحلات</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white block">الدعم والاستفسارات الرسمية:</span>
              <span>contact@aleef-express.com | {CONTACT_PHONE_DISPLAY}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-xl shadow-md">
                🐾
              </div>
              <span className="text-2xl font-black text-white tracking-tight">أليف إكسبرس</span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed">
              الخدمة الرائدة والمعتمدة في نقل الحيوانات الأليفة (القطط، الطيور وببغاوات الزينة، والحيوانات الأليفة) بين كافة مدن ومحافظات المملكة العربية السعودية بسيارات مكيفة ومجهزة ومتابعة دورية بالفيديو عبر الواتساب.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>مركبات مجهزة بتكييف متواصل 24 ساعة وبطاريات طوارئ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">أقسام الموقع</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#fast-quote" className="hover:text-emerald-400 transition-colors">
                  حاسبة المسار والواتساب
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-emerald-400 transition-colors">
                  مدن ومناطق المملكة
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
                  دليل تجهيز الأليف
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Google Ads & Legal Compliance Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              السياسات والشروط المعتمدة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy?.('privacy')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-right flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>سياسة الخصوصية (Privacy Policy)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy?.('terms')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-right flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>الشروط والأحكام (Terms of Service)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy?.('cancellation')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-right flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>سياسة الإلغاء وتعديل المواعيد</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy?.('welfare')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-right flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 text-emerald-500" />
                  <span>ميثاق رفاهية ورعاية الحيوان</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Booking */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              الحجز المباشر عبر الواتساب والهاتف
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              تأكيد فوري دون أي وسطاء أو تعقيد:
            </p>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent('السلام عليكم، أرغب بحجز نقل لأليفي بين مدن المملكة.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>واتساب: {CONTACT_PHONE_DISPLAY}</span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center gap-3 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm border border-stone-700 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>اتصال: {CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} أليف إكسبرس لنقل الحيوانات الأليفة بين مدن المملكة. متوافق مع معايير إعلانات جوجل وسياسات حماية البيانات.</p>
          <div className="flex items-center gap-2 text-stone-400">
            <span>صُنعت برحمة وحب لخدمة الحيوانات الأليفة ومربيها في كافة مدن المملكة</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
