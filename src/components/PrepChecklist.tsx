import React from 'react';
import { ClipboardList, MessageCircle, Phone, ArrowLeft } from 'lucide-react';
import { OWNER_CHECKLIST, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../data/transportData';

export const PrepChecklist: React.FC = () => {
  return (
    <section id="checklist" className="py-16 md:py-24 bg-stone-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <ClipboardList className="w-3.5 h-3.5 text-emerald-600" />
            <span>نصائح ذهبية لراحة أليفك</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            كيف تجهّز أليفك لرحلة مريحة وسلسة؟
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            اتباع هذه الخطوات البسيطة يضمن وصول قطتك أو طيرك بأعلى درجات الهدوء والصحة دون أي انزعاج.
          </p>
        </div>

        {/* Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {OWNER_CHECKLIST.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm flex flex-col justify-between relative group hover:border-emerald-400 transition-all"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center mb-4 shadow-sm shadow-emerald-600/30">
                  {item.step}
                </div>
                <h3 className="font-bold text-base text-stone-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <span>خطوة سهلة ومهمة</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Booking Reminder */}
        <div className="text-center bg-white rounded-3xl p-8 border border-stone-200 max-w-2xl mx-auto shadow-sm">
          <h3 className="text-xl font-bold text-stone-900 mb-2">
            جاهز لحجز رحلة أليفك اليوم؟
          </h3>
          <p className="text-stone-600 text-sm mb-6">
            فريقنا جاهز لتحديد أقرب موعد انطلاق واستلامه من عتبة بابك مباشرة.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent('السلام عليكم، جهزت أليفي وأرغب بحجز رحلة نقل بين المدن.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold px-6 py-3 rounded-xl text-sm shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>تواصل واتساب للحجز</span>
            </a>

            <a
              href={`tel:${CONTACT_PHONE}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>اتصل هاتفياً: {CONTACT_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
