'use client'

import { useState, useEffect } from 'react'
import { PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState<string | null>(null)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const buttons = [
    {
      id: 'whatsapp',
      href: 'https://wa.me/966507961706',
      icon: ChatBubbleLeftRightIcon,
      label: 'واتساب',
      ariaLabel: 'تواصل معنا عبر واتساب',
      bgColor: '#0d64ab',
      hoverColor: '#0a5a9a',
      textColor: '#0d64ab'
    },
    {
      id: 'phone',
      href: 'tel:0507961706',
      icon: PhoneIcon,
      label: 'اتصل الآن',
      ariaLabel: 'اتصل بنا',
      bgColor: '#05ccca',
      hoverColor: '#04b8b6',
      textColor: '#05ccca'
    }
  ]

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
    >
      <div className="flex flex-col space-y-3">
        {buttons.map((button, index) => {
          const IconComponent = button.icon
          return (
            <div
              key={button.id}
              className="relative group"
              onMouseEnter={() => setIsHovered(button.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <a
                href={button.href}
                className={`
                  w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg transition-all duration-300 ease-out
                  transform hover:scale-110 hover:shadow-2xl
                  flex items-center justify-center
                  relative overflow-hidden
                  ${isHovered === button.id ? 'ring-4 ring-white/20' : ''}
                `}
                style={{
                  backgroundColor: button.bgColor,
                  boxShadow: isHovered === button.id
                    ? `0 10px 25px ${button.bgColor}40`
                    : '0 4px 15px rgba(0,0,0,0.15)'
                }}
                aria-label={button.ariaLabel}
              >
                {/* Background glow effect */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${button.hoverColor}40 0%, transparent 70%)`
                  }}
                />

                {/* Icon */}
                <IconComponent
                  className="w-6 h-6 text-white relative z-10 transition-transform duration-300 group-hover:scale-110"
                />

                {/* Pulse animation for phone button */}
                {button.id === 'phone' && (
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: button.bgColor }} />
                )}
              </a>

              {/* Tooltip */}
              <div
                className={`
                  absolute right-16 top-1/2 -translate-y-1/2
                  bg-white px-4 py-2 rounded-lg shadow-lg
                  transition-all duration-300 ease-out
                  whitespace-nowrap z-20
                  ${isHovered === button.id
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-2 pointer-events-none'
                  }
                `}
                style={{ color: button.textColor }}
              >
                <span className="text-sm font-semibold">{button.label}</span>

                {/* Tooltip arrow */}
                <div
                  className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Decorative background circle */}
      <div
        className="absolute -inset-4 rounded-full opacity-5 pointer-events-none"
        style={{ backgroundColor: '#0d64ab' }}
      />
    </div>
  )
}
