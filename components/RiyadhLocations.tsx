'use client'

import React, { useState } from 'react'
import { MapPinIcon, TruckIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

interface Location {
  id: string
  name: string
  nameEn: string
  type: 'district' | 'street' | 'compound'
  zone: 'north' | 'south' | 'east' | 'west' | 'center'
  popular: boolean
  description?: string
}

const RIYADH_LOCATIONS: Location[] = [
  // Northern Districts
  { id: '1', name: 'حي النرجس', nameEn: 'Al Narjis', type: 'district', zone: 'north', popular: true, description: 'منطقة راقية مع فلل وشقق فاخرة' },
  { id: '2', name: 'حي النخيل', nameEn: 'Al Nakheel', type: 'district', zone: 'north', popular: true, description: 'حي سكني متميز' },
  { id: '3', name: 'حي الياسمين', nameEn: 'Al Yasmin', type: 'district', zone: 'north', popular: true, description: 'منطقة سكنية حديثة' },
  { id: '4', name: 'حي الروضة', nameEn: 'Al Rawda', type: 'district', zone: 'north', popular: true, description: 'حي راقي مع مرافق متكاملة' },
  { id: '5', name: 'حي الملقا', nameEn: 'Al Malqa', type: 'district', zone: 'north', popular: true, description: 'منطقة تجارية وسكنية' },
  
  // Southern Districts
  { id: '6', name: 'حي الحمراء', nameEn: 'Al Hamra', type: 'district', zone: 'south', popular: true, description: 'حي سكني مميز' },
  { id: '7', name: 'حي العقيق', nameEn: 'Al Aqiq', type: 'district', zone: 'south', popular: true, description: 'منطقة سكنية متطورة' },
  { id: '8', name: 'حي الدرعية', nameEn: 'Al Diriyah', type: 'district', zone: 'south', popular: true, description: 'منطقة تاريخية مع مشاريع حديثة' },
  { id: '9', name: 'حي الخليج', nameEn: 'Al Khaleej', type: 'district', zone: 'south', popular: false, description: 'حي سكني هادئ' },
  
  // Eastern Districts
  { id: '10', name: 'حي الربوة', nameEn: 'Al Rabwa', type: 'district', zone: 'east', popular: true, description: 'منطقة سكنية راقية' },
  { id: '11', name: 'حي النهضة', nameEn: 'Al Nahda', type: 'district', zone: 'east', popular: true, description: 'حي متطور مع مراكز تجارية' },
  { id: '12', name: 'حي الورود', nameEn: 'Al Wurud', type: 'district', zone: 'east', popular: true, description: 'منطقة سكنية جميلة' },
  { id: '13', name: 'حي الفيصلية', nameEn: 'Al Faisaliyyah', type: 'district', zone: 'east', popular: false, description: 'حي سكني مريح' },
  
  // Western Districts
  { id: '14', name: 'حي الشفا', nameEn: 'Al Shifa', type: 'district', zone: 'west', popular: true, description: 'منطقة طبية وسكنية' },
  { id: '15', name: 'حي المرسلات', nameEn: 'Al Mursalat', type: 'district', zone: 'west', popular: false, description: 'حي سكني هادئ' },
  { id: '16', name: 'حي الخزامى', nameEn: 'Al Khuzama', type: 'district', zone: 'west', popular: true, description: 'منطقة سكنية متطورة' },
  
  // Central Districts
  { id: '17', name: 'حي الصفا', nameEn: 'Al Safa', type: 'district', zone: 'center', popular: true, description: 'وسط المدينة مع مكاتب وشركات' },
  { id: '18', name: 'حي المروج', nameEn: 'Al Murooj', type: 'district', zone: 'center', popular: true, description: 'منطقة تجارية وسكنية' },
  { id: '19', name: 'حي الملز', nameEn: 'Al Malaz', type: 'district', zone: 'center', popular: true, description: 'حي تجاري مميز' },
  { id: '20', name: 'حي العليا', nameEn: 'Al Olaya', type: 'district', zone: 'center', popular: true, description: 'المنطقة التجارية الرئيسية' },
  
  // Major Streets
  { id: '21', name: 'شارع الملك فهد', nameEn: 'King Fahd Road', type: 'street', zone: 'center', popular: true, description: 'الشارع الرئيسي في الرياض' },
  { id: '22', name: 'طريق الملك عبدالعزيز', nameEn: 'King Abdulaziz Road', type: 'street', zone: 'center', popular: true, description: 'طريق مهم يربط أجزاء المدينة' },
  { id: '23', name: 'شارع التحلية', nameEn: 'Tahlia Street', type: 'street', zone: 'center', popular: true, description: 'شارع تجاري مميز' },
  { id: '24', name: 'طريق الدائري الشمالي', nameEn: 'Northern Ring Road', type: 'street', zone: 'north', popular: true, description: 'الطريق الدائري الشمالي' },
  { id: '25', name: 'طريق الدائري الشرقي', nameEn: 'Eastern Ring Road', type: 'street', zone: 'east', popular: true, description: 'الطريق الدائري الشرقي' },
  
  // Residential Compounds
  { id: '26', name: 'مجمع الياسمين السكني', nameEn: 'Al Yasmin Residential Compound', type: 'compound', zone: 'north', popular: true, description: 'مجمع سكني متكامل' },
  { id: '27', name: 'مجمع النخيل السكني', nameEn: 'Al Nakheel Residential Compound', type: 'compound', zone: 'north', popular: true, description: 'مجمع سكني راقي' },
  { id: '28', name: 'فلل الروضة', nameEn: 'Al Rawda Villas', type: 'compound', zone: 'north', popular: true, description: 'مجمع فلل فاخرة' },
]

const FURNITURE_SERVICES = [
  { id: '1', name: 'نقل الأثاث السكني', icon: HomeIcon, description: 'نقل أثاث المنازل والشقق' },
  { id: '2', name: 'نقل أثاث المكاتب', icon: BuildingOfficeIcon, description: 'نقل أثاث الشركات والمكاتب' },
  { id: '3', name: 'فك وتركيب الأثاث', icon: TruckIcon, description: 'فك وتركيب جميع أنواع الأثاث' },
]

export default function RiyadhLocations() {
  const [selectedZone, setSelectedZone] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [showPopularOnly, setShowPopularOnly] = useState(false)

  const filteredLocations = RIYADH_LOCATIONS.filter(location => {
    if (selectedZone !== 'all' && location.zone !== selectedZone) return false
    if (selectedType !== 'all' && location.type !== selectedType) return false
    if (showPopularOnly && !location.popular) return false
    return true
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'district': return '🏘️'
      case 'street': return '🛣️'
      case 'compound': return '🏢'
      default: return '📍'
    }
  }

  const getZoneColor = (zone: string) => {
    switch (zone) {
      case 'north': return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'south': return 'bg-green-50 text-green-700 border-green-200'
      case 'east': return 'bg-orange-50 text-orange-700 border-orange-200'
      case 'west': return 'bg-purple-50 text-purple-700 border-purple-200'
      case 'center': return 'bg-red-50 text-red-700 border-red-200'
      default: return 'bg-white-50 text-gray-700 border-gray-200'
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خدمات نقل الأثاث في جميع أنحاء الرياض
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            نقدم خدمات نقل الأثاث المتخصصة في جميع أحياء وشوارع الرياض مع فريق محترف ومعدات حديثة
          </p>
          
          {/* Service Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {FURNITURE_SERVICES.map((service) => {
              const IconComponent = service.icon
              return (
                <div key={service.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
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
                className="px-3 py-2 bg-white border border-white-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">جميع المناطق</option>
                <option value="north">شمال الرياض</option>
                <option value="south">جنوب الرياض</option>
                <option value="east">شرق الرياض</option>
                <option value="west">غرب الرياض</option>
                <option value="center">وسط الرياض</option>
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">النوع:</label>
              <select 
                value={selectedType} 
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 bg-white border border-white-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">جميع الأنواع</option>
                <option value="district">الأحياء</option>
                <option value="street">الشوارع</option>
                <option value="compound">المجمعات السكنية</option>
              </select>
            </div>

            {/* Popular Only Toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="popular"
                checked={showPopularOnly}
                onChange={(e) => setShowPopularOnly(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-white border-white-300 rounded focus:ring-blue-500"
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
              className={`p-4 rounded-xl border-2 hover:shadow-lg transition-all duration-200 cursor-pointer ${getZoneColor(location.zone)}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{getTypeIcon(location.type)}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1 truncate">{location.name}</h3>
                  <p className="text-sm opacity-75 mb-2">{location.nameEn}</p>
                  {location.description && (
                    <p className="text-xs opacity-70 leading-relaxed">{location.description}</p>
                  )}
                  <div className="flex items-center gap-2 mt-3">
                    <MapPinIcon className="w-4 h-4 opacity-60" />
                    <span className="text-xs opacity-75 capitalize">
                      {location.zone === 'north' && 'شمال الرياض'}
                      {location.zone === 'south' && 'جنوب الرياض'}
                      {location.zone === 'east' && 'شرق الرياض'}
                      {location.zone === 'west' && 'غرب الرياض'}
                      {location.zone === 'center' && 'وسط الرياض'}
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
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            هل تحتاج لنقل أثاث في منطقتك؟
          </h3>
          <p className="text-lg mb-6 opacity-90">
            نصل إلى جميع أنحاء الرياض مع فريق متخصص ومعدات حديثة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+966547910859" 
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <span>📞</span>
              اتصل الآن: 0547910859
            </a>
            <a 
              href="https://wa.me/966547910859" 
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
        <div className="mt-12 bg-gray-50 p-8 rounded-xl">
          <h4 className="text-xl font-bold text-gray-900 mb-4">
            خدمات نقل الأثاث في الرياض - تغطية شاملة لجميع الأحياء
          </h4>
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              تقدم شركة لمسة للنظافة خدمات نقل الأثاث المتخصصة في جميع أنحاء مدينة الرياض، بما في ذلك الأحياء الشمالية مثل 
              <strong> النرجس والنخيل والياسمين والروضة والملقا</strong>، والأحياء الجنوبية مثل 
              <strong> الحمراء والعقيق والدرعية</strong>، والأحياء الشرقية مثل 
              <strong> الربوة والنهضة والورود</strong>، والأحياء الغربية مثل 
              <strong> الشفا والخزامى</strong>، ووسط المدينة مثل 
              <strong> العليا والملز والمروج والصفا</strong>.
            </p>
            <p className="mb-4">
              نقدم خدمات نقل الأثاث على الشوارع الرئيسية مثل <strong>شارع الملك فهد وطريق الملك عبدالعزيز وشارع التحلية</strong> 
              والطرق الدائرية، مع تغطية المجمعات السكنية والفلل والشقق في جميع أنحاء الرياض.
            </p>
            <p>
              فريقنا المدرب يستخدم أحدث المعدات والتقنيات لضمان نقل آمن وسريع لأثاثكم، مع خدمة فك وتركيب محترفة وضمان شامل على جميع الخدمات.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}