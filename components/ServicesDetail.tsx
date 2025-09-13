import Image from 'next/image'
import { ExclamationTriangleIcon, SparklesIcon, ShieldCheckIcon, CloudIcon, HomeIcon, BuildingOfficeIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ServicesDetail() {
  const services = [
    {
      id: 'pest-control',
      icon: ExclamationTriangleIcon,
      title: 'مكافحة الحشرات في الرياض',
      subtitle: 'حماية شاملة من الحشرات الضارة',
      description: 'نقدم خدمات مكافحة الحشرات المتخصصة في الرياض باستخدام أحدث التقنيات والمواد الآمنة. نضمن لكم بيئة خالية من الحشرات الضارة مع الحفاظ على سلامة أسرتكم.',
      features: [
        'مكافحة الصراصير والنمل الأبيض',
        'مكافحة الفئران والقوارض',
        'مكافحة البعوض والذباب',
        'استخدام مواد آمنة ومصرح بها',
        'ضمان النتائج لمدة 6 أشهر',
        'خدمة ما بعد المكافحة'
      ],
      process: [
        'فحص شامل للمكان',
        'تحديد نوع الحشرات',
        'وضع خطة مكافحة مخصصة',
        'تطبيق العلاج المناسب',
        'متابعة النتائج'
      ],
      image: '/home-cleaning-riyadh-guide.png'
    },
    {
      id: 'carpet-cleaning',
      icon: SparklesIcon,
      title: 'تنظيف الموكيت في الرياض',
      subtitle: 'تنظيف احترافي للسجاد والموكيت',
      description: 'خدمات تنظيف الموكيت والسجاد المتخصصة في الرياض باستخدام معدات متقدمة ومواد تنظيف عالية الجودة. نزيل البقع الصعبة والروائح مع الحفاظ على جودة الألياف.',
      features: [
        'تنظيف بالبخار العميق',
        'إزالة البقع الصعبة',
        'معالجة الروائح الكريهة',
        'حماية الألوان والألياف',
        'تجفيف سريع',
        'ضمان عدم التلف'
      ],
      process: [
        'فحص حالة السجاد',
        'إزالة الأتربة السطحية',
        'معالجة البقع الخاصة',
        'تنظيف بالبخار العميق',
        'تجفيف وتلميع'
      ],
      image: '/carpet-cleaning-guide.avif'
    },
    {
      id: 'disinfection',
      icon: ShieldCheckIcon,
      title: 'التعقيم الشامل في الرياض',
      subtitle: 'تعقيم متقدم لضمان الصحة والسلامة',
      description: 'خدمات التعقيم الشامل في الرياض باستخدام تقنيات متقدمة مثل الأشعة فوق البنفسجية والمواد المعقمة عالية الفعالية. نضمن بيئة صحية وآمنة لكم ولعائلاتكم.',
      features: [
        'تعقيم بالأشعة فوق البنفسجية',
        'معقمات عالية التركيز',
        'تعقيم جميع الأسطح',
        'تقارير مفصلة للتعقيم',
        'شهادات صحية',
        'حماية من الفيروسات والبكتيريا'
      ],
      process: [
        'تقييم احتياجات التعقيم',
        'تحضير المواد والمعدات',
        'تعقيم شامل للمكان',
        'تركيز على النقاط الحساسة',
        'إصدار تقرير التعقيم'
      ],
      image: '/cleaning-services.png'
    },
    {
      id: 'tank-cleaning',
      icon: CloudIcon,
      title: 'تنظيف الخزانات في الرياض',
      subtitle: 'تنظيف وتعقيم خزانات المياه',
      description: 'خدمات تنظيف وتعقيم خزانات المياه في الرياض باستخدام مواد آمنة ومطابقة للمواصفات الصحية السعودية. نضمن مياه نظيفة وآمنة للاستهلاك.',
      features: [
        'تنظيف شامل للخزانات',
        'تعقيم بمواد مصرح بها',
        'إزالة الرواسب والطحالب',
        'فحص جودة المياه',
        'تقارير صحية مفصلة',
        'ضمان جودة المياه'
      ],
      process: [
        'إفراغ الخزان',
        'تنظيف الجدران والأرضية',
        'إزالة الرواسب',
        'تعقيم شامل',
        'إعادة ملء المياه',
        'فحص الجودة'
      ],
      image: '/carpet-cleaning-guide.avif'
    },
    {
      id: 'office-cleaning',
      icon: BuildingOfficeIcon,
      title: 'تنظيف المكاتب في الرياض',
      subtitle: 'تنظيف احترافي للمكاتب والشركات',
      description: 'خدمات تنظيف المكاتب والشركات في الرياض مع جدولة مرنة تناسب ساعات العمل. نعمل في المساء أو العطلات لتجنب إزعاج الموظفين.',
      features: [
        'تنظيف يومي وأسبوعي',
        'تنظيف المكاتب والكراسي',
        'تنظيف المطبخ والحمامات',
        'إزالة الأتربة والغبار',
        'تنظيف النوافذ والزجاج',
        'خدمة 24/7 متاحة'
      ],
      process: [
        'تقييم احتياجات المكتب',
        'وضع جدول تنظيف مناسب',
        'تنظيف شامل للمكان',
        'تركيز على المناطق العامة',
        'متابعة الجودة'
      ],
      image: '/cleaning-services.png'
    },
    {
      id: 'home-cleaning',
      icon: HomeIcon,
      title: 'تنظيف المنازل في الرياض',
      subtitle: 'تنظيف شامل للمنازل والفيلات',
      description: 'خدمات تنظيف المنازل الشاملة في الرياض تشمل تنظيف المطبخ والحمامات والغرف وجميع مرافق المنزل. نضمن منزل نظيف ومريح لكم ولعائلاتكم.',
      features: [
        'تنظيف شامل للمنزل',
        'تنظيف المطبخ والحمامات',
        'تنظيف الغرف والغرف النوم',
        'تنظيف النوافذ والمرايا',
        'تنظيف الأرضيات والجدران',
        'خدمة تنظيف دورية'
      ],
      process: [
        'تقييم حجم المنزل',
        'تنظيف الغرف الرئيسية',
        'تنظيف المطبخ والحمامات',
        'تنظيف النوافذ والمرايا',
        'تنظيف الأرضيات',
        'فحص نهائي للجودة'
      ],
      image: '/carpet-cleaning-guide.avif'
    }
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            خدمات النظافة المتخصصة في الرياض
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات النظافة المتخصصة في الرياض باستخدام أحدث التقنيات ومواد صديقة للبيئة. 
            اكتشف خدماتنا التفصيلية التي تضمن بيئة صحية وآمنة لكم ولعائلاتكم.
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
                  <div className="aspect-video rounded-[16px] overflow-hidden shadow-2xl border border-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 hover:scale-105 rounded-[16px]"
                    />
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
                href="tel:0592425077"
                className="bg-white text-[#0d64ab] px-8 py-4 rounded-[14px] font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                اتصل بنا الآن
              </a>
     
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
