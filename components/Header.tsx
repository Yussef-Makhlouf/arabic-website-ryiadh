"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
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
    { name: 'كشف تسربات المياه', href: '/services/leak-detection' },
    { name: 'عزل خزانات المياه', href: '/services/tank-insulation' },
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

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group relative z-50 shrink-0">
            <div className="flex flex-row items-center gap-2.5">
              <div className={`relative overflow-hidden rounded-full border-2 border-white/50 shadow-sm transition-all duration-300 ${scrolled ? 'w-[40px] h-[40px]' : 'w-[45px] h-[45px] md:w-[50px] md:h-[50px]'}`}>
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0d64ab] to-[#0a4d8c] transition-all duration-300 leading-tight ${scrolled ? 'text-lg' : 'text-lg md:text-2xl'}`}>
                  لمسة إبداع
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide hidden sm:block">عزل وكشف تسربات بالرياض</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLink href="/" active={pathname === "/"}>الرئيسية</NavLink>
            <NavLink href="/about" active={pathname === "/about"}>من نحن</NavLink>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors py-2 text-sm xl:text-base
                  ${pathname.startsWith('/services') ? 'text-[#0d64ab]' : 'text-gray-700 hover:text-[#0d64ab]'}
                `}
              >
                الخدمات
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full right-0 pt-4 w-72 transition-all duration-300 origin-top-right transform
                  ${isServicesOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}
                `}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-2">
                  <div className="px-4 py-3 bg-gray-50/50 rounded-xl mb-2 flex items-center justify-between group/link">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">خدماتنا</span>
                    <Link href="/services" className="text-xs text-[#0d64ab] font-medium hover:underline">عرض الكل</Link>
                  </div>

                  <div className="space-y-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-600 hover:text-[#0d64ab] hover:bg-[#0d64ab]/5 font-medium transition-all group"
                      >
                        <span>{service.name}</span>
                        <ChevronDownIcon className="w-4 h-4 text-gray-300 group-hover:text-[#0d64ab] rotate-90 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/blog" active={pathname.startsWith("/blog")}>المدونة</NavLink>
            <NavLink href="/faq" active={pathname === "/faq"}>الأسئلة الشائعة</NavLink>
            <NavLink href="/contact" active={pathname === "/contact"}>اتصل بنا</NavLink>
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="tel:0569131252"
              className={`flex items-center gap-2 bg-[#0d64ab] hover:bg-[#0a4d8c] text-white rounded-full transition-all duration-300 font-bold shadow-lg shadow-[#0d64ab]/20 hover:shadow-[#0d64ab]/40 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm
                ${scrolled ? 'px-3 py-2' : 'px-3 py-2 md:px-6 md:py-2.5'}
              `}
            >
              <PhoneIcon className={`animate-pulse ${scrolled ? 'w-4 h-4' : 'w-4 h-4 md:w-5 md:h-5'}`} />
              <span className={`hidden md:inline ${scrolled ? 'text-sm' : ''}`}>0569131252</span>
              <span className="md:hidden text-xs font-bold">اتصال</span>
            </Link>

            {/* Mobile Menu Button - Redesigned */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden relative z-50 p-2 -ml-2 text-gray-700 hover:text-[#0d64ab] hover:bg-gray-100/50 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Bars3Icon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Redesigned */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMenuOpen ? "visible" : "invisible pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) flex flex-col ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-5 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative rounded-full overflow-hidden border border-gray-100">
                <Image src="/logo.jpg" alt="Logo" fill className="object-cover" />
              </div>
              <span className="font-bold text-gray-800">القائمة</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent my-2"></div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto py-2 px-4 space-y-1">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)} icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}>
              الرئيسية
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)} icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
              من نحن
            </MobileNavLink>

            {/* Mobile Services Accordion */}
            <div className={`overflow-hidden transition-all duration-300 rounded-xl border ${isServicesOpen ? 'bg-gray-50/50 border-gray-100 mb-2' : 'border-transparent'}`}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center justify-between w-full p-3 font-medium rounded-xl transition-all ${isServicesOpen ? 'text-[#0d64ab]' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${isServicesOpen ? 'bg-[#0d64ab] text-white shadow-md shadow-[#0d64ab]/20' : 'bg-gray-100 text-gray-500'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </span>
                  <span>الخدمات</span>
                </div>
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-[#0d64ab]' : 'text-gray-400'}`} />
              </button>

              <div className={`grid transition-all duration-300 ease-in-out ${isServicesOpen ? 'grid-rows-[1fr] opacity-100 pb-2' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="pr-12 pl-4 space-y-1 pt-1">
                    <Link
                      href="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 py-2 px-3 text-sm font-medium text-[#0d64ab] bg-[#0d64ab]/5 rounded-lg mb-2"
                    >
                      <span>عرض جميع الخدمات</span>
                      <svg className="w-3 h-3 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </Link>
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2.5 px-3 text-sm text-gray-500 hover:text-[#0d64ab] hover:bg-white rounded-lg transition-colors border-r-2 border-transparent hover:border-[#0d64ab]"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <MobileNavLink href="/blog" onClick={() => setIsMenuOpen(false)} icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>}>
              المدونة
            </MobileNavLink>
            <MobileNavLink href="/faq" onClick={() => setIsMenuOpen(false)} icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
              الأسئلة الشائعة
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)} icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}>
              اتصل بنا
            </MobileNavLink>
          </div>

          {/* Footer / Quick Actions */}
          <div className="p-5 bg-gray-50 border-t border-gray-100 space-y-3">
            <Link
              href="tel:0569131252"
              className="flex items-center justify-center gap-2 w-full bg-[#0d64ab] hover:bg-[#0a4d8c] text-white py-3.5 rounded-xl font-bold shadow-lg shadow-[#0d64ab]/20 active:scale-[0.98] transition-all"
            >
              <PhoneIcon className="w-5 h-5" />
              <span>اتصال مباشر</span>
            </Link>
            <Link
              href="https://wa.me/966569131252"
              className="flex items-center justify-center gap-2 w-full bg-white text-[#25D366] border border-[#25D366]/30 py-3.5 rounded-xl font-bold hover:bg-[#25D366]/5 active:scale-[0.98] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>واتساب</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// Helper Components
function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative py-2 font-medium transition-colors duration-300
        ${active ? 'text-[#0d64ab]' : 'text-gray-700 hover:text-[#0d64ab]'}
      `}
    >
      {children}
      <span className={`absolute bottom-0 right-0 h-0.5 bg-[#0d64ab] transition-all duration-300
        ${active ? 'w-full' : 'w-0 group-hover:w-full'}
      `} />
    </Link>
  );
}

function MobileNavLink({ href, onClick, children, icon }: { href: string; onClick: () => void; children: React.ReactNode; icon?: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 py-3 px-3 rounded-xl font-medium transition-all duration-200 group
        ${isActive
          ? 'bg-[#0d64ab] text-white shadow-md shadow-[#0d64ab]/20'
          : 'text-gray-600 hover:bg-gray-50 hover:text-[#0d64ab]'
        }
      `}
    >
      {icon && (
        <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-400 group-hover:text-[#0d64ab] group-hover:bg-[#0d64ab]/10'}`}>
          {icon}
        </span>
      )}
      <span>{children}</span>
      {!isActive && <svg className="w-4 h-4 mr-auto text-gray-300 group-hover:text-[#0d64ab] rotate-180 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>}
    </Link>
  );
}
