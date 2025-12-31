'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

interface FAQItem {
    question: string
    answer: string
}

interface ServiceFAQProps {
    faqs: FAQItem[]
    serviceTitle?: string
}

export default function ServiceFAQ({ faqs, serviceTitle }: ServiceFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-12">
            <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-12 rounded-xl bg-[#0d64ab]/10 flex items-center justify-center">
                    <QuestionMarkCircleIcon className="w-7 h-7 text-[#0d64ab]" />
                </span>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">الأسئلة الشائعة</h2>
                    {serviceTitle && (
                        <p className="text-gray-500 text-sm">أسئلة متكررة حول {serviceTitle}</p>
                    )}
                </div>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                                ? 'border-[#0d64ab]/30 shadow-lg'
                                : 'border-gray-100 hover:border-gray-200'
                            }`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-5 text-right"
                            aria-expanded={openIndex === index}
                        >
                            <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-[#0d64ab]' : 'text-gray-800'
                                }`}>
                                {faq.question}
                            </span>
                            <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${openIndex === index
                                    ? 'bg-[#0d64ab] text-white rotate-180'
                                    : 'bg-gray-100 text-gray-500'
                                }`}>
                                <ChevronDownIcon className="w-5 h-5" />
                            </span>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                            }`}>
                            <div className="px-5 pb-5 pt-0">
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Schema Markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </section>
    )
}
