import React from 'react';

const ContentHeader = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8 leading-tight">
                    شركة عزل اسطح بالرياض والخرج: <br />
                    <span className="text-blue-600">الحل الهندسي المتكامل لحماية مبناك وضمان 15 سنة</span>
                </h1>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2 inline-block">
                        الدليل الشامل للعزل: لماذا يُعد العزل الحراري والمائي ضرورة قصوى في الرياض والخرج؟
                    </h2>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify">
                        <p className="mb-6">
                            إن المناخ القاسي في المملكة العربية السعودية، الذي يتميز بدرجات حرارة صيفية تتجاوز الـ 50 درجة مئوية وأمطار شتوية قد تؤدي إلى تسربات مدمرة، يجعل من <strong>العزل الحراري والمائي</strong> استثمارًا حتميًا وليس مجرد خيار. نحن في <strong>شركة العزل المتقدم</strong> نؤمن بأن العزل الفعال هو خط الدفاع الأول عن سلامة المبنى واستدامة موارده.
                        </p>
                        <p>
                            تهدف شركتنا الى تقديم خدماتالأهمية القصوى لخدمات <strong>عزل الأسطح بالرياض والخرج</strong> وكيف يمكنها أن تحدث فرقًا جذريًا في جودة حياتكم وكفاءة استهلاك الطاقة.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentHeader;
