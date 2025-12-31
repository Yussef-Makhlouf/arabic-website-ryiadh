import { ShieldCheckIcon, ClockIcon, TrophyIcon, UserGroupIcon, CheckBadgeIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: ClockIcon,
      title: 'خبرة تزيد عن 15 عامًا',
      description: 'خبرة واسعة في مجال عزل الأسطح والمباني في الرياض والخرج',
      color: 'bg-[#0d64ab]'
    },
    {
      icon: ShieldCheckIcon,
      title: 'ضمان شامل 10 سنوات',
      description: 'نقدم ضمان شامل على جميع خدمات العزل يصل إلى 10 سنوات',
      color: 'bg-[#05ccca]'
    },
    {
      icon: CheckBadgeIcon,
      title: 'معتمدون رسمياً',
      description: 'معتمدون من الهيئة السعودية للمهندسين والجهات المختصة',
      color: 'bg-[#0d64ab]'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'مواد عالية الجودة',
      description: 'نستخدم أفضل مواد العزل المعتمدة عالمياً ومحلياً',
      color: 'bg-[#05ccca]'
    },
    {
      icon: UserGroupIcon,
      title: 'فريق فني متخصص',
      description: 'فنيون مدربون ومؤهلون على أعلى مستوى من الاحترافية',
      color: 'bg-[#0d64ab]'
    },
    {
      icon: TrophyIcon,
      title: 'أسعار تنافسية',
      description: 'أسعار منافسة مع الحفاظ على أعلى معايير الجودة',
      color: 'bg-[#05ccca]'
    }
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />

      {/* Animated Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            لماذا تختار شركة عزل اسطح الرياض؟
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            نقدم لكم أفضل خدمات عزل الأسطح والمباني بجودة عالية وأسعار منافسة مع ضمان شامل
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-[#0d64ab] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-[#0d64ab]/5 px-8 py-6 rounded-2xl border border-[#0d64ab]/10">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#0d64ab]">+2000</p>
              <p className="text-gray-600 text-sm">عميل راضٍ</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#05ccca]">+15</p>
              <p className="text-gray-600 text-sm">سنة خبرة</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#0d64ab]">10</p>
              <p className="text-gray-600 text-sm">سنوات ضمان</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}