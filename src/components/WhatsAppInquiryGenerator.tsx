import React, { useState } from 'react';
import { Send, Phone, MapPin, CheckCircle2, Clock, Sparkles, Copy, Check } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP, SAUDI_REGIONS } from '../data/transportData';

const ALL_CITIES = Array.from(new Set(SAUDI_REGIONS.flatMap(r => r.cities))).sort((a, b) => a.localeCompare('ar'));

export const WhatsAppInquiryGenerator: React.FC = () => {
  const [fromCity, setFromCity] = useState('الرياض');
  const [toCity, setToCity] = useState('جدة');
  const [petType, setPetType] = useState('قطط');
  const [petCount, setPetCount] = useState('1');
  const [urgency, setUrgency] = useState('توصيل إكسبرس سريع (أقرب رحلة)');
  const [cageOption, setCageOption] = useState('القفص متوفر لدي');
  const [copied, setCopied] = useState(false);

  // Approximate travel duration estimation between popular cities
  const getEstimatedDuration = (from: string, to: string) => {
    if (from === to) return 'توصيل محلي داخل المدينة (خلال 2-4 ساعات)';
    if ((from === 'الرياض' && to === 'جدة') || (from === 'جدة' && to === 'الرياض')) return '10 - 12 ساعة (رحلة يومية مباشرة)';
    if ((from === 'الرياض' && to.includes('الدمام')) || (to === 'الرياض' && from.includes('الدمام'))) return '3.5 - 4.5 ساعة (توصيل فائق السرعة)';
    if ((from === 'جدة' && to === 'مكة المكرمة') || (to === 'جدة' && from === 'مكة المكرمة')) return 'ساعة واحدة فقط';
    if ((from === 'جدة' && to === 'المدينة المنورة') || (to === 'جدة' && from === 'المدينة المنورة')) return '4 - 5 ساعات';
    if ((from === 'الرياض' && to.includes('القصيم')) || (to === 'الرياض' && from.includes('القصيم'))) return '3 - 4 ساعات';
    if (from.includes('أبها') || to.includes('أبها') || from.includes('جازان') || to.includes('جازان')) return 'خلال 14 - 24 ساعة (مع فترات راحة وتكييف مستمر)';
    if (from.includes('تبوك') || to.includes('تبوك') || from.includes('حائل') || to.includes('حائل')) return 'خلال 12 - 20 ساعة';
    return 'خلال 12 - 24 ساعة كحد أقصى';
  };

  const generatedMessage = `السلام عليكم ورحمة الله وبركاته،
أرغب في حجز نقل لأليفي عبر أليف إكسبرس:
📍 من مدينة: ${fromCity}
🏁 إلى مدينة: ${toCity}
🐾 نوع الأليف: ${petType}
🔢 العدد: ${petCount}
⚡ نوع الخدمة: ${urgency}
📦 حالة القفص: ${cageOption}
💬 يرجى تزويدي بأقرب موعد انطلاق والسعر للتأكيد. شكراً لكم.`;

  const whatsappUrl = `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(generatedMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="fast-quote" className="py-16 md:py-24 bg-stone-100/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>حجز فوري ومباشر بدون تعقيد</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            جهّز تفاصيل رحلة أليفك وتواصل معنا عبر الواتساب فوراً
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            لا داعي لتسجيل حسابات أو دفع في الموقع. حدّد مسار رحلتك أدناه واضغط لفتح الواتساب أو الاتصال بالكابتن مباشرة لتأكيد موعد استلام أليفك من عتبة بابك.
          </p>
        </div>

        {/* Builder Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/60 border border-stone-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
            <h3 className="text-xl font-bold text-stone-900 pb-3 border-b border-stone-100 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>بيانات الرحلة والتوصيل</span>
            </h3>

            {/* From & To Cities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">
                  مدينة الاستلام (من)
                </label>
                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-shadow"
                >
                  {ALL_CITIES.map((c) => (
                    <option key={`from-${c}`} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">
                  مدينة التسليم (إلى)
                </label>
                <select
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-shadow"
                >
                  {ALL_CITIES.map((c) => (
                    <option key={`to-${c}`} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pet Type & Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">
                  نوع الحيوان الأليف
                </label>
                <select
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-shadow"
                >
                  <option value="قطط (شيرازي، هيمالايا، بلدي، إلخ)">قطط (شيرازي، هيمالايا، إلخ)</option>
                  <option value="طيور وببغاوات (كاسكو، كروان، كناري)">طيور وببغاوات (كاسكو، كروان، إلخ)</option>
                  <option value="كلاب صغيرة أو متوسطة">كلاب صغيرة أو متوسطة</option>
                  <option value="أرانب وقوارض أليفة">أرانب وقوارض أليفة</option>
                  <option value="حيوانات أو طيور زينة أخرى">حيوانات أو طيور أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">
                  العدد
                </label>
                <select
                  value={petCount}
                  onChange={(e) => setPetCount(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-shadow"
                >
                  <option value="1">1 أليف فقط</option>
                  <option value="2">2 أليف</option>
                  <option value="3">3 أليفين</option>
                  <option value="4+ (مجموعة أو شحنة كاملة)">4 أو أكثر (مجموعة / إنتاج)</option>
                </select>
              </div>
            </div>

            {/* Urgency & Speed Options */}
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">
                أولوية وسرعة التوصيل
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'توصيل إكسبرس سريع (أقرب رحلة)', label: '⚡ إكسبرس سريع', desc: 'أقرب رحلة فورية' },
                  { id: 'رحلة مجدولة منتظمة', label: '🚐 رحلة مجدولة', desc: 'خلال 24-48 ساعة' },
                  { id: 'نقل VIP خاص للأليف حصراً', label: '🌟 نقل VIP خاص', desc: 'مركبة مخصصة له فقط' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id)}
                    className={`p-3 rounded-xl border text-right transition-all cursor-pointer ${
                      urgency === item.id
                        ? 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-bold shadow-sm'
                        : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="text-xs text-stone-500 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Cage Option */}
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-2">
                تجهيز القفص
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'القفص متوفر لدي وجاهز', label: 'القفص متوفر لدي' },
                  { id: 'أحتاج توفير قفص سفر معتمد من جهتكم', label: 'أحتاج توفير قفص طبي منكم' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCageOption(item.id)}
                    className={`py-2.5 px-4 rounded-xl border text-sm text-right transition-all cursor-pointer ${
                      cageOption === item.id
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Duration Notice */}
            <div className="flex items-center gap-3 p-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-900 text-sm">
              <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="font-bold">الوقت التقديري للمسار ({fromCity} إلى {toCity}): </span>
                <span className="font-semibold text-emerald-800">{getEstimatedDuration(fromCity, toCity)}</span>
              </div>
            </div>

          </div>

          {/* Action / Message Preview Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-emerald-900 to-stone-900 p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-800/80">
                <span className="text-sm font-medium text-emerald-200">معاينة الرسالة الجاهزة للواتساب</span>
                <button
                  onClick={handleCopy}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs bg-emerald-800/60 hover:bg-emerald-700 px-2.5 py-1 rounded-lg text-emerald-100 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'تم النسخ!' : 'نسخ النص'}</span>
                </button>
              </div>

              {/* Message Box */}
              <div className="bg-emerald-950/60 border border-emerald-700/40 rounded-2xl p-4 text-xs sm:text-sm text-emerald-100 font-mono whitespace-pre-line leading-relaxed shadow-inner">
                {generatedMessage}
              </div>

              {/* Bullet perks */}
              <div className="mt-5 space-y-2 text-xs text-emerald-200/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>تأكيد الموعد واستلام من عتبة بابك فور إرسال الرسالة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>مركبات مجهزة وتكييف متواصل ومتابعة بالفيديو</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>دفع مريح عند الاستلام أو التسليم دون أي بطاقة بنكية بالموقع</span>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="mt-8 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-stone-950 font-bold py-4 px-6 rounded-2xl text-base shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5 fill-current" />
                <span>إرسال الطلب عبر واتساب للحجز الفوري</span>
              </a>

              <a
                href={`tel:${CONTACT_PHONE}`}
                className="w-full flex items-center justify-center gap-3 bg-stone-800/90 hover:bg-stone-700 border border-stone-600 text-white font-semibold py-3.5 px-6 rounded-2xl text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>أو اتصال هاتفي مباشر ({CONTACT_PHONE_DISPLAY})</span>
              </a>

              <p className="text-center text-[11px] text-stone-400 pt-1">
                خدمة عملاء نشطة 24 ساعة طوال أيام الأسبوع لخدمة كافة مدن المملكة
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
