import React from 'react';
import Image from 'next/image';
import { Building2, Thermometer, Shield, Droplets, CheckCircle2 } from 'lucide-react';

const RoofInsulationGuide = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-r-4 border-blue-600 pr-4">
                    دليل شامل: عزل الأسطح الخرسانية والمبلطة بالرياض
                </h2>

                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    تُعد <strong>خدمة عزل الأسطح في الرياض</strong> من أهم الخدمات التي يحتاجها كل مبنى لحمايته من الحرارة الشديدة والأمطار. سواء كان سطحك <strong>خرسانياً</strong> أو <strong>مبلطاً</strong>، نقدم لك حلول عزل متكاملة تناسب جميع أنواع الأسطح.
                </p>

                {/* Section 1: Types of Roof Insulation */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 ml-4">
                                <Thermometer size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">العزل الحراري للأسطح</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            <strong>العزل الحراري</strong> هو الحل الأمثل لتخفيض درجة حرارة المبنى في صيف الرياض الحارق. يعمل على منع انتقال الحرارة من السطح إلى داخل المبنى، مما يوفر حتى <strong>40% من فاتورة الكهرباء</strong>.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>تقليل الحرارة داخل المبنى بنسبة كبيرة</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>توفير استهلاك التكييف والكهرباء</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>إطالة عمر أجهزة التبريد</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 ml-4">
                                <Droplets size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">العزل المائي للأسطح</h3>
                        </div>
                        <p className="text-gray-600 mb-4">
                            <strong>العزل المائي</strong> يحمي المبنى من تسرب مياه الأمطار والرطوبة. نستخدم مواد عازلة عالية الجودة مثل <strong>البيتومين</strong> و<strong>الممبرين</strong> لضمان حماية شاملة تدوم لسنوات.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>حماية من تسربات الأمطار</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>منع الرطوبة والتعفن</span>
                            </li>
                            <li className="flex items-center gap-2 text-gray-600">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>حماية الهيكل الإنشائي</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 2: Tiled Roof Insulation */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                            <Image
                                src="/spray-foam-roofing-01.webp"
                                alt="عزل الأسطح المبلطة"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent md:hidden" />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white ml-3">
                                    <Building2 size={20} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">عزل الأسطح المبلطة</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                إذا كان سطحك <strong>مبلطاً</strong>، فلا داعي للتكسير! نقدم حلول عزل متقدمة تُطبق <strong>فوق البلاط</strong> مباشرة باستخدام تقنية <strong>الفوم البولي يوريثان</strong> أو طبقات العزل المائي الحديثة.
                            </p>
                            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                <h4 className="font-bold text-blue-800 mb-2">مميزات عزل الأسطح المبلطة:</h4>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>✓ بدون تكسير أو إزالة البلاط</li>
                                    <li>✓ سرعة التنفيذ (يوم إلى يومين)</li>
                                    <li>✓ حماية البلاط من التفكك الحراري</li>
                                    <li>✓ عزل مائي وحراري في وقت واحد</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Concrete Roof Insulation */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white mb-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center ml-3">
                                    <Shield size={20} />
                                </div>
                                <h3 className="text-2xl font-bold">عزل الأسطح الخرسانية</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                الأسطح <strong className="text-white">الخرسانية العارية</strong> تحتاج إلى نظام عزل متكامل يحميها من الحرارة والمياه معاً. نوفر حلول متعددة تشمل:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-sm font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">عزل الفوم الحراري</h4>
                                        <p className="text-sm text-gray-400">رش مباشر على الخرسانة بسماكة 3-5 سم</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-sm font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">طبقة العزل المائي</h4>
                                        <p className="text-sm text-gray-400">بيتومين أو ممبرين لمنع التسربات</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-sm font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold">طبقة الحماية</h4>
                                        <p className="text-sm text-gray-400">دهان أكريليك عاكس للحرارة</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 rounded-xl overflow-hidden">
                            <Image
                                src="/thermcoat_termal_acoustic_insulation_pu_spray_foam_3.webp"
                                alt="عزل أسطح خرسانية"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 4: Why Roof Insulation */}
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">لماذا عزل السطح ضرورة وليس رفاهية؟</h3>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                            <p className="text-sm text-gray-600">توفير في فاتورة الكهرباء</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-green-600 mb-2">15°</div>
                            <p className="text-sm text-gray-600">تخفيض درجة الحرارة</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                            <p className="text-sm text-gray-600">سنوات عمر افتراضي</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm">
                            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                            <p className="text-sm text-gray-600">حماية من التسربات</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoofInsulationGuide;
