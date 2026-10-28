import React, { useState } from 'react';
import { X, ShieldCheck, FileText, RefreshCw, HeartHandshake, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY } from '../data/transportData';

export type PolicyTab = 'privacy' | 'terms' | 'cancellation' | 'welfare';

interface LegalPoliciesModalProps {
  isOpen: boolean;
  initialTab?: PolicyTab;
  onClose: () => void;
}

export const LegalPoliciesModal: React.FC<LegalPoliciesModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6" dir="rtl">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">السياسات والشروط المعتمدة (متوافق مع سياسات إعلانات جوجل)</h3>
              <p className="text-xs text-stone-400">أليف إكسبرس لنقل الحيوانات الأليفة - المملكة العربية السعودية</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Policy Tabs */}
        <div className="flex border-b border-stone-200 bg-stone-50 px-4 pt-3 gap-2 overflow-x-auto select-none">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-b-2 cursor-pointer shrink-0 ${
              activeTab === 'privacy'
                ? 'bg-white text-emerald-800 border-emerald-600 shadow-sm'
                : 'text-stone-600 hover:text-stone-900 border-transparent'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>سياسة الخصوصية (Privacy Policy)</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-b-2 cursor-pointer shrink-0 ${
              activeTab === 'terms'
                ? 'bg-white text-emerald-800 border-emerald-600 shadow-sm'
                : 'text-stone-600 hover:text-stone-900 border-transparent'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>الشروط والأحكام (Terms of Service)</span>
          </button>

          <button
            onClick={() => setActiveTab('cancellation')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-b-2 cursor-pointer shrink-0 ${
              activeTab === 'cancellation'
                ? 'bg-white text-emerald-800 border-emerald-600 shadow-sm'
                : 'text-stone-600 hover:text-stone-900 border-transparent'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>سياسة الإلغاء والاسترجاع</span>
          </button>

          <button
            onClick={() => setActiveTab('welfare')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all border-b-2 cursor-pointer shrink-0 ${
              activeTab === 'welfare'
                ? 'bg-white text-emerald-800 border-emerald-600 shadow-sm'
                : 'text-stone-600 hover:text-stone-900 border-transparent'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>معايير ورفاهية الحيوان</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-700 text-sm leading-relaxed flex-1">
          
          {/* 1. Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-2">
                سياسة الخصوصية وحماية البيانات الشخصية
              </h4>
              <p className="text-xs text-stone-500">
                آخر تحديث: 28 أكتوبر 2026 | متوافق مع نظام حماية البيانات الشخصية في المملكة العربية السعودية وسياسات إعلانات جوجل.
              </p>

              <div className="space-y-3">
                <h5 className="font-bold text-stone-900">1. البيانات التي نجمعها:</h5>
                <p>
                  نحن في «أليف إكسبرس» نلتزم باحترام خصوصيتك لأقصى درجة. نظراً لأن موقعنا لا يتضمن إنشاء حسابات أو معاملات دفع بنكية إلكترونية داخلية، فإن البيانات التي نتلقاها منك تقتصر على ما تقدمه برضاك التام عبر محادثة الواتساب أو الاتصال الهاتفي، وتشمل: اسمك، رقم هاتفك للتواصل، عنوان الاستلام وعنوان التسليم، ومعلومات الحيوان الأليف (نوعه، عمره، حالته الصحية).
                </p>

                <h5 className="font-bold text-stone-900">2. الغرض من جمع البيانات:</h5>
                <ul className="list-disc list-inside space-y-1 text-stone-600 pr-2">
                  <li>تنسيق موعد ومكان استلام وتسليم الحيوان الأليف بدقة.</li>
                  <li>إرسال التحديثات اليومية ومقاطع الفيديو التوثيقية لأليفك أثناء مسار الرحلة عبر الواتساب.</li>
                  <li>تقديم خدمة عملاء ودعم ومساعدة فورية عند الحاجة.</li>
                </ul>

                <h5 className="font-bold text-stone-900">3. عدم مشاركة البيانات مع أطراف ثالثة:</h5>
                <p>
                  نؤكد عدم بيع أو تأجير أو مشاركة أي بيانات شخصية أو أرقام اتصال مع أي طرف ثالث لأغراض تسويقية أو دعائية، وتظل البيانات محصورة فقط لدى الكابتن المعني برحلة التوصيل.
                </p>

                <h5 className="font-bold text-stone-900">4. ملفات تعريف الارتباط وإعلانات جوجل (Cookies & Ads):</h5>
                <p>
                  قد يستخدم الموقع أدوات تحليلية قياسية وتقنيات التتبع من جوجل (Google Analytics / Google Ads) لقياس فاعلية الحملات الإعلانية وتحسين تجربة التصفح دون جمع أي بيانات هوية شخصية مباشرة.
                </p>
              </div>
            </div>
          )}

          {/* 2. Terms of Service */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-2">
                الشروط والأحكام العامة للخدمة
              </h4>
              <div className="space-y-3">
                <h5 className="font-bold text-stone-900">1. نطاق وطبيعة الخدمة:</h5>
                <p>
                  يقدم «أليف إكسبرس» خدمة لوجستية متخصصة في نقل الحيوانات الأليفة المنزلية وطيور الزينة بين مدن ومحافظات المملكة العربية السعودية عبر مركبات مجهزة ومكيفة، بأسلوب مباشر (من الباب إلى الباب).
                </p>

                <h5 className="font-bold text-stone-900">2. التزامات العميل (المرسل والمستلم):</h5>
                <ul className="list-disc list-inside space-y-1 text-stone-600 pr-2">
                  <li>التصريح عن الحالة الصحية للحيوان الأليف، وخلوه من الأمراض المعدية الحادة.</li>
                  <li>تقديم وجبة طعام خفيفة فقط قبل موعد الاستلام بثلاث ساعات لتفادي الغثيان أثناء حركة المركبة.</li>
                  <li>توفير قفص نقل محكم وسليم، أو طلب توفير قفص سفر معتمد من الكابتن مسبقاً.</li>
                  <li>التواجد أو تكليف من ينوب في موقع الاستلام والتسليم في المواعيد المتفق عليها عبر الواتساب.</li>
                </ul>

                <h5 className="font-bold text-stone-900">3. التزامات أليف إكسبرس:</h5>
                <ul className="list-disc list-inside space-y-1 text-stone-600 pr-2">
                  <li>توفير تكييف متواصل ومراقب طوال مسار الرحلة دون انقطاع.</li>
                  <li>التعامل الرحيم والمهني مع الحيوان ومنع أي إزعاج أو احتكاك بصري مع حيوانات أخرى.</li>
                  <li>إرسال توثيق بالفيديو والصور للمربي عند محطات الاستراحة.</li>
                </ul>

                <h5 className="font-bold text-stone-900">4. الشفافية المالية:</h5>
                <p>
                  يتم الاتفاق على تكلفة الرحلة بوضوح وشفافية تامة عبر محادثة الواتساب قبل الاستلام، ويكون الدفع مريحاً ومباشراً عند الاستلام أو التسليم (نقداً، تحويل بنكي، أو مدى/أبل باي للكابتن).
                </p>
              </div>
            </div>
          )}

          {/* 3. Cancellation Policy */}
          {activeTab === 'cancellation' && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-2">
                سياسة الإلغاء وتعديل المواعيد والاسترجاع
              </h4>
              <div className="space-y-3">
                <h5 className="font-bold text-stone-900">1. تعديل موعد الرحلة:</h5>
                <p>
                  يمكن للعميل تعديل موعد رحلة أليفه في أي وقت مجاناً بالتنسيق المباشر عبر الواتساب مع خدمة العملاء قبل انطلاق الكابتن لاستلام الحيوان.
                </p>

                <h5 className="font-bold text-stone-900">2. الإلغاء قبل الاستلام:</h5>
                <p>
                  يحق للعميل إلغاء الطلب دون أي رسوم أو شروط جزائية إذا تم الإلغاء قبل وصول الكابتن لموقع الاستلام.
                </p>

                <h5 className="font-bold text-stone-900">3. الضمان والتعويض:</h5>
                <p>
                  في حال تعذر استكمال الرحلة لأي ظرف طارئ خارج عن الإرادة (كأحوال جوية استثنائية)، يتم إيواء الحيوان الأليف في بيئة مكيفة وآمنة تماماً وتأمين رعايته، أو إعادته فوراً للمرسل حسب رغبته دون أي تكلفة إضافية.
                </p>
              </div>
            </div>
          )}

          {/* 4. Animal Welfare */}
          {activeTab === 'welfare' && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-2">
                ميثاق رفاهية ورعاية الحيوان (Animal Welfare Standards)
              </h4>
              <div className="space-y-3">
                <p>
                  نلتزم التزاماً صارماً بمبادئ الرحمة والرفق بالحيوان وفق أحكام الشريعة الإسلامية ونظام الرفق بالحيوان لدول مجلس التعاون لدول الخليج العربية المعمول به في المملكة العربية السعودية:
                </p>
                <ul className="list-disc list-inside space-y-1 text-stone-600 pr-2">
                  <li><strong>الحماية من الإجهاد الحراري:</strong> الحفاظ على درجة حرارة 21-23 مئوية للقطط والطيور، وتوفير بطاريات تكييف احتياطية تضمن عمل التبريد حتى لو توقفت المركبة.</li>
                  <li><strong>الحماية من الخوف والذعر:</strong> تغطية أقفاص الطيور بقماش مسامي لمنع الفزع، وعزل القطط عن رؤية أي حيوانات أخرى.</li>
                  <li><strong>الترطيب والتغذية:</strong> توفير مياه شرب نقية وتفقد الأليف بشكل دوري طوال ساعات السفر.</li>
                  <li><strong>بروتوكول الطوارئ البيطري:</strong> نمتلك شبكة تواصل مع عيادات بيطرية على طول الطرق السريعة بين كافة مدن المملكة لأي حالة طارئة.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Business Transparency info (Google Ads requirement) */}
        <div className="bg-stone-100 p-4 sm:p-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 font-semibold text-stone-800">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>المقر: الرياض، المملكة العربية السعودية (تغطية لكافة المدن)</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-stone-800">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>هاتف: {CONTACT_PHONE_DISPLAY}</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-stone-800">
              <Mail className="w-4 h-4 text-emerald-600" />
              <span>contact@aleef-express.com</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-2 px-6 rounded-xl transition-colors cursor-pointer"
          >
            فهمت وموافق
          </button>
        </div>

      </div>
    </div>
  );
};
