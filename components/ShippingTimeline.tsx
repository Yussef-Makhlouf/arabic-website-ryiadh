'use client'

import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ShippingTimeline() {
  const steps = [
    {
      id: 1,
      title: 'طلب الخدمة',
      description: 'اتصل بنا أو أرسل طلب عبر الموقع',
      status: 'completed',
      icon: CheckIcon
    },
    {
      id: 2,
      title: 'تقييم الموقع',
      description: 'نقوم بزيارة الموقع وتقييم الاحتياجات',
      status: 'completed',
      icon: CheckIcon
    },
    {
      id: 3,
      title: 'عرض السعر',
      description: 'نقدم لك عرض سعر مفصل ومخصص',
      status: 'active',
      icon: ClockIcon
    },
    {
      id: 4,
      title: 'تأكيد الطلب',
      description: 'تأكيد الطلب وترتيب الموعد',
      status: 'pending',
      icon: ClockIcon
    },
    {
      id: 5,
      title: 'تنفيذ الخدمة',
      description: 'تنفيذ الخدمة بأعلى معايير الجودة',
      status: 'pending',
      icon: ClockIcon
    },
    {
      id: 6,
      title: 'ضمان الجودة',
      description: 'ضمان رضا العملاء 100%',
      status: 'pending',
      icon: ClockIcon
    }
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />
      
      {/* Animated Shapes */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#0d64ab]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-[#0d64ab]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            كيف نعمل
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            نتبع عملية منظمة وشفافة لضمان تقديم أفضل خدمة لعملائنا
          </p>
          <div className="w-24 h-1 bg-[#0d64ab] mx-auto rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-[#0d64ab]/20 transform -translate-x-1/2" />
          <div className="absolute top-0 left-1/2 w-1 h-1/3 bg-[#0d64ab] transform -translate-x-1/2 transition-all duration-1000" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-3 space-x-reverse mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step.status === 'active' ? 'bg-[#0d64ab]' : 'bg-gray-300'
                      }`}>
                        <step.icon className={`w-5 h-5 ${
                          step.status === 'active' ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <h3 className={`text-lg font-semibold ${
                        step.status === 'active' ? 'text-[#0d64ab]' : 'text-gray-800'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full border-4 ${
                    step.status === 'active' ? 'border-[#0d64ab] bg-white' : 'border-gray-300 bg-white'
                  } shadow-lg`} />
                </div>

                {/* Connecting Line */}
                <div className="absolute top-1/2 left-1/2 w-1/4 h-0.5 bg-[#0d64ab]/20 transform -translate-y-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 space-x-reverse text-[#0d64ab]">
            <span className="text-sm font-medium">الخطوة الحالية:</span>
            <div className="w-2 h-2 rounded-full bg-[#0d64ab] animate-pulse" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#0d64ab] rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              ابدأ رحلتك معنا الآن
            </h3>
            <p className="text-white/90 mb-6">
              اتصل بنا للحصول على عرض سعر مجاني وابدأ رحلة النظافة معنا
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0592425077"
                className="bg-white text-[#0d64ab] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                اتصل بنا الآن
              </a>
              <a
                href="https://wa.me/966592425077"
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                راسلنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}