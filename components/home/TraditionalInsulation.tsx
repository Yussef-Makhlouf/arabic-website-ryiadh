import { CubeTransparentIcon, FireIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { LeafIcon } from 'lucide-react'

export default function TraditionalInsulation() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <CubeTransparentIcon className="w-5 h-5" />
                        <span>العزل الحراري التقليدي</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        العزل الحراري التقليدي - الخيارات المتعددة
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        استعراض شامل لأنواع العزل الحراري التقليدية المتوفرة في السوق السعودي مع مقارنة الأداء
                    </p>
                </div>

                {/* Insulation Types */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Rock Wool */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <FireIcon className="w-8 h-8 text-gray-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">الصوف الصخري والزجاجي</h3>
                                <p className="text-gray-500 text-sm">عزل حراري تقليدي مقاوم للحريق</p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-900">الصوف الصخري</strong> يُصنع من صهر الصخور البازلتية عند درجة حرارة عالية جداً (1500°م) ثم تحويلها إلى ألياف رفيعة. يتميز بمقاومته العالية للحريق حيث يتحمل درجات حرارة تصل إلى 750 درجة مئوية.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-900">الصوف الزجاجي</strong> يُصنع من الزجاج المُعاد تدويره، وهو أخف وزناً وأقل تكلفة من الصوف الصخري، لكنه أقل مقاومة للحرارة العالية.
                        </p>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <h4 className="font-bold text-gray-900 mb-3">المميزات والعيوب</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-green-600 font-bold text-sm mb-2">✓ المميزات</div>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• مقاومة عالية للحريق</li>
                                        <li>• عزل صوتي ممتاز</li>
                                        <li>• سعر اقتصادي</li>
                                        <li>• مادة غير سامة</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-red-600 font-bold text-sm mb-2">✗ العيوب</div>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• يمتص الماء</li>
                                        <li>• يحتاج تركيب دقيق</li>
                                        <li>• قد يسبب تهيج الجلد</li>
                                        <li>• فقد الفعالية مع الرطوبة</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Polystyrene */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <CubeTransparentIcon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">ألواح البوليسترين</h3>
                                <p className="text-gray-500 text-sm">EPS الموسّع و XPS المقذوف</p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-900">البوليسترين الموسّع (EPS)</strong> هو الفلين الأبيض المعروف، خفيف الوزن ورخيص الثمن، يُستخدم بكثرة في عزل الجدران والأسقف. كثافته تتراوح بين 15-30 كجم/م³.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-900">البوليسترين المقذوف (XPS)</strong> أكثر كثافة ومقاومة للرطوبة من EPS، يتميز بلونه الأزرق أو الوردي. أداؤه أفضل لكن تكلفته أعلى، ويُفضل للأماكن المعرضة للرطوبة.
                        </p>

                        <div className="bg-blue-50 rounded-xl p-4">
                            <h4 className="font-bold text-gray-900 mb-3">المميزات والعيوب</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-green-600 font-bold text-sm mb-2">✓ المميزات</div>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• خفة الوزن</li>
                                        <li>• سهولة التركيب والقص</li>
                                        <li>• سعر اقتصادي (EPS)</li>
                                        <li>• مقاومة للرطوبة (XPS)</li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="text-red-600 font-bold text-sm mb-2">✗ العيوب</div>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• قابل للاشتعال</li>
                                        <li>• يتأثر بأشعة الشمس</li>
                                        <li>• يتآكل مع المذيبات</li>
                                        <li>• عمر افتراضي أقل</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Natural & Sustainable */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 md:p-8 border border-green-100 mb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <LeafIcon className="w-8 h-8 text-green-600" />
                        العوازل الطبيعية والمستدامة
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'عزل السيليلوز',
                                desc: 'مصنوع من الورق المُعاد تدويره، صديق للبيئة ويوفر عزلاً حرارياً وصوتياً جيداً. يُعالج كيميائياً لمقاومة الحريق والحشرات.',
                                pros: ['صديق للبيئة', 'تكلفة معقولة', 'عزل صوتي ممتاز']
                            },
                            {
                                title: 'عزل الفلين الطبيعي',
                                desc: 'مستخلص من لحاء شجر الفلين، مادة طبيعية 100% قابلة للتجديد. ممتاز للعزل الحراري والصوتي ومقاوم للرطوبة.',
                                pros: ['طبيعي 100%', 'مقاوم للرطوبة', 'معمّر جداً']
                            },
                            {
                                title: 'عزل الصوف العضوي',
                                desc: 'صوف الخراف الطبيعي أو الألياف النباتية مثل القنب والقطن. خيار بيئي ممتاز لكن بتكلفة أعلى.',
                                pros: ['مستدام', 'صحي وآمن', 'أداء ممتاز']
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-5 border border-green-100">
                                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.pros.map((pro, i) => (
                                        <span key={i} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">{pro}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance Comparison */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <ScaleIcon className="w-8 h-8 text-[#0d64ab]" />
                        مقارنة الأداء في المناخ السعودي
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        المناخ السعودي يتميز بتحديات فريدة تؤثر على أداء مواد العزل المختلفة. درجات الحرارة العالية جداً، الأشعة فوق البنفسجية الشديدة، والرطوبة في المناطق الساحلية كلها عوامل يجب مراعاتها عند اختيار نوع العزل.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-4 text-right font-bold text-gray-900 rounded-tr-xl">نوع العزل</th>
                                    <th className="p-4 text-center font-bold text-gray-900">الأداء في الحرارة العالية</th>
                                    <th className="p-4 text-center font-bold text-gray-900">مقاومة الرطوبة</th>
                                    <th className="p-4 text-center font-bold text-gray-900">مقاومة UV</th>
                                    <th className="p-4 text-center font-bold text-gray-900 rounded-tl-xl">التوصية</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { type: 'الصوف الصخري', heat: 'ممتاز', moisture: 'ضعيف', uv: 'جيد', rec: 'الأماكن الجافة' },
                                    { type: 'البوليسترين EPS', heat: 'جيد', moisture: 'متوسط', uv: 'ضعيف', rec: 'الجدران الداخلية' },
                                    { type: 'البوليسترين XPS', heat: 'جيد', moisture: 'ممتاز', uv: 'متوسط', rec: 'الأساسات الرطبة' },
                                    { type: 'الفوم سبراي', heat: 'ممتاز', moisture: 'ممتاز', uv: 'يحتاج حماية', rec: 'الأسطح (مع طلاء UV)' }
                                ].map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="p-4 font-bold text-gray-900">{row.type}</td>
                                        <td className="p-4 text-center">
                                            <span className={`px-2 py-1 rounded text-sm ${row.heat === 'ممتاز' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{row.heat}</span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`px-2 py-1 rounded text-sm ${row.moisture === 'ممتاز' ? 'bg-green-100 text-green-700' : row.moisture === 'ضعيف' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{row.moisture}</span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`px-2 py-1 rounded text-sm ${row.uv === 'جيد' ? 'bg-green-100 text-green-700' : row.uv === 'ضعيف' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{row.uv}</span>
                                        </td>
                                        <td className="p-4 text-center text-gray-600 text-sm">{row.rec}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
