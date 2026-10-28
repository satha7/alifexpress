import React from 'react';
import { Shield, ThermometerSnowflake, Video, Sparkles, Truck, Phone, MessageCircle } from 'lucide-react';
import { FLEET_FEATURES, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../data/transportData';

export const FleetSafety: React.FC = () => {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3 border border-emerald-200">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>معايير أمان بيطرية دقيقة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            أسطول نقل حديث ومجهز بأعلى درجات الراحة والتكييف
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            مركباتنا ليست مجرد سيارات نقل؛ بل بيئة متكاملة تضمن لأليفك رحلة هادئة وسريعة بدون انقطاع للتكييف أو إزعاج طوال المسافة.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FLEET_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-lg">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Speed & Video Assurance Banner */}
        <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold tracking-wider uppercase text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/20">
                توثيق مباشر أولاً بأول
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                تريد الاطمئنان على أليفك أثناء الرحلة؟
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                مع أليف إكسبرس، نرسل لك رسائل وفيديوهات وصور عبر الواتساب عند كل نقطة توقف واستراحة، لتشاهد أليفك وهو مرتاح ويشرب ماءه ويحظى بكامل الرعاية حتى تسليمه.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent('السلام عليكم، أرغب بحجز رحلة نقل سريعة لأليفي مع خدمة التوثيق بالفيديو.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold py-3.5 px-6 rounded-xl text-sm shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>احجز عبر واتساب الآن</span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center justify-center gap-2.5 bg-stone-800 hover:bg-stone-700 border border-stone-600 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>اتصل بنا: {CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
