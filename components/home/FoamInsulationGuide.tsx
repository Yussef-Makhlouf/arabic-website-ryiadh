import { CubeIcon, BoltIcon, ClockIcon, ScaleIcon, BeakerIcon, CheckBadgeIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function FoamInsulationGuide() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-[#0d64ab]/10 text-[#0d64ab] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <CubeIcon className="w-5 h-5" />
                        <span>تقنية البولي يوريثان</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        عزل الفوم (البولي يوريثان) - التقنية الحديثة
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        الحل الأمثل للعزل الحراري والمائي في المباني السعودية - توفير يصل إلى 50% من فاتورة الكهرباء
                    </p>
                </div>

                {/* Technology Explanation */}
                <div className="bg-gradient-to-br from-[#0d64ab]/5 to-[#05ccca]/5 rounded-2xl p-6 md:p-8 border border-[#0d64ab]/10 mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <BeakerIcon className="w-8 h-8 text-[#0d64ab]" />
                        شرح تقنية البولي يوريثان الرغوي
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                <strong className="text-gray-900">عزل الفوم بولي يوريثان</strong> هو تقنية عزل حديثة تعتمد على رش خليط كيميائي سائل يتفاعل فوراً عند ملامسة السطح ليتحول إلى رغوة كثيفة تتمدد وتلتصق بالسطح. هذه الرغوة تملأ جميع الفراغات والشقوق مكونة طبقة عازلة متماسكة بدون أي فواصل أو ثغرات.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                يتكون الفوم من مركبين أساسيين: <strong className="text-[#0d64ab]">الأيزوسيانات</strong> و<strong className="text-[#0d64ab]">البوليول</strong>، يتم خلطهما بنسب دقيقة عند الرش. التفاعل الكيميائي ينتج رغوة ذات خلايا مغلقة تمنع انتقال الحرارة والماء والهواء.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                يتميز الفوم بكثافته العالية التي تتراوح بين <strong>30-40 كجم/م³</strong> للفوم عالي الكثافة، مما يوفر عزلاً حرارياً ممتازاً بسماكة أقل مقارنة بالمواد التقليدية.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4">مراحل تطبيق عزل الفوم</h4>
                            <div className="space-y-4">
                                {[
                                    { num: '1', title: 'التحضير', desc: 'تنظيف السطح وإزالة الغبار والشوائب' },
                                    { num: '2', title: 'الرش', desc: 'رش الفوم بسماكة 3-5 سم حسب المتطلبات' },
                                    { num: '3', title: 'التمدد', desc: 'الفوم يتمدد خلال 30 ثانية ويجف في دقائق' },
                                    { num: '4', title: 'الحماية', desc: 'تطبيق طبقة حماية من الأشعة فوق البنفسجية' },
                                    { num: '5', title: 'الفحص', desc: 'اختبار الجودة والتسليم مع شهادة الضمان' }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#0d64ab] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{step.num}</span>
                                        <div>
                                            <div className="font-bold text-gray-900">{step.title}</div>
                                            <div className="text-sm text-gray-500">{step.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Advantages */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">المميزات التقنية لعزل الفوم</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: BoltIcon, title: 'عزل حراري ومائي معاً', desc: 'طبقة واحدة توفر حماية مزدوجة من الحرارة والمياه', color: 'blue' },
                            { icon: ClockIcon, title: 'عمر افتراضي طويل', desc: 'يستمر 25-30 سنة مع الحد الأدنى من الصيانة', color: 'green' },
                            { icon: ScaleIcon, title: 'خفة الوزن', desc: 'لا يُشكل حملاً إضافياً على هيكل المبنى', color: 'purple' },
                            { icon: CheckBadgeIcon, title: 'مقاوم للحريق', desc: 'مُعالج بمواد مثبطة للاشتعال وآمن', color: 'red' }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-${item.color}-50 rounded-2xl p-6 border border-${item.color}-100 text-center`}>
                                <div className={`w-14 h-14 rounded-xl bg-${item.color}-100 flex items-center justify-center mx-auto mb-4`}>
                                    <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Energy Saving Statistics */}
                <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 md:p-8 text-white mb-12">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <BoltIcon className="w-8 h-8" />
                        توفير الطاقة: أرقام وإحصائيات واقعية
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-white/90 leading-relaxed mb-4">
                                أثبتت الدراسات أن عزل الفوم يُحقق أعلى نسب توفير في استهلاك الكهرباء مقارنة بجميع أنواع العزل الأخرى. في المناخ السعودي الحار، يُمكن تحقيق توفير يصل إلى <strong>50%</strong> من فاتورة الكهرباء الصيفية.
                            </p>
                            <p className="text-white/90 leading-relaxed">
                                وفقاً لدراسة أجرتها <strong>مدينة الملك عبدالعزيز للعلوم والتقنية</strong>، فإن المباني المعزولة بالفوم في الرياض تستهلك طاقة أقل بنسبة 45-55% للتبريد مقارنة بالمباني غير المعزولة.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '50%', label: 'توفير في الكهرباء' },
                                { value: '3-4', label: 'سنوات لاسترداد التكلفة' },
                                { value: '70%', label: 'تقليل الحرارة المنقولة' },
                                { value: '25+', label: 'سنة عمر افتراضي' }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                                    <div className="text-3xl font-bold">{stat.value}</div>
                                    <div className="text-white/80 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <ScaleIcon className="w-8 h-8 text-[#0d64ab]" />
                        مقارنة عزل الفوم مع المواد التقليدية
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#0d64ab] text-white">
                                    <th className="p-4 text-right rounded-tr-xl">المعيار</th>
                                    <th className="p-4 text-center">عزل الفوم</th>
                                    <th className="p-4 text-center">الصوف الصخري</th>
                                    <th className="p-4 text-center">البوليسترين</th>
                                    <th className="p-4 text-center rounded-tl-xl">البيتومين</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: 'العزل الحراري', foam: '⭐⭐⭐⭐⭐', rock: '⭐⭐⭐⭐', poly: '⭐⭐⭐⭐', bit: '⭐⭐' },
                                    { label: 'العزل المائي', foam: '⭐⭐⭐⭐⭐', rock: '⭐⭐', poly: '⭐⭐⭐', bit: '⭐⭐⭐⭐⭐' },
                                    { label: 'العمر الافتراضي', foam: '25-30 سنة', rock: '20 سنة', poly: '15 سنة', bit: '10-15 سنة' },
                                    { label: 'توفير الطاقة', foam: '40-50%', rock: '25-35%', poly: '30-40%', bit: '10-20%' },
                                    { label: 'سهولة التطبيق', foam: 'سريع جداً', rock: 'متوسط', poly: 'متوسط', bit: 'بطيء' },
                                    { label: 'السعر/م²', foam: '25-45 ر.س', rock: '20-35 ر.س', poly: '15-30 ر.س', bit: '20-35 ر.س' }
                                ].map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="p-4 font-bold text-gray-900">{row.label}</td>
                                        <td className="p-4 text-center text-[#0d64ab] font-bold">{row.foam}</td>
                                        <td className="p-4 text-center text-gray-600">{row.rock}</td>
                                        <td className="p-4 text-center text-gray-600">{row.poly}</td>
                                        <td className="p-4 text-center text-gray-600">{row.bit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Success Stories */}
                <div className="bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] rounded-2xl p-6 md:p-8 text-white">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                        <TrophyIcon className="w-8 h-8" />
                        تجارب نجاح في المملكة العربية السعودية
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'مشروع سكني - الرياض',
                                desc: 'عزل 80 فيلا في مجمع سكني بحي الملقا. تم تحقيق توفير 45% في استهلاك الكهرباء خلال أول صيف.',
                                stats: '80 فيلا | توفير 45%'
                            },
                            {
                                title: 'مصنع صناعي - الدمام',
                                desc: 'عزل سقف مصنع بمساحة 10,000م². خفض تكاليف التبريد بشكل كبير وحسّن بيئة العمل.',
                                stats: '10,000م² | توفير 35%'
                            },
                            {
                                title: 'مدرسة حكومية - جدة',
                                desc: 'مشروع عزل ضمن مبادرة ترشيد الطاقة. تحقق وفر سنوي يتجاوز 100,000 ريال.',
                                stats: 'وفر 100,000 ر.س/سنة'
                            }
                        ].map((story, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                                <h4 className="font-bold mb-2">{story.title}</h4>
                                <p className="text-white/80 text-sm mb-3">{story.desc}</p>
                                <div className="bg-white/10 rounded-lg px-3 py-2 text-sm font-medium">{story.stats}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
