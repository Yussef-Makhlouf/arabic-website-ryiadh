import { ExclamationTriangleIcon, ShieldExclamationIcon, LightBulbIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

export default function MarketChallenges() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <ExclamationTriangleIcon className="w-5 h-5" />
                        <span>تحديات السوق</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        التحديات والحلول في سوق العزل السعودي
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        فهم التحديات الموجودة في السوق يساعدك على اتخاذ قرارات أفضل وتجنب المشاكل المحتملة
                    </p>
                </div>

                {/* Challenges Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Quality Issues */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                                <ShieldExclamationIcon className="w-8 h-8 text-red-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">مشاكل الجودة والمواد المقلدة</h3>
                                <p className="text-gray-500 text-sm">التحدي الأكبر في السوق السعودي</p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            يعاني سوق مواد العزل في المملكة من انتشار المواد المقلدة والرديئة التي تُباع بأسعار منخفضة. هذه المواد قد تبدو مشابهة للمنتجات الأصلية لكنها تفتقر للجودة والمتانة، وقد تفشل خلال أشهر قليلة.
                        </p>

                        <div className="bg-red-50 rounded-xl p-4 mb-4">
                            <h4 className="font-bold text-red-700 mb-3">علامات المواد المقلدة</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {[
                                    'سعر أقل بكثير من سعر السوق (أكثر من 30%)',
                                    'غياب شهادات الجودة أو شهادات مزورة',
                                    'عدم وجود ضمان مكتوب من الشركة المصنعة',
                                    'تغليف رديء أو معلومات ناقصة',
                                    'لون أو ملمس مختلف عن المنتج الأصلي'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-red-500 mt-0.5">⚠</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-green-50 rounded-xl p-4">
                            <h4 className="font-bold text-green-700 mb-3">الحل</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    اطلب شهادة SASO للمواد المستخدمة
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    تعامل مع موردين وشركات معتمدة
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    احصل على ضمان مكتوب وموثق
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Lack of Experts */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                                <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">نقص الخبراء والفنيين المؤهلين</h3>
                                <p className="text-gray-500 text-sm">التركيب الخاطئ يُبطل فوائد أفضل المواد</p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            حتى أفضل مواد العزل يمكن أن تفشل إذا لم يتم تركيبها بشكل صحيح. للأسف، يوجد في السوق عدد من المقاولين غير المؤهلين الذين يقدمون خدمات عزل دون خبرة أو تدريب كافٍ.
                        </p>

                        <div className="bg-yellow-50 rounded-xl p-4 mb-4">
                            <h4 className="font-bold text-yellow-700 mb-3">أخطاء التركيب الشائعة</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                {[
                                    'عدم تنظيف السطح قبل التطبيق',
                                    'سماكة غير كافية أو غير متساوية',
                                    'ترك فجوات أو فراغات بين الألواح',
                                    'عدم معالجة الشقوق والتصدعات مسبقاً',
                                    'تجاهل طبقة الحماية من الأشعة فوق البنفسجية'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-yellow-500 mt-0.5">⚠</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-green-50 rounded-xl p-4">
                            <h4 className="font-bold text-green-700 mb-3">الحل</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    اختر شركات لديها فريق فني مدرب
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    اطلب رؤية مشاريع سابقة مماثلة
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    تابع عملية التنفيذ شخصياً
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Solutions & Innovation */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Innovation */}
                    <div className="bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] rounded-2xl p-6 md:p-8 text-white">
                        <div className="flex items-start gap-4 mb-6">
                            <LightBulbIcon className="w-10 h-10 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">حلول الابتكار والتقنيات الجديدة</h3>
                                <p className="text-white/80 text-sm">مستقبل العزل في المملكة</p>
                            </div>
                        </div>

                        <p className="text-white/90 leading-relaxed mb-6">
                            تشهد صناعة العزل في المملكة تطوراً ملحوظاً مع دخول تقنيات جديدة وشركات متخصصة تقدم حلولاً مبتكرة:
                        </p>

                        <div className="space-y-4">
                            {[
                                { title: 'العزل بالنانو تكنولوجي', desc: 'طبقات رقيقة جداً بأداء عزل عالي' },
                                { title: 'العزل العاكس للحرارة', desc: 'يعكس 97% من الأشعة الحمراء' },
                                { title: 'أنظمة العزل الذكية', desc: 'تتكيف مع تغيرات درجة الحرارة' },
                                { title: 'مواد صديقة للبيئة', desc: 'قابلة للتدوير وآمنة بيئياً' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <h4 className="font-bold mb-1">{item.title}</h4>
                                    <p className="text-white/70 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regulatory Role */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <BuildingOffice2Icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">دور الجهات الرقابية والمعايير</h3>
                                <p className="text-gray-500 text-sm">الإطار التنظيمي لصناعة العزل</p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            تعمل عدة جهات حكومية على تنظيم سوق العزل وضمان جودة المنتجات والخدمات:
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    org: 'هيئة المواصفات والمقاييس (SASO)',
                                    role: 'وضع المواصفات الفنية واعتماد المنتجات'
                                },
                                {
                                    org: 'وزارة الشؤون البلدية والقروية',
                                    role: 'إلزام المباني الجديدة بالعزل الحراري'
                                },
                                {
                                    org: 'المركز السعودي لكفاءة الطاقة',
                                    role: 'برامج ترشيد الطاقة ومعايير العزل'
                                },
                                {
                                    org: 'شركة الكهرباء السعودية',
                                    role: 'برنامج دعم العزل الحراري للمنازل'
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="font-bold text-gray-900 text-sm">{item.org}</h4>
                                    <p className="text-gray-500 text-sm">{item.role}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-blue-50 rounded-xl p-4">
                            <h4 className="font-bold text-blue-700 mb-2">نصيحة مهمة</h4>
                            <p className="text-gray-600 text-sm">
                                تأكد دائماً من أن المقاول والمواد المستخدمة معتمدة من الجهات الرسمية. هذا يضمن لك الحماية القانونية والجودة المطلوبة.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 md:p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">نحن شركة معتمدة ومرخصة</h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        نستخدم مواد عزل أصلية معتمدة من SASO، ولدينا فريق فني مدرب ومؤهل. نقدم ضمان حقيقي مكتوب على جميع أعمالنا.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:0507961706" className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            اتصل للاستشارة المجانية
                        </a>
                        <a href="https://wa.me/966507961706" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors">
                            واتساب
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
