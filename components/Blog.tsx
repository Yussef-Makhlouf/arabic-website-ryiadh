import Image from 'next/image'
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'أفضل أنواع عزل الأسطح في الرياض',
      excerpt: 'تعرف على أنواع عزل الأسطح المختلفة ومميزات كل نوع، وكيف تختار النوع المناسب لمبناك في الرياض.',
      image: '/best-practices-spray-foam-installation-on-roof.webp',
      category: 'عزل الأسطح',
      date: '2024-01-15',
      readTime: '5 دقائق'
    },
    {
      id: 2,
      title: 'الفرق بين العزل المائي وعزل الفوم',
      excerpt: 'دليلك الشامل لفهم الفرق بين العزل المائي وعزل الفوم ومتى تستخدم كل نوع لحماية مبناك.',
      image: '/thermcoat_termal_acoustic_insulation_pu_spray_foam_3.webp',
      category: 'مقارنات',
      date: '2024-01-10',
      readTime: '7 دقائق'
    },
    {
      id: 3,
      title: 'كيف تحمي منزلك من تسربات المياه',
      excerpt: 'نصائح عملية لحماية منزلك من تسربات المياه والرطوبة، وأهمية الكشف المبكر عن التسربات.',
      image: '/water-leak.avif',
      category: 'كشف التسربات',
      date: '2024-01-05',
      readTime: '6 دقائق'
    }
  ]

  return (
    <section id="blog" className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0   opacity-5" />

      {/* Animated Shapes */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-[#05ccca]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            مقالات ونصائح عن عزل الأسطح
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            اكتشف أحدث المقالات والنصائح حول عزل الأسطح والمباني لمساعدتك في حماية منزلك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image Placeholder */}
              {/* Image */}
              <div className="relative h-48 bg-[#0d64ab]/10 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#0d64ab] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('ar-SA')}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#0d64ab] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center space-x-2 space-x-reverse text-[#0d64ab] hover:text-[#0a5a9a] font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>اقرأ المزيد</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#0d64ab] rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              احصل على استشارة مجانية
            </h3>
            <p className="text-white/90 mb-6">
              تواصل معنا للحصول على نصائح مجانية حول عزل الأسطح والمباني
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0507961706"
                className="bg-white text-[#0d64ab] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                اتصل بنا الآن
              </a>
              <a
                href="https://wa.me/966507961706"
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                راسلنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}