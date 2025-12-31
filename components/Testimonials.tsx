import { StarIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'محمد الرشيد',
      role: 'صاحب فيلا في حي النرجس',
      quote: "خدمة عزل الفوم ممتازة! فريق العمل محترف جداً واستخدموا مواد عالية الجودة. سطح منزلي أصبح معزولاً تماماً ولاحظت فرق كبير في درجة الحرارة.",
      rating: 5
    },
    {
      id: 2,
      name: 'فهد السويلم',
      role: 'مدير شركة عقارية',
      quote: "نتعامل معهم منذ سنتين لعزل مبانينا. خدمة موثوقة وضمان شامل والتزام تام بالمواعيد. أنصح بهم بشدة.",
      rating: 5
    },
    {
      id: 3,
      name: 'سعاد المطيري',
      role: 'صاحبة منزل في الخرج',
      quote: "كشف تسربات المياه كان دقيقاً جداً! حددوا مكان التسرب بدون تكسير ووفروا علي الكثير. سعر مناسب وخدمة احترافية.",
      rating: 5
    },
    {
      id: 4,
      name: 'خالد العتيبي',
      role: 'صاحب عمارة سكنية',
      quote: "عزلوا لي سطح العمارة كاملة بالفوم والنتيجة رائعة. لاحظت انخفاض ملحوظ في فاتورة الكهرباء وضمان 10 سنوات.",
      rating: 5
    },
  ]

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />

      {/* Animated Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            ماذا يقول عملاؤنا عن خدمات العزل
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            آراء عملائنا الكرام الذين وثقوا بخدماتنا في عزل الأسطح والمباني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* User Info */}
              <div className="flex flex-col items-center">
                <UserCircleIcon className="w-12 h-12 text-[#0d64ab] mb-2" />
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
