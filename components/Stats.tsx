import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function Stats() {
  const stats = [
    {
      number: '5000+',
      label: 'عميل راضٍ',
      trend: '+15%',
      description: 'زيادة في عدد العملاء الراضين'
    },
    {
      number: '50+',
      label: 'فني متخصص',
      trend: '+8%',
      description: 'فريق متخصص ومدرب'
    },
    {
      number: '10+',
      label: 'سنوات خبرة',
      trend: '+2',
      description: 'خبرة طويلة في المجال'
    },
    {
      number: '24/7',
      label: 'خدمة متاحة',
      trend: '100%',
      description: 'خدمة متاحة على مدار الساعة'
    }
  ]

  return (
    <section className="relative py-24 bg-[#0d64ab] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10" />
      
      {/* Animated Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            إحصائيات شركة لمسة للنظافة
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            أرقام تتحدث عن نجاحنا وثقة عملائنا في خدماتنا المتميزة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-white/90 text-lg font-semibold">
                  {stat.label}
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-2 space-x-reverse text-white/80">
                <ArrowUpIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{stat.trend}</span>
              </div>
              
              <p className="text-white/70 text-sm mt-3">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              لماذا تختار شركة لمسة للنظافة؟
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-white/90">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>خدمة 24/7 متاحة</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>فريق مدرب ومتخصص</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>مواد آمنة وصديقة للبيئة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
