import Link from 'next/link'
import { SparklesIcon, ShieldCheckIcon, ClockIcon, CheckCircleIcon, StarIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const services = [
    { 
      icon: SparklesIcon, 
      title: 'تـنـظـيف المنـازل', 
      description: 'تـنـظـيف شـامـل للمنـازل والشقـق فـي الريــاض',
      color: 'bg-[#0d64ab]'
    },
    { 
      icon: ShieldCheckIcon, 
      title: 'تـنـظـيف المكاتب', 
      description: 'خدمـات تـنـظـيف احترافيــة للمكاتب والشركات',
      color: 'bg-[#05ccca]'
    },
    { 
      icon: ClockIcon, 
      title: 'تـنـظـيف السجاد', 
      description: 'تـنـظـيف وتجفيف السجاد بأحدث التقنيات',
      color: 'bg-[#0d64ab]'
    },
  ]

  const benefits = [
    'خدمــة 24/7 متاحــة فـي الريــاض',
    'ضمــان الجودــة 100%',
    'أسـعار تنافسيــة ومناسبــة',
    'فريــق مدرب ومتخصــص'
  ]

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[#0d64ab]/10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#0d64ab]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#05ccca]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-gray-900 space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-[#0d64ab]/10 px-4 py-2 rounded-full border border-[#0d64ab]/20 shadow-sm">
              <MapPinIcon className="w-4 h-4 text-[#0d64ab]" />
              <span className="text-sm font-medium text-[#0d64ab]">خدمـات نـظـافـة فـي الرياض</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 mb-10">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
                <span className="text-gray-900">أفضل شركــة نـظـافــة </span>
                <span className="text-[#0d64ab]"> فـي الريــاض </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                نقدم خدمـات تـنـظـيف احترافيــة وشاملــة للمنـازل والمكاتب فـي الريــاض. 
                نستخدم أحدث التقنيات ومواد صديقة للبيئة لضمان بيئــة صحيــة وآمنــة.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 space-x-reverse">
                  <CheckCircleIcon className="w-5 h-5 text-[#0d64ab] flex-shrink-0 mx-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                href="tel:0592425077"
                className="group bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-[16px] transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 font-semibold flex items-center justify-center space-x-2 space-x-reverse shadow-sm hover:shadow-md"
              >
                <PhoneIcon className="w-5 h-5 mx-2" />
                <span >اتصل الآن</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-[#0d64ab] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                      <span className="text-xs font-bold text-white">👤</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">+2000 عميل راضٍ</span>
              </div>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 تقييم</span>
              </div>
            </div>
          </div>

          {/* Services Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-[16px] border border-gray-200 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-300"
              >
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className={`w-14 h-14 ${service.color} rounded-[16px] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mx-3 group-hover:scale-110`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold text-lg mb-1">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
