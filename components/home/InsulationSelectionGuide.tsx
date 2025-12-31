import { LightBulbIcon, MagnifyingGlassIcon, CalculatorIcon, UserGroupIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'

export default function InsulationSelectionGuide() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <LightBulbIcon className="w-5 h-5" />
                        <span>دليل الاختيار الأمثل</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        كيفية اختيار نوع العزل الأمثل لمبناك
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        دليل عملي خطوة بخطوة لاختيار نظام العزل المناسب بناءً على احتياجاتك الفعلية
                    </p>
                </div>

                {/* Steps */}
                <div className="space-y-8">
                    {/* Step 1: Building Analysis */}
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 md:p-8 border border-purple-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-purple-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">تحليل احتياجات المبنى</h3>
                                <p className="text-gray-500">فهم خصائص المبنى هو الخطوة الأولى لاختيار العزل الصحيح</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-5 border border-purple-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <MagnifyingGlassIcon className="w-5 h-5 text-purple-600" />
                                    <h4 className="font-bold text-gray-900">مساحة السطح</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    قياس المساحة بدقة يحدد الكمية المطلوبة والتكلفة. الأسطح الكبيرة قد تستفيد من مواد أقل تكلفة للمتر الواحد.
                                </p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• أقل من 200م²: جميع الخيارات متاحة</li>
                                    <li>• 200-500م²: الفوم أو البوليسترين</li>
                                    <li>• أكثر من 500م²: دراسة جدوى مفصلة</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-purple-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <MagnifyingGlassIcon className="w-5 h-5 text-purple-600" />
                                    <h4 className="font-bold text-gray-900">نوع الاستخدام</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    طبيعة استخدام المبنى تؤثر على أولويات العزل ونوع المواد المناسبة.
                                </p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• سكني: الراحة الحرارية أولاً</li>
                                    <li>• تجاري: توفير الطاقة الأهم</li>
                                    <li>• صناعي: مقاومة الحريق ضرورية</li>
                                    <li>• مستودعات: الحماية من الرطوبة</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-purple-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <MagnifyingGlassIcon className="w-5 h-5 text-purple-600" />
                                    <h4 className="font-bold text-gray-900">عمر المبنى</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    المباني القديمة قد تحتاج معالجة خاصة قبل تطبيق العزل.
                                </p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• جديد: تطبيق مباشر</li>
                                    <li>• 5-15 سنة: فحص وإصلاح بسيط</li>
                                    <li>• أكثر من 15 سنة: معالجة شاملة</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Climate Study */}
                    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 md:p-8 border border-yellow-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">دراسة المناخ المحلي الدقيق</h3>
                                <p className="text-gray-500">كل منطقة في المملكة لها تحدياتها المناخية الخاصة</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    المملكة العربية السعودية تتميز بتنوع مناخي كبير، من المناطق الصحراوية الحارة جداً إلى المناطق الساحلية الرطبة. فهم المناخ المحلي يساعد في اختيار نوع العزل الأنسب:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        { region: 'المنطقة الوسطى (الرياض)', climate: 'حار جاف صيفاً، بارد شتاءً', rec: 'عزل فوم أو صوف صخري' },
                                        { region: 'المنطقة الشرقية (الدمام)', climate: 'حار رطب، أمطار موسمية', rec: 'عزل فوم + عزل مائي' },
                                        { region: 'المنطقة الغربية (جدة)', climate: 'رطوبة عالية جداً', rec: 'عزل مقاوم للرطوبة' },
                                        { region: 'المنطقة الجنوبية', climate: 'أمطار غزيرة، بارد شتاءً', rec: 'عزل مائي قوي + حراري' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="bg-white rounded-lg p-3 border border-yellow-100">
                                            <div className="font-bold text-gray-900 text-sm">{item.region}</div>
                                            <div className="text-gray-500 text-xs">{item.climate}</div>
                                            <div className="text-yellow-700 text-xs mt-1">التوصية: {item.rec}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-5 border border-yellow-100">
                                <h4 className="font-bold text-gray-900 mb-4">عوامل المناخ الرئيسية</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700">درجة الحرارة القصوى</span>
                                            <span className="text-sm text-gray-500">45-52°م</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700">الرطوبة (المناطق الساحلية)</span>
                                            <span className="text-sm text-gray-500">70-95%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700">أشعة الشمس المباشرة</span>
                                            <span className="text-sm text-gray-500">عالية جداً</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700">العواصف الرملية</span>
                                            <span className="text-sm text-gray-500">متكررة</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Budget Analysis */}
                    <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 md:p-8 border border-green-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-green-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">تحليل الميزانية والمرونة المالية</h3>
                                <p className="text-gray-500">الاستثمار الذكي يوازن بين التكلفة الأولية والعائد طويل المدى</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-5 border border-green-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <CalculatorIcon className="w-6 h-6 text-green-600" />
                                    <h4 className="font-bold text-gray-900">حساب التكلفة الإجمالية</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    لا تنظر للتكلفة الأولية فقط، بل احسب التكلفة الإجمالية على مدى 10-15 سنة التي تشمل:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        'تكلفة المواد والتركيب',
                                        'توفير فواتير الكهرباء السنوي',
                                        'تكاليف الصيانة المتوقعة',
                                        'تكلفة الاستبدال المستقبلية'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                                            <span className="w-2 h-2 rounded-full bg-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-green-100">
                                <h4 className="font-bold text-gray-900 mb-4">مثال حسابي</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                                        <span className="text-gray-600">مساحة السطح</span>
                                        <span className="font-bold">200 م²</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                                        <span className="text-gray-600">تكلفة عزل الفوم (35 ر.س/م²)</span>
                                        <span className="font-bold">7,000 ر.س</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                                        <span className="text-gray-600">توفير شهري في الكهرباء</span>
                                        <span className="font-bold text-green-600">-500 ر.س</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-gray-50 rounded">
                                        <span className="text-gray-600">توفير سنوي (4 أشهر صيف)</span>
                                        <span className="font-bold text-green-600">-2,000 ر.س</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-green-100 rounded font-bold">
                                        <span className="text-gray-900">فترة استرداد التكلفة</span>
                                        <span className="text-green-700">3.5 سنة</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4: Expert Consultation */}
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 md:p-8 border border-blue-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">استشارة الخبراء والمقاولين المعتمدين</h3>
                                <p className="text-gray-500">الخبرة المتخصصة توفر الوقت والمال وتضمن نتائج أفضل</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    قبل اتخاذ القرار النهائي، استشر مقاولاً متخصصاً معتمداً. المعاينة الميدانية تكشف تفاصيل قد لا تظهر في التقييم العام. ابحث عن مقاول يتمتع بـ:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        { icon: '✓', text: 'ترخيص ساري من البلدية أو الأمانة', color: 'green' },
                                        { icon: '✓', text: 'خبرة موثقة لا تقل عن 5 سنوات', color: 'green' },
                                        { icon: '✓', text: 'ضمان مكتوب على الأعمال', color: 'green' },
                                        { icon: '✓', text: 'مراجع من مشاريع سابقة', color: 'green' },
                                        { icon: '✓', text: 'استخدام مواد معتمدة من SASO', color: 'green' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-600">
                                            <span className={`w-6 h-6 rounded-full bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center text-sm`}>{item.icon}</span>
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-blue-600 rounded-xl p-6 text-white">
                                <UserGroupIcon className="w-10 h-10 mb-4" />
                                <h4 className="font-bold text-xl mb-2">نقدم استشارة مجانية</h4>
                                <p className="text-white/80 text-sm mb-4">
                                    فريقنا المتخصص يقدم معاينة مجانية وتقييم شامل لمبناك مع عرض سعر مفصل.
                                </p>
                                <a href="tel:0574666444" className="inline-block bg-white text-blue-600 px-5 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                                    احجز معاينة مجانية
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Practical Steps */}
                    <div className="bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] rounded-2xl p-6 md:p-8 text-white">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <ClipboardDocumentListIcon className="w-8 h-8" />
                            الخطوات العملية لاتخاذ القرار
                        </h3>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { num: '1', title: 'قيّم', desc: 'احتياجات المبنى' },
                                { num: '2', title: 'ادرس', desc: 'المناخ المحلي' },
                                { num: '3', title: 'حدد', desc: 'الميزانية المتاحة' },
                                { num: '4', title: 'قارن', desc: '3 عروض على الأقل' },
                                { num: '5', title: 'تحقق', desc: 'من الضمانات' },
                                { num: '6', title: 'نفّذ', desc: 'مع مقاول موثوق' }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <div className="w-10 h-10 rounded-full bg-white text-[#0d64ab] flex items-center justify-center text-lg font-bold mx-auto mb-2">{step.num}</div>
                                    <div className="font-bold">{step.title}</div>
                                    <div className="text-white/70 text-sm">{step.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
