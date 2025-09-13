import { ShieldCheckIcon, ClockIcon, StarIcon, SparklesIcon, UsersIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheckIcon,
      title: 'جودة عالية',
      description: 'نستخدم أحدث التقنيات ومواد صديقة للبيئة لضمان أفضل النتائج'
    },
    {
      icon: ClockIcon,
      title: 'خدمة 24/7',
      description: 'متاحون على مدار الساعة لتلبية احتياجاتكم في أي وقت'
    },
    {
      icon: StarIcon,
      title: 'فريق متخصص',
      description: 'فريق مدرب ومتخصص في جميع أنواع خدمات النظافة والتعقيم'
    },
    {
      icon: SparklesIcon,
      title: 'مواد آمنة',
      description: 'نستخدم مواد آمنة ومطابقة للمواصفات الصحية السعودية'
    },
    {
      icon: UsersIcon,
      title: 'رضا العملاء',
      description: 'نحرص على رضا عملائنا ونقدم ضمان 100% على جميع خدماتنا'
    },
    {
      icon: TrophyIcon,
      title: 'خبرة طويلة',
      description: 'أكثر من 10 سنوات من الخبرة في مجال النظافة والتعقيم'
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 relative">
            لماذا تختار شركة لمسة للنظافة؟
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#0d64ab]" />
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            نتميز بتقديم خدمات نظافة وتعقيم عالية الجودة مع ضمان رضا العملاء. 
            اكتشف لماذا يختارنا آلاف العملاء في الرياض.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0d64ab]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-300" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0d64ab]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0d64ab] transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-[#0d64ab] group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-[#0d64ab] transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#0d64ab] rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              جرب خدماتنا الآن
            </h3>
            <p className="text-white/90 mb-6">
              احصل على عرض سعر مجاني وتجربة خدماتنا المتميزة
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