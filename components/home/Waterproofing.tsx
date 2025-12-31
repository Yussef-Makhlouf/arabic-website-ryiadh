import React from 'react';
import { Droplets, Layers, CheckCircle } from 'lucide-react';

const Waterproofing = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-r-4 border-blue-600 pr-4">
                    3. المحور التقني الثاني: العزل المائي - حماية الهيكل الإنشائي
                </h2>

                <div className="mb-10 text-gray-700 leading-relaxed text-lg text-justify">
                    بينما يوفر الفوم حلاً مزدوجاً، يظل <strong>العزل المائي</strong> المتخصص ضرورياً في مناطق معينة مثل الحمامات، المسابح، وأساسات المباني. نحن نستخدم تقنيات متقدمة لضمان حماية الهيكل الخرساني من التلف الناتج عن الرطوبة.
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                            <Layers className="ml-3" />
                            3.1. أنواع العزل المائي المعتمدة
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-green-500 ml-3 flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="text-gray-900 block mb-1">اللفائف البيتومينية (Bituminous Membranes):</strong>
                                    <p className="text-gray-600">يتم استخدام لفائف بسمك 4 مم، وتُركب بتقنية اللحام الحراري لضمان تداخل كامل ومنع أي فواصل قد تسمح بالتسرب.</p>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                            <Droplets className="ml-3" />
                            3.2. مراحل التنفيذ واختبار الغمر
                        </h3>
                        <p className="text-gray-700 mb-4">
                            نعتمد على مواد عزل مائي معتمدة من هيئة المواصفات والمقاييس السعودية (SASO)، ونطبق اختبارات صارمة:
                        </p>
                        <ul className="space-y-4 text-gray-700 list-decimal list-inside marker:text-blue-600 marker:font-bold">
                            <li><strong>اختبار الغمر (Flood Test):</strong> بعد الانتهاء من تطبيق العزل المائي، يتم غمر السطح بالماء لمدة لا تقل عن 48 ساعة.</li>
                            <li><strong>التحقق:</strong> هذا الاختبار الحاسم يضمن كفاءة العزل بنسبة 100% قبل البدء في أعمال التشطيبات النهائية.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Waterproofing;
