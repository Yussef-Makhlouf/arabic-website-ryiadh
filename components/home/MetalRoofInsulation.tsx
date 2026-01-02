import React from 'react';
import Image from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

const MetalRoofInsulation = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-r-4 border-blue-600 pr-4">
                    5. المحور الصناعي: عزل الشينكو والمستودعات (الأرخص والأقوى)
                </h2>

                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                عزل فوم للشينكو: الحل الأمثل للمستودعات
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                تعاني الهناجر والمستودعات ذات الأسقف المعدنية (الشينكو) من مشكلتين رئيسيتين: الحرارة الشديدة التي تتلف البضائع، وتسرب مياه الأمطار الذي يسبب الصدأ.
                                <br /><br />
                                <strong>عزل الفوم للشينكو</strong> هو الحل الجذري والوحيد الذي يعالج المشكلتين بطبقة واحدة، وهو <strong>الأرخص تكلفة</strong> مقارنة باستبدال الألواح أو الحلول التقليدية.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckBadgeIcon className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700 font-medium">يمنع صوت المطر المزعج (عزل صوتي)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckBadgeIcon className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700 font-medium">يوقف الصدأ ويطيل عمر الشينكو</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckBadgeIcon className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700 font-medium">خفيف الوزن ولا يحتاج دعامات إضافية</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckBadgeIcon className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700 font-medium">سعر المتر في المتناول وتنفيذ سريع</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[300px] md:min-h-auto">
                            <Image
                                src="/best-practices-spray-foam-installation-on-roof.webp"
                                alt="عزل شينكو ومستودعات"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply" />
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
                                <p className="font-bold text-blue-800 text-sm">حماية 100% من الصدأ والتسرب</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Snippet for Shinko */}
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">هل الفوم يلتصق بالشينكو؟</h4>
                        <p className="text-sm text-gray-700">نعم، الفوم يمتلك خاصية التصاق كيميائية قوية جداً بالمعادن، ويصبح جزءاً واحداً مع السطح.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">كم سماكة العزل المطلوبة؟</h4>
                        <p className="text-sm text-gray-700">للمستودعات نوصي بسماكة 3 سم كحد أدنى لعزل حراري فعال، و5 سم لأعلى كفاءة.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">هل يحتاج صيانة؟</h4>
                        <p className="text-sm text-gray-700">عزل الفوم للشينكو لا يحتاج صيانة تقريباً إذا تم تغطيته بطبقة أكريليك حماية من الشمس.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MetalRoofInsulation;
