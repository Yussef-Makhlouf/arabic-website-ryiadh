import React from 'react';
import Image from 'next/image';
import { Search, Volume2, Flame } from 'lucide-react';

const LeakDetection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-r-4 border-blue-600 pr-4">
                    4. المحور الإرشادي: كشف وعلاج تسربات المياه بأحدث التقنيات
                </h2>

                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                    تُعد <strong>خدمة كشف تسربات المياه بالرياض</strong> من أهم الخدمات التي نقدمها، حيث أن التسربات غير المرئية هي السبب الرئيسي لتدهور المباني وارتفاع فواتير المياه. نستخدم أحدث الأجهزة الإلكترونية لتحديد موقع التسرب بدقة متناهية دون الحاجة إلى تكسير عشوائي.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 ml-4">
                                <Volume2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">الأجهزة الصوتية (Acoustic Detection)</h3>
                        </div>
                        <p className="text-gray-600">
                            تعتمد على التقاط الذبذبات الصوتية الناتجة عن تسرب المياه تحت الأرضيات أو داخل الجدران، مما يساعدنا على سماع "نبض" التسرب وتحديد مكانه بدقة.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 ml-4">
                                <Flame size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">الكاميرات الحرارية (Thermal Imaging)</h3>
                        </div>
                        <p className="text-gray-600">
                            تُستخدم لتحديد الفروقات في درجات الحرارة الناتجة عن وجود الرطوبة أو المياه المتسربة. تظهر المياه الباردة كبقع زرقاء في الصورة الحرارية، مما يحدد بدقة مصدر المشكلة غير المرئي.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                        <Image
                            src="/water-leak.avif"
                            alt="كشف تسربات المياه"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <p className="text-white font-bold text-lg">كشف دقيق بدون تكسير</p>
                        </div>
                    </div>
                    <div className="text-gray-700 leading-relaxed text-lg">
                        <p className="mb-4">
                            مشكلة تسربات المياه لا تقتصر فقط على ارتفاع الفاتورة، بل قد تسبب تآكل الحديد وانهيار أجزاء من المبنى.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                حماية المبنى من التصدعات
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                توفير المياه والمال
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                ضمان سلامة التمديدات
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeakDetection;
