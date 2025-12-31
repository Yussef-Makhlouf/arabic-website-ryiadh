import React from 'react';
import Image from 'next/image';
import { Heart, ShieldCheck } from 'lucide-react';

const TankInsulation = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-r-4 border-blue-600 pr-4">
                    6. المحور الصحي: عزل الخزانات لضمان نقاء المياه
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
                            نحن في <strong>شركة عزل خزانات بالرياض</strong> نولي أهمية قصوى لصحة عملائنا. المياه هي عصب الحياة، وأي تلوث في الخزان قد يؤدي إلى مشاكل صحية خطيرة.
                        </p>

                        <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-6">
                            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                                <ShieldCheck className="ml-2" /> 6.1. مواد آمنة ومعتمدة
                            </h3>
                            <p className="text-gray-700">
                                يتم عزل الخزانات بمواد إيبوكسي (Food Grade) معتمدة من <strong>هيئة الغذاء والدواء السعودية</strong>، والتي تمنع تفاعل المياه مع الخرسانة أو تكون الطحالب والبكتيريا، مما يضمن نقاء مياه الشرب.
                            </p>
                        </div>

                        <div className="relative h-64 rounded-xl overflow-hidden shadow-md mt-6">
                            <Image
                                src="/rooftop-water-tank-before-foam-insulation.webp"
                                alt="عزل خزانات المياه"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <p className="text-white font-bold text-lg">نضمن لكم مياه نقية وصحية</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">6.2. مراحل عزل الخزان المثالية</h3>
                            <ol className="relative border-r-2 border-blue-200 mr-3">
                                <li className="mb-6 mr-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -mr-10 ring-4 ring-white">
                                        <span className="text-blue-600 font-bold">1</span>
                                    </span>
                                    <h4 className="font-bold text-gray-900">التنظيف العميق</h4>
                                    <p className="text-sm text-gray-600">سحب المياه وتنظيف الجدران والأرضيات من الشوائب.</p>
                                </li>
                                <li className="mb-6 mr-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -mr-10 ring-4 ring-white">
                                        <span className="text-blue-600 font-bold">2</span>
                                    </span>
                                    <h4 className="font-bold text-gray-900">المعالجة والترميم</h4>
                                    <p className="text-sm text-gray-600">إغلاق الشقوق والتعشيش بمواد معالجة خاصة.</p>
                                </li>
                                <li className="mr-6">
                                    <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -mr-10 ring-4 ring-white">
                                        <span className="text-blue-600 font-bold">3</span>
                                    </span>
                                    <h4 className="font-bold text-gray-900">العزل الداخلي (الإيبوكسي)</h4>
                                    <p className="text-sm text-gray-600">طلاء الخزان بطبقتين من الإيبوكسي الأزرق الآمن.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TankInsulation;
