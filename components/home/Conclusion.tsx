import React from 'react';
import { Phone, CheckCircle, ArrowLeft } from 'lucide-react';

const Conclusion = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    الخاتمة والدعوة للإجراء: الجودة المضمونة والخبرة الموثوقة
                </h2>

                <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                    إن اختيار <strong>شركة العزل المتقدم</strong> يعني اختيار الجودة المضمونة والخبرة الموثوقة. نحن نقدم الحلول الهندسية المتكاملة لـ <strong>عزل الأسطح بالرياض والخرج</strong>، مدعومة بـ <strong>ضمان 15 سنة</strong> وفريق فني مدرب ومعتمد.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <span className="bg-white/10 px-4 py-2 rounded-full flex items-center mx-2 my-1 text-sm md:text-base">
                        <CheckCircle size={18} className="ml-2 text-green-400" /> خبرة +15 عاماً
                    </span>
                    <span className="bg-white/10 px-4 py-2 rounded-full flex items-center mx-2 my-1 text-sm md:text-base">
                        <CheckCircle size={18} className="ml-2 text-green-400" /> ضمان 15 سنة
                    </span>
                    <span className="bg-white/10 px-4 py-2 rounded-full flex items-center mx-2 my-1 text-sm md:text-base">
                        <CheckCircle size={18} className="ml-2 text-green-400" /> معتمدون رسمياً
                    </span>
                </div>

                <div className="bg-white text-blue-900 p-6 md:p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">لا تؤجل حماية استثمارك</h3>
                    <p className="text-gray-600 mb-8 text-sm md:text-base">
                        تواصل معنا الآن لطلب معاينة مجانية وتقييم شامل لسطح مبناك. فريقنا جاهز لخدمتك في الرياض والخرج.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:0507961706" className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg transition-colors text-base md:text-lg">
                            <Phone className="ml-2 w-5 h-5" /> اتصل الآن: 0507961706
                        </a>
                        <a href="https://wa.me/966507961706" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg transition-colors text-base md:text-lg">
                            تواصل واتساب <ArrowLeft className="mr-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conclusion;
