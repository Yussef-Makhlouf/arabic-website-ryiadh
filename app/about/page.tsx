import { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import {
    BuildingOffice2Icon,
    UserGroupIcon,
    ShieldCheckIcon,
    TrophyIcon,
    ClockIcon,
    MapPinIcon,
    PhoneIcon,
    CheckBadgeIcon,
    StarIcon,
    WrenchScrewdriverIcon,
    AcademicCapIcon,
    HeartIcon,
    SparklesIcon,
    DocumentCheckIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'من نحن | شركة أيقونة العزل | شركة عزل اسطح الرياض - خبرة 15 عام في العزل',
    description: 'تعرف على شركة عزل اسطح الرياض، شركة سعودية متخصصة في عزل الأسطح والخزانات وعزل الفوم. خبرة 15 عاماً، فريق محترف، وضمان حقيقي.',
    keywords: ['شركة عزل', 'عزل الرياض', 'من نحن', 'شركة عزل اسطح', 'عزل فوم الرياض']
}

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-20 bg-gray-50">
                {/* Hero Section */}
                <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] text-white overflow-hidden">
                    <div className="absolute inset-0   opacity-10" />
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                                <BuildingOffice2Icon className="w-5 h-5" />
                                <span>تعرف علينا</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                شركة عزل اسطح الرياض
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                                شركة سعودية متخصصة في خدمات العزل الحراري والمائي وعزل الفوم منذ أكثر من 15 عاماً
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                {[
                                    { value: '15+', label: 'سنة خبرة' },
                                    { value: '5000+', label: 'مشروع منجز' },
                                    { value: '50+', label: 'فني متخصص' },
                                    { value: '98%', label: 'رضا العملاء' }
                                ].map((stat, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                                        <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                                        <div className="text-white/80 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-[#0d64ab]/10 text-[#0d64ab] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    <ClockIcon className="w-5 h-5" />
                                    <span>قصتنا</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    من البداية المتواضعة إلى الريادة في مجال العزل
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        بدأت <strong className="text-gray-900">شركة عزل اسطح الرياض</strong> رحلتها عام 2009 كمؤسسة صغيرة تضم مجموعة من الفنيين المتخصصين الذين يشتركون في شغف واحد: تقديم خدمات عزل احترافية تحمي المباني السعودية من تأثيرات المناخ القاسي.
                                    </p>
                                    <p>
                                        في البداية، كنا نخدم بضع عشرات من العملاء سنوياً في أحياء قليلة من الرياض. لكن التزامنا الصارم بالجودة وصدقنا مع العملاء جعل سمعتنا تنتشر بين الناس. العملاء الراضون أصبحوا سفراء لنا، ينصحون جيرانهم وأقاربهم وزملاءهم بالتعامل معنا.
                                    </p>
                                    <p>
                                        اليوم، بعد أكثر من 15 عاماً، نفتخر بأننا أنجزنا أكثر من 5000 مشروع عزل في الرياض والخرج والمناطق المجاورة. فريقنا توسع ليضم أكثر من 50 فنياً ومهندساً متخصصاً، ونمتلك أحدث المعدات والتقنيات في مجال العزل.
                                    </p>
                                    <p>
                                        لكننا لم نتغير في شيء واحد: <strong className="text-[#0d64ab]">التزامنا بالجودة والصدق مع العملاء</strong>. هذا هو سر نجاحنا واستمرارنا.
                                    </p>
                                </div>
                                <div className="mt-8 relative h-96 rounded-2xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/workerin-protective-suit-spraying-wall-foam.webp"
                                        alt="فريقنا أثناء العمل"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">محطات في مسيرتنا</h3>
                                <div className="space-y-6">
                                    {[
                                        { year: '2009', title: 'التأسيس', desc: 'بدأنا كفريق صغير من 5 فنيين متخصصين في الرياض' },
                                        { year: '2012', title: 'التوسع', desc: 'افتتحنا فرعنا الأول خارج الرياض في الخرج' },
                                        { year: '2015', title: 'الاعتماد', desc: 'حصلنا على اعتماد رسمي من هيئة المواصفات والمقاييس' },
                                        { year: '2018', title: 'التطوير', desc: 'أدخلنا تقنية عزل الفوم بولي يوريثان الحديثة' },
                                        { year: '2021', title: 'الريادة', desc: 'أصبحنا من أكبر 10 شركات عزل في المنطقة الوسطى' },
                                        { year: '2024', title: 'المستقبل', desc: 'نواصل التطوير والتوسع لخدمة عملائنا بشكل أفضل' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex-shrink-0 w-16 text-left">
                                                <span className="text-[#0d64ab] font-bold">{item.year}</span>
                                            </div>
                                            <div className="flex-shrink-0 relative">
                                                <div className="w-3 h-3 rounded-full bg-[#0d64ab] mt-1.5" />
                                                {idx < 5 && <div className="absolute top-4 left-1 w-0.5 h-10 bg-gray-200" />}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Vision */}
                            <div className="bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] rounded-2xl p-6 md:p-8 text-white">
                                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                                    <SparklesIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                                <p className="text-white/90 leading-relaxed mb-4">
                                    نسعى لأن نكون الشركة الأولى والأكثر ثقة في مجال العزل بالمملكة العربية السعودية. نريد أن يكون اسمنا مرادفاً للجودة والاحترافية في كل بيت ومبنى.
                                </p>
                                <p className="text-white/90 leading-relaxed">
                                    هدفنا أن نساهم في حماية المباني السعودية وتوفير استهلاك الطاقة، مما ينعكس إيجابياً على راحة السكان وعلى البيئة والاقتصاد الوطني.
                                </p>
                            </div>

                            {/* Mission */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <div className="w-14 h-14 rounded-xl bg-[#05ccca]/10 flex items-center justify-center mb-6">
                                    <TrophyIcon className="w-8 h-8 text-[#05ccca]" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">مهمتنا</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    تقديم خدمات عزل متكاملة بأعلى معايير الجودة وأفضل الأسعار. نلتزم باستخدام أجود المواد المعتمدة، وتوظيف فنيين مدربين، وتقديم ضمانات حقيقية تحمي حقوق عملائنا.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    نؤمن بأن كل عميل يستحق خدمة متميزة، سواء كان مشروعه صغيراً أو كبيراً. نتعامل مع كل عمل باحترافية كاملة وكأنه مشروعنا الخاص.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-[#0d64ab]/10 text-[#0d64ab] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <HeartIcon className="w-5 h-5" />
                                <span>قيمنا</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                القيم التي نعمل بها كل يوم
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                هذه المبادئ ليست مجرد كلمات نكتبها، بل هي معايير نلتزم بها في كل تعامل مع عملائنا
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    icon: ShieldCheckIcon,
                                    title: 'الأمانة والصدق',
                                    desc: 'نقول الحقيقة دائماً. إذا كان السطح لا يحتاج عزل، نخبرك بذلك. لا نبالغ في الأسعار ولا نستخدم مواد رديئة.',
                                    color: 'blue'
                                },
                                {
                                    icon: CheckBadgeIcon,
                                    title: 'الجودة أولاً',
                                    desc: 'نستخدم فقط مواد عزل معتمدة وعالية الجودة. نرفض استخدام بدائل رخيصة حتى لو طلب العميل ذلك.',
                                    color: 'green'
                                },
                                {
                                    icon: UserGroupIcon,
                                    title: 'احترام العميل',
                                    desc: 'نحترم وقتك ومنزلك. نلتزم بالمواعيد، نعمل بنظافة، ونترك المكان أنظف مما وجدناه.',
                                    color: 'purple'
                                },
                                {
                                    icon: WrenchScrewdriverIcon,
                                    title: 'الاحترافية',
                                    desc: 'فريقنا مدرب على أحدث تقنيات العزل. نتعامل مع كل مشروع بخبرة واحترافية عالية.',
                                    color: 'orange'
                                }
                            ].map((value, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                                    <div className={`w-16 h-16 rounded-2xl bg-${value.color}-100 flex items-center justify-center mx-auto mb-4`}>
                                        <value.icon className={`w-8 h-8 text-${value.color}-600`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Services */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-[#05ccca]/10 text-[#05ccca] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <WrenchScrewdriverIcon className="w-5 h-5" />
                                <span>خدماتنا</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                خدمات شاملة لحماية مبناك
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                نقدم مجموعة متكاملة من خدمات العزل والكشف لتلبية جميع احتياجاتك
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'عزل الفوم بولي يوريثان',
                                    desc: 'خدمة عزل الأسطح بالفوم الحراري والمائي. نستخدم فوم بولي يوريثان عالي الكثافة الذي يوفر عزلاً ممتازاً للحرارة والماء في آن واحد. يتم رش الفوم بمعدات متخصصة ليغطي كامل السطح بدون أي فجوات أو فراغات. النتيجة طبقة عازلة متماسكة تستمر لعقود.',
                                    features: ['عزل حراري ومائي معاً', 'توفير 40-50% من الكهرباء', 'ضمان 10 سنوات', 'تنفيذ سريع']
                                },
                                {
                                    title: 'العزل المائي للأسطح',
                                    desc: 'حماية سطح مبناك من تسربات مياه الأمطار والرطوبة. نستخدم مواد عزل مائي متنوعة تشمل البيتومين المطاطي، أغشية PVC، والعازل الأسمنتي حسب طبيعة السطح واحتياجاتك. جميع المواد معتمدة ومختبرة لتحمل ظروف المناخ السعودي.',
                                    features: ['حماية من التسربات', 'مقاومة الأملاح', 'عمر طويل', 'ضمان 7 سنوات']
                                },
                                {
                                    title: 'عزل صوتي للجدران',
                                    desc: 'حلول متقدمة للعزل الصوتي تضمن لك الهدوء والراحة. نستخدم ألواح عازلة للصوت ومواد خاصة لتقليل الضوضاء الخارجية والداخلية، مثالية للمنازل والمكاتب والاستوديوهات.',
                                    features: ['عزل ضوضاء فعال', 'راحة وهدوء', 'مواد صديقة للبيئة', 'تركيب احترافي']
                                },
                                {
                                    title: 'عزل خزانات المياه',
                                    desc: 'عزل خزانات المياه الأرضية والعلوية بمواد إيبوكسي آمنة صحياً ومعتمدة من وزارة الصحة. نضمن لك مياه نظيفة وخالية من التلوث مع حماية الخزان من التآكل والتسرب لسنوات طويلة.',
                                    features: ['مواد آمنة صحياً', 'معتمد من الصحة', 'تنظيف مجاني', 'ضمان 5 سنوات']
                                }
                            ].map((service, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((feature, i) => (
                                            <span key={i} className="bg-[#0d64ab]/10 text-[#0d64ab] px-3 py-1 rounded-full text-sm font-medium">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Team */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-[#0d64ab]/10 text-[#0d64ab] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <UserGroupIcon className="w-5 h-5" />
                                <span>فريقنا</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                فريق من الخبراء المتخصصين
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                نفتخر بفريقنا المؤهل والمدرب على أحدث تقنيات العزل
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {[
                                {
                                    title: 'المهندسون والمشرفون',
                                    count: '8+',
                                    desc: 'مهندسون سعوديون متخصصون في الهندسة المدنية والتشييد. يشرفون على جميع المشاريع ويضمنون تطبيق المعايير الفنية الصحيحة.'
                                },
                                {
                                    title: 'الفنيون المتخصصون',
                                    count: '35+',
                                    desc: 'فنيون مدربون على تقنيات العزل المختلفة. جميعهم حاصلون على دورات تأهيلية ولديهم خبرة عملية لا تقل عن 3 سنوات.'
                                },
                                {
                                    title: 'فريق خدمة العملاء',
                                    count: '10+',
                                    desc: 'فريق متخصص لاستقبال الطلبات والتنسيق والمتابعة. متاحون على مدار الساعة للرد على استفساراتكم.'
                                }
                            ].map((team, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0d64ab] to-[#05ccca] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                        {team.count}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{team.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{team.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <AcademicCapIcon className="w-8 h-8 text-[#0d64ab]" />
                                التدريب والتطوير المستمر
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                نؤمن بأن الاستثمار في فريقنا هو استثمار في جودة خدماتنا. لذلك نحرص على:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    'دورات تدريبية دورية على أحدث تقنيات العزل',
                                    'شهادات معتمدة من الشركات المصنعة للمواد',
                                    'تدريب على معايير السلامة والجودة',
                                    'ورش عمل لمشاركة الخبرات وحل المشكلات',
                                    'متابعة المستجدات في صناعة العزل عالمياً',
                                    'تقييم دوري للأداء والتطوير المستمر'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                        <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm flex-shrink-0">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                لماذا يختارنا العملاء؟
                            </h2>
                            <p className="text-white/80 text-lg max-w-2xl mx-auto">
                                أسباب حقيقية تجعل أكثر من 5000 عميل يثقون بنا
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: '🛡️', title: 'ضمان حقيقي مكتوب', desc: 'نقدم ضمان موثق يصل إلى 10 سنوات على عزل الفوم. إذا ظهرت أي مشكلة خلال فترة الضمان، نأتي ونصلحها مجاناً.' },
                                { icon: '💰', title: 'أسعار منافسة وعادلة', desc: 'نقدم أفضل قيمة مقابل السعر. لا نبالغ في الأسعار ولا نخفض الجودة. نوضح كل التفاصيل في عرض السعر.' },
                                { icon: '⏰', title: 'التزام بالمواعيد', desc: 'نحترم وقتك. إذا حددنا موعداً نلتزم به. فريقنا يصل في الوقت المحدد وينجز العمل في المدة المتفق عليها.' },
                                { icon: '🔧', title: 'مواد معتمدة فقط', desc: 'نستخدم مواد عزل حاصلة على شهادات SASO ومعتمدة للاستخدام في المملكة. لا نستخدم بدائل رخيصة أو مقلدة.' },
                                { icon: '👷', title: 'فريق محترف', desc: 'فنيونا مدربون ومؤهلون. نعمل بنظافة واحترافية ونحترم خصوصية منزلك. نترك المكان نظيفاً بعد انتهاء العمل.' },
                                { icon: '📞', title: 'دعم ما بعد البيع', desc: 'علاقتنا بالعميل لا تنتهي بانتهاء المشروع. نتابع معك ونتواصل للاطمئنان على جودة العمل. متاحون دائماً لأي استفسار.' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <DocumentCheckIcon className="w-5 h-5" />
                                <span>الاعتمادات والشهادات</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                معتمدون من الجهات الرسمية
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'رخصة البلدية', desc: 'ترخيص ساري من أمانة منطقة الرياض لمزاولة أعمال العزل' },
                                { title: 'اعتماد SASO', desc: 'جميع المواد المستخدمة حاصلة على شهادة المواصفات السعودية' },
                                { title: 'شهادة الجودة', desc: 'نظام إدارة جودة معتمد يضمن تطبيق أعلى المعايير' },
                                { title: 'تأمين ضد الأخطاء', desc: 'تأمين شامل يحمي حقوق العملاء في حالة أي خطأ' }
                            ].map((cert, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                        <CheckBadgeIcon className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                                    <p className="text-gray-500 text-sm">{cert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Service Areas */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-[#0d64ab]/10 text-[#0d64ab] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                <MapPinIcon className="w-5 h-5" />
                                <span>مناطق الخدمة</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                نخدم جميع أحياء الرياض والمناطق المجاورة
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">أحياء الرياض</h3>
                                <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                                    {['النرجس', 'الملقا', 'الياسمين', 'العليا', 'السليمانية', 'الورود', 'الربيع', 'النخيل', 'الصحافة', 'المروج', 'الغدير', 'القيروان', 'الرمال', 'النسيم', 'الروضة', 'المنصورة', 'العزيزية', 'الدار البيضاء'].map((area, idx) => (
                                        <span key={idx} className="bg-gray-50 px-3 py-2 rounded-lg text-center">{area}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">المناطق المجاورة</h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'الخرج', desc: 'نخدم مدينة الخرج وضواحيها بفريق متخصص' },
                                        { name: 'الدرعية', desc: 'خدمات العزل لمدينة الدرعية التاريخية' },
                                        { name: 'المجمعة', desc: 'نصل إلى المجمعة والمناطق المحيطة' },
                                        { name: 'حريملاء', desc: 'خدمات عزل متاحة في حريملاء' }
                                    ].map((area, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#0d64ab]" />
                                            <div>
                                                <span className="font-bold text-gray-900">{area.name}</span>
                                                <span className="text-gray-500 text-sm"> - {area.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-gradient-to-r from-[#0d64ab] to-[#05ccca]">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            جاهزون لخدمتك
                        </h2>
                        <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
                            تواصل معنا الآن للحصول على معاينة مجانية وعرض سعر تفصيلي. فريقنا جاهز للإجابة على جميع استفساراتك.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:0507961706" className="inline-flex items-center gap-2 bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                <PhoneIcon className="w-5 h-5" />
                                اتصل الآن: 0507961706
                            </a>
                            <a href="https://wa.me/966507961706" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg">
                                واتساب
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButtons />
        </>
    )
}
