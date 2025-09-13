'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRightIcon, ChevronLeftIcon, ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/react/24/outline'

export default function Testimonials() {
  const testimonials = [
    {
      name: "أحمد السعيد",
      position: "مالك فيلا",
      company: "حي النرجس",
      image: "/testimonial-1.jpg",
      rating: 5,
      quote: "خدمة تنظيف ممتازة! فريق العمل محترف جداً واستخدموا مواد آمنة. منزلي أصبح نظيفاً تماماً وأشعر بالراحة."
    },
    {
      name: "سارة الحربي",
      position: "مديرة مكتب",
      company: "شركة التقنية المتقدمة",
      image: "/testimonial-2.jpg",
      rating: 5,
      quote: "نحن نستخدم خدماتهم منذ عامين لتنظيف مكتبنا. خدمة موثوقة وجدولة مرنة تناسب ساعات العمل."
    },
    {
      name: "محمد العمري",
      position: "مدير مطعم",
      company: "مطعم الأصالة",
      image: "/testimonial-3.jpg",
      rating: 5,
      quote: "خدمة تعقيم ممتازة لمطعمنا. المواد المستخدمة آمنة ومطابقة للمواصفات الصحية. أنصح الجميع بهم."
    },
    {
      name: "فاطمة الزهراني",
      position: "ربة منزل",
      company: "حي الملك فهد",
      image: "/testimonial-4.jpg",
      rating: 5,
      quote: "خدمة تنظيف السجاد رائعة! أزالوا بقع صعبة جداً وكان السعر مناسب. سأستخدمهم مرة أخرى."
    },
    {
      name: "علي القحطاني",
      position: "مدير عيادة",
      company: "عيادة الأسنان المتخصصة",
      image: "/testimonial-5.jpg",
      rating: 5,
      quote: "خدمة تعقيم احترافية للعيادة. استخدموا تقنيات متقدمة وقدمونا تقريراً مفصلاً. موصى بهم بشدة."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSlideChange = (direction: 'next' | 'prev') => {
    setIsAnimating(true)
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/testimonial-pattern.svg')] opacity-5" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#0d64ab]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cairo font-bold text-gray-800 mb-4">
            آراء عملائنا
          </h2>
          <div className="w-24 h-1 bg-[#0d64ab] mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Quote Icon */}
            <div className="absolute -top-6 right-8 w-12 h-12 bg-[#0d64ab] rounded-full flex items-center justify-center shadow-lg">
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
            </div>

            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="rounded-full object-cover border-4 border-[#0d64ab]/20 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#0d64ab] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {testimonials[currentIndex].position}
                  </div>
                </div>

                <div className="flex-1 text-center md:text-right">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xl font-tajawal text-gray-600 leading-relaxed mb-6">
                    {testimonials[currentIndex].quote}
                  </p>
                  <h3 className="text-xl font-cairo font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#0d64ab] font-tajawal">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => handleSlideChange('prev')}
                className="w-12 h-12 rounded-full bg-[#0d64ab]/10 hover:bg-[#0d64ab]/20 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <ChevronRightIcon className="w-6 h-6 text-[#0d64ab]" />
              </button>
              <button
                onClick={() => handleSlideChange('next')}
                className="w-12 h-12 rounded-full bg-[#0d64ab]/10 hover:bg-[#0d64ab]/20 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <ChevronLeftIcon className="w-6 h-6 text-[#0d64ab]" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#0d64ab] mb-2">98%</div>
            <div className="text-gray-600 font-tajawal">نسبة رضا العملاء</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#0d64ab] mb-2">5000+</div>
            <div className="text-gray-600 font-tajawal">عميل راضٍ</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#0d64ab] mb-2">15+</div>
            <div className="text-gray-600 font-tajawal">سنة خبرة</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#0d64ab] mb-2">24/7</div>
            <div className="text-gray-600 font-tajawal">خدمة متواصلة</div>
          </div>
        </div>
      </div>
    </section>
  )
}
