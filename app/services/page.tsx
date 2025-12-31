import Header from '@/components/Header'
import { ShieldCheckIcon, BeakerIcon, EyeIcon, CubeIcon, WrenchScrewdriverIcon, CheckCircleIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

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
        reviews: 256
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
        reviews: 203
    },

    {
        slug: 'leak-detection',
        icon: EyeIcon,
        title: 'كشف تسربات المياه بالرياض',
        shortTitle: 'كشف تسربات',
        description: 'كشف تسربات المياه بأحدث الأجهزة الإلكترونية دون تكسير. نحدد مكان التسرب بدقة متناهية ونقدم الحلول المناسبة.',
        features: ['بدون تكسير', 'أجهزة إلكترونية', 'دقة عالية', 'تقرير مفصل'],
        color: 'bg-[#05ccca]',
        rating: 4.7,
        reviews: 234
    },
    {
        slug: 'tank-insulation',
        icon: WrenchScrewdriverIcon,
        title: 'عزل خزانات المياه بالرياض',
        shortTitle: 'عزل خزانات',
        description: 'عزل خزانات المياه الأرضية والعلوية بمواد آمنة صحياً ومعتمدة. نضمن لكم مياه نظيفة وخالية من التلوث.',
        features: ['مواد آمنة صحياً', 'خزانات أرضية وعلوية', 'معتمد من الصحة', 'ضمان شامل'],
        color: 'bg-[#0d64ab]',
        rating: 4.8,
        reviews: 167
    },
]

export const metadata = {
    title: 'خدمات عزل الأسطح بالرياض | عزل فوم - عزل مائي - كشف تسربات | 0507961706',
    description: 'أفضل خدمات عزل الأسطح والمباني في الرياض والخرج. عزل فوم حراري، عزل مائي، كشف تسربات المياه، وعزل خزانات. ضمان 15 سنة وأسعار منافسة. اتصل الآن 0507961706',
    keywords: ['خدمات عزل الأسطح', 'عزل فوم الرياض', 'عزل مائي الرياض', 'كشف تسربات الرياض', 'شركة عزل معتمدة'],
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

                                    <div className="relative h-48 bg-[#0d64ab]/10">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-24 h-24 ${service.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                                <service.icon className="h-12 w-12 text-white" />
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
        </>
    )
}
