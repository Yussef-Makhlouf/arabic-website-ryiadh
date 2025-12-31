import Image from 'next/image'
import { ShieldCheckIcon, BeakerIcon, WrenchScrewdriverIcon, EyeIcon, CubeIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: CubeIcon,
      title: 'عزل فوم للأسطح بالرياض',
      description: 'عزل فوم بولي يوريثان عالي الكثافة للأسطح والمباني. يوفر عزل حراري ومائي في آن واحد مع ضمان يصل إلى 10 سنوات.',
      image: '/attic-with-completed-spray-foam-insulation.webp',
      color: 'bg-[#0d64ab]',
      badge: 'الأكثر طلباً',
      rating: 4.9,
      reviews: 256,
      features: ['عزل حراري ومائي', 'ضمان 10 سنوات', 'مقاوم للحريق']
    },
    {
      icon: ShieldCheckIcon,
      title: 'عزل مائي للأسطح بالرياض',
      description: 'عزل مائي احترافي للأسطح باستخدام مواد عالية الجودة. حماية شاملة من تسربات المياه والرطوبة مع ضمان شامل.',
      image: '/spray-foam-roofing-01.webp',
      color: 'bg-[#05ccca]',
      badge: 'خدمة مميزة',
      rating: 4.8,
      reviews: 203,
      features: ['حماية من التسربات', 'مقاوم للأملاح', 'ضمان شامل']
    },

    {
      icon: EyeIcon,
      title: 'كشف تسربات المياه بالرياض',
      description: 'كشف تسربات المياه بأحدث الأجهزة الإلكترونية دون تكسير. نحدد مكان التسرب بدقة متناهية ونقدم الحلول المناسبة.',
      image: '/water-leak.avif',
      color: 'bg-[#05ccca]',
      badge: 'تقنية متقدمة',
      rating: 4.7,
      reviews: 234,
      features: ['بدون تكسير', 'أجهزة إلكترونية', 'دقة عالية']
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'عزل خزانات المياه بالرياض',
      description: 'عزل خزانات المياه الأرضية والعلوية بمواد آمنة صحياً ومعتمدة. نضمن لكم مياه نظيفة وخالية من التلوث.',
      image: '/rooftop-water-tank-before-foam-insulation.webp',
      color: 'bg-[#0d64ab]',
      badge: 'معتمد صحياً',
      rating: 4.8,
      reviews: 167,
      features: ['مواد آمنة صحياً', 'خزانات أرضية وعلوية', 'معتمد من الصحة']
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-5" />

      {/* Animated Shapes */}
      <div className="absolute -left-32 top-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-[#0d64ab]/10 text-[#0d64ab] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <StarIcon className="w-4 h-4 fill-current" />
            <span>خدماتنا المتخصصة</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            خدمات عزل الأسطح في الرياض
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متكاملة من خدمات عزل الأسطح والمباني باستخدام أحدث التقنيات ومواد عالية الجودة.
            اكتشف خدماتنا المتخصصة التي تضمن حماية شاملة لمبناك.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-100"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-[#0d64ab] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {service.badge}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1 space-x-reverse">
                  <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-bold text-gray-800">{service.rating}</span>
                  <span className="text-xs text-gray-500">({service.reviews})</span>
                </div>
              </div>

              <div className="relative h-48 bg-[#0d64ab]/10 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 right-4 text-white">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
              </div>

              <div className="relative p-6 bg-white">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#0d64ab]/10 rounded-bl-2xl" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0d64ab] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
                      <div className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href='https://wa.me/966507961706'
                  className="group/btn inline-flex items-center space-x-2 space-x-reverse text-[#0d64ab] hover:text-[#0a5a9a] font-semibold text-sm transition-colors hover:scale-105"
                >
                  <span>اطلب الخدمة واتساب</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                {/* Hover Line Animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0d64ab] group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#0d64ab] rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0   opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                احصل على عرض سعر مجاني الآن
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتكم. فريقنا متاح على مدار الساعة لخدمتكم.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="tel:0507961706"
                  className="group w-full sm:w-auto bg-white text-[#0d64ab] px-8 py-4 rounded-[14px] font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <span>اتصل بنا الآن</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/966507961706"
                  className="group w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-[14px] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <span>احصل على عرض سعر</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}