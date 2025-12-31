import { TrophyIcon, UsersIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Stats() {
  const stats = [
    {
      icon: ClockIcon,
      value: '+15',
      label: 'سنة خبرة',
      color: 'bg-[#0d64ab]'
    },
    {
      icon: TrophyIcon,
      value: '+2000',
      label: 'مشروع منجز',
      color: 'bg-[#05ccca]'
    },
    {
      icon: UsersIcon,
      value: '+50',
      label: 'فني متخصص',
      color: 'bg-[#0d64ab]'
    },
    {
      icon: ShieldCheckIcon,
      value: '10',
      label: 'سنوات ضمان',
      color: 'bg-[#05ccca]'
    }
  ]

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            إحصائيات شركة عزل اسطح الرياض
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            أرقام تعكس خبرتنا الطويلة وثقة عملائنا الكرام في خدمات العزل
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-[#0d64ab] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              لماذا تختار شركة عزل اسطح الرياض؟
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              خبرة واسعة، مواد عالية الجودة، ضمان شامل، وفريق فني متخصص لخدمتكم
            </p>
            <a
              href="tel:0500000000"
              className="inline-block bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              اتصل بنا الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
