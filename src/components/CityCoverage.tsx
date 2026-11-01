import React, { useState } from 'react';
import { MapPin, Navigation, Zap, Clock, MessageCircle, ChevronRight, Star, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SAUDI_REGIONS, POPULAR_ROUTES, CONTACT_WHATSAPP, PRIORITY_HUBS, PRIMARY_FOCUS_CITIES } from '../data/transportData';
import { trackConversion } from '../utils/analytics';

export const CityCoverage: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState(SAUDI_REGIONS[0].id);

  const activeRegion = SAUDI_REGIONS.find((r) => r.id === selectedRegionId) || SAUDI_REGIONS[0];

  const handleCityWhatsApp = (cityName: string) => {
    trackConversion('whatsapp', `City Coverage: ${cityName}`);
    const text = encodeURIComponent(
      `السلام عليكم، أود حجز رحلة سريعة لنقل أليف من/إلى مدينة (${cityName}). يرجى تزويدي بالموعد المتاح وأقرب رحلة.`
    );
    window.open(`https://wa.me/${CONTACT_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <section id="coverage" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-3 border border-emerald-200">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>المدن والمحاور الرئيسية للتوصيل المكوك (منها وعليها يومياً)</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            توصيل سريع ومباشر بين المدن الأكثر طلباً في المملكة
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            نركّز أسطولنا على مدار الساعة لخدمة النقل المباشر من الباب إلى الباب بين: <strong className="text-emerald-950 font-bold">الرياض، الخرج، جدة، مكة المكرمة، المدينة المنورة، الطائف، الدمام، الخبر، الأحساء، الهفوف، الجبيل، القطيف، والقصيم (بريدة، عنيزة، الرس)</strong>.
          </p>
        </div>

        {/* 1. Core Priority Hubs Showcase (The 16 key cities grouped by region) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b border-stone-200 gap-2">
            <div>
              <h3 className="text-xl font-black text-stone-900 flex items-center gap-2">
                <span className="text-emerald-700">⭐</span>
                <span>المحاور والمدن الأكثر طلباً (توصيل يومي مباشر منها وعليها)</span>
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                اضغط على أي مدينة لحجز أقرب رحلة فوراً عبر الواتساب
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full self-start sm:self-auto">
              16 مدينة رئيسية برحلات يومية
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRIORITY_HUBS.map((hub) => (
              <div
                key={hub.id}
                className="bg-stone-50 rounded-3xl p-5 border border-stone-200/90 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-200">
                    <h4 className="font-bold text-base text-stone-900">{hub.name}</h4>
                    <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md shrink-0">
                      {hub.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                    {hub.description}
                  </p>

                  <div className="space-y-2">
                    {hub.cities.map((city) => (
                      <button
                        key={city.name}
                        type="button"
                        onClick={() => handleCityWhatsApp(city.name)}
                        className="w-full text-right p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 transition-all flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="font-extrabold text-sm text-stone-900 group-hover:text-emerald-950">
                              {city.name}
                            </span>
                          </div>
                          <span className="text-[11px] text-stone-500 block mr-5">
                            {city.highlight}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/80">
                  <button
                    type="button"
                    onClick={() => handleCityWhatsApp(hub.name)}
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 py-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>حجز رحلة عبر {hub.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Popular Express Corridors Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200">
            <div>
              <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>أبرز مسارات التوصيل السريع بين هذه المدن</span>
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">رحلات يومية ومكوكية مباشرة من الباب للباب</p>
            </div>
            <span className="text-xs text-stone-500 hidden sm:inline">متابعة فيديو وتكييف 24/7</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {POPULAR_ROUTES.map((route, idx) => (
              <div
                key={idx}
                className="bg-stone-50 hover:bg-emerald-50/50 p-5 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                      {route.speed}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{route.time}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-stone-900 font-bold text-base my-2">
                    <span>{route.from}</span>
                    <ChevronRight className="w-4 h-4 text-emerald-600 rotate-180 shrink-0" />
                    <span>{route.to}</span>
                  </div>

                  <div className="text-xs text-stone-500">{route.type}</div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCityWhatsApp(`${route.from} إلى ${route.to}`)}
                  className="mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800 bg-white group-hover:bg-emerald-600 group-hover:text-white py-2.5 rounded-xl border border-stone-200 group-hover:border-emerald-600 transition-all cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>حجز هذا المسار بالواتساب</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Interactive Hubs Explorer */}
        <div className="bg-stone-100/80 rounded-3xl p-6 sm:p-8 border border-stone-200">
          
          <div className="text-center sm:text-right mb-6">
            <h3 className="text-xl font-bold text-stone-900">
              استكشف مدن ومحاور الخدمة المعتمدة:
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              رحلات يومية منتظمة ومكيفة تخدم هذه المدن فقط من الباب إلى الباب
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SAUDI_REGIONS.map((region) => (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedRegionId(region.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  selectedRegionId === region.id
                    ? 'bg-emerald-800 text-white shadow-md'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          {/* Active Region Cities Showcase */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-stone-100 gap-2">
              <div>
                <h4 className="text-lg font-bold text-stone-900">{activeRegion.name}</h4>
                <p className="text-xs text-stone-500">{activeRegion.description}</p>
              </div>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full self-start sm:self-auto">
                {activeRegion.cities.length} مدن ومحافظات معتمدة
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {activeRegion.cities.map((city) => (
                <div
                  key={city}
                  className="p-3.5 rounded-xl bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-400 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-bold text-sm text-stone-800 group-hover:text-emerald-950">
                      {city}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCityWhatsApp(city)}
                    className="mt-1 flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 cursor-pointer pt-1 border-t border-stone-200/60"
                  >
                    <span>طلب نقل ({city})</span>
                    <ChevronRight className="w-3 h-3 rotate-180" />
                  </button>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-600 flex items-center justify-between flex-wrap gap-2">
              <span>* التوصيل والاستلام متوفر يومياً من الباب للباب في هذه المدن المحددة بسيارات مكيفة ومجهزة.</span>
              <button
                type="button"
                onClick={() => handleCityWhatsApp(activeRegion.name)}
                className="text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>احجز رحلتك الآن عبر الواتساب</span>
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
