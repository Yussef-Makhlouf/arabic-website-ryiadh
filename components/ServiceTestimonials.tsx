import { StarIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

interface Testimonial {
    name: string
    location: string
    rating: number
    text: string
    service: string
    date?: string
}

interface ServiceTestimonialsProps {
    testimonials: Testimonial[]
    serviceTitle?: string
}

export default function ServiceTestimonials({ testimonials, serviceTitle }: ServiceTestimonialsProps) {
    return (
        <section className="py-12">
            <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-12 rounded-xl bg-[#0d64ab]/10 flex items-center justify-center">
                    <ChatBubbleLeftRightIcon className="w-7 h-7 text-[#0d64ab]" />
                </span>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">آراء العملاء</h2>
                    {serviceTitle && (
                        <p className="text-gray-500 text-sm">تقييمات عملائنا لخدمة {serviceTitle}</p>
                    )}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0d64ab] to-[#05ccca] flex items-center justify-center">
                                    <UserCircleIcon className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="relative">
                            <div className="absolute -top-2 -right-2 text-6xl text-[#0d64ab]/10 font-serif">"</div>
                            <p className="text-gray-600 leading-relaxed relative z-10 pr-4">
                                {testimonial.text}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-xs bg-[#0d64ab]/10 text-[#0d64ab] px-3 py-1 rounded-full font-medium">
                                {testimonial.service}
                            </span>
                            {testimonial.date && (
                                <span className="text-xs text-gray-400">{testimonial.date}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0d64ab]/5 to-[#05ccca]/5 px-6 py-3 rounded-full">
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-[#0d64ab] border-2 border-white flex items-center justify-center">
                                <UserCircleIcon className="w-6 h-6 text-white" />
                            </div>
                        ))}
                    </div>
                    <div className="text-right">
                        <span className="font-bold text-[#0d64ab]">+2000</span>
                        <span className="text-gray-600 text-sm mr-1">عميل راضٍ</span>
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-[#0d64ab]">4.9</span>
                        <StarIcon className="w-5 h-5 text-yellow-400" />
                    </div>
                </div>
            </div>
        </section>
    )
}
