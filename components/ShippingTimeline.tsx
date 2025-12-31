import { PhoneIcon, ClipboardDocumentCheckIcon, TruckIcon, WrenchScrewdriverIcon, CheckBadgeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function ShippingTimeline() {
  const steps = [
    {
      icon: PhoneIcon,
      title: 'التواصل والاستفسار',
      description: 'اتصل بنا أو راسلنا عبر واتساب لمناقشة احتياجات العزل الخاصة بمبناك',
      color: 'bg-[#0d64ab]'
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: 'المعاينة المجانية',
      description: 'يقوم فريقنا بزيارة الموقع لتقييم حالة السطح وتحديد نوع العزل المناسب',
      color: 'bg-[#05ccca]'
    },
    {
      icon: TruckIcon,
      title: 'عرض السعر',
      description: 'نقدم لكم عرض سعر مفصل يشمل نوع المواد ومساحة العزل وفترة الضمان',
      color: 'bg-[#0d64ab]'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'تنفيذ العزل',
      description: 'فريقنا المتخصص ينفذ أعمال العزل باحترافية عالية وفق أعلى المعايير',
      color: 'bg-[#05ccca]'
    },
    {
      icon: CheckBadgeIcon,
      title: 'فحص الجودة',
      description: 'نجري فحص شامل للتأكد من جودة العزل وعدم وجود أي تسربات',
      color: 'bg-[#0d64ab]'
    },
    {
      icon: ShieldCheckIcon,
      title: 'التسليم والضمان',
      description: 'تسليم المشروع مع شهادة ضمان شاملة تصل إلى 10 سنوات',
      color: 'bg-[#05ccca]'
    }
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            خطوات العمل معنا
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            نتبع منهجية واضحة ومنظمة لضمان تقديم أفضل خدمات عزل الأسطح
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0d64ab] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                {index + 1}
              </div>

              <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <step.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#0d64ab] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">ابدأ الآن واحصل على معاينة مجانية</h3>
            <p className="text-white/90 mb-6">
              اتصل بنا للحصول على عرض سعر مجاني وابدأ حماية مبناك اليوم
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0500000000"
                className="bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                اتصل الآن
              </a>
              <a
                href="https://wa.me/966500000000"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}