import Header from '@/components/Header'
import Image from 'next/image'
import { ShieldCheckIcon, BeakerIcon, EyeIcon, CubeIcon, WrenchScrewdriverIcon, CheckCircleIcon, ArrowRightIcon, StarIcon, MapPinIcon, SparklesIcon, BoltIcon, HomeModernIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Footer from '@/components/Footer'

const services = [
    {
        slug: 'foam-insulation',
        icon: CubeIcon,
        title: 'عزل فوم للأسطح بالرياض',
        shortTitle: 'عزل فوم',
        description: 'عزل فوم بولي يوريثان عالي الكثافة للأسطح والمباني. يوفر عزل حراري ومائي في آن واحد مع ضمان يصل إلى 10 سنوات.',
        features: ['عزل حراري ومائي', 'ضمان 10 سنوات', 'مقاوم للحريق', 'توفير 50% من الكهرباء'],
        color: 'bg-[#0d64ab]',
        rating: 4.9,
        reviews: 256,
        image: '/attic-with-completed-spray-foam-insulation.webp'
    },
    {
        slug: 'waterproof-insulation',
        icon: ShieldCheckIcon,
        title: 'عزل مائي للأسطح بالرياض',
        shortTitle: 'عزل مائي',
        description: 'عزل مائي احترافي للأسطح باستخدام مواد عالية الجودة. حماية شاملة من تسربات المياه والرطوبة مع ضمان شامل.',
        features: ['حماية من التسربات', 'مقاوم للأملاح', 'مرونة عالية', 'ضمان شامل'],
        color: 'bg-[#05ccca]',
        rating: 4.8,
        reviews: 203,
        image: '/spray-foam-roofing-01.webp'
    },

    {
        slug: 'tiled-roof-insulation',
        icon: EyeIcon,
        title: 'عزل الأسطح المبلطة بالرياض',
        shortTitle: 'عزل مبلط',
        description: 'عزل الأسطح المبلطة بتقنيات حديثة فوق البلاط مباشرة بدون تكسير. حماية حرارية ومائية شاملة مع الحفاظ على البلاط.',
        features: ['بدون تكسير', 'فوق البلاط', 'حماية مزدوجة', 'ضمان 10 سنوات'],
        color: 'bg-[#05ccca]',
        rating: 4.8,
        reviews: 189,
        image: '/spray-foam-roofing-01.webp'
    },
    {
        slug: 'shincko-insulation',
        icon: WrenchScrewdriverIcon,
        title: 'عزل شينكو هناجر بالرياض',
        shortTitle: 'عزل شينكو',
        description: 'عزل فوم متخصص للهناجر والمستودعات والأسطح المعدنية الشينكو. حماية من الحرارة والتكثف والصدأ.',
        features: ['عزل حراري ممتاز', 'منع التكثف', 'حماية من الصدأ', 'ضمان شامل'],
        color: 'bg-[#0d64ab]',
        rating: 4.9,
        reviews: 145,
        image: '/best-practices-spray-foam-installation-on-roof.webp'
    },
]

export const metadata = {
    title: 'خدمات عزل الأسطح بالرياض | عزل فوم - عزل مائي - عزل شينكو | 0507961706',
    description: 'أفضل خدمات عزل الأسطح والمباني في الرياض والخرج. عزل فوم حراري، عزل مائي، عزل الأسطح المبلطة، وعزل شينكو وهناجر. ضمان 15 سنة وأسعار منافسة. اتصل الآن 0507961706',
    keywords: ['خدمات عزل الأسطح', 'عزل فوم الرياض', 'عزل مائي الرياض', 'عزل شينكو الرياض', 'شركة عزل معتمدة'],
}

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="pt-24">

                {/* Hero Section */}
                <section className="relative py-16 bg-[#0d64ab] text-white overflow-hidden">
                    <div className="absolute inset-0   opacity-10" />
                    <div className="container mx-auto px-6 relative">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                خدمات عزل الأسطح في الرياض والخرج
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                نقدم مجموعة متكاملة من خدمات عزل الأسطح والمباني باستخدام أحدث التقنيات ومواد عالية الجودة مع ضمان شامل
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Link
                                    key={index}
                                    href={`/services/${service.slug}`}
                                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-100"
                                >
                                    {/* Rating Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1 space-x-reverse">
                                            <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                                            <span className="text-xs font-bold text-gray-800">{service.rating}</span>
                                            <span className="text-xs text-gray-500">({service.reviews})</span>
                                        </div>
                                    </div>

                                    <div className="relative h-52 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 right-4">
                                            <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                                <service.icon className="h-6 w-6 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative p-6 bg-white">
                                        <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0d64ab] transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-2 mb-4">
                                            {service.features.slice(0, 3).map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
                                                    <CheckCircleIcon className="w-4 h-4 text-[#0d64ab] mx-1" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center space-x-2 space-x-reverse text-[#0d64ab] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                                            <span>اكتشف المزيد</span>
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </div>

                                        {/* Hover Line */}
                                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0d64ab] group-hover:w-full transition-all duration-500" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-[#0d64ab]/10 text-[#0d64ab] font-semibold text-sm mb-4">لماذا نحن؟</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                لماذا تختار خدماتنا في عزل الأسطح والمباني؟
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                شركتنا هي الخيار الأفضل لخدمات عزل الأسطح في الرياض والخرج، نقدم حلول عزل حراري ومائي متكاملة بأعلى معايير الجودة والاحترافية
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-br from-[#0d64ab]/5 to-[#05ccca]/5 rounded-2xl p-6 border border-[#0d64ab]/10 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 rounded-xl bg-[#0d64ab] flex items-center justify-center mb-4">
                                    <SparklesIcon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">خبرة 15+ سنة</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    خبرة واسعة في مجال عزل الأسطح والمباني في الرياض والمنطقة الوسطى. نفذنا آلاف المشاريع بنجاح تام.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-[#0d64ab]/5 to-[#05ccca]/5 rounded-2xl p-6 border border-[#0d64ab]/10 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 rounded-xl bg-[#05ccca] flex items-center justify-center mb-4">
                                    <ShieldCheckIcon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">مواد معتمدة</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    نستخدم مواد عزل عالية الجودة ومعتمدة من الجهات المختصة. فوم بولي يوريثان، بيتومين مطاطي، وإيبوكسي صحي.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-[#0d64ab]/5 to-[#05ccca]/5 rounded-2xl p-6 border border-[#0d64ab]/10 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 rounded-xl bg-[#0d64ab] flex items-center justify-center mb-4">
                                    <CheckCircleIcon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">ضمان موثق</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    نقدم ضمان حقيقي يصل إلى 15 سنة على أعمال العزل مع شهادة ضمان موثقة وخدمة ما بعد البيع.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-[#0d64ab]/5 to-[#05ccca]/5 rounded-2xl p-6 border border-[#0d64ab]/10 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 rounded-xl bg-[#05ccca] flex items-center justify-center mb-4">
                                    <WrenchScrewdriverIcon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">فريق محترف</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    فريق فني مدرب ومؤهل على أعلى مستوى. نلتزم بالمواعيد ونسلم المشاريع بجودة عالية.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Climate Challenges in Riyadh Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div>
                                <span className="inline-block px-4 py-2 rounded-full bg-[#0d64ab]/10 text-[#0d64ab] font-semibold text-sm mb-4">تحديات المناخ</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                    تحديات المناخ في الرياض وأهمية العزل الحراري
                                </h2>
                                <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                                    <p>
                                        تتميز <strong>مدينة الرياض</strong> بمناخ صحراوي قاسي يتسم بصيف شديد الحرارة تتجاوز فيه درجات الحرارة 50 درجة مئوية في بعض الأيام، وشتاء بارد نسبياً مع تفاوت حراري كبير بين الليل والنهار. هذا التفاوت الحراري يشكل ضغطاً هائلاً على أسطح المباني ويسبب تمددها وانكماشها المتكرر، مما يؤدي إلى ظهور الشروخ والتصدعات.
                                    </p>
                                    <p>
                                        بدون <strong>عزل حراري فعال</strong>، تمتص أسطح المباني الخرسانية كميات هائلة من الحرارة خلال ساعات النهار، وتنقلها إلى داخل المبنى مما يرفع درجة حرارة الغرف بشكل كبير. هذا يجبر أجهزة التكييف على العمل بأقصى طاقتها لساعات طويلة، مما يرفع <strong>فاتورة الكهرباء</strong> بنسبة قد تصل إلى 70% مقارنة بالمباني المعزولة.
                                    </p>
                                    <p>
                                        كما أن موسم الأمطار في الرياض، رغم قصره، يشهد هطولاً غزيراً قد يستمر لساعات، مما يتطلب <strong>عزل مائي متين</strong> لحماية السطح من التسربات التي قد تتسلل عبر الشقوق الصغيرة وتسبب أضراراً جسيمة للسقف والجدران والأثاث.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <BoltIcon className="w-6 h-6 text-yellow-500" />
                                    حقائق عن استهلاك الطاقة في الرياض
                                </h3>
                                <div className="space-y-6">
                                    <div className="border-r-4 border-[#0d64ab] pr-4">
                                        <p className="text-3xl font-bold text-[#0d64ab]">70%</p>
                                        <p className="text-gray-600 text-sm">من استهلاك الكهرباء في المنازل السعودية يذهب للتكييف</p>
                                    </div>
                                    <div className="border-r-4 border-[#05ccca] pr-4">
                                        <p className="text-3xl font-bold text-[#05ccca]">50°C+</p>
                                        <p className="text-gray-600 text-sm">درجات الحرارة في صيف الرياض قد تتجاوز 50 درجة</p>
                                    </div>
                                    <div className="border-r-4 border-[#0d64ab] pr-4">
                                        <p className="text-3xl font-bold text-[#0d64ab]">85°C</p>
                                        <p className="text-gray-600 text-sm">درجة حرارة سطح المبنى غير المعزول تحت الشمس المباشرة</p>
                                    </div>
                                    <div className="border-r-4 border-[#05ccca] pr-4">
                                        <p className="text-3xl font-bold text-[#05ccca]">25-50%</p>
                                        <p className="text-gray-600 text-sm">نسبة التوفير في فاتورة الكهرباء بعد العزل الحراري الجيد</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Guide Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-[#05ccca]/10 text-[#05ccca] font-semibold text-sm mb-4">دليل تقني</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                كيف تختار نوع العزل المناسب لمبناك؟
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                اختيار نوع العزل الصحيح يعتمد على عدة عوامل منها نوع السطح وعمر المبنى والميزانية والمشاكل الموجودة
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Factor 1 */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                <div className="w-12 h-12 rounded-full bg-[#0d64ab]/10 flex items-center justify-center mb-4">
                                    <span className="text-[#0d64ab] font-bold text-xl">1</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">نوع وحالة السطح</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    الأسطح الخرسانية الجديدة والسليمة مثالية لـ<strong>عزل الفوم</strong> الذي يوفر حماية مزدوجة. أما الأسطح القديمة أو التي بها شروخ فتحتاج معالجة أولية ثم <strong>عزل مائي</strong> متعدد الطبقات.
                                </p>
                                <ul className="text-xs text-gray-500 space-y-2">
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#0d64ab] mt-0.5 flex-shrink-0" />الأسطح الخرسانية: فوم أو مائي</li>
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#0d64ab] mt-0.5 flex-shrink-0" />الأسطح المعدنية: فوم بكثافة عالية</li>
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#0d64ab] mt-0.5 flex-shrink-0" />الأسطح المائلة: رولات عازلة</li>
                                </ul>
                            </div>

                            {/* Factor 2 */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                <div className="w-12 h-12 rounded-full bg-[#05ccca]/10 flex items-center justify-center mb-4">
                                    <span className="text-[#05ccca] font-bold text-xl">2</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">المشكلة الأساسية</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    إذا كانت المشكلة الرئيسية هي <strong>ارتفاع حرارة المنزل</strong> صيفاً، فالأولوية للعزل الحراري بالفوم. أما إذا كانت هناك <strong>تسربات مياه</strong> ظاهرة، فيجب البدء بالعزل المائي ومعالجة التسربات أولاً.
                                </p>
                                <ul className="text-xs text-gray-500 space-y-2">
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#05ccca] mt-0.5 flex-shrink-0" />حرارة عالية: عزل فوم حراري</li>
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#05ccca] mt-0.5 flex-shrink-0" />تسربات مياه: عزل مائي أولاً</li>
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#05ccca] mt-0.5 flex-shrink-0" />كلاهما: فوم ثنائي الوظيفة</li>
                                </ul>
                            </div>

                            {/* Factor 3 */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                <div className="w-12 h-12 rounded-full bg-[#0d64ab]/10 flex items-center justify-center mb-4">
                                    <span className="text-[#0d64ab] font-bold text-xl">3</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">الميزانية والاستثمار</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    <strong>عزل الفوم</strong> تكلفته أعلى لكنه استثمار طويل المدى يوفر في فاتورة الكهرباء. <strong>العزل المائي</strong> تكلفته أقل لكنه يحتاج صيانة دورية. الاختيار يعتمد على أولوياتك.
                                </p>
                                <ul className="text-xs text-gray-500 space-y-2">
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#0d64ab] mt-0.5 flex-shrink-0" />ميزانية محدودة: مائي تقليدي</li>
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#0d64ab] mt-0.5 flex-shrink-0" />استثمار طويل: فوم بولي يوريثان</li>
                                    <li className="flex items-start gap-2"><CheckCircleIcon className="w-4 h-4 text-[#0d64ab] mt-0.5 flex-shrink-0" />حل وسط: عزل مائي مطاطي</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Problems Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-4">مشاكل شائعة</span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                مشاكل العزل الشائعة في المباني وكيفية تجنبها
                            </h2>
                            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                الكثير من المباني في الرياض تعاني من مشاكل العزل بسبب التنفيذ السيء أو استخدام مواد رديئة - تعرف على هذه المشاكل وحلولها
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Problem 1 */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-red-500 text-xl">❌</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">فقاعات وانتفاخات في العزل</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            تظهر عندما يتم تطبيق العزل على سطح رطب أو غير نظيف، أو عند استخدام مواد رديئة الجودة. الفقاعات تسمح بتسرب المياه وتقلل فعالية العزل.
                                        </p>
                                        <div className="bg-green-50 rounded-lg p-3">
                                            <p className="text-green-700 text-xs font-semibold mb-1">✓ الحل:</p>
                                            <p className="text-green-600 text-xs">تنظيف وتجفيف السطح جيداً قبل العزل، واستخدام مواد عزل معتمدة ومقاومة للحرارة.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Problem 2 */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-red-500 text-xl">❌</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">تشققات في طبقة العزل</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            تحدث بسبب عدم مرونة المادة العازلة أو تعرضها للأشعة فوق البنفسجية. الشقوق تكبر مع الوقت وتصبح مصدراً رئيسياً للتسربات.
                                        </p>
                                        <div className="bg-green-50 rounded-lg p-3">
                                            <p className="text-green-700 text-xs font-semibold mb-1">✓ الحل:</p>
                                            <p className="text-green-600 text-xs">استخدام عزل مرن مقاوم للأشعة فوق البنفسجية، وتطبيق طبقة حماية علوية للعزل.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Problem 3 */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-red-500 text-xl">❌</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">تسرب المياه من الفواصل</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            أكثر المشاكل شيوعاً، تحدث عند عدم معالجة فواصل التمدد والانكماش بشكل صحيح، أو إهمال مواقع المواسير والفتحات.
                                        </p>
                                        <div className="bg-green-50 rounded-lg p-3">
                                            <p className="text-green-700 text-xs font-semibold mb-1">✓ الحل:</p>
                                            <p className="text-green-600 text-xs">معالجة جميع الفواصل بمادة مرنة خاصة، وتركيب وزرات حول المواسير والفتحات.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Problem 4 */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-red-500 text-xl">❌</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">تآكل وتلف العزل القديم</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                            العزل له عمر افتراضي محدد، ومع مرور السنوات يفقد فعاليته ويحتاج للتجديد. تجاهل ذلك يؤدي لأضرار أكبر في المبنى.
                                        </p>
                                        <div className="bg-green-50 rounded-lg p-3">
                                            <p className="text-green-700 text-xs font-semibold mb-1">✓ الحل:</p>
                                            <p className="text-green-600 text-xs">فحص دوري للعزل كل 5 سنوات، وتجديده فور ظهور علامات التلف أو انتهاء الضمان.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Areas Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-4 py-2 rounded-full bg-[#0d64ab]/10 text-[#0d64ab] font-semibold text-sm mb-4">مناطق الخدمة</span>
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                    نخدم جميع أحياء الرياض والخرج
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    نفخر بتقديم <strong>خدمات عزل الأسطح والمباني</strong> في جميع أنحاء <strong>مدينة الرياض</strong> و<strong>محافظة الخرج</strong> والمناطق المحيطة.
                                    فريقنا جاهز للوصول إليكم في أي مكان لتقديم أفضل خدمات العزل الحراري والمائي.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                            <MapPinIcon className="w-5 h-5 text-[#0d64ab]" />
                                            أحياء شمال الرياض
                                        </h4>
                                        <ul className="text-sm text-gray-600 space-y-1 pr-7">
                                            <li>حي النرجس والياسمين</li>
                                            <li>حي الملقا والصحافة</li>
                                            <li>حي العارض والنخيل</li>
                                            <li>حي الوادي والربوة</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                            <MapPinIcon className="w-5 h-5 text-[#0d64ab]" />
                                            أحياء شرق الرياض
                                        </h4>
                                        <ul className="text-sm text-gray-600 space-y-1 pr-7">
                                            <li>حي الرمال والقادسية</li>
                                            <li>حي الروضة والنسيم</li>
                                            <li>حي الخليج والنهضة</li>
                                            <li>حي اليمامة والمنار</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                            <MapPinIcon className="w-5 h-5 text-[#05ccca]" />
                                            أحياء جنوب وغرب الرياض
                                        </h4>
                                        <ul className="text-sm text-gray-600 space-y-1 pr-7">
                                            <li>حي العزيزية والشفا</li>
                                            <li>حي السويدي والبديعة</li>
                                            <li>حي ظهرة لبن والعريجاء</li>
                                            <li>حي الدار البيضاء</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                            <MapPinIcon className="w-5 h-5 text-[#05ccca]" />
                                            الخرج والمناطق المحيطة
                                        </h4>
                                        <ul className="text-sm text-gray-600 space-y-1 pr-7">
                                            <li>محافظة الخرج</li>
                                            <li>الدلم والحوطة</li>
                                            <li>السليمانية والمزاحمية</li>
                                            <li>ضرما وشقراء</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/worker-installing-foam-insulation-in-crawl-space.webp"
                                        alt="فني عزل يعمل في الرياض"
                                        width={600}
                                        height={500}
                                        className="object-cover w-full h-96"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-6 right-6 text-white">
                                        <p className="text-2xl font-bold">خدمة في موقعك</p>
                                        <p className="text-white/80">وصول سريع لجميع الأحياء</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Insulation Matters Section */}
                <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-4">أهمية العزل</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                                لماذا العزل مهم لمنزلك ومبناك؟
                            </h2>
                            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                العزل الجيد ليس رفاهية بل ضرورة لحماية استثمارك العقاري وتوفير المال على المدى الطويل
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                                <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
                                    <BoltIcon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">توفير الطاقة</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    <strong>العزل الحراري الجيد</strong> يوفر حتى 50% من فاتورة الكهرباء. في مناخ الرياض الحار، المكيفات تعمل بجهد أقل مع عزل فعال للسطح.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                                    <HomeModernIcon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">حماية المبنى</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    <strong>العزل المائي والحراري</strong> يحمي الهيكل الإنشائي من التمدد والانكماش والتآكل. يطيل عمر المبنى لعقود.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                                <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center mb-4">
                                    <EyeIcon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">منع التسربات</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    <strong>تسربات المياه</strong> تسبب أضراراً جسيمة للمبنى والأثاث. العزل الجيد والكشف المبكر يوفر تكاليف إصلاح ضخمة.
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center mb-4">
                                    <SparklesIcon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">راحة أكثر</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    العزل يوفر بيئة داخلية مريحة بدرجة حرارة ثابتة. تخلص من الحرارة الزائدة صيفاً والبرودة شتاءً.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <p className="text-gray-300 mb-6">
                                لا تنتظر حتى تظهر المشاكل! احصل على استشارة مجانية ومعاينة لمبناك الآن
                            </p>

                        </div>
                    </div>
                </section>


                {/* CTA Section */}
                <section className="py-16 bg-[#0d64ab]">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">احصل على عرض سعر مجاني</h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            تواصل معنا الآن للحصول على عرض سعر مخصص لاحتياجاتكم مع ضمان شامل
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:0507961706" className="bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg">
                                اتصل الآن
                            </a>
                            <a href="https://wa.me/966507961706" className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg">
                                واتساب
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
