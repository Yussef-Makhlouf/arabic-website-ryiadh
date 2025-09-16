import Image from 'next/image'
import { ExclamationTriangleIcon, SparklesIcon, ShieldCheckIcon, CloudIcon, HomeIcon, BuildingOfficeIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Services() {
  const services = [
    { 
      icon: ExclamationTriangleIcon, 
      title: 'مكافحة الحشرات في الرياض', 
      description: 'خدمات مكافحة الحشرات المتخصصة باستخدام أحدث التقنيات والمواد الآمنة لضمان بيئة خالية من الحشرات الضارة',
      image: '/home-cleaning-riyadh-guide.png',
      color: 'bg-[#0d64ab]',
      badge: 'الأكثر طلباً',
      rating: 4.9,
      reviews: 156
    },
    { 
      icon: SparklesIcon, 
      title: 'تنظيف الموكيت في الرياض', 
      description: 'تنظيف الموكيت والسجاد باستخدام معدات متخصصة ومواد تنظيف عالية الجودة لإزالة البقع والروائح',
      image: '/carpet-cleaning-guide.avif',
      color: 'bg-[#05ccca]',
      badge: 'خدمة مميزة',
      rating: 4.8,
      reviews: 203
    },
    { 
      icon: ShieldCheckIcon, 
      title: 'التعقيم الشامل في الرياض', 
      description: 'خدمات التعقيم الشامل للمنازل والمكاتب باستخدام تقنيات متقدمة لضمان بيئة صحية وآمنة',
      image: '/cleaning-services.png',
      color: 'bg-[#0d64ab]',
      badge: 'مطلوبة بشدة',
      rating: 4.9,
      reviews: 189
    },
    { 
      icon: CloudIcon, 
      title: 'تنظيف الخزانات في الرياض', 
      description: 'تنظيف وتعقيم خزانات المياه باستخدام مواد آمنة ومطابقة للمواصفات الصحية السعودية',
      image: '/home-cleaning-riyadh-guide.png',
      color: 'bg-[#05ccca]',
      badge: 'خدمة صحية',
      rating: 4.7,
      reviews: 134
    },
    { 
      icon: SparklesIcon, 
      title: 'تنظيف السجاد في الرياض', 
      description: 'تنظيف السجاد والموكيت بالبخار وإزالة البقع الصعبة مع ضمان عدم تلف الألياف',
      image: '/carpet-cleaning-guide.avif',
      color: 'bg-[#0d64ab]',
      badge: 'تقنية متقدمة',
      rating: 4.8,
      reviews: 167
    },
    { 
      icon: BuildingOfficeIcon, 
      title: 'تنظيف المكاتب في الرياض', 
      description: 'خدمات تنظيف المكاتب والشركات الشاملة مع جدولة مرنة تناسب ساعات العمل',
      image: '/home-cleaning-riyadh-guide.png',
      color: 'bg-[#05ccca]',
      badge: 'خدمة تجارية',
      rating: 4.9,
      reviews: 145
    },
    { 
      icon: HomeIcon, 
      title: 'تنظيف المنازل في الرياض', 
      description: 'تنظيف المنازل الشامل واليومي مع خدمات تنظيف المطبخ والحمامات والغرف',
      image: '/home-cleaning-guide.avif',
      color: 'bg-[#0d64ab]',
      badge: 'خدمة شاملة',
      rating: 4.9,
      reviews: 278
    },

  ]

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Patterns */}
      <div className="absolute inset-0 bg-[url('/wave-lines.svg')] opacity-5" />
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5" />
      
      {/* Animated Shapes */}
      <div className="absolute -left-32 top-0 w-96 h-96 bg-[#0d64ab]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />
      <div className="absolute left-1/2 top-1/2 w-40 h-40 bg-[#0d64ab]/15 rounded-full blur-xl animate-pulse" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-[#0d64ab]/10 text-[#0d64ab] px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
            <StarIcon className="w-4 h-4 fill-current" />
            <span>خدماتنا المتخصصة</span>
          </div>
          <h2 className="text-3xl lg:text-3xl font-bold mb-10 text-gray-800">
           خدمات النظافة الشاملة في الرياض
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متكاملة من خدمات النظافة والتعقيم باستخدام أحدث التقنيات ومواد صديقة للبيئة. 
            اكتشف خدماتنا المتخصصة التي تضمن بيئة نظيفة وآمنة لكم ولعائلاتكم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center shadow-xl transform -translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
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
                  <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
                    <div className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2"></div>
                    <span>خدمة 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
                    <div className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2"></div>
                    <span>ضمان الجودة</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
                    <div className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2  "></div>
                    <span className='mx-2'>مواد آمنة</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href='https://wa.me/966547910859'
                  className="group/btn inline-flex items-center space-x-2 space-x-reverse text-[#0d64ab] hover:text-[#0a5a9a] font-semibold text-sm transition-colors hover:scale-105"
                >
                  <span>  اطلب الخدمة واتساب </span>
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
            <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                احصل على عرض سعر مجاني الآن
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتكم. فريقنا متاح على مدار الساعة لخدمتكم.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:0547910859"
                  className="group bg-white text-[#0d64ab] px-8 py-4 rounded-[14px] font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 space-x-reverse"
                >
                  <span>اتصل بنا الآن</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/966547910859"
                  className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-[14px] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 space-x-reverse"
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