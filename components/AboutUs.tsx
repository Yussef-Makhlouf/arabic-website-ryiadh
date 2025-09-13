import { TrophyIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />
      
      {/* Animated Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 relative">
            عن شركة لمسة للنظافة
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#0d64ab]" />
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            نحن شركة رائدة في مجال خدمات النظافة والتعقيم في الرياض، نقدم حلولاً شاملة ومبتكرة لجميع احتياجات النظافة
          </p>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Vision */}
          <div className="group relative bg-white p-8 rounded-[16px] border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-[#0d64ab] rounded-[16px] transform rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0d64ab]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold mb-4 text-[#0d64ab]">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الشركة الرائدة في مجال خدمات النظافة والتعقيم في المملكة العربية السعودية، ونقدم خدمات عالية الجودة تلبي جميع احتياجات عملائنا
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative bg-white p-8 rounded-[16px] border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-[#05ccca] rounded-[16px] transform -rotate-3 opacity-10 group-hover:-rotate-6 transition-transform duration-300" />
            <div className="relative z-10">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#05ccca]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <h3 className="text-2xl font-bold mb-4 text-[#05ccca]">مهمتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                تقديم خدمات نظافة وتعقيم احترافية ومبتكرة باستخدام أحدث التقنيات ومواد صديقة للبيئة لضمان بيئة نظيفة وآمنة
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="group relative bg-white p-8 rounded-[16px] border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-[#0d64ab] rounded-[16px] transform rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-[#0d64ab]">قيمنا</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2" />
                  <span className="text-gray-600">الجودة والتميز</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2" />
                  <span className="text-gray-600">الموثوقية والأمانة</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2" />
                  <span className="text-gray-600">الابتكار والتطوير</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2" />
                  <span className="text-gray-600">رضا العملاء</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#0d64ab]/10 rounded-xl border border-[#0d64ab]/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#0d64ab]/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrophyIcon className="w-8 h-8 text-[#0d64ab]" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">+5000</h4>
            <p className="text-gray-600">عميل راضٍ</p>
          </div>

          <div className="text-center p-6 bg-[#05ccca]/10 rounded-xl border border-[#05ccca]/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#05ccca]/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <UsersIcon className="w-8 h-8 text-[#05ccca]" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">+50</h4>
            <p className="text-gray-600">فني متخصص</p>
          </div>

          <div className="text-center p-6 bg-[#0d64ab]/10 rounded-xl border border-[#0d64ab]/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-[#0d64ab]/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <SparklesIcon className="w-8 h-8 text-[#0d64ab]" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">+10</h4>
            <p className="text-gray-600">سنوات خبرة</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}