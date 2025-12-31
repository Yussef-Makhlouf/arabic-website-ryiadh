import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, BriefcaseIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [

    {
      name: 'فيسبوك',
      href: 'https://www.facebook.com/people/%D8%A7%D9%8A%D9%82%D9%88%D9%86%D8%A9-%D8%A7%D9%84%D8%B9%D8%B2%D9%84/61577789109248/?rdid=neiz6gv4WQuHhMv7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Aw6pvAsz7%2F',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    },

    {
      name: 'إنستغرام',
      href: 'https://www.instagram.com/iconaelazll/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'تيك توك',
      href: 'https://www.tiktok.com/@iconaelazll?_t=ZS-8xflqHWkUZb&_r=1',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      )
    },
    {
      name: 'بروفايل الشركة',
      href: 'https://saqarelkian.com/%D8%A8%D9%88%D8%B1%D8%AA%D9%81%D9%88%D9%84%D9%8A%D9%88-%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9/',
      icon: <BriefcaseIcon className="w-5 h-5" />
    }
  ]

  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'المدن والأحياء', href: '#locations' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
    { name: 'اتصل بنا', href: '#contact' }
  ]

  const services = [
    { name: 'عزل فوم للأسطح', href: '#services' },
    { name: 'عزل مائي للأسطح', href: '#services' },

    { name: 'كشف تسربات المياه', href: '#services' },
    { name: 'عزل خزانات المياه', href: '#services' }
  ]

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0   opacity-5" />

      {/* Animated Shapes */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <Image src="/logo.jpg" alt="شركة عزل اسطح الرياض" width={50} height={50} />
              <div>
                <h3 className="text-xl font-bold">شركة عــزل اسطــح الريــاض</h3>
                <p className="text-gray-400 text-sm">خدمـات عـزل احترافيــة</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              شركة عزل اسطح بالرياض وعزل اسطح بالخرج متخصصة في تقديم أفضل عوازل للمباني. معتمدون من الهيئة السعودية للمهندسين بخبرة تزيد عن 15 عامًا.
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
                  <a href="tel:0574666444" className="text-white hover:text-[#0d64ab] transition-colors duration-300">
                    0574666444
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                {/* <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#0d64ab] transition-all duration-300 mx-2">
                  <EnvelopeIcon className="w-4 h-4 text-[#0d64ab] group-hover:text-white" />
                </div> */}
                {/* <div>
                  <p className="text-gray-400 text-sm">البريد الإلكتروني</p>
                  <a href="mailto:info@lamsa-clean.com" className="text-white hover:text-[#0d64ab] transition-colors duration-300">
                    info@lamsa-clean.com
                  </a>
                </div> */}
              </div>

              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#0d64ab] transition-all duration-300 mx-2">
                  <MapPinIcon className="w-4 h-4 text-[#0d64ab] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">العنوان</p>
                  <p className="text-white">الرياض والخرج، المملكة العربية السعودية</p>
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
              © {new Date().getFullYear()} شركة عزل اسطح الرياض. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm">
              تصميم و تطوير{' '}
              <a
                href="https://wa.me/966507961706"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-[#0d64ab] transition-colors duration-300"
              >
                AHMED ADHAM
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}