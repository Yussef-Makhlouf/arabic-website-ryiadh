import Link from 'next/link'
import { ShieldCheckIcon, ClockIcon, CheckCircleIcon, StarIcon, PhoneIcon, MapPinIcon, BoltIcon, FingerPrintIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const benefits = [
    'ضمان شامل يصل إلى 15 عاماً',
    'فريق هندسي معتمد ومحترف',
    'أحدث تقنيات العزل العالمية',
    'أسعار تنافسية مع جودة عالية'
  ]

  const trustIndicators = [
    { number: '+15', label: 'عاماً من الخبرة' },
    { number: '+2000', label: 'مشروع ناجح' },
    { number: '100%', label: 'رضا العملاء' },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-28 pb-16 lg:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-50/50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0d64ab]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#05ccca]/5 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="text-right space-y-8 animate-slideInFromRight">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-white border border-gray-200 shadow-sm px-4 py-1.5 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700">الشركة الرائدة في مجال العوازل</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                الحل الأمثل لحماية مبناك مع
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0d64ab] to-[#05ccca]">
                  أيقونة العزل بالرياض
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                نقدم خدمات <strong>عزل الأسطح والمباني</strong> بأعلى معايير الجودة العالمية. متخصصون في <strong>عزل الفوم البولي يوريثان</strong>، <strong>العزل المائي والحراري</strong>، و<strong>عزل الأسطح المبلطة والشينكو</strong>. حماية تدوم لسنوات مع ضمان حقيقي معتمد.
              </p>
            </div>

            {/* Specialized Services Tags */}
            <div className="flex flex-wrap gap-3">
              {['عزل فوم', 'عزل مائي', 'عزل حراري', 'عزل مبلط', 'عزل شينكو', 'عزل اسطح'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg border border-gray-200">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 space-x-reverse bg-white/60 p-3 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircleIcon className="w-5 h-5 text-[#0d64ab] flex-shrink-0 ml-2" />
                  <span className="text-sm font-medium text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="tel:0507961706"
                className="flex items-center justify-center gap-2 bg-[#0d64ab] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#0a4d8c] transition-all duration-300 shadow-lg shadow-[#0d64ab]/30 hover:-translate-y-1"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>اتصل الآن للمعاينة</span>
              </Link>
              <Link
                href="https://wa.me/966507961706"
                className="flex items-center justify-center gap-2 bg-white text-[#0d64ab] border-2 border-[#0d64ab]/10 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1"
              >
                <ShieldCheckIcon className="w-5 h-5" />
                <span>طلب عرض سعر واتساب</span>
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="flex items-center gap-8 pt-6 border-t border-gray-100">
              {trustIndicators.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-[#0d64ab]">{stat.number}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative hidden lg:block h-full min-h-[600px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0d64ab]/20 to-[#05ccca]/20 rounded-full blur-3xl animate-pulse"></div>

            {/* Main Image Container */}
            <div className="relative z-10 grid grid-cols-2 gap-6 p-4">
              <div className="space-y-6 mt-12">
                <div className="bg-white p-6 rounded-2xl shadow-xl animate-float">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-[#0d64ab]">
                    <BoltIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">عزل فوم</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">أحدث تقنيات العزل الحراري والمائي المزدوج للأسطح.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl animate-float-delayed">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-[#05ccca]">
                    <FingerPrintIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">عزل الأسطح</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">عزل حراري ومائي للأسطح المبلطة والخرسانية.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-[#0d64ab] p-6 rounded-2xl shadow-xl text-white transform translate-y-8">
                  <StarIcon className="w-12 h-12 mb-4 text-yellow-400" />
                  <h3 className="font-bold text-2xl mb-2">15+</h3>
                  <p className="text-sm text-white/90">سنة من الخبرة والتميز في مجال العوازل بالرياض</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">ضمان حقيقي</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">نقدم شهادة ضمان معتمدة على جميع أعمال العزل.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
