import { AcademicCapIcon, SunIcon, DocumentCheckIcon, HomeModernIcon } from '@heroicons/react/24/outline'

export default function InsulationBasics() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#0d64ab]/10 text-[#0d64ab] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <AcademicCapIcon className="w-5 h-5" />
                        <span>دليل شامل عن العزل</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        فهم أساسيات العزل في البناء
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        دليلك الشامل لفهم أنظمة العزل المختلفة وأهميتها في حماية المباني بالمملكة العربية السعودية
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Right Column - Main Content */}
                    <div className="space-y-8">
                        {/* Definition */}
                        <div className="bg-gradient-to-br from-[#0d64ab]/5 to-transparent rounded-2xl p-6 border border-[#0d64ab]/10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-lg bg-[#0d64ab] text-white flex items-center justify-center text-lg font-bold">1</span>
                                تعريف العزل وأنواعه الأساسية
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                <strong className="text-gray-900">العزل في البناء</strong> هو عملية حماية المباني من العوامل الخارجية باستخدام مواد متخصصة تمنع انتقال الحرارة والماء والصوت. ينقسم العزل إلى ثلاثة أنواع رئيسية: <strong className="text-[#0d64ab]">العزل الحراري</strong> الذي يمنع انتقال الحرارة بين داخل المبنى وخارجه، <strong className="text-[#0d64ab]">العزل المائي</strong> الذي يحمي المبنى من تسربات المياه والرطوبة، و<strong className="text-[#0d64ab]">العزل الصوتي</strong> الذي يقلل من انتقال الأصوات.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                في المملكة العربية السعودية، يُعد العزل الحراري والمائي من أهم أولويات البناء نظراً للمناخ الصحراوي الحار والجاف الذي يتميز بدرجات حرارة قد تتجاوز 50 درجة مئوية صيفاً، إضافة إلى الأمطار الموسمية الغزيرة التي قد تسبب تسربات خطيرة.
                            </p>
                        </div>

                        {/* Importance in Desert Climate */}
                        <div className="bg-gradient-to-br from-yellow-50 to-transparent rounded-2xl p-6 border border-yellow-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <SunIcon className="w-8 h-8 text-yellow-500" />
                                أهمية العزل في المناخ الصحراوي
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                يواجه المناخ الصحراوي في المملكة تحديات فريدة تجعل العزل ضرورة وليس رفاهية. فارق درجات الحرارة الكبير بين النهار والليل - الذي قد يصل إلى 20 درجة - يُعرّض المباني لإجهاد حراري متكرر يؤدي إلى تشققات وتلف في المواد الإنشائية.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'درجات حرارة صيفية تتجاوز 45-50 درجة مئوية',
                                    'أشعة شمس مباشرة وقوية على مدار العام',
                                    'رطوبة عالية في المناطق الساحلية',
                                    'أمطار موسمية غزيرة في بعض المناطق',
                                    'غبار وعواصف رملية متكررة'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Saudi Standards */}
                        <div className="bg-gradient-to-br from-green-50 to-transparent rounded-2xl p-6 border border-green-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <DocumentCheckIcon className="w-8 h-8 text-green-600" />
                                المعايير السعودية لأنظمة العزل
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                أصدرت <strong className="text-gray-900">هيئة المواصفات والمقاييس السعودية (SASO)</strong> معايير صارمة لأنظمة العزل في المباني، وتُلزم وزارة الشؤون البلدية والقروية جميع المباني الجديدة بتطبيق العزل الحراري منذ عام 2014. تشمل هذه المعايير:
                            </p>
                            <div className="bg-white rounded-xl p-4 space-y-3">
                                {[
                                    { label: 'SASO 2428', desc: 'مواصفات مواد العزل الحراري' },
                                    { label: 'SASO 2530', desc: 'متطلبات العزل في المباني السكنية' },
                                    { label: 'كود البناء السعودي', desc: 'الفصل الخامس - العزل الحراري' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-bold">{item.label}</span>
                                        <span className="text-gray-600 text-sm">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Impact on Building */}
                        <div className="bg-gradient-to-br from-[#05ccca]/10 to-transparent rounded-2xl p-6 border border-[#05ccca]/20">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <HomeModernIcon className="w-8 h-8 text-[#05ccca]" />
                                تأثير العزل على عمر المبنى والراحة
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                العزل الجيد لا يقتصر تأثيره على توفير فواتير الطاقة فحسب، بل يمتد ليشمل حماية الهيكل الإنشائي للمبنى وزيادة عمره الافتراضي. المباني المعزولة جيداً تتمتع بمميزات عديدة:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { value: '25%', label: 'زيادة في عمر المبنى' },
                                    { value: '50%', label: 'توفير في الكهرباء' },
                                    { value: '80%', label: 'حماية من التسربات' },
                                    { value: '40%', label: 'راحة حرارية أفضل' }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-[#0d64ab]">{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Summary */}
                <div className="mt-12 bg-[#0d64ab] rounded-2xl p-6 md:p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-right">
                            <h4 className="text-xl font-bold mb-2">هل تريد معرفة النوع المناسب لمبناك؟</h4>
                            <p className="text-white/80">تواصل معنا للحصول على استشارة مجانية من خبراء العزل لدينا</p>
                        </div>
                        <div className="flex gap-3">
                            <a href="tel:0507961706" className="bg-white text-[#0d64ab] px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                                اتصل الآن
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
