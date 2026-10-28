import React, { useState } from 'react';
import { ShieldCheck, Thermometer, Wind, EyeOff, Sparkles, MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import { PET_TYPES, CONTACT_WHATSAPP } from '../data/transportData';

export const SpecializedCare: React.FC = () => {
  const [activePetId, setActivePetId] = useState('cats');

  const selectedPet = PET_TYPES.find((p) => p.id === activePetId) || PET_TYPES[0];

  const handleConsultWhatsApp = (petName: string) => {
    const text = encodeURIComponent(
      `السلام عليكم، أرغب في الاستفسار عن تجهيزات وإجراءات نقل (${petName}) بين المدن وحجز أقرب موعد.`
    );
    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <section id="specialized-care" className="py-16 md:py-24 bg-stone-50 border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold mb-3 border border-amber-200">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>سلامة وراحة الحيوان أولويتنا القصوى</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            عناية تخصصية تناسب طبيعة كل حيوان (القطط والطيور أولاً)
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            القطط والطيور كائنات شديدة الحساسية لدرجات الحرارة والاهتزازات. لذلك صممنا بروتوكولات نقل مخصصة تضمن وصول أليفك دون أي إجهاد أو خوف.
          </p>
        </div>

        {/* Pet Switcher Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PET_TYPES.map((pet) => {
            const isActive = activePetId === pet.id;
            return (
              <button
                key={pet.id}
                type="button"
                onClick={() => setActivePetId(pet.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-900 text-white shadow-lg shadow-emerald-950/20 scale-105'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <span className="text-xl">
                  {pet.id === 'cats' && '🐱'}
                  {pet.id === 'birds' && '🦜'}
                  {pet.id === 'dogs' && '🐶'}
                  {pet.id === 'small_pets' && '🐰'}
                </span>
                <span>{pet.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pet Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl shadow-stone-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Right Information Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-2xl font-black text-stone-900">{selectedPet.name}</h3>
                  <p className="text-sm text-stone-500 mt-1">{selectedPet.tagline}</p>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold">
                  <Thermometer className="w-4 h-4 text-emerald-600" />
                  <span>حرارة المركبة المثالية: {selectedPet.tempRange}</span>
                </div>
              </div>

              {/* Protocol features */}
              <div className="space-y-3.5">
                <h4 className="text-sm font-extrabold text-stone-800 tracking-wide uppercase">
                  معايير التجهيز والعناية أثناء السفر:
                </h4>

                <div className="space-y-3">
                  {selectedPet.keyCare.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-stone-800 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types included */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs sm:text-sm text-amber-950">
                <span className="font-bold">الفئات المشمولة: </span>
                <span>{selectedPet.notes}</span>
              </div>

            </div>

            {/* Left Care Highlights Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>تأكيد الحماية والاطمئنان</span>
                </div>

                <h4 className="text-xl font-bold mb-4 text-white">
                  لماذا يفضل المربون أليف إكسبرس لنقل {selectedPet.name}؟
                </h4>

                <ul className="space-y-3 text-xs sm:text-sm text-stone-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>سرعة استثنائية تقلل زمن السفر، فالطريق الأقصر يعني أليفاً أكثر هدوءاً وصحة.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>تصوير فيديو دوري وإرساله لك على الواتساب أثناء الرحلة.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>أقفاص مفردة معزولة تمنع أي احتكاك بصري أو صوتي بين الحيوانات.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>إمكانية توفير القفص المعتمد والطعام والماء عند الطلب.</span>
                  </li>
                </ul>
              </div>

              {/* Direct Booking CTA */}
              <div className="pt-4 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => handleConsultWhatsApp(selectedPet.name)}
                  className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold py-3.5 px-5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>استفسر واحجز لنقل {selectedPet.name} عبر واتساب</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
