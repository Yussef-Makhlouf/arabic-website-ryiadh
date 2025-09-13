import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      name: 'واتساب', 
      href: 'https://wa.me/966592425077', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    { 
      name: 'فيسبوك', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'تويتر', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'إنستغرام', 
      href: '#', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49zm-7.83 1.418c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
        </svg>
      )
    }
  ]

  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'عن الشركة', href: '#about' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'اتصل بنا', href: '#contact' }
  ]

  const services = [
    { name: 'تنظيف المنازل', href: '#services' },
    { name: 'تنظيف المكاتب', href: '#services' },
    { name: 'تنظيف السجاد', href: '#services' },
    { name: 'مكافحة الحشرات', href: '#services' },
    { name: 'التعقيم الشامل', href: '#services' }
  ]

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />
      
      {/* Animated Shapes */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <Image src="/lamsa.png" alt="شركة لمسة للنظافة" width={50} height={50} />
              <div>
                <h3 className="text-xl font-bold">شركة لــمـســة للــنــظــافــة</h3>
                <p className="text-gray-400 text-sm">خدمـات نـظـافــة احترافيــة</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              نقدم أفضل خدمـات النـظـافــة والتعقيم فـي الريــاض باستخدام أحدث التقنيات ومواد صديقة للبيئة.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#0d64ab] transition-all duration-300 flex items-center justify-center group"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300" dir='ltr'>
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0d64ab] group-hover:scale-150 transition-transform duration-300 mx-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0d64ab] group-hover:scale-150 transition-transform duration-300 mx-2" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#0d64ab] transition-all duration-300 mx-2">
                  <PhoneIcon className="w-4 h-4 text-[#0d64ab] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">الهاتف</p>
                  <a href="tel:0592425077" className="text-white hover:text-[#0d64ab] transition-colors duration-300">
                    0592425077
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#0d64ab] transition-all duration-300 mx-2">
                  <EnvelopeIcon className="w-4 h-4 text-[#0d64ab] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">البريد الإلكتروني</p>
                  <a href="mailto:info@lamsa-cleaning.com" className="text-white hover:text-[#0d64ab] transition-colors duration-300">
                    info@lamsa-cleaning.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#0d64ab] transition-all duration-300 mx-2">
                  <MapPinIcon className="w-4 h-4 text-[#0d64ab] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">العنوان</p>
                  <p className="text-white">الرياض، المملكة العربية السعودية</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#0d64ab] transition-all duration-300 mx-2">
                  <ClockIcon className="w-4 h-4 text-[#0d64ab] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">ساعات العمل</p>
                  <p className="text-white">24/7 متاح على مدار الساعة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} شركة لمسة للنظافة. جميع الحقوق محفوظة.
            </p>
     
          </div>
        </div>
      </div>
    </footer>
  )
}