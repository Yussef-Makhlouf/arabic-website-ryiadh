'use client'

import React, { useState } from 'react'
import { MapPinIcon, ShieldCheckIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

interface Location {
  id: string
  name: string
  nameEn: string
  type: 'district' | 'street' | 'compound'
  zone: 'north' | 'south' | 'east' | 'west' | 'center' | 'kharj'
  popular: boolean
  description?: string
  commonProblems?: string
  recommendedSolution?: string
}

const RIYADH_LOCATIONS: Location[] = [
  // Northern Districts
  { id: '1', name: 'حي النرجس', nameEn: 'Al Narjis', type: 'district', zone: 'north', popular: true, description: 'فلل وقصور فاخرة', commonProblems: 'ارتفاع حرارة الأسطح صيفاً', recommendedSolution: 'عزل فوم بولي يوريثان' },
  { id: '2', name: 'حي النخيل', nameEn: 'Al Nakheel', type: 'district', zone: 'north', popular: true, description: 'مباني سكنية حديثة', commonProblems: 'تسربات مياه الأمطار', recommendedSolution: 'عزل مائي + فوم' },
  { id: '3', name: 'حي الياسمين', nameEn: 'Al Yasmin', type: 'district', zone: 'north', popular: true, description: 'منطقة سكنية راقية', commonProblems: 'ارتفاع فواتير الكهرباء', recommendedSolution: 'عزل حراري فوم' },
  { id: '4', name: 'حي الروضة', nameEn: 'Al Rawda', type: 'district', zone: 'north', popular: true, description: 'فلل ومجمعات سكنية', commonProblems: 'رطوبة في الأسقف', recommendedSolution: 'عزل مائي أسمنتي' },
  { id: '5', name: 'حي الملقا', nameEn: 'Al Malqa', type: 'district', zone: 'north', popular: true, description: 'منطقة تجارية وسكنية', commonProblems: 'تسربات خزانات المياه', recommendedSolution: 'عزل خزانات إيبوكسي' },

  // Southern Districts
  { id: '6', name: 'حي الحمراء', nameEn: 'Al Hamra', type: 'district', zone: 'south', popular: true, description: 'مباني سكنية متنوعة', commonProblems: 'تآكل العزل القديم', recommendedSolution: 'تجديد عزل الفوم' },
  { id: '7', name: 'حي العزيزية', nameEn: 'Al Aziziyah', type: 'district', zone: 'south', popular: true, description: 'حي سكني كبير', commonProblems: 'حرارة عالية صيفاً', recommendedSolution: 'عزل فوم عاكس' },
  { id: '8', name: 'حي الدار البيضاء', nameEn: 'Al Dar Al Baida', type: 'district', zone: 'south', popular: true, description: 'منطقة صناعية وسكنية', commonProblems: 'تسربات صناعية', recommendedSolution: 'عزل مائي مقاوم للكيماويات' },

  // Eastern Districts
  { id: '10', name: 'حي الروابي', nameEn: 'Al Rawabi', type: 'district', zone: 'east', popular: true, description: 'منطقة سكنية حديثة', commonProblems: 'عزل ضعيف للمباني الجديدة', recommendedSolution: 'عزل فوم شامل' },
  { id: '11', name: 'حي النهضة', nameEn: 'Al Nahda', type: 'district', zone: 'east', popular: true, description: 'حي تجاري وسكني', commonProblems: 'تسربات في المباني التجارية', recommendedSolution: 'عزل مائي احترافي' },
  { id: '12', name: 'حي الخليج', nameEn: 'Al Khaleej', type: 'district', zone: 'east', popular: true, description: 'مجمعات سكنية', commonProblems: 'مشاكل رطوبة', recommendedSolution: 'عزل مائي + حراري' },

  // Western Districts
  { id: '14', name: 'حي الشفا', nameEn: 'Al Shifa', type: 'district', zone: 'west', popular: true, description: 'منطقة طبية وسكنية', commonProblems: 'تسربات مياه', recommendedSolution: 'كشف تسربات + عزل' },
  { id: '15', name: 'حي عرقة', nameEn: 'Irqah', type: 'district', zone: 'west', popular: true, description: 'فلل وقصور', commonProblems: 'أسطح كبيرة تحتاج عزل', recommendedSolution: 'عزل فوم + مائي' },
  { id: '16', name: 'حي الخزامى', nameEn: 'Al Khuzama', type: 'district', zone: 'west', popular: true, description: 'منطقة سكنية متطورة', commonProblems: 'حرارة الأسطح', recommendedSolution: 'عزل حراري متقدم' },

  // Central Districts
  { id: '17', name: 'حي العليا', nameEn: 'Al Olaya', type: 'district', zone: 'center', popular: true, description: 'المنطقة التجارية الرئيسية', commonProblems: 'عزل المباني التجارية', recommendedSolution: 'عزل فوم تجاري' },
  { id: '18', name: 'حي المروج', nameEn: 'Al Murooj', type: 'district', zone: 'center', popular: true, description: 'منطقة تجارية وسكنية', commonProblems: 'تسربات أسطح المحلات', recommendedSolution: 'عزل مائي سريع' },
  { id: '19', name: 'حي الملز', nameEn: 'Al Malaz', type: 'district', zone: 'center', popular: true, description: 'حي تجاري قديم', commonProblems: 'تجديد العزل القديم', recommendedSolution: 'إزالة + عزل جديد' },

  // Al-Kharj
  { id: '30', name: 'وسط الخرج', nameEn: 'Kharj Center', type: 'district', zone: 'kharj', popular: true, description: 'مركز مدينة الخرج', commonProblems: 'حرارة شديدة صيفاً', recommendedSolution: 'عزل فوم عالي الكثافة' },
  { id: '31', name: 'حي الخالدية', nameEn: 'Al Khalidiyah - Kharj', type: 'district', zone: 'kharj', popular: true, description: 'حي سكني بالخرج', commonProblems: 'تسربات المياه', recommendedSolution: 'عزل مائي شامل' },
  { id: '32', name: 'حي اليرموك', nameEn: 'Al Yarmouk - Kharj', type: 'district', zone: 'kharj', popular: true, description: 'منطقة سكنية', commonProblems: 'عزل خزانات', recommendedSolution: 'عزل خزانات صحي' },
]

const INSULATION_SERVICES = [
  { id: '1', name: 'عزل فوم للأسطح', icon: ShieldCheckIcon, description: 'عزل حراري ومائي شامل' },
  { id: '2', name: 'عزل مائي للأسطح', icon: ShieldCheckIcon, description: 'حماية من التسربات والرطوبة' },
  { id: '3', name: 'كشف تسربات المياه', icon: HomeIcon, description: 'كشف إلكتروني دقيق' },
]

export default function RiyadhLocations() {
  const [selectedZone, setSelectedZone] = useState<string>('all')
  const [showPopularOnly, setShowPopularOnly] = useState(false)

  const filteredLocations = RIYADH_LOCATIONS.filter(location => {
    if (selectedZone !== 'all' && location.zone !== selectedZone) return false
    if (showPopularOnly && !location.popular) return false
    return true
  })

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case 'north': return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'south': return 'bg-green-50 text-green-700 border-green-200'
      case 'east': return 'bg-orange-50 text-orange-700 border-orange-200'
      case 'west': return 'bg-purple-50 text-purple-700 border-purple-200'
      case 'center': return 'bg-red-50 text-red-700 border-red-200'
      case 'kharj': return 'bg-teal-50 text-teal-700 border-teal-200'
      default: return 'bg-white-50 text-gray-700 border-gray-200'
    }
  }

  const getZoneName = (zone: string) => {
    switch (zone) {
      case 'north': return 'شمال الرياض'
      case 'south': return 'جنوب الرياض'
      case 'east': return 'شرق الرياض'
      case 'west': return 'غرب الرياض'
      case 'center': return 'وسط الرياض'
      case 'kharj': return 'الخرج'
      default: return ''
    }
  }

  return (
    <section className="py-16 bg-gray-50" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خدمات عزل الأسطح في الرياض والخرج
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            نقدم خدمات عزل الأسطح المتخصصة في جميع أحياء الرياض والخرج مع فريق محترف ومواد عالية الجودة
          </p>

          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {INSULATION_SERVICES.map((service) => {
              const IconComponent = service.icon
              return (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#0d64ab]/10 rounded-lg mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-[#0d64ab]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* Zone Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">المنطقة:</label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#0d64ab] focus:border-[#0d64ab]"
              >
                <option value="all">جميع المناطق</option>
                <option value="north">شمال الرياض</option>
                <option value="south">جنوب الرياض</option>
                <option value="east">شرق الرياض</option>
                <option value="west">غرب الرياض</option>
                <option value="center">وسط الرياض</option>
                <option value="kharj">الخرج</option>
              </select>
            </div>

            {/* Popular Only Toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="popular"
                checked={showPopularOnly}
                onChange={(e) => setShowPopularOnly(e.target.checked)}
                className="w-4 h-4 text-[#0d64ab] bg-white border-gray-300 rounded focus:ring-[#0d64ab]"
              />
              <label htmlFor="popular" className="text-sm font-medium text-gray-700">
                المناطق الأكثر طلباً فقط
              </label>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className={`p-4 rounded-xl border-2 hover:shadow-lg transition-all duration-200 cursor-pointer bg-white ${getZoneColor(location.zone)}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1 truncate">{location.name}</h3>
                  <p className="text-sm opacity-75 mb-2">{location.description}</p>
                  {location.commonProblems && (
                    <p className="text-xs opacity-70 mb-1">
                      <strong>المشكلة الشائعة:</strong> {location.commonProblems}
                    </p>
                  )}
                  {location.recommendedSolution && (
                    <p className="text-xs opacity-70">
                      <strong>الحل المقترح:</strong> {location.recommendedSolution}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-3">
                    <MapPinIcon className="w-4 h-4 opacity-60" />
                    <span className="text-xs opacity-75">
                      {getZoneName(location.zone)}
                    </span>
                    {location.popular && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        مطلوب
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لم يتم العثور على مناطق مطابقة للمرشحات المحددة</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-[#0d64ab] rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            هل تحتاج لخدمة عزل في منطقتك؟
          </h3>
          <p className="text-lg mb-6 opacity-90">
            نصل إلى جميع أنحاء الرياض والخرج مع فريق متخصص ومواد عالية الجودة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+966507961706"
              className="bg-white text-[#0d64ab] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <span>📞</span>
              اتصل الآن: 0507961706
            </a>
            <a
              href="https://wa.me/966507961706"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <span>💬</span>
              واتساب
            </a>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-12 bg-white p-8 rounded-xl">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            خدمات عزل الأسطح في الرياض والخرج - تغطية شاملة لجميع الأحياء
          </h4>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              تقدم شركة عزل اسطح الرياض خدمات عزل الأسطح المتخصصة في جميع أنحاء مدينة الرياض والخرج، بما في ذلك الأحياء الشمالية مثل
              <strong> النرجس والنخيل والياسمين والروضة والملقا</strong>، والأحياء الجنوبية مثل
              <strong> الحمراء والعزيزية والدار البيضاء</strong>، والأحياء الشرقية مثل
              <strong> الروابي والنهضة والخليج</strong>، والأحياء الغربية مثل
              <strong> الشفا وعرقة والخزامى</strong>، ووسط المدينة مثل
              <strong> العليا والملز والمروج</strong>.
            </p>
            <p className="mb-4">
              كما نقدم خدماتنا في مدينة <strong>الخرج</strong> وجميع أحيائها بما في ذلك وسط الخرج وحي الخالدية وحي اليرموك.
              نتخصص في عزل الفوم بولي يوريثان، العزل المائي، العازل الأسمنتي، كشف تسربات المياه، وعزل خزانات المياه.
            </p>
            <p>
              فريقنا المدرب يستخدم أحدث المواد والتقنيات لضمان عزل فعال وطويل الأمد لأسطحكم، مع ضمان شامل يصل إلى 10 سنوات واعتماد من الهيئة السعودية للمهندسين.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}