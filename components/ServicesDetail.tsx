import { ShieldCheckIcon, BeakerIcon, EyeIcon, CubeIcon, WrenchScrewdriverIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ServicesDetail() {
  const services = [
    {
      id: 'foam-insulation',
      icon: CubeIcon,
      title: 'عزل فوم للأسطح بالرياض',
      subtitle: 'عزل حراري ومائي بتقنية الفوم بولي يوريثان',
      description: 'نقدم خدمات عزل الفوم بولي يوريثان للأسطح في الرياض والخرج. يعتبر عزل الفوم من أفضل أنواع العزل لأنه يوفر عزل حراري ومائي في آن واحد، مع مقاومة عالية للعوامل الجوية وعمر افتراضي طويل.',
      features: [
        'عزل حراري ومائي معاً',
        'مقاومة لدرجات الحرارة العالية',
        'خفة الوزن على الأسطح',
        'مقاومة للحريق',
        'ضمان يصل إلى 10 سنوات',
        'توفير فاتورة الكهرباء حتى 50%'
      ],
      process: [
        'معاينة السطح وتحديد حالته',
        'تنظيف وتجهيز السطح',
        'رش الفوم بالسماكة المطلوبة',
        'التغطية بطبقة حماية',
        'فحص الجودة والتسليم'
      ],
      image: '/foam-insulation.jpg'
    },
    {
      id: 'waterproof-insulation',
      icon: ShieldCheckIcon,
      title: 'عزل مائي للأسطح بالرياض',
      subtitle: 'حماية شاملة من تسربات المياه والرطوبة',
      description: 'خدمات العزل المائي الاحترافي للأسطح في الرياض باستخدام أجود مواد العزل المائي. نضمن حماية كاملة من تسربات مياه الأمطار والرطوبة لحماية المبنى من التلف.',
      features: [
        'حماية من تسربات المياه',
        'مقاومة للأملاح والتآكل',
        'مرونة عالية تتحمل التمدد',
        'مواد صديقة للبيئة',
        'ضمان شامل على الخدمة',
        'مناسب لجميع أنواع الأسطح'
      ],
      process: [
        'فحص وتقييم السطح',
        'معالجة الشروخ والتصدعات',
        'تطبيق طبقة البرايمر',
        'تطبيق العزل المائي',
        'فحص واختبار العزل'
      ],
      image: '/waterproof-insulation.jpg'
    },
    {
      id: 'cement-insulation',
      icon: BeakerIcon,
      title: 'عازل أسمنتي بالرياض',
      subtitle: 'عزل متين وقوي للأسطح الخرسانية',
      description: 'خدمات العزل الأسمنتي للأسطح والخزانات في الرياض. يتميز العازل الأسمنتي بمتانته العالية ومقاومته للعوامل الجوية، وهو مثالي للأسطح الخرسانية والخزانات.',
      features: [
        'متانة وقوة عالية',
        'مقاومة للعوامل الجوية',
        'عمر افتراضي طويل',
        'سهولة الصيانة',
        'مناسب للخزانات',
        'معتمد صحياً'
      ],
      process: [
        'تنظيف السطح',
        'معالجة الشروخ',
        'تطبيق طبقة أساس',
        'رش العازل الأسمنتي',
        'تشطيب وحماية'
      ],
      image: '/cement-insulation.jpg'
    },
    {
      id: 'leak-detection',
      icon: EyeIcon,
      title: 'كشف تسربات المياه بالرياض',
      subtitle: 'كشف إلكتروني دقيق بأحدث الأجهزة',
      description: 'خدمات كشف تسربات المياه في الرياض باستخدام أحدث الأجهزة الإلكترونية والحرارية. نحدد مكان التسرب بدقة متناهية دون الحاجة للتكسير، مما يوفر الوقت والتكاليف.',
      features: [
        'كشف بدون تكسير',
        'أجهزة إلكترونية متقدمة',
        'دقة عالية في التحديد',
        'تقرير مفصل بالنتائج',
        'خدمة على مدار الساعة',
        'أسعار تنافسية'
      ],
      process: [
        'فحص أولي للمكان',
        'استخدام أجهزة الكشف',
        'تحديد مكان التسرب',
        'إصدار تقرير مفصل',
        'تقديم حلول الإصلاح'
      ],
      image: '/leak-detection.jpg'
    },
    {
      id: 'tank-insulation',
      icon: WrenchScrewdriverIcon,
      title: 'عزل خزانات المياه بالرياض',
      subtitle: 'عزل آمن صحياً للخزانات الأرضية والعلوية',
      description: 'خدمات عزل خزانات المياه في الرياض بمواد آمنة صحياً ومعتمدة. نضمن لكم مياه نظيفة وخالية من التلوث مع حماية الخزان من التسربات والتآكل.',
      features: [
        'مواد آمنة صحياً',
        'معتمد من وزارة الصحة',
        'خزانات أرضية وعلوية',
        'حماية من التسربات',
        'مقاومة البكتيريا',
        'ضمان شامل'
      ],
      process: [
        'تفريغ وتنظيف الخزان',
        'معاينة وتحديد المشاكل',
        'معالجة الشروخ',
        'تطبيق العزل الإيبوكسي',
        'فحص وتسليم الخزان'
      ],
      image: '/tank-insulation.jpg'
    }
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            خدمات عزل الأسطح المتخصصة في الرياض
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات عزل الأسطح والمباني في الرياض والخرج باستخدام أحدث التقنيات ومواد عالية الجودة.
            اكتشف خدماتنا التفصيلية التي تضمن حماية شاملة لمبناك.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="w-16 h-16 bg-[#0d64ab] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>

                  <h4 className="text-xl font-semibold text-[#0d64ab] mb-6">
                    {service.subtitle}
                  </h4>

                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-[#0d64ab] ml-2" />
                        مميزات الخدمة
                      </h5>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-[#0d64ab] rounded-full mt-2 ml-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <ClockIcon className="w-5 h-5 text-[#0d64ab] ml-2" />
                        خطوات العمل
                      </h5>
                      <ul className="space-y-2">
                        {service.process.map((step, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="w-6 h-6 bg-[#0d64ab] text-white rounded-full text-sm flex items-center justify-center ml-3 flex-shrink-0 font-semibold shadow-sm">
                              {idx + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="aspect-video rounded-[16px] overflow-hidden shadow-2xl border border-gray-100 bg-[#0d64ab]/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 bg-[#0d64ab]/20 rounded-full flex items-center justify-center">
                        <service.icon className="w-12 h-12 text-[#0d64ab]" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0d64ab]/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#05ccca]/10 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="bg-[#0d64ab] rounded-3xl p-12 text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-6">
              احصل على عرض سعر مجاني الآن
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتكم. فريقنا متاح على مدار الساعة لخدمتكم.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0500000000"
                className="bg-white text-[#0d64ab] px-8 py-4 rounded-[14px] font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                اتصل بنا الآن
              </a>
              <a
                href="https://wa.me/966500000000"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-[14px] font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
