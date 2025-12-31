import React from 'react';
import { TrendingUp, FileText, DollarSign } from 'lucide-react';

const EnergySaving = () => {
    return (
        <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <h2 className="text-3xl font-bold mb-8 border-r-4 border-yellow-400 pr-4">
                    5. المحور الاقتصادي والتشريعي: العزل وتوفير الطاقة
                </h2>

                <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl">
                    إن التزامنا بتقديم <strong>أفضل شركة عزل اسطح بالرياض</strong> يرتكز على تحقيق أقصى فائدة اقتصادية لعملائنا، تماشياً مع رؤية المملكة 2030 ومتطلبات كود البناء السعودي.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                        <div className="flex items-center mb-4">
                            <FileText className="text-yellow-400 w-8 h-8 ml-3" />
                            <h3 className="text-2xl font-bold text-white">كود البناء السعودي (SBC)</h3>
                        </div>
                        <p className="text-blue-100 leading-relaxed">
                            يُلزم <strong>كود البناء السعودي</strong> بتطبيق العزل الحراري في المباني الجديدة لضمان كفاءة الطاقة. إن استخدام <strong>عزل الفوم</strong> المعتمد يضمن الامتثال لهذه المتطلبات القانونية والفنية.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20">
                        <div className="flex items-center mb-4">
                            <TrendingUp className="text-green-400 w-8 h-8 ml-3" />
                            <h3 className="text-2xl font-bold text-white">العائد على الاستثمار (ROI)</h3>
                        </div>
                        <p className="text-blue-100 leading-relaxed">
                            عند تطبيق العزل، يبدأ التوفير فوراً في فاتورة الكهرباء. الدراسات تثبت أن تكلفة العزل يمكن استردادها خلال فترة تتراوح بين <strong>3 إلى 5 سنوات</strong> من خلال الوفورات في الطاقة، ليصبح بعدها التوفير ربحاً صافياً للمالك.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnergySaving;
