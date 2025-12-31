'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0   opacity-5" />

      {/* Animated Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            تواصل معنا
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في الحصول على أفضل خدمات عزل الأسطح والمباني. تواصل معنا الآن للحصول على عرض سعر مجاني.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#0d64ab] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
              <p className="text-white/80 mb-8">
                فريقنا متاح على مدار الساعة لمساعدتك في الحصول على أفضل خدمات عزل الأسطح.
                لا تتردد في التواصل معنا عبر أي من الطرق التالية.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">اتصل بنا</p>
                    <a href="tel:0574666444" className="text-lg font-semibold hover:text-[#05ccca] transition-colors">
                      0574666444
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">البريد الإلكتروني</p>
                    <a href="mailto:info@lamsa-clean.com" className="text-lg font-semibold hover:text-[#05ccca] transition-colors">
                      info@lamsa-clean.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">العنوان</p>
                    <p className="text-lg font-semibold">الرياض والخرج، المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">ساعات العمل</p>
                    <p className="text-lg font-semibold">24/7 على مدار الساعة</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966574666444"
              className="flex items-center justify-center space-x-3 space-x-reverse bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ChatBubbleLeftRightIcon className="w-6 h-6" />
              <span className="text-lg font-semibold">تواصل عبر واتساب</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">تم الإرسال بنجاح!</h3>
                <p className="text-gray-600 text-center">سنتواصل معك في أقرب وقت</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent transition-all"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">رقم الجوال</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent transition-all"
                    placeholder="05xxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">الخدمة المطلوبة</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent transition-all"
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="عزل فوم للأسطح">عزل فوم للأسطح</option>
                    <option value="عزل مائي للأسطح">عزل مائي للأسطح</option>
                    <option value="عازل أسمنتي">عازل أسمنتي</option>
                    <option value="كشف تسربات المياه">كشف تسربات المياه</option>
                    <option value="عزل خزانات المياه">عزل خزانات المياه</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">رسالتك</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent transition-all resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0d64ab] hover:bg-[#0a5a9a] text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
