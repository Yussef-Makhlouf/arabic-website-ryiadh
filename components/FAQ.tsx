'use client'

import { useState } from 'react'
import { QuestionMarkCircleIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'ما هي الخدمات التي تقدمونها؟',
      answer: 'نقدم مجموعة شاملة من خدمات النظافة والتعقيم تشمل تنظيف المنازل، تنظيف المكاتب، تنظيف السجاد، مكافحة الحشرات، والتعقيم الشامل.'
    },
    {
      question: 'هل الخدمة متاحة على مدار الساعة؟',
      answer: 'نعم، خدماتنا متاحة 24/7 لتلبية احتياجاتكم في أي وقت. يمكنكم التواصل معنا على الرقم 0547910859.'
    },
    {
      question: 'ما هي المواد المستخدمة في التنظيف؟',
      answer: 'نستخدم مواد آمنة وصديقة للبيئة ومطابقة للمواصفات الصحية السعودية. جميع المواد معتمدة من الجهات المختصة.'
    },
    {
      question: 'هل تقدمون ضمان على الخدمات؟',
      answer: 'نعم، نقدم ضمان 100% على جميع خدماتنا. إذا لم تكونوا راضين عن الخدمة، سنقوم بإعادتها مجاناً.'
    },
    {
      question: 'ما هي المناطق التي تخدمونها؟',
      answer: 'نقدم خدماتنا في جميع أنحاء الرياض وجميع الأحياء والمناطق المجاورة.'
    },
    {
      question: 'كيف يمكنني حجز موعد؟',
      answer: 'يمكنكم حجز موعد عبر الاتصال بنا على الرقم 0547910859 أو عبر واتساب، وسنقوم بتأكيد الموعد معكم.'
    },
    {
      question: 'هل الفريق مدرب ومتخصص؟',
      answer: 'نعم، جميع أعضاء فريقنا مدربون ومتخصصون في مجال النظافة والتعقيم، ويخضعون لدورات تدريبية مستمرة.'
    },
    {
      question: 'ما هي أسعار الخدمات؟',
      answer: 'أسعارنا تنافسية وتختلف حسب نوع الخدمة وحجم المكان. اتصلوا بنا للحصول على عرض سعر مجاني ومخصص.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-5" />
      
      {/* Animated Shapes */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#0d64ab]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-[#0d64ab]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            الأسئلة الشائعة
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا. إذا لم تجد إجابة لسؤالك، لا تتردد في التواصل معنا.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-[#0d64ab]/5 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <QuestionMarkCircleIcon className="w-5 h-5 text-[#0d64ab] flex-shrink-0" />
                    <span className="font-semibold text-gray-800 text-lg">{faq.question}</span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#0d64ab] flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-[#0d64ab] flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#0d64ab] rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              لم تجد إجابة لسؤالك؟
            </h3>
            <p className="text-white/90 mb-6">
              فريقنا متاح على مدار الساعة للإجابة على جميع استفساراتكم
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0547910859"
                className="bg-white text-[#0d64ab] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                اتصل بنا الآن
              </a>
              <a
                href="https://wa.me/966547910859"
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
