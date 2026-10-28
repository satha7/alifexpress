import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { FAQS, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../data/transportData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>إجابات واضحة ومباشرة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            الأسئلة الأكثر شيوعاً
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            كل ما يهمك معرفته حول طريقة الحجز بالواتساب، أوقات التوصيل، ومعايير السلامة.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-14">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-base sm:text-lg text-stone-900 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span className="flex-1 pl-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Direct WhatsApp and Call */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 text-center shadow-md">
          <h3 className="text-lg font-bold text-stone-900 mb-2">
            لديك استفسار خاص بحالة أليفك أو مدينتك؟
          </h3>
          <p className="text-sm text-stone-500 mb-6">
            كابتن أليف إكسبرس جاهز للإجابة على جميع تساؤلاتك ومساعدتك في الحال عبر الواتساب أو الاتصال.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent('السلام عليكم، لدي استفسار بخصوص نقل أليفي.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>محادثة واتساب سريعة</span>
            </a>

            <a
              href={`tel:${CONTACT_PHONE}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>اتصال مباشر: {CONTACT_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
