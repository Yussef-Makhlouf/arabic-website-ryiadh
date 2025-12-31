'use client'

import { useState } from 'react'
import { CheckIcon, XMarkIcon, StarIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface ServiceComparisonProps {
    currentService?: string
}

const services = [
    {
        slug: 'foam-insulation',
        name: 'عزل فوم',
        thermal: true,
        waterproof: true,
        fireResistant: true,
        warranty: '10 سنوات',
        priceRange: '25-45 ريال/م²',
        lifespan: '25+ سنة',
        installation: 'سريع (1-3 أيام)',
        energySaving: 'حتى 50%',
        maintenance: 'منخفضة',
        rating: 4.9,
        bestFor: 'الأسطح الكبيرة والمباني السكنية',
        popular: true
    },
    {
        slug: 'waterproof-insulation',
        name: 'عزل مائي',
        thermal: false,
        waterproof: true,
        fireResistant: false,
        warranty: '7 سنوات',
        priceRange: '20-35 ريال/م²',
        lifespan: '15+ سنة',
        installation: 'متوسط (2-4 أيام)',
        energySaving: 'حتى 20%',
        maintenance: 'متوسطة',
        rating: 4.8,
        bestFor: 'الأسطح المعرضة للأمطار',
        popular: false
    },

    {
        slug: 'leak-detection',
        name: 'كشف تسربات',
        thermal: false,
        waterproof: false,
        fireResistant: false,
        warranty: 'ضمان الدقة',
        priceRange: '150-500 ريال',
        lifespan: '-',
        installation: 'سريع (1-3 ساعات)',
        energySaving: '-',
        maintenance: '-',
        rating: 4.7,
        bestFor: 'المباني التي بها تسربات مياه',
        popular: false
    },
    {
        slug: 'tank-insulation',
        name: 'عزل خزانات',
        thermal: false,
        waterproof: true,
        fireResistant: false,
        warranty: '5 سنوات',
        priceRange: '300-800 ريال',
        lifespan: '10+ سنة',
        installation: 'سريع (1-2 يوم)',
        energySaving: '-',
        maintenance: 'منخفضة',
        rating: 4.8,
        bestFor: 'خزانات المياه الأرضية والعلوية',
        popular: false
    },
]

export default function ServiceComparison({ currentService }: ServiceComparisonProps) {
    const [selectedServices, setSelectedServices] = useState<string[]>(
        currentService
            ? [currentService, services.find(s => s.slug !== currentService)?.slug || '']
            : ['foam-insulation', 'waterproof-insulation']
    )

    const toggleService = (slug: string) => {
        if (selectedServices.includes(slug)) {
            if (selectedServices.length > 1) {
                setSelectedServices(selectedServices.filter(s => s !== slug))
            }
        } else {
            if (selectedServices.length < 3) {
                setSelectedServices([...selectedServices, slug])
            }
        }
    }

    const selectedServiceData = services.filter(s => selectedServices.includes(s.slug))

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        مقارنة خدمات العزل
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        قارن بين أنواع العزل المختلفة لاختيار الأنسب لاحتياجاتك
                    </p>
                </div>

                {/* Service Selection */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {services.map(service => (
                        <button
                            key={service.slug}
                            onClick={() => toggleService(service.slug)}
                            className={`px-4 py-2 rounded-full font-medium transition-all ${selectedServices.includes(service.slug)
                                ? 'bg-[#0d64ab] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {service.name}
                            {service.popular && (
                                <span className="mr-2 text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full">
                                    الأكثر طلباً
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <thead>
                            <tr className="bg-[#0d64ab] text-white">
                                <th className="py-4 px-6 text-right font-bold">المعيار</th>
                                {selectedServiceData.map(service => (
                                    <th key={service.slug} className="py-4 px-6 text-center font-bold">
                                        <div className="flex flex-col items-center">
                                            <span>{service.name}</span>
                                            <div className="flex items-center mt-1">
                                                <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span className="text-sm mr-1">{service.rating}</span>
                                            </div>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="py-4 px-6 font-medium text-gray-800">عزل حراري</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center">
                                        {service.thermal ? (
                                            <CheckIcon className="w-6 h-6 text-green-500 mx-auto" />
                                        ) : (
                                            <XMarkIcon className="w-6 h-6 text-red-400 mx-auto" />
                                        )}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <td className="py-4 px-6 font-medium text-gray-800">عزل مائي</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center">
                                        {service.waterproof ? (
                                            <CheckIcon className="w-6 h-6 text-green-500 mx-auto" />
                                        ) : (
                                            <XMarkIcon className="w-6 h-6 text-red-400 mx-auto" />
                                        )}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-4 px-6 font-medium text-gray-800">مقاوم للحريق</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center">
                                        {service.fireResistant ? (
                                            <CheckIcon className="w-6 h-6 text-green-500 mx-auto" />
                                        ) : (
                                            <XMarkIcon className="w-6 h-6 text-red-400 mx-auto" />
                                        )}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <td className="py-4 px-6 font-medium text-gray-800">نطاق السعر</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center font-semibold text-[#0d64ab]">
                                        {service.priceRange}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-4 px-6 font-medium text-gray-800">الضمان</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center text-gray-700">
                                        {service.warranty}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <td className="py-4 px-6 font-medium text-gray-800">العمر الافتراضي</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center text-gray-700">
                                        {service.lifespan}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-4 px-6 font-medium text-gray-800">مدة التركيب</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center text-gray-700">
                                        {service.installation}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <td className="py-4 px-6 font-medium text-gray-800">توفير الطاقة</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center text-gray-700">
                                        {service.energySaving}
                                    </td>
                                ))}
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="py-4 px-6 font-medium text-gray-800">الأفضل لـ</td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center text-gray-600 text-sm">
                                        {service.bestFor}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6"></td>
                                {selectedServiceData.map(service => (
                                    <td key={service.slug} className="py-4 px-6 text-center">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="inline-block bg-[#0d64ab] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#0a5a9a] transition-all"
                                        >
                                            اطلب الآن
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Help Text */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        لست متأكداً أي نوع تختار؟
                        <a href="tel:0500000000" className="text-[#0d64ab] font-medium hover:underline mr-1">
                            اتصل بنا للاستشارة المجانية
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
