'use client'

import { useState } from 'react'
import { QuestionMarkCircleIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'ما هو أفضل نوع عزل للأسطح في الرياض؟',
      answer: 'يعتبر عزل الفوم بولي يوريثان من أفضل أنواع العزل للأسطح في الرياض لأنه يوفر عزل حراري ومائي في آن واحد، ويتحمل درجات الحرارة العالية. كما أن العزل المائي الأسمنتي يعد خياراً ممتازاً للأسطح الخرسانية.'
    },
    {
      question: 'كم سنة ضمان على عزل الفوم؟',
      answer: 'نقدم ضمان يصل إلى 10 سنوات على عزل الفوم، ويشمل الضمان أي تسربات أو مشاكل في العزل. فريقنا متاح للصيانة الدورية وإصلاح أي مشاكل قد تظهر خلال فترة الضمان.'
    },
    {
      question: 'هل العزل يقلل فاتورة الكهرباء؟',
      answer: 'نعم، العزل الحراري الجيد يمكن أن يوفر من 30% إلى 50% من فاتورة الكهرباء. حيث يمنع انتقال الحرارة للداخل صيفاً ويحافظ على الدفء شتاءً، مما يقلل الحاجة لتشغيل المكيفات بشكل مستمر.'
    },
    {
      question: 'ما الفرق بين العزل المائي والعزل الحراري؟',
      answer: 'العزل المائي يحمي المبنى من تسربات المياه والرطوبة، بينما العزل الحراري يمنع انتقال الحرارة. عزل الفوم يوفر كلا النوعين معاً، أما العزل الأسمنتي فيوفر عزل مائي ممتاز مع عزل حراري متوسط.'
    },
    {
      question: 'كم تكلفة عزل الأسطح؟',
      answer: 'تختلف التكلفة حسب نوع العزل ومساحة السطح وحالته. عزل الفوم يتراوح بين 25-45 ريال للمتر المربع، والعزل المائي بين 20-35 ريال. اتصلوا بنا للحصول على عرض سعر مجاني ومخصص.'
    },
    {
      question: 'هل تخدمون منطقة الخرج؟',
      answer: 'نعم، نقدم جميع خدمات العزل في الخرج وجميع المناطق المحيطة. فريقنا متخصص ومجهز بالكامل لخدمة العملاء في الخرج بنفس جودة خدماتنا في الرياض.'
    },
    {
      question: 'كيف يتم كشف تسربات المياه؟',
      answer: 'نستخدم أحدث أجهزة الكشف الإلكترونية والحرارية لتحديد مكان التسرب بدقة عالية دون الحاجة للتكسير. تقنياتنا تكشف التسربات في الأنابيب والأسطح والخزانات بسرعة وكفاءة.'
    },
    {
      question: 'هل أنتم معتمدون من الهيئة السعودية للمهندسين؟',
      answer: 'نعم، شركتنا معتمدة من الهيئة السعودية للمهندسين، ونستخدم مواد معتمدة من الدفاع المدني والجهات المختصة. جميع فنيينا مدربون ومؤهلون.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0   opacity-5" />

      {/* Animated Shapes */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#0d64ab]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute right-20 bottom-20 w-64 h-64 bg-[#0d64ab]/5 rounded-full blur-2xl animate-float-delayed" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
            الأسئلة الشائعة عن عزل الأسطح
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            إجابات على أكثر الأسئلة شيوعاً حول خدمات عزل الأسطح والمباني. إذا لم تجد إجابة لسؤالك، لا تتردد في التواصل معنا.
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
              فريقنا متاح على مدار الساعة للإجابة على جميع استفساراتكم حول عزل الأسطح
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
