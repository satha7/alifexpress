import React from 'react';
import { MessageCircle, Phone, ArrowDown, ShieldCheck, Zap, ThermometerSnowflake, Video, HeartHandshake, CheckCircle } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP } from '../data/transportData';

export const Hero: React.FC = () => {
  const defaultWhatsappUrl = `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(
    'السلام عليكم ورحمة الله، أرغب في الاستفسار وحجز رحلة لنقل أليفي بين مدن المملكة. يرجى تزويدي بالموعد المتاح.'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-emerald-950 to-stone-900 text-white py-16 lg:py-24">
      
      {/* Subtle Pattern & Ambient Glows */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Pitch Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-right">
            
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/60 border border-emerald-600/40 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>الخيار الأول والموثوق لنقل القطط والطيور في السعودية 🇸🇦</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.25] text-white">
              نقل سريع وآمن لحيواناتك الأليفة{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-amber-300">
                بين كافة مدن المملكة
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              خدمة توصيل متخصصة وسريعة من باب بيتك إلى وجهتك. مركبات مجهزة بأحدث أنظمة التكييف والراحة، رعاية خاصة للطيور الحساسة والقطط، ومتابعة مصورة بالفيديو خطوة بخطوة.
            </p>

            {/* The Explicit Direct Booking Guidance: Call or WhatsApp */}
            <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700/50 max-w-xl mx-auto lg:mx-0 text-right">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                <HeartHandshake className="w-4 h-4" />
                <span>حجز مباشر بدون تعقيد أو تسجيل</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300">
                للحجز وتأكيد موعد الرحلة فوراً: اتصل بنا هاتفياً أو تواصل مباشرة عبر الواتساب لتزويدنا بالمدينتين ونوع الأليف وسنتكفل بالباقي!
              </p>
            </div>

            {/* Primary Action Buttons (Call / WhatsApp) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={defaultWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-extrabold px-8 py-4 rounded-2xl text-base shadow-xl shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>احجز عبر واتساب الآن</span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-7 py-4 rounded-2xl text-base backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>اتصال مباشر: {CONTACT_PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>تغطية كل مدن المملكة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>توصيل فائق السرعة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>من الباب إلى الباب</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card / Quick Route Teaser */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-stone-900/90 rounded-3xl p-6 sm:p-8 border border-emerald-800/40 shadow-2xl backdrop-blur-md">
              
              {/* Pet Focus Badges */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl">
                    🐱
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">القطط والحيوانات الأليفة</div>
                    <div className="text-xs text-stone-400">بيئة خالية من التوتر</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl">
                    🦜
                  </div>
                  <div>
                    <div className="font-bold text-sm text-white">الطيور وببغاوات الزينة</div>
                    <div className="text-xs text-stone-400">حماية من الهواء والاهتزاز</div>
                  </div>
                </div>
              </div>

              {/* Live Status Highlight */}
              <div className="my-6 space-y-4">
                <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700/60 flex items-start gap-3.5">
                  <ThermometerSnowflake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-stone-300">درجة حرارة مراقبة رقمياً</div>
                    <div className="text-sm font-bold text-white mt-0.5">ثابتة بين 21°C و 23°C طوال الرحلة</div>
                  </div>
                </div>

                <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700/60 flex items-start gap-3.5">
                  <Video className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-stone-300">متابعة فيديو وصور عبر الواتساب</div>
                    <div className="text-sm font-bold text-white mt-0.5">تقارير مصورة لأليفك عند كل محطة استراحة</div>
                  </div>
                </div>

                <div className="bg-stone-800/80 rounded-2xl p-4 border border-stone-700/60 flex items-start gap-3.5">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-stone-300">سرعة قياسية وأقصر مسار</div>
                    <div className="text-sm font-bold text-white mt-0.5">بدون تبديل مركبات أو تأخير غير مبرر</div>
                  </div>
                </div>
              </div>

              {/* Direct Booking Reminder CTA */}
              <a
                href="#fast-quote"
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors text-center"
              >
                <span>تحديد مدينتك وإرسال رسالة الواتساب</span>
                <ArrowDown className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
