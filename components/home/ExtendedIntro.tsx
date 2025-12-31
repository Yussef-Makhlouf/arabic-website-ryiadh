import React from 'react';
import { ShieldCheck, Sun, ClipboardCheck } from 'lucide-react';

const ExtendedIntro = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">1. المقدمة الموسعة: العزل كاستثمار استراتيجي في مواجهة مناخ المملكة</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10">
                    <p>
                        إن قرار عزل المبنى في المملكة العربية السعودية، وتحديداً في مدن ذات مناخ قاسٍ مثل <strong>الرياض والخرج</strong>، يتجاوز كونه مجرد إجراء صيانة ليصبح <strong>استثماراً استراتيجياً</strong> في استدامة العقار وكفاءة الطاقة. نحن في <strong>شركة العزل المتقدم</strong>، بخبرة تزيد عن <strong>15 عاماً</strong>، ندرك تماماً التحديات المناخية التي تواجه الهياكل الإنشائية: من درجات الحرارة التي تتجاوز الـ 50 درجة مئوية صيفاً، إلى التقلبات الجوية التي تسبب تسربات مياه مدمرة. لذا، نقدم حلول <strong>عزل فوم بالرياض</strong> و<strong>عزل مائي</strong> متكاملة، مصممة خصيصاً لتحمل هذه الظروف القاسية.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transition-transform hover:-translate-y-2 duration-300">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-blue-600 mx-auto">
                            <Sun size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">تحديات المناخ السعودي</h3>
                        <p className="text-gray-600 text-center">
                            تفصيل تأثير الحرارة والرطوبة على الهياكل الخرسانية وقدرة عوازلنا على التصدي لها بكفاءة عالية.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transition-transform hover:-translate-y-2 duration-300">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-blue-600 mx-auto">
                            <ClipboardCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">الالتزام بالمعايير</h3>
                        <p className="text-gray-600 text-center">
                            التأكيد على الاعتماد من الهيئة السعودية للمهندسين وشهادات الجودة (SASO) في جميع المواد المستخدمة.
                        </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transition-transform hover:-translate-y-2 duration-300">
                        <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-blue-600 mx-auto">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">وعد الشركة</h3>
                        <p className="text-gray-600 text-center">
                            خبرة تتجاوز 15 عاماً وضمان شامل يصل إلى 15 سنة على جميع أعمال العزل المائي والحراري.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtendedIntro;
