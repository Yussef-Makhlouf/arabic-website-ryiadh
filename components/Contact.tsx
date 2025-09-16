'use client'

import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'اتصل بنا',
      value: '0547910859',
      link: 'tel:0547910859',
      description: 'متاح على مدار الساعة'
    },
    {
      icon: EnvelopeIcon,
      title: 'راسلنا عبر البريد الإلكتروني',
      value: 'info@lamsa-cleaning.com',
      link: 'mailto:info@lamsa-cleaning.com',
      description: 'رد سريع خلال 24 ساعة'
    },
    {
      icon: MapPinIcon,
      title: 'موقعنا',
      value: 'الرياض، المملكة العربية السعودية',
      link: '#',
      description: 'خدمات في جميع أنحاء الرياض'
    },
    {
      icon: ClockIcon,
      title: 'ساعات العمل',
      value: '24/7',
      link: '#',
      description: 'خدمة متاحة على مدار الساعة'
    }
  ]

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />
      
      {/* Animated Shapes */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#0d64ab]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            تواصل معنا
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في الحصول على أفضل خدمات النظافة والتعقيم. تواصل معنا الآن للحصول على عرض سعر مجاني.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                معلومات التواصل
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                فريقنا متاح على مدار الساعة لمساعدتك في الحصول على أفضل خدمات النظافة والتعقيم. 
                لا تتردد في التواصل معنا بأي وسيلة تفضلها.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-start space-x-4 space-x-reverse p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#0d64ab]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0d64ab] transition-all duration-300">
                    <info.icon className="w-6 h-6 text-[#0d64ab] group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                    <p className="text-[#0d64ab] hover:text-[#0a5a9a] font-semibold mt-2 inline-block">
                      {info.value}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0d64ab] rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6">
              احصل على عرض سعر مجاني
            </h3>
            <p className="text-white/90 mb-8">
              املأ النموذج التالي وسنقوم بالتواصل معك في أقرب وقت ممكن لتقديم عرض سعر مخصص لاحتياجاتك.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d64ab] focus:ring-2 focus:ring-[#0d64ab]/20 transition-all duration-300"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d64ab] focus:ring-2 focus:ring-[#0d64ab]/20 transition-all duration-300"
                    placeholder="05xxxxxxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d64ab] focus:ring-2 focus:ring-[#0d64ab]/20 transition-all duration-300"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">نوع الخدمة المطلوبة</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d64ab] focus:ring-2 focus:ring-[#0d64ab]/20 transition-all duration-300">
                  <option>اختر نوع الخدمة</option>
                  <option>تنظيف المنازل</option>
                  <option>تنظيف المكاتب</option>
                  <option>تنظيف السجاد</option>
                  <option>مكافحة الحشرات</option>
                  <option>التعقيم الشامل</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">الرسالة</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0d64ab] focus:ring-2 focus:ring-[#0d64ab]/20 transition-all duration-300"
                  placeholder="اكتب تفاصيل طلبك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#0d64ab] py-4 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>إرسال الطلب</span>
                <PhoneIcon className="w-5 h-5" />
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 mb-4">تواصل معنا عبر:</p>
              <div className="flex space-x-4 space-x-reverse">
                <a
                  href="https://wa.me/966547910859"
                  className="bg-[#0d64ab]/20 text-white px-4 py-2 rounded-lg hover:bg-[#0d64ab]/30 transition-all duration-300 flex items-center space-x-2 space-x-reverse shadow-sm"
                >
                  <span>واتساب</span>
                </a>
                <a
                  href="tel:0547910859"
                  className="bg-[#0d64ab]/20 text-white px-4 py-2 rounded-lg hover:bg-[#0d64ab]/30 transition-all duration-300 flex items-center space-x-2 space-x-reverse shadow-sm"
                >
                  <span>اتصال مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
