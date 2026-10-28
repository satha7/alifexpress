import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/transportData';

export const Reviews: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold mb-3 border border-amber-200">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>ثقة آلاف المربين في المملكة</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            ماذا يقول عملاؤنا عن سرعة وأمان توصيل أليف إكسبرس؟
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            تجارب حقيقية لمربين نقلوا قططهم وطيورهم وببغاواتهم بين مدن المملكة وعاشوا تجربة نقل مريحة وموثقة بالصور والفيديو.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-stone-900">{review.name}</span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">
                    {review.pet}
                  </span>
                </div>
                <div className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{review.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
