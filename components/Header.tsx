"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const services = [
    { name: 'عزل فوم للأسطح', href: '/services/foam-insulation' },
    { name: 'عزل مائي للأسطح', href: '/services/waterproof-insulation' },
    { name: ' عزل الأسطح المبلطة بالرياض ', href: '/services/tiled-roof-insulation' },
    { name: 'عزل شينكو ومستودعات', href: '/services/shincko-insulation' },
  ];

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'المدونة', href: '/blog' },
    { name: 'الأسئلة الشائعة', href: '/faq' },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
        ? "bg-white/80 backdrop-blur-xl border-gray-200/50 shadow-sm py-2"
        : "bg-white/60 backdrop-blur-lg border-transparent py-3 md:py-4"
        }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 relative z-50 shrink-0">
            <div className={`relative overflow-hidden rounded-full border-2 border-white/50 shadow-sm transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-11 h-11 md:w-[50px] md:h-[50px]'}`}>
              <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0d64ab] to-[#0a4d8c] ${scrolled ? 'text-lg' : 'text-lg md:text-2xl'}`}>
                شركة أيقونة العزل
              </span>
              <span className="text-[10px] md:text-xs text-gray-500 hidden sm:block">عزل اسطح وفوم بالرياض</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLink href="/" active={pathname === "/"}>الرئيسية</NavLink>
            <NavLink href="/about" active={pathname === "/about"}>من نحن</NavLink>

            <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className={`flex items-center gap-1 font-medium py-2 ${pathname.startsWith('/services') ? 'text-[#0d64ab]' : 'text-gray-700 hover:text-[#0d64ab]'}`}>
                الخدمات
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <div className={`absolute top-full right-0 pt-4 w-72 transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2">
                  <div className="px-4 py-3 bg-gray-50 rounded-xl mb-2 flex justify-between">
                    <span className="text-xs font-bold text-gray-400">خدماتنا</span>
                    <Link href="/services" className="text-xs text-[#0d64ab] font-medium hover:underline">عرض الكل</Link>
                  </div>
                  {services.map((service, i) => (
                    <Link key={i} href={service.href} className="block px-4 py-3 rounded-xl text-sm text-gray-600 hover:text-[#0d64ab] hover:bg-[#0d64ab]/5 font-medium">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/blog" active={pathname.startsWith("/blog")}>المدونة</NavLink>
            <NavLink href="/faq" active={pathname === "/faq"}>الأسئلة الشائعة</NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>اتصل بنا</NavLink>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link href="tel:0507961706" className={`flex items-center gap-2 bg-[#0d64ab] text-white rounded-full font-bold shadow-lg ${scrolled ? 'px-3 py-2' : 'px-3 py-2 md:px-5 md:py-2.5'}`}>
              <PhoneIcon className="w-4 h-4 animate-pulse" />
              <span className="hidden md:inline">0507961706</span>
              <span className="md:hidden text-xs">اتصال</span>
            </Link>

            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2.5 text-gray-700 bg-gray-100 rounded-xl" aria-label="القائمة">
              <div className="flex flex-col gap-1.5 w-5">
                <span className="block w-full h-0.5 bg-current rounded-full"></span>
                <span className="block w-3 h-0.5 bg-current rounded-full"></span>
                <span className="block w-4 h-0.5 bg-current rounded-full"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ============ MOBILE MENU ============ */}
      {isMenuOpen && (
        <div
          className="fixed lg:hidden"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            width: '100vw',
            height: '100vh',
          }}
        >
          {/* Overlay */}
          <div
            className="bg-black/50 backdrop-blur-sm"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className="bg-white shadow-2xl"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '320px',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >

            {/* Header - Fixed */}
            <div
              className="border-b border-gray-100 bg-gradient-to-l from-[#0d64ab]/5 to-white"
              style={{
                padding: '16px',
                flexShrink: 0,
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow ring-2 ring-white">
                    <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">القائمة الرئيسية</p>
                    <p className="text-[10px] text-gray-500"> أيقونة العزل بالرياض</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-red-500 rounded-lg transition-colors group"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-500 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Navigation Links - Scrollable */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
              }}
            >
              <div className="space-y-2">
                {/* Regular Links - First 2 */}
                {navLinks.slice(0, 2).map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block p-4 rounded-xl font-semibold text-base transition-all ${pathname === link.href
                      ? 'bg-[#0d64ab] text-white shadow-md'
                      : 'text-gray-700 bg-gray-50 hover:bg-gray-100'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Services Accordion */}
                <div className="rounded-xl overflow-hidden border border-gray-100">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full p-4 flex items-center justify-between font-semibold text-base transition-all ${isServicesOpen || pathname.startsWith('/services')
                      ? 'bg-[#0d64ab] text-white'
                      : 'text-gray-700 bg-gray-50'
                      }`}
                  >
                    <span>الخدمات</span>
                    <ChevronDownIcon className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isServicesOpen && (
                    <div className="bg-white p-2 space-y-1">
                      <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block p-3 rounded-lg text-sm font-medium text-[#0d64ab] bg-[#0d64ab]/5 hover:bg-[#0d64ab]/10"
                      >
                        ⭐ عرض جميع الخدمات
                      </Link>
                      {services.map((service, i) => (
                        <Link
                          key={i}
                          href={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block p-3 rounded-lg text-sm transition-colors ${pathname === service.href
                            ? 'text-[#0d64ab] bg-[#0d64ab]/10 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Remaining Links */}
                {navLinks.slice(2).map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block p-4 rounded-xl font-semibold text-base transition-all ${pathname === link.href || (link.href === '/blog' && pathname.startsWith('/blog'))
                      ? 'bg-[#0d64ab] text-white shadow-md'
                      : 'text-gray-700 bg-gray-50 hover:bg-gray-100'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer CTAs - Fixed */}
            <div
              className="border-t border-gray-100 bg-gray-50"
              style={{
                padding: '16px',
                flexShrink: 0,
              }}
            >
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-3 text-center border border-gray-100">
                  <p className="text-[10px] text-gray-400 mb-1">تواصل معنا</p>
                  <p className="text-lg font-bold text-gray-800" dir="ltr">0507961706</p>
                </div>

                <Link
                  href="tel:0507961706"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#0d64ab] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-[0.98]"
                >
                  <PhoneIcon className="w-5 h-5" />
                  اتصال مباشر
                </Link>

                <Link
                  href="https://wa.me/966507961706"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  تواصل واتساب
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link href={href} className={`relative py-2 font-medium transition-colors ${active ? 'text-[#0d64ab]' : 'text-gray-700 hover:text-[#0d64ab]'}`}>
      {children}
      <span className={`absolute bottom-0 right-0 h-0.5 bg-[#0d64ab] transition-all ${active ? 'w-full' : 'w-0'}`} />
    </Link>
  );
}
