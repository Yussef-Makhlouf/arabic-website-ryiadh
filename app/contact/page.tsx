'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import {
    PhoneIcon,
    EnvelopeIcon,
    MapPinIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    UserIcon,
    BuildingOffice2Icon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.name.trim()) {
            newErrors.name = 'الاسم مطلوب'
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'رقم الجوال مطلوب'
        } else if (!/^(05|5)\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'رقم جوال غير صحيح'
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'بريد إلكتروني غير صحيح'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'الرسالة مطلوبة'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setStatus('loading')

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            setStatus('success')
            setFormData({ name: '', phone: '', email: '', service: '', message: '' })
        } catch {
            setStatus('error')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    return (
        <>
            <Header />
            <main className="pt-20 bg-gray-50">
                {/* Hero Section */}
                <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] text-white overflow-hidden">
                    <div className="absolute inset-0   opacity-10" />
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                <span>تواصل معنا</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                نحن هنا لخدمتك
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                                فريقنا جاهز للإجابة على استفساراتك وتقديم أفضل الحلول لاحتياجات العزل الخاصة بمبناك
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-8 -mt-8 relative z-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    icon: PhoneIcon,
                                    title: 'اتصل بنا',
                                    value: '966574666444',
                                    subtext: 'متاحون 24/7',
                                    href: 'tel:0574666444',
                                    color: 'blue'
                                },
                                {
                                    icon: ChatBubbleLeftRightIcon,
                                    title: 'واتساب',
                                    value: '966574666444',
                                    subtext: 'رد سريع',
                                    href: 'https://wa.me/966574666444',
                                    color: 'green'
                                },
                                {
                                    icon: EnvelopeIcon,
                                    title: 'البريد الإلكتروني',
                                    value: 'info@insulation-riyadh.com',
                                    subtext: 'راسلنا',
                                    href: 'mailto:info@insulation-riyadh.com',
                                    color: 'purple'
                                },
                                {
                                    icon: MapPinIcon,
                                    title: 'الموقع',
                                    value: 'الرياض، السعودية',
                                    subtext: 'نخدم جميع الأحياء',
                                    href: '#location',
                                    color: 'orange'
                                }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-[#0d64ab] font-medium text-sm mb-1" dir="ltr">{item.value}</p>
                                    <p className="text-gray-500 text-xs">{item.subtext}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Contact Form */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">أرسل لنا رسالة</h2>
                                <p className="text-gray-500 mb-6">املأ النموذج وسنتواصل معك في أقرب وقت</p>

                                {status === 'success' ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                                        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-green-700 mb-2">تم إرسال رسالتك بنجاح!</h3>
                                        <p className="text-green-600">سنتواصل معك في أقرب وقت ممكن</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-4 text-[#0d64ab] font-medium hover:underline"
                                        >
                                            إرسال رسالة أخرى
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                الاسم الكامل <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <UserIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="أدخل اسمك الكامل"
                                                    className={`w-full pr-10 pl-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                                />
                                            </div>
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                رقم الجوال <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <PhoneIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="05xxxxxxxx"
                                                    dir="ltr"
                                                    className={`w-full pr-10 pl-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent outline-none transition-all text-left ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                                />
                                            </div>
                                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                البريد الإلكتروني <span className="text-gray-400">(اختياري)</span>
                                            </label>
                                            <div className="relative">
                                                <EnvelopeIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="example@email.com"
                                                    dir="ltr"
                                                    className={`w-full pr-10 pl-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent outline-none transition-all text-left ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                                />
                                            </div>
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>

                                        {/* Service */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                الخدمة المطلوبة
                                            </label>
                                            <div className="relative">
                                                <BuildingOffice2Icon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent outline-none transition-all appearance-none bg-white"
                                                >
                                                    <option value="">اختر الخدمة</option>
                                                    <option value="foam">عزل فوم للأسطح</option>
                                                    <option value="waterproof">عزل مائي</option>
                                                    <option value="leak">كشف تسربات المياه</option>
                                                    <option value="tank">عزل خزانات المياه</option>
                                                    <option value="other">خدمة أخرى</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                رسالتك <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="اكتب تفاصيل طلبك أو استفسارك..."
                                                rows={4}
                                                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent outline-none transition-all resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                                            />
                                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                        </div>

                                        {status === 'error' && (
                                            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                                                <ExclamationCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
                                                <p className="text-red-600 text-sm">حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.</p>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className={`w-full py-4 rounded-xl font-bold text-white transition-all ${status === 'loading'
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-[#0d64ab] hover:bg-[#094a83] shadow-lg hover:shadow-xl'
                                                }`}
                                        >
                                            {status === 'loading' ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                    </svg>
                                                    جاري الإرسال...
                                                </span>
                                            ) : 'إرسال الرسالة'}
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Info Side */}
                            <div className="space-y-6">
                                {/* Quick Contact */}
                                <div className="bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] rounded-2xl p-6 md:p-8 text-white">
                                    <h3 className="text-xl font-bold mb-4">تواصل مباشر وسريع</h3>
                                    <p className="text-white/80 mb-6">
                                        للحصول على رد فوري، تواصل معنا عبر الهاتف أو الواتساب. فريقنا جاهز لخدمتك على مدار الساعة.
                                    </p>
                                    <div className="space-y-4">
                                        <a href="tel:966574666444" className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                                <PhoneIcon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="font-bold">اتصل الآن</div>
                                                <div className="text-white/70" dir="ltr">966574666444</div>
                                            </div>
                                        </a>
                                        <a href="https://wa.me/966569131252" className="flex items-center gap-4 bg-green-500/20 backdrop-blur-sm rounded-xl p-4 hover:bg-green-500/30 transition-colors">
                                            <div className="w-12 h-12 rounded-full bg-green-500/30 flex items-center justify-center">
                                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 2.111.937 3.297.937 3.18 0 5.767-2.587 5.767-5.767 0-3.18-2.587-5.766-5.767-5.766z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-bold">واتساب</div>
                                                <div className="text-white/70">رد فوري</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ClockIcon className="w-6 h-6 text-[#0d64ab]" />
                                        ساعات العمل
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            { day: 'السبت - الخميس', time: '8:00 ص - 10:00 م' },
                                            { day: 'الجمعة', time: '4:00 م - 10:00 م' },
                                            { day: 'الطوارئ', time: 'متاحون 24/7', highlight: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className={`flex justify-between items-center p-3 rounded-xl ${item.highlight ? 'bg-green-50 border border-green-100' : 'bg-gray-50'}`}>
                                                <span className={item.highlight ? 'text-green-700 font-medium' : 'text-gray-600'}>{item.day}</span>
                                                <span className={item.highlight ? 'text-green-700 font-bold' : 'text-gray-900 font-medium'}>{item.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Service Areas */}
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <MapPinIcon className="w-6 h-6 text-[#0d64ab]" />
                                        مناطق الخدمة
                                    </h3>
                                    <p className="text-gray-600 mb-4">نخدم جميع أحياء الرياض والمناطق المجاورة:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['الرياض', 'الخرج', 'الدرعية', 'المجمعة', 'حريملاء', 'الدوادمي'].map((area, idx) => (
                                            <span key={idx} className="bg-[#0d64ab]/10 text-[#0d64ab] px-3 py-1.5 rounded-full text-sm font-medium">
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section id="location" className="py-12 md:py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">موقعنا</h2>
                            <p className="text-gray-500">نخدم جميع أحياء الرياض والمناطق المجاورة</p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center border border-gray-200">
                            <div className="text-center">
                                <MapPinIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">الرياض، المملكة العربية السعودية</p>
                                <p className="text-gray-400 text-sm">نصلك أينما كنت في الرياض والخرج</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-12 md:py-16 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">الأسئلة الشائعة</h2>
                            <p className="text-gray-500">إجابات على أسئلتك المتكررة</p>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                { q: 'كم تستغرق عملية العزل؟', a: 'يعتمد على حجم المشروع. عادة تستغرق الفيلا المتوسطة 1-3 أيام للعزل الكامل.' },
                                { q: 'هل تقدمون ضمان على العمل؟', a: 'نعم، نقدم ضمان يصل إلى 10 سنوات على عزل الفوم و7 سنوات على العزل المائي.' },
                                { q: 'ما تكلفة المعاينة؟', a: 'المعاينة مجانية تماماً. نرسل فريقنا لتقييم حالة السطح وتقديم عرض سعر مفصل.' },
                                { q: 'هل تعملون في جميع أحياء الرياض؟', a: 'نعم، نخدم جميع أحياء الرياض بالإضافة إلى الخرج والدرعية والمناطق المجاورة.' }
                            ].map((faq, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                    <p className="text-gray-600 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-12 md:py-16 bg-gradient-to-r from-[#0d64ab] to-[#05ccca]">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            جاهزون لخدمتك الآن
                        </h2>
                        <p className="text-white/90 mb-8 text-lg">
                            اتصل الآن واحصل على معاينة مجانية وعرض سعر فوري
                        </p>
                        <a href="tel:966574666444" className="inline-flex items-center gap-2 bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            <PhoneIcon className="w-5 h-5" />
                            اتصل الآن: 966574666444
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButtons />
        </>
    )
}
