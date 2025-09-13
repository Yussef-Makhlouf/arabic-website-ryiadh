"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
       <Image src="/lamsa.png" alt="logo" width={70} height={70}  />
      
            <div className="text-right">
              <span className="text-2xl font-bold text-[#0d64ab] block">
              لــمـســة للــنــظــافــة
              </span>
              <span className="text-xs text-gray-500 font-medium">خدمـات تـنـظـيف احترافيــة</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#0d64ab] transition-colors font-medium text-base relative group"
            >
              الرئيسية
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#0d64ab] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="#services"
              className="text-gray-700 hover:text-[#0d64ab] transition-colors font-medium text-base relative group"
            >
              خدماتنا
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#0d64ab] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="#about"
              className="text-gray-700 hover:text-[#0d64ab] transition-colors font-medium text-base relative group"
            >
              عن الشركة
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#0d64ab] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="#faq"
              className="text-gray-700 hover:text-[#0d64ab] transition-colors font-medium text-base relative group"
            >
              الأسئلة الشائعة
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#0d64ab] group-hover:w-full transition-all duration-300"></span>
            </Link>

     

            {/* CTA Button */}
            <Link
              href="tel:0592425077"
              className="bg-[#0d64ab] hover:bg-[#0a5a9a] text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              احصل على عرض مجاني
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-4">
              <Link
                href="/"
                className="block py-3 px-4 text-gray-700 hover:text-[#0d64ab] hover:bg-[#0d64ab]/10 rounded-lg transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>

              <Link
                href="#services"
                className="block py-3 px-4 text-gray-700 hover:text-[#0d64ab] hover:bg-[#0d64ab]/10 rounded-lg transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                خدماتنا
              </Link>

              <Link
                href="#about"
                className="block py-3 px-4 text-gray-700 hover:text-[#0d64ab] hover:bg-[#0d64ab]/10 rounded-lg transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                عن الشركة
              </Link>

              <Link
                href="#faq"
                className="block py-3 px-4 text-gray-700 hover:text-[#0d64ab] hover:bg-[#0d64ab]/10 rounded-lg transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                الأسئلة الشائعة
              </Link>

              <Link
                href="#contact"
                className="block py-3 px-4 text-gray-700 hover:text-[#0d64ab] hover:bg-[#0d64ab]/10 rounded-lg transition-colors font-medium text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>

              <div className="pt-4 border-t border-gray-200 mt-6">
                <Link
                  href="tel:0592425077"
                  className="block w-full bg-[#0d64ab] text-white py-4 px-6 rounded-xl hover:bg-[#0a5a9a] transition-colors font-semibold text-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  احصل على عرض مجاني
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
