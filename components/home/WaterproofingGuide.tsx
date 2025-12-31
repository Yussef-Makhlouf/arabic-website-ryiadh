import { ShieldCheckIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon, CurrencyDollarIcon, ClipboardDocumentCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function WaterproofingGuide() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#05ccca]/10 text-[#05ccca] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <ShieldCheckIcon className="w-5 h-5" />
                        <span>العزل المائي الاحترافي</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        العزل المائي - الحامي الأول من التلف
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        دليل شامل حول العزل المائي للأسطح والخزانات: المواد، التقنيات، ومتى تحتاجه
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* Definition and Materials */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="w-10 h-10 rounded-lg bg-[#05ccca] text-white flex items-center justify-center">
                                <WrenchScrewdriverIcon className="w-6 h-6" />
                            </span>
                            التعريف والمواد المستخدمة في العزل المائي
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            <strong className="text-gray-900">العزل المائي</strong> هو نظام حماية يُطبق على الأسطح والأساسات والخزانات لمنع تسرب المياه ووصول الرطوبة إلى الهيكل الإنشائي. يُعد العزل المائي خط الدفاع الأول ضد التلف الناجم عن المياه، والذي يُعتبر من أخطر العوامل المدمرة للمباني.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Bitumen */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-100">
                                <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-4">
                                    <span className="font-bold">1</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">البيتومين (القار)</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    مادة عزل تقليدية مستخلصة من البترول، تتميز بمرونتها العالية ومقاومتها للماء. تُستخدم بشكلين رئيسيين:
                                </p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• البيتومين الساخن (المؤكسد)</li>
                                    <li>• البيتومين المطاطي (المعدّل بالبوليمر)</li>
                                    <li>• رولات البيتومين الملحومة</li>
                                </ul>
                            </div>

                            {/* PVC Membranes */}
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 border border-blue-100">
                                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4">
                                    <span className="font-bold">2</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">أغشية PVC والممبرين</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    أغشية بلاستيكية حديثة عالية المقاومة، تُلحم بالحرارة لتشكيل طبقة عازلة متكاملة بدون فواصل:
                                </p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• مقاومة ممتازة للأشعة فوق البنفسجية</li>
                                    <li>• عمر افتراضي يصل 30 سنة</li>
                                    <li>• مرونة عالية تتحمل الحركة</li>
                                </ul>
                            </div>

                            {/* Cement-based */}
                            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-5 border border-green-100">
                                <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center mb-4">
                                    <span className="font-bold">3</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">المواد الأسمنتية</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    خلطات أسمنتية خاصة مُضاف إليها بوليمرات تمنحها خصائص عازلة للماء:
                                </p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• مثالية للخزانات ومياه الشرب</li>
                                    <li>• سهلة التطبيق والإصلاح</li>
                                    <li>• آمنة صحياً ومعتمدة</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* When do you need it */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <ExclamationTriangleIcon className="w-8 h-8 text-yellow-500" />
                                متى تحتاج العزل المائي؟
                            </h3>

                            <div className="space-y-4">
                                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                                    <h4 className="font-bold text-red-700 mb-2">العلامات التحذيرية</h4>
                                    <ul className="text-gray-600 text-sm space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span>
                                            بقع رطوبة على الأسقف أو الجدران
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span>
                                            تقشر الطلاء وانتفاخه
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span>
                                            ظهور العفن والروائح الكريهة
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span>
                                            تساقط قطرات ماء من السقف
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span>
                                            ارتفاع فاتورة المياه غير المبرر
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                                    <h4 className="font-bold text-green-700 mb-2">الوقاية قبل المشكلة</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        الأفضل دائماً تطبيق العزل المائي <strong>وقائياً</strong> على المباني الجديدة قبل ظهور أي مشاكل. تكلفة الوقاية أقل بكثير من تكلفة الإصلاح بعد حدوث التلف.
                                    </p>
                                </div>

                                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                    <h4 className="font-bold text-blue-700 mb-2">المتطلبات القانونية</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        يُلزم كود البناء السعودي جميع المباني الجديدة بتطبيق نظام عزل مائي معتمد للأسطح والأساسات، مع شهادة ضمان من المقاول.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <CurrencyDollarIcon className="w-8 h-8 text-green-600" />
                                التكلفة مقابل العمر الافتراضي
                            </h3>

                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    عند اختيار نوع العزل المائي، يجب الموازنة بين التكلفة الأولية والعمر الافتراضي للحصول على أفضل قيمة:
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { type: 'البيتومين التقليدي', price: '20-30 ريال/م²', life: '10-15 سنة', color: 'gray' },
                                        { type: 'البيتومين المطاطي', price: '35-50 ريال/م²', life: '15-20 سنة', color: 'blue' },
                                        { type: 'أغشية PVC', price: '60-90 ريال/م²', life: '25-30 سنة', color: 'green' },
                                        { type: 'العزل الأسمنتي', price: '25-40 ريال/م²', life: '15-20 سنة', color: 'yellow' }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex items-center justify-between p-4 rounded-xl bg-${item.color}-50 border border-${item.color}-100`}>
                                            <div>
                                                <div className="font-bold text-gray-900">{item.type}</div>
                                                <div className="text-sm text-gray-500">العمر: {item.life}</div>
                                            </div>
                                            <div className="text-lg font-bold text-[#0d64ab]">{item.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case Studies & Maintenance */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] rounded-2xl p-6 md:p-8 text-white">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <ClipboardDocumentCheckIcon className="w-8 h-8" />
                                دراسات حالة من مشاريع سعودية
                            </h3>

                            <div className="space-y-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <h4 className="font-bold mb-2">مجمع سكني - حي النرجس، الرياض</h4>
                                    <p className="text-white/80 text-sm">
                                        عزل 50 فيلا بنظام البيتومين المطاطي. وفّر المشروع 40% من تكاليف الصيانة خلال 5 سنوات مع صفر حالات تسرب.
                                    </p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <h4 className="font-bold mb-2">مبنى تجاري - طريق الملك فهد</h4>
                                    <p className="text-white/80 text-sm">
                                        تجديد عزل سطح بمساحة 3000م² باستخدام أغشية PVC. ضمان 15 سنة مع تقليل تكاليف التكييف بنسبة 30%.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <SparklesIcon className="w-8 h-8 text-[#05ccca]" />
                                الصيانة الدورية والنصائح العملية
                            </h3>

                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    للحفاظ على فعالية العزل المائي لأطول فترة ممكنة، اتبع هذه النصائح:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        'فحص السطح مرتين سنوياً (قبل وبعد موسم الأمطار)',
                                        'إزالة المياه المتراكمة فور هطول الأمطار',
                                        'معالجة الشقوق الصغيرة فوراً قبل توسعها',
                                        'تجنب المشي على السطح إلا للضرورة',
                                        'تنظيف مجاري تصريف المياه دورياً',
                                        'الاستعانة بمتخصص عند ملاحظة أي مشكلة'
                                    ].map((tip, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                                            <span className="w-6 h-6 rounded-full bg-[#05ccca]/10 text-[#05ccca] flex items-center justify-center text-sm font-bold flex-shrink-0">{idx + 1}</span>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
