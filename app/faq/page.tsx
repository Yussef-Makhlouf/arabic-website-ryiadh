import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { QuestionMarkCircleIcon, ChevronDownIcon, ChevronUpIcon, PhoneIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'الأسئلة الشائعة عن عزل الأسطح | شركة عزل اسطح الرياض',
    description: 'إجابات شاملة على جميع الأسئلة الشائعة حول عزل الأسطح وأنواعه وأسعاره وضماناته. كل ما تريد معرفته عن عزل الفوم والعزل المائي وعزل الشينكو.',
    keywords: ['أسئلة عزل الأسطح', 'FAQ عزل', 'استفسارات العزل', 'أسعار العزل'],
}

const faqCategories = [
    {
        title: 'أسئلة عامة عن العزل',
        faqs: [
            {
                question: 'ما هي أهمية عزل الأسطح؟',
                answer: 'عزل الأسطح ضروري لحماية المبنى من الحرارة الشديدة صيفاً والبرودة شتاءً، ويمنع تسرب مياه الأمطار، ويوفر في استهلاك الكهرباء بنسبة قد تصل إلى 50%. كما يحمي الهيكل الإنشائي للمبنى من التلف على المدى الطويل.'
            },
            {
                question: 'ما هو أفضل نوع عزل للأسطح في الرياض؟',
                answer: 'عزل الفوم بولي يوريثان يعتبر الأفضل للرياض لأنه يوفر عزل حراري ومائي معاً ويتحمل درجات الحرارة العالية. لكن الاختيار يعتمد على طبيعة السطح والميزانية والمشكلة الرئيسية التي تريد حلها.'
            },
            {
                question: 'كم مرة يحتاج السطح للعزل؟',
                answer: 'عزل الفوم الجيد يستمر 15-25 سنة، والعزل المائي 10-15 سنة. ننصح بفحص العزل كل 3-5 سنوات للتأكد من سلامته. إذا لاحظت تسربات أو ارتفاع في فاتورة الكهرباء، قد يكون الوقت قد حان لتجديد العزل.'
            },
            {
                question: 'هل يمكن تطبيق عزل جديد فوق العزل القديم؟',
                answer: 'يعتمد على حالة العزل القديم. إذا كان سليماً يمكن إضافة طبقة جديدة فوقه. أما إذا كان تالفاً أو متآكلاً فيجب إزالته أولاً لضمان التصاق العزل الجديد بشكل صحيح.'
            },
        ]
    },
    {
        title: 'أسئلة عن عزل الفوم',
        faqs: [
            {
                question: 'ما هو عزل الفوم بولي يوريثان؟',
                answer: 'عزل الفوم بولي يوريثان هو مادة عازلة حديثة يتم رشها على السطح بواسطة معدات متخصصة. تتمدد المادة وتلتصق بالسطح مكونة طبقة عازلة متماسكة بدون فواصل. يوفر عزل حراري ومائي في آن واحد.'
            },
            {
                question: 'كم سنة ضمان على عزل الفوم؟',
                answer: 'نقدم ضمان يصل إلى 10 سنوات على عزل الفوم، ويشمل الضمان أي تسربات أو مشاكل في العزل. فريقنا متاح للصيانة الدورية وإصلاح أي مشاكل قد تظهر خلال فترة الضمان.'
            },
            {
                question: 'هل عزل الفوم آمن صحياً؟',
                answer: 'نعم، عزل الفوم بعد جفافه خامل كيميائياً وآمن تماماً. المواد المستخدمة معتمدة ولا تطلق أي غازات ضارة. لكن لا ينصح باستخدامه لعزل خزانات مياه الشرب، حيث يفضل الإيبوكسي لهذا الغرض.'
            },
            {
                question: 'ما هي سماكة عزل الفوم المناسبة؟',
                answer: 'السماكة المثالية تتراوح بين 3-5 سم. سماكة 3 سم كافية لمعظم المباني السكنية، بينما المباني المعرضة لحرارة شديدة أو الأسقف الشينكو قد تحتاج 5 سم أو أكثر.'
            },
            {
                question: 'هل يتأثر عزل الفوم بالحرارة العالية؟',
                answer: 'عزل الفوم عالي الكثافة يتحمل درجات حرارة تصل إلى 80 درجة مئوية، وهو أكثر من كافٍ لمناخ الرياض. كما أنه مقاوم للحريق ولا يساعد على انتشار اللهب.'
            },
        ]
    },
    {
        title: 'أسئلة عن العزل المائي',
        faqs: [
            {
                question: 'ما الفرق بين العزل المائي والعزل الحراري؟',
                answer: 'العزل المائي يحمي المبنى من تسربات المياه والرطوبة، بينما العزل الحراري يمنع انتقال الحرارة. عزل الفوم يوفر كلا النوعين معاً، أما العزل المائي التقليدي (البيتومين) يوفر عزل مائي ممتاز مع عزل حراري محدود.'
            },
            {
                question: 'متى أحتاج عزل مائي للسطح؟',
                answer: 'تحتاج عزل مائي إذا لاحظت تسربات أو رطوبة في السقف، أو بقع مياه على الجدران، أو إذا كان السطح معرض لتجمع مياه الأمطار. كما ينصح به للأسطح الجديدة كإجراء وقائي.'
            },
            {
                question: 'ما هي أنواع العزل المائي المتاحة؟',
                answer: 'الأنواع الرئيسية هي: البيتومين المطاطي (الأكثر شيوعاً)، الممبرين (رولات عازلة)، العزل الأسمنتي (للخزانات والأسطح الخرسانية)، والبولي يوريثان السائل. كل نوع له استخداماته ومميزاته.'
            },
        ]
    },
    {
        title: 'فوائد عزل الأسطح',
        faqs: [
            {
                question: 'كم يوفر عزل الأسطح من فاتورة الكهرباء؟',
                answer: 'أثبتت الدراسات أن عزل الأسطح الجيد يمكن أن يوفر ما بين 30% إلى 50% من استهلاك الطاقة المخصص للتكييف، مما ينعكس بشكل ملحوظ على انخفاض فاتورة الكهرباء الشهرية.'
            },
            {
                question: 'هل يحمي العزل من الحشرات؟',
                answer: 'نعم، عزل الفوم بولي يوريثان يغلق جميع الشقوق والفتحات في السطح والجدران، مما يمنع دخول الحشرات والقوارض إلى داخل المنزل.'
            },
            {
                question: 'هل يزيد العزل من قيمة العقار؟',
                answer: 'بالتأكيد، المباني المعزولة جيداً تحظى بتقييم عقاري أعلى وتكون مرغوبة أكثر للمشترين والمستأجرين لأنها توفر بيئة معيشية مريحة وموفرة للطاقة.'
            },
        ]
    },
    {
        title: 'أسئلة عن الأسعار والتكاليف',
        faqs: [
            {
                question: 'كم تكلفة عزل الأسطح؟',
                answer: 'تختلف التكلفة حسب نوع العزل ومساحة السطح وحالته. عزل الفوم يتراوح بين 25-45 ريال للمتر المربع، والعزل المائي بين 20-35 ريال. اتصلوا بنا للحصول على عرض سعر مجاني ومخصص.'
            },
            {
                question: 'هل يمكن الحصول على عرض سعر مجاني؟',
                answer: 'نعم، نقدم معاينة وعرض سعر مجاني تماماً بدون أي التزام. يقوم فريقنا بزيارة الموقع وتقييم حالة السطح ثم تقديم عرض مفصل يشمل نوع العزل والسعر ومدة التنفيذ والضمان.'
            },
            {
                question: 'هل تقدمون خصومات على المساحات الكبيرة؟',
                answer: 'نعم، نقدم أسعار خاصة للمساحات الكبيرة والمشاريع التجارية. كما نوفر عروض موسمية وخصومات للعملاء الدائمين. اتصل بنا لمعرفة العروض الحالية.'
            },
            {
                question: 'ما هي طرق الدفع المتاحة؟',
                answer: 'نقبل الدفع النقدي والتحويل البنكي والدفع بالبطاقات الائتمانية. كما نوفر إمكانية التقسيط للمشاريع الكبيرة بالاتفاق.'
            },
        ]
    },
    {
        title: 'أسئلة عن الخدمة والضمان',
        faqs: [
            {
                question: 'ما هي المناطق التي تخدمونها؟',
                answer: 'نقدم خدماتنا في جميع أنحاء الرياض وضواحيها بما في ذلك شمال الرياض، جنوب الرياض، شرق الرياض، غرب الرياض. كما نخدم مدينة الخرج والمناطق المحيطة بها.'
            },
            {
                question: 'كم يستغرق تنفيذ أعمال العزل؟',
                answer: 'يعتمد على نوع العزل ومساحة السطح. عزل الفوم لسطح منزل متوسط (200 متر) يستغرق 1-2 يوم. العزل المائي قد يستغرق 2-4 أيام. نحرص على الانتهاء في أسرع وقت مع الحفاظ على الجودة.'
            },
            {
                question: 'هل أنتم معتمدون من الهيئة السعودية للمهندسين؟',
                answer: 'نعم، شركتنا معتمدة من الهيئة السعودية للمهندسين، ونستخدم مواد معتمدة من الدفاع المدني والجهات المختصة. جميع فنيينا مدربون ومؤهلون لتقديم أفضل خدمة.'
            },
            {
                question: 'ماذا يشمل الضمان؟',
                answer: 'الضمان يشمل إصلاح أي تسربات أو مشاكل في العزل خلال فترة الضمان مجاناً. يتضمن أيضاً صيانة دورية وخدمة عملاء على مدار الساعة. الضمان مكتوب وموثق مع تحديد واضح للشروط والمدة.'
            },
        ]
    },
]

export default function FAQPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative py-16 bg-[#0d64ab] text-white overflow-hidden">
                    <div className="absolute inset-0   opacity-10" />
                    <div className="container mx-auto px-6 relative">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                الأسئلة الشائعة
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed">
                                إجابات شاملة على جميع استفساراتكم حول خدمات عزل الأسطح والمباني
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Categories */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        {faqCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <QuestionMarkCircleIcon className="w-7 h-7 text-[#0d64ab] ml-2" />
                                    {category.title}
                                </h2>
                                <div className="space-y-4">
                                    {category.faqs.map((faq, faqIndex) => (
                                        <details
                                            key={faqIndex}
                                            className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                                        >
                                            <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                                                <span className="font-semibold text-gray-800 text-lg pr-4">{faq.question}</span>
                                                <ChevronDownIcon className="w-5 h-5 text-[#0d64ab] group-open:rotate-180 transition-transform flex-shrink-0" />
                                            </summary>
                                            <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Still Have Questions */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                لم تجد إجابة لسؤالك؟
                            </h2>
                            <p className="text-gray-600 text-lg mb-8">
                                فريقنا متاح على مدار الساعة للإجابة على جميع استفساراتكم وتقديم الاستشارة المجانية
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="tel:0507961706"
                                    className="bg-[#0d64ab] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0a5a9a] transition-all shadow-lg flex items-center gap-2"
                                >
                                    <PhoneIcon className="w-5 h-5" />
                                    اتصل بنا الآن
                                </a>
                                <a
                                    href="https://wa.me/966507961706"
                                    className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all shadow-lg"
                                >
                                    راسلنا عبر واتساب
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-12 bg-[#0d64ab]">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
                            <div>
                                <p className="text-3xl font-bold mb-1">+2000</p>
                                <p className="text-white/80">عميل راضٍ</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-1">+15</p>
                                <p className="text-white/80">سنة خبرة</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-1">10</p>
                                <p className="text-white/80">سنوات ضمان</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-1">24/7</p>
                                <p className="text-white/80">خدمة متاحة</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButtons />
        </>
    )
}
