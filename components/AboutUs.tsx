import { ShieldCheckIcon, TrophyIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0   opacity-5" />

      {/* Animated Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800 relative">
            عن شركة عزل اسطح الرياض
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#0d64ab]" />
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            شركة عزل اسطح بالرياض وعزل اسطح بالخرج متخصصة في تقديم أفضل عوازل للمباني. نقدم عازل مائي للأسطح، عازل أسمنتي، عزل فوم للأسطح، وكشف تسربات المياه. نخدم جميع مناطق الرياض بما فيها شمال الرياض، معتمدون من الهيئة السعودية للمهندسين، بخبرة تزيد عن 15 عامًا وضمان شامل.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-[#0d64ab]/5 rounded-xl border border-[#0d64ab]/10">
            <div className="w-14 h-14 bg-[#0d64ab] rounded-xl flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-[#0d64ab] mb-1">+15</h4>
            <p className="text-gray-600 text-sm">سنة خبرة</p>
          </div>
          <div className="text-center p-6 bg-[#05ccca]/5 rounded-xl border border-[#05ccca]/10">
            <div className="w-14 h-14 bg-[#05ccca] rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-[#05ccca] mb-1">+2000</h4>
            <p className="text-gray-600 text-sm">مشروع منجز</p>
          </div>
          <div className="text-center p-6 bg-[#0d64ab]/5 rounded-xl border border-[#0d64ab]/10">
            <div className="w-14 h-14 bg-[#0d64ab] rounded-xl flex items-center justify-center mx-auto mb-4">
              <UserGroupIcon className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-[#0d64ab] mb-1">+50</h4>
            <p className="text-gray-600 text-sm">فني متخصص</p>
          </div>
          <div className="text-center p-6 bg-[#05ccca]/5 rounded-xl border border-[#05ccca]/10">
            <div className="w-14 h-14 bg-[#05ccca] rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-[#05ccca] mb-1">10</h4>
            <p className="text-gray-600 text-sm">سنوات ضمان</p>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="group relative bg-white p-8 rounded-[16px] border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-[#0d64ab] rounded-[16px] transform rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0d64ab]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-2xl font-bold mb-4 text-[#0d64ab]">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الشركة الرائدة في مجال عزل الأسطح والمباني في المملكة العربية السعودية، ونقدم حلول عزل متكاملة بأعلى معايير الجودة والسلامة.
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
                تقديم خدمات عزل احترافية باستخدام أحدث التقنيات ومواد عالية الجودة لحماية المباني من التسربات والحرارة مع ضمان شامل.
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
                  <span className="text-gray-600">الجودة والإتقان</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2" />
                  <span className="text-gray-600">الالتزام بالمواعيد</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2" />
                  <span className="text-gray-600">الأمانة والمصداقية</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="w-2 h-2 bg-[#0d64ab] rounded-full mx-2" />
                  <span className="text-gray-600">رضا العملاء</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-[#0d64ab]/5 px-8 py-4 rounded-2xl border border-[#0d64ab]/10">
            <ShieldCheckIcon className="w-8 h-8 text-[#0d64ab]" />
            <div className="text-right">
              <p className="text-[#0d64ab] font-bold text-lg">شركة معتمدة</p>
              <p className="text-gray-600 text-sm">من الهيئة السعودية للمهندسين</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}