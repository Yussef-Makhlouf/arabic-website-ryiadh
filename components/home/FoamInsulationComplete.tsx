import React from 'react';
import Image from 'next/image';
import { Flame, Shield, Zap, Timer, CheckCircle2, Star } from 'lucide-react';

const FoamInsulationComplete = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-r-4 border-blue-600 pr-4">
                    دليل عزل الفوم البولي يوريثان: الحل الأمثل للأسطح في الرياض
                </h2>

                {/* Introduction */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white mb-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">ما هو عزل الفوم البولي يوريثان؟</h3>
                            <p className="text-blue-100 leading-relaxed mb-4">
                                <strong className="text-white">عزل الفوم</strong> هو تقنية عزل متطورة تستخدم مادة البولي يوريثان السائلة التي تُرش على الأسطح لتتمدد وتتصلب مكونة طبقة عازلة متماسكة. تُعتبر هذه التقنية الأكثر فعالية في العزل الحراري والمائي معاً.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">عزل حراري</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">عزل مائي</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">عزل صوتي</span>
                            </div>
                        </div>
                        <div className="relative h-64 rounded-xl overflow-hidden">
                            <Image
                                src="/attic-with-completed-spray-foam-insulation.webp"
                                alt="عزل فوم بولي يوريثان"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">مميزات عزل الفوم للأسطح</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white mb-4">
                                <Flame size={24} />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">عزل حراري فائق</h4>
                            <p className="text-gray-600 text-sm">
                                يمنع انتقال <strong>98%</strong> من الحرارة الخارجية. أعلى معامل عزل حراري (R-Value) مقارنة بجميع مواد العزل الأخرى.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
                                <Shield size={24} />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">حماية مائية كاملة</h4>
                            <p className="text-gray-600 text-sm">
                                مادة الفوم <strong>مغلقة الخلايا</strong> تمنع تسرب المياه بنسبة 100%. لا توجد فراغات أو فواصل يمكن أن تدخل منها المياه.
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4">
                                <Zap size={24} />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">توفير الطاقة</h4>
                            <p className="text-gray-600 text-sm">
                                توفير يصل إلى <strong>50%</strong> من فاتورة الكهرباء. تكلفة العزل تُسترد خلال 12-18 شهراً من التوفير.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Application Process */}
                <div className="bg-gray-50 rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">مراحل تطبيق عزل الفوم</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                            <h4 className="font-bold text-gray-900 mb-2">المعاينة والتقييم</h4>
                            <p className="text-sm text-gray-600">فحص السطح وتحديد المساحة والسماكة المطلوبة</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                            <h4 className="font-bold text-gray-900 mb-2">تنظيف السطح</h4>
                            <p className="text-sm text-gray-600">إزالة الأوساخ والأتربة وتجهيز السطح للرش</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                            <h4 className="font-bold text-gray-900 mb-2">رش الفوم</h4>
                            <p className="text-sm text-gray-600">رش الفوم بالسماكة المحددة (3-5 سم)</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                            <h4 className="font-bold text-gray-900 mb-2">طبقة الحماية</h4>
                            <p className="text-sm text-gray-600">دهان أكريليك عاكس لحماية الفوم من الشمس</p>
                        </div>
                    </div>
                </div>

                {/* Foam Types Comparison */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">أنواع الفوم المستخدمة</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-500">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xl font-bold text-gray-900">فوم مغلق الخلايا</h4>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">الأكثر استخداماً</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                النوع الأفضل للأسطح في الرياض. كثافة عالية (35-45 كجم/م³) توفر عزل حراري ومائي ممتاز.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>مقاوم للماء 100%</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>قوة تحمل عالية للضغط</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>عمر افتراضي 15+ سنة</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xl font-bold text-gray-900">فوم مفتوح الخلايا</h4>
                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">اقتصادي</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                أخف وزناً وأقل تكلفة. مناسب للمناطق الداخلية والأماكن التي لا تتعرض للمياه.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>عزل حراري جيد</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>عزل صوتي ممتاز</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>سعر اقتصادي</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6 text-center">لماذا تختارنا لعزل الفوم؟</h3>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Star className="w-7 h-7 text-gray-900" />
                            </div>
                            <h4 className="font-bold mb-1">خبرة 15 عاماً</h4>
                            <p className="text-sm text-gray-400">في مجال عزل الأسطح</p>
                        </div>
                        <div>
                            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Shield className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="font-bold mb-1">ضمان 10 سنوات</h4>
                            <p className="text-sm text-gray-400">على جميع الأعمال</p>
                        </div>
                        <div>
                            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Timer className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="font-bold mb-1">تنفيذ سريع</h4>
                            <p className="text-sm text-gray-400">خلال يوم واحد</p>
                        </div>
                        <div>
                            <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Zap className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="font-bold mb-1">معدات حديثة</h4>
                            <p className="text-sm text-gray-400">تقنيات أمريكية</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoamInsulationComplete;
