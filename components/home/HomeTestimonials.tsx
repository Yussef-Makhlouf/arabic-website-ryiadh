'use client'

import { useState, useEffect } from 'react'
import { StarIcon, UserCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const testimonials = [
    {
        name: 'أحمد الشمري',
        location: 'الرياض - حي النرجس',
        rating: 5,
        text: 'خدمة ممتازة وفريق محترف جداً. لاحظت فرق كبير في درجة حرارة المنزل بعد عزل الفوم وانخفضت فاتورة الكهرباء بشكل ملحوظ. أنصح الجميع بالتعامل معهم.',
        service: 'عزل فوم للأسطح',
        date: '2024-01-10'
    },
    {
        name: 'محمد العتيبي',
        location: 'الرياض - حي الملقا',
        rating: 5,
        text: 'تجربة رائعة من البداية للنهاية. الفريق ملتزم بالمواعيد والعمل نظيف ومرتب. الضمان المكتوب أعطاني راحة بال كبيرة.',
        service: 'عزل فوم للأسطح',
        date: '2024-01-05'
    },
    {
        name: 'فهد السالم',
        location: 'الرياض - حي الياسمين',
        rating: 5,
        text: 'عملوا عزل مائي للسطح بعد مشكلة تسربات. الحمد لله لم تعد المشكلة تتكرر حتى في أقوى الأمطار. شكراً لكم.',
        service: 'عزل مائي',
        date: '2024-01-08'
    },
    {
        name: 'عبدالله القحطاني',
        location: 'الرياض - حي العليا',
        rating: 5,
        text: 'حددوا مكان التسرب بدقة بدون أي تكسير. وفروا علي الكثير من المال والجهد. خدمة احترافية بكل المقاييس.',
        service: 'كشف تسربات',
        date: '2024-01-12'
    },
    {
        name: 'سعد الدوسري',
        location: 'الرياض - حي الرمال',
        rating: 5,
        text: 'عزلوا الخزان بمواد ممتازة ومعتمدة من الصحة. المياه الآن نظيفة وبدون أي رائحة. عمل احترافي.',
        service: 'عزل خزانات',
        date: '2024-01-15'
    },
    {
        name: 'خالد المطيري',
        location: 'الخرج',
        rating: 5,
        text: 'رغم بعد المسافة إلا أنهم جاءوا في الموعد وأنجزوا العمل بجودة عالية. شركة محترمة وأسعار مناسبة.',
        service: 'عزل فوم للأسطح',
        date: '2024-01-03'
    }
]

export default function HomeTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const next = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-2xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <ChatBubbleLeftRightIcon className="w-5 h-5" />
                        <span>آراء عملائنا</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                        ماذا يقول عملاؤنا عنا؟
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        أكثر من 2000 عميل راضٍ يثقون بخدماتنا في الرياض والخرج
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                        <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                        <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </button>

                    {/* Current Testimonial */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                            {/* Avatar */}
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#0d64ab] to-[#05ccca] flex items-center justify-center">
                                    <UserCircleIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-right">
                                {/* Rating */}
                                <div className="flex justify-center md:justify-start gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-200'}`} />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Author */}
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                                    <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                                </div>

                                {/* Service Badge */}
                                <div className="mt-4">
                                    <span className="inline-block bg-[#0d64ab]/10 text-[#0d64ab] px-3 py-1 rounded-full text-sm font-medium">
                                        {testimonials[currentIndex].service}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => { setIsAutoPlaying(false); setCurrentIndex(idx) }}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Stats */}
                <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white">+2000</div>
                        <div className="text-white/70 text-sm">عميل راضٍ</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white">4.9</div>
                        <div className="text-white/70 text-sm">تقييم متوسط</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                        <div className="text-white/70 text-sm">سنة خبرة</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
