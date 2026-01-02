import React from 'react';
import Image from 'next/image';
import {  BanknotesIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import { Sun } from 'lucide-react';

const ThermalRoofInsulation = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-r-4 border-blue-600 pr-4">
                    4. المحور الاقتصادي: العزل الحراري للأسطح المبلطة وغير المبلطة
                </h2>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/thermcoat_termal_acoustic_insulation_pu_spray_foam_3.webp"
                            alt="عزل حراري للأسطح بالرياض"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <p className="font-bold text-lg">تقنيات عزل حديثة لتقليل الحرارة</p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            يعتبر <strong>العزل الحراري للأسطح</strong> الخيار الأول والاقتصادي لسكان الرياض لتقليل استهلاك الكهرباء بنسبة تصل إلى 40%. نحن نستخدم مواد عزل متطورة تناسب الأسطح المبلطة (فوق البلاط) والأسطح الخرسانية، مما يغنيك عن تكسير البلاط ويوفر تكاليف باهظة.
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">لماذا العزل الحراري ضرورة وليس رفاهية؟</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 text-yellow-600">
                                    <Sun className="w-6 h-6" />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed pt-2">
                                    <strong>حماية من شمس الرياض الحارقة:</strong> تعمل طبقة العزل كدرع عاكس للحرارة، مما يمنع الخرسانة من تخزين الحرارة ونقلها لداخل المنزل ليلاً.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                                    <BanknotesIcon className="w-6 h-6" />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed pt-2">
                                    <strong>استثمار ذكي وغير مكلف:</strong> تكلفة العزل الحراري تعتبر "زهيدة" مقارنة بحجم التوفير السنوي في فاتورة الكهرباء وإطالة عمر أجهزة التكييف.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
                                    <HomeModernIcon className="w-6 h-6" />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed pt-2">
                                    <strong>حماية الأسطح المبلطة:</strong> يحمي العزل الترويبة والبلاط من التفكك بسبب التمدد الحراري، مما يمنع تسرب المياه للمنزل مستقبلاً.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">مقارنة التكلفة والعائد (ROI)</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-white rounded-xl shadow-sm">
                            <p className="text-gray-500 text-sm mb-2">تكلفة العزل (تقريبية)</p>
                            <p className="text-2xl font-bold text-blue-600">استثمار مرة واحدة</p>
                            <p className="text-xs text-gray-400 mt-2">عمر افتراضي 10+ سنوات</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm">
                            <p className="text-gray-500 text-sm mb-2">التوفير الشهري</p>
                            <p className="text-2xl font-bold text-green-600">30% - 40%</p>
                            <p className="text-xs text-gray-400 mt-2">من فاتورة الكهرباء</p>
                        </div>
                        <div className="p-4 bg-white rounded-xl shadow-sm">
                            <p className="text-gray-500 text-sm mb-2">فترة استرداد التكلفة</p>
                            <p className="text-2xl font-bold text-gray-800">12 - 18 شهر</p>
                            <p className="text-xs text-gray-400 mt-2">ثم توفير صافي</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThermalRoofInsulation;
