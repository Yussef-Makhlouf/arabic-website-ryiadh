'use client'

import { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="relative py-24 bg-gray-50 overflow-hidden">
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
          <div className="bg-[#0d64ab] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
            <p className="text-white/80 mb-8">
              فريقنا متاح على مدار الساعة لمساعدتك في الحصول على أفضل خدمات عزل الأسطح.
              لا تتردد في التواصل معنا.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">اتصل بنا</p>
                  <a href="tel:0507961706" className="text-lg font-semibold">0507961706</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">البريد الإلكتروني</p>
                  <a href="mailto:info@lamsa-clean.com" className="text-lg font-semibold">info@lamsa-clean.com</a>
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

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">الاسم</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">رقم الجوال</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent"
                  placeholder="0507961706"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">الخدمة المطلوبة</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent"
                >
                  <option value="">اختر الخدمة</option>
                  <option>عزل فوم للأسطح</option>
                  <option>عزل مائي للأسطح</option>
                  <option>عزل الأسطح المبلطة</option>
                  <option>عزل شينكو وهناجر</option>
                  <option>عازل أسمنتي</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">رسالتك</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0d64ab] focus:border-transparent resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0d64ab] hover:bg-[#0a5a9a] text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
