import { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, ArrowRightIcon, TagIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export const metadata: Metadata = {
    title: 'مدونة عزل الأسطح | نصائح ومقالات عن العزل',
    description: 'مقالات ونصائح متخصصة عن عزل الأسطح والمباني. تعرف على أنواع العزل وفوائده وكيفية اختيار الأنسب لمبناك.',
    keywords: ['مدونة عزل', 'نصائح عزل الأسطح', 'مقالات عزل', 'عزل فوم', 'عزل مائي'],
}

const blogPosts = [
    {
        id: 1,
        slug: 'best-roof-insulation-types',
        title: 'أفضل أنواع عزل الأسطح في الرياض',
        excerpt: 'دليل شامل لأنواع عزل الأسطح المتاحة في السوق السعودي ومميزات كل نوع. تعرف على الفرق بين عزل الفوم والعزل المائي والعازل الأسمنتي.',
        image: '/blog/roof-insulation-types.jpg',
        category: 'عزل الأسطح',
        author: 'فريق عزل اسطح الرياض',
        date: '2024-01-15',
        readTime: '8 دقائق',
        featured: true
    },
    {
        id: 2,
        slug: 'foam-vs-waterproof-insulation',
        title: 'الفرق بين عزل الفوم والعزل المائي: أيهما أفضل؟',
        excerpt: 'مقارنة تفصيلية بين عزل الفوم بولي يوريثان والعزل المائي التقليدي. متى تختار كل نوع وما هي المميزات والعيوب لكل منهما.',
        image: '/blog/foam-vs-waterproof.jpg',
        category: 'مقارنات',
        author: 'م. أحمد السعيد',
        date: '2024-01-10',
        readTime: '10 دقائق',
        featured: true
    },
    {
        id: 3,
        slug: 'protect-home-from-leaks',
        title: 'كيف تحمي منزلك من تسربات المياه؟',
        excerpt: 'نصائح عملية لحماية منزلك من تسربات المياه والرطوبة. أهمية الكشف المبكر وطرق الوقاية والعلاج الفعال للتسربات.',
        image: '/blog/water-leaks-protection.jpg',
        category: 'كشف التسربات',
        author: 'فريق عزل اسطح الرياض',
        date: '2024-01-05',
        readTime: '6 دقائق',
        featured: false
    },
    {
        id: 4,
        slug: 'insulation-reduces-electricity-bill',
        title: 'كيف يوفر العزل الحراري في فاتورة الكهرباء؟',
        excerpt: 'اكتشف كيف يمكن لعزل السطح توفير حتى 50% من فاتورة الكهرباء. حسابات فعلية ونماذج من مشاريعنا توضح الفارق.',
        image: '/blog/energy-saving.jpg',
        category: 'توفير الطاقة',
        author: 'م. خالد العتيبي',
        date: '2024-01-02',
        readTime: '7 دقائق',
        featured: false
    },
    {
        id: 5,
        slug: 'tank-insulation-guide',
        title: 'دليل عزل خزانات المياه: أنواعه وأهميته',
        excerpt: 'كل ما تحتاج معرفته عن عزل خزانات المياه. أنواع العزل المناسبة للخزانات وأهمية استخدام مواد آمنة صحياً.',
        image: '/blog/tank-insulation.jpg',
        category: 'عزل الخزانات',
        author: 'فريق عزل اسطح الرياض',
        date: '2023-12-28',
        readTime: '5 دقائق',
        featured: false
    },
    {
        id: 6,
        slug: 'insulation-warranty-importance',
        title: 'لماذا الضمان مهم عند اختيار شركة عزل؟',
        excerpt: 'تعرف على أهمية الضمان في خدمات العزل وما يجب أن يتضمنه. كيف تحمي نفسك وتختار شركة عزل موثوقة.',
        image: '/blog/warranty-importance.jpg',
        category: 'نصائح',
        author: 'فريق عزل اسطح الرياض',
        date: '2023-12-20',
        readTime: '4 دقائق',
        featured: false
    },
]

const categories = ['الكل', 'عزل الأسطح', 'مقارنات', 'كشف التسربات', 'توفير الطاقة', 'عزل الخزانات', 'نصائح']

export default function BlogPage() {
    const featuredPosts = blogPosts.filter(post => post.featured)
    const regularPosts = blogPosts.filter(post => !post.featured)

    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative py-16 bg-[#0d64ab] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10" />
                    <div className="container mx-auto px-6 relative">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                مدونة عزل الأسطح
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                مقالات ونصائح متخصصة لمساعدتك في اختيار أفضل حلول العزل لمبناك
                            </p>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="py-8 bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 rounded-full font-medium transition-all ${index === 0
                                        ? 'bg-[#0d64ab] text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Posts */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">المقالات المميزة</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map(post => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                                >
                                    <div className="relative h-56 bg-[#0d64ab]/10">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-[#0d64ab]/20 rounded-full flex items-center justify-center">
                                                <span className="text-3xl">📰</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-[#0d64ab] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                مميز
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <CalendarIcon className="w-4 h-4" />
                                                <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <ClockIcon className="w-4 h-4" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#0d64ab] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-[#0d64ab] font-medium">
                                            <span>اقرأ المزيد</span>
                                            <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* All Posts */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">جميع المقالات</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map(post => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                                >
                                    <div className="relative h-48 bg-[#0d64ab]/10">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-[#0d64ab]/20 rounded-full flex items-center justify-center">
                                                <span className="text-2xl">📝</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-[#0d64ab] text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <CalendarIcon className="w-4 h-4" />
                                                <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                                            </div>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#0d64ab] transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-[#0d64ab]">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">هل لديك سؤال عن العزل؟</h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            فريقنا متاح للإجابة على جميع استفساراتكم وتقديم الاستشارة المجانية
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:0500000000" className="bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg">
                                اتصل للاستشارة
                            </a>
                            <a href="https://wa.me/966500000000" className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg">
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
