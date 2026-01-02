import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ShieldCheckIcon, BeakerIcon, EyeIcon, CubeIcon, WrenchScrewdriverIcon, CheckCircleIcon, ClockIcon, ArrowRightIcon, PhoneIcon, StarIcon, ArrowLeftIcon, MapPinIcon, SparklesIcon, ViewColumnsIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ServiceFAQ from '@/components/ServiceFAQ'
import ServiceGallery from '@/components/ServiceGallery'
import ServiceTestimonials from '@/components/ServiceTestimonials'

const services = {
    'foam-insulation': {
        slug: 'foam-insulation',
        icon: CubeIcon,
        title: 'عزل فوم للأسطح بالرياض',
        shortTitle: 'عزل فوم',
        subtitle: 'عزل حراري ومائي بتقنية الفوم بولي يوريثان',
        metaDescription: 'شركة عزل فوم بالرياض متخصصة في عزل الأسطح بالفوم بولي يوريثان. عزل حراري ومائي معتمد مع ضمان 10 سنوات. اتصل الآن للحصول على عرض سعر مجاني.',
        description: 'نقدم خدمات عزل الفوم بولي يوريثان للأسطح في الرياض والخرج. يعتبر عزل الفوم من أفضل أنواع العزل لأنه يوفر عزل حراري ومائي في آن واحد، مع مقاومة عالية للعوامل الجوية وعمر افتراضي طويل.',
        longDescription: `عزل الفوم بولي يوريثان هو الحل الأمثل لحماية أسطح المباني في الرياض من الحرارة الشديدة والأمطار. يتميز هذا النوع من العزل بقدرته الفائقة على منع انتقال الحرارة، مما يساهم في توفير استهلاك الطاقة وتخفيض فواتير الكهرباء بنسبة تصل إلى 50%.

يتم رش الفوم بمعدات متخصصة على السطح بسمك مناسب حسب احتياجات المبنى. المادة تتمدد وتلتصق بالسطح مكونة طبقة عازلة متماسكة بدون فواصل أو ثغرات.

نستخدم فوم بولي يوريثان عالي الكثافة ومعتمد من الجهات المختصة، مع ضمان شامل يصل إلى 10 سنوات على جميع أعمال العزل.`,
        features: [
            { title: 'عزل حراري ومائي في آن واحد', desc: 'حماية مزدوجة من الحرارة والمياه' },
            { title: 'مقاومة لدرجات الحرارة العالية', desc: 'حتى 80 درجة مئوية' },
            { title: 'خفة الوزن على الأسطح', desc: 'لا يؤثر على هيكل المبنى' },
            { title: 'مقاومة للحريق والاشتعال', desc: 'معتمد بمعايير السلامة' },
            { title: 'ضمان يصل إلى 10 سنوات', desc: 'ضمان موثق وشامل' },
            { title: 'توفير فاتورة الكهرباء حتى 50%', desc: 'استثمار يعود بالتوفير' },
        ],
        process: [
            { step: 'معاينة السطح وتحديد حالته', desc: 'فحص شامل للسطح وتحديد المشاكل' },
            { step: 'تنظيف وتجهيز السطح للعزل', desc: 'إزالة الأتربة والشوائب' },
            { step: 'رش الفوم بالسماكة المطلوبة', desc: 'رش بسماكة 3-5 سم' },
            { step: 'التغطية بطبقة حماية UV', desc: 'حماية من أشعة الشمس' },
            { step: 'فحص الجودة والتسليم', desc: 'مع شهادة الضمان' },
        ],
        price: 'يبدأ من 25 ريال للمتر المربع',
        warranty: '10 سنوات',
        duration: '1-3 أيام حسب المساحة',
        color: 'from-[#0d64ab] to-[#1a7bc4]',
        rating: 4.9,
        reviews: 256,
        faqs: [
            { question: 'ما هو عزل الفوم بولي يوريثان؟', answer: 'هو نوع من العزل الحراري والمائي يتم رشه على السطح حيث يتمدد ويكون طبقة عازلة متماسكة. يعتبر من أفضل أنواع العزل الحديثة.' },
            { question: 'كم يستمر عزل الفوم؟', answer: 'عزل الفوم يستمر لمدة تتراوح بين 20-30 سنة مع الصيانة المناسبة، ونقدم ضمان لمدة 10 سنوات.' },
            { question: 'هل عزل الفوم آمن على الصحة؟', answer: 'نعم، عزل الفوم بعد جفافه آمن تماماً ولا ينبعث منه أي غازات ضارة. نستخدم مواد معتمدة عالمياً.' },
            { question: 'كم تكلفة عزل الفوم للسطح؟', answer: 'تبدأ التكلفة من 25 ريال للمتر المربع وتختلف حسب حالة السطح والمساحة. نقدم معاينة وعرض سعر مجاني.' },
        ],
        gallery: [
            { src: '/attic-with-completed-spray-foam-insulation.webp', alt: 'عزل فوم للسقف العلوي', title: 'عزل سقف علوي بالفوم' },
            { src: '/professional-spraying-foam-in-basement.webp', alt: 'فني يقوم برش الفوم', title: 'عملية رش الفوم الاحترافي' },
            { src: '/technician-applying-spray-foam-in-attic.webp', alt: 'تطبيق الفوم في السقف', title: 'تطبيق العزل في السقف' },
            { src: '/closed-cell-spray-foam-on-house-garage-walls.webp', alt: 'عزل فوم جدران', title: 'عزل جدران الجراج بالفوم' },
            { src: '/best-practices-spray-foam-installation-on-roof.webp', alt: 'تركيب فوم على السطح', title: 'أفضل ممارسات العزل' },
            { src: '/worker-installing-foam-insulation-in-crawl-space.webp', alt: 'عامل يركب عزل الفوم', title: 'تركيب العزل المتخصص' },
            { src: '/thick-layer-of-spray-foam-on-wall-studs.webp', alt: 'طبقة فوم سميكة', title: 'طبقة عزل سميكة' },
            { src: '/spray-foam-application-on-exterior-wall.webp', alt: 'رش فوم على جدار خارجي', title: 'عزل الجدران الخارجية' },
        ],
        testimonials: [
            { name: 'أحمد الشمري', location: 'الرياض - حي النرجس', rating: 5, text: 'خدمة ممتازة وفريق محترف. لاحظت فرق كبير في درجة حرارة المنزل وانخفضت فاتورة الكهرباء بشكل ملحوظ.', service: 'عزل فوم', date: '2024-01-10' },
            { name: 'محمد العتيبي', location: 'الرياض - حي الملقا', rating: 5, text: 'تجربة رائعة من البداية للنهاية. الفريق ملتزم بالمواعيد والعمل نظيف ومرتب.', service: 'عزل فوم', date: '2024-01-05' },
        ],
    },
    'waterproof-insulation': {
        slug: 'waterproof-insulation',
        icon: ShieldCheckIcon,
        title: 'عزل مائي للأسطح بالرياض',
        shortTitle: 'عزل مائي',
        subtitle: 'حماية شاملة من تسربات المياه والرطوبة',
        metaDescription: 'شركة عزل مائي بالرياض متخصصة في عزل الأسطح من تسربات المياه. عزل مائي معتمد بمواد عالية الجودة مع ضمان 7 سنوات. احصل على عرض سعر مجاني.',
        description: 'خدمات العزل المائي الاحترافي للأسطح في الرياض باستخدام أجود مواد العزل المائي. نضمن حماية كاملة من تسربات مياه الأمطار والرطوبة لحماية المبنى من التلف.',
        longDescription: `العزل المائي هو خط الدفاع الأول لحماية مبناك من تسربات المياه والرطوبة التي قد تسبب أضراراً جسيمة للهيكل الإنشائي على المدى الطويل.

نستخدم مواد عزل مائي عالية الجودة مثل البيتومين المطاطي والممبرين والرولات العازلة، مع مراعاة اختيار النوع المناسب لكل مشروع حسب طبيعة السطح والتعرض للعوامل الجوية.

فريقنا المتخصص يضمن تطبيق العزل بشكل صحيح مع معالجة جميع نقاط الضعف والوصلات لضمان عدم تسرب أي قطرة ماء.`,
        features: [
            { title: 'حماية كاملة من تسربات المياه', desc: 'منع أي تسرب للمياه' },
            { title: 'مقاومة للأملاح والتآكل', desc: 'حماية طويلة الأمد' },
            { title: 'مرونة عالية', desc: 'تتحمل التمدد والانكماش' },
            { title: 'مواد صديقة للبيئة', desc: 'آمنة على البيئة' },
            { title: 'ضمان شامل على الخدمة', desc: 'ضمان 7 سنوات' },
            { title: 'مناسب لجميع أنواع الأسطح', desc: 'خرسانية وحديدية' },
        ],
        process: [
            { step: 'فحص وتقييم حالة السطح', desc: 'معاينة شاملة' },
            { step: 'معالجة الشروخ والتصدعات', desc: 'إصلاح التلفيات' },
            { step: 'تطبيق طبقة البرايمر التأسيسية', desc: 'تحضير السطح' },
            { step: 'تطبيق العزل المائي', desc: 'طبقة أو أكثر' },
            { step: 'فحص واختبار العزل بالماء', desc: 'ضمان الجودة' },
        ],
        price: 'يبدأ من 20 ريال للمتر المربع',
        warranty: '7 سنوات',
        duration: '2-4 أيام حسب المساحة',
        color: 'from-[#05ccca] to-[#0d64ab]',
        rating: 4.8,
        reviews: 203,
        faqs: [
            { question: 'ما أنواع العزل المائي المتوفرة؟', answer: 'نوفر عدة أنواع: البيتومين المطاطي، الممبرين، الرولات العازلة، والعزل الأسمنتي. يتم اختيار النوع حسب طبيعة السطح.' },
            { question: 'متى أحتاج عزل مائي للسطح؟', answer: 'عند ظهور علامات رطوبة أو تسربات، أو كإجراء وقائي للمباني الجديدة، أو عند صيانة السطح.' },
            { question: 'هل يمكن تطبيق العزل المائي فوق عزل قديم؟', answer: 'يعتمد على حالة العزل القديم. في بعض الحالات يمكن، وفي حالات أخرى يجب إزالته أولاً.' },
        ],
        gallery: [
            { src: '/spray-foam-roofing-01.webp', alt: 'عزل مائي للسقف', title: 'عزل السطح بالفوم المائي' },
            { src: '/thermcoat_termal_acoustic_insulation_pu_spray_foam_3.webp', alt: 'العزل الحراري والمائي', title: 'عزل حراري ومائي متكامل' },
            { src: '/rooftop-water-tank-before-foam-insulation.webp', alt: 'خزان مياه على السطح', title: 'عزل خزانات السطح' },
            { src: '/thermal-acoustic-foam-insulation-on-roof.webp', alt: 'عزل حراري صوتي', title: 'عزل متعدد الوظائف' },
        ],
        testimonials: [
            { name: 'فهد السالم', location: 'الرياض - حي الياسمين', rating: 5, text: 'عملوا عزل مائي للسطح بعد مشكلة تسربات. الحمد لله لم تعد المشكلة تتكرر.', service: 'عزل مائي', date: '2024-01-08' },
        ],
    },
    'tiled-roof-insulation': {
        slug: 'tiled-roof-insulation',
        icon: ViewColumnsIcon,
        title: 'عزل الأسطح المبلطة بالرياض',
        shortTitle: 'عزل مبلط',
        subtitle: 'عزل احترافي للأسطح المبلطة بدون تكسير',
        metaDescription: 'أفضل شركة عزل أسطح مبلطة بالرياض. تقنيات حديثة لعزل البلاط بدون تكسير مع ضمان 10 سنوات. حماية من التسربات والحرارة. اتصل الآن.',
        description: 'حلول مبتكرة لعزل الأسطح المبلطة القديمة والجديدة بدون الحاجة للتكسير. نستخدم مواد عزل شفافة أو فوم متخصص يوفر حماية كاملة ومظهراً جمالياً.',
        longDescription: `عزل الأسطح المبلطة هو التحدي الأكبر للكثير من أصحاب المنازل. فكرة تكسير البلاط وإعادة العزل مكلفة ومزعجة جداً.
لهذا نقدم في شركتنا حلولاً ذكية لعزل الأسطح المبلطة "فوق البلاط" بكفاءة عالية.

نستخدم تقنيات متعددة مثل:
1. العزل الشفاف (Epoxy/Acrylic): يحافظ على شكل البلاط ويمنع التسرب.
2. عزل الفوم (PU Foam): يتم رشه فوق البلاط ليعطيه طبقة حماية وعزل حراري قوي.
3. عزل الشاش (Liquid Membrane): طبقات دهان عازلة قوية الالتصاق بالبلاط.`,
        features: [
            { title: 'بدون تكسير للبلاط', desc: 'توفير التكاليف والجهد' },
            { title: 'حماية مزدوجة (حراري ومائي)', desc: 'عزل شامل' },
            { title: 'سرعة في التنفيذ', desc: 'يوم أو يومين فقط' },
            { title: 'خفيف الوزن', desc: 'لا أحمال إضافية' },
            { title: 'شكل جمالي', desc: 'خيارات متعددة للألوان' },
            { title: 'ضمان طويل المدى', desc: 'يصل إلى 10 سنوات' },
        ],
        process: [
            { step: 'تنظيف السطح وفواصل البلاط', desc: 'تجهيز السطح' },
            { step: 'معالجة الشقوق وفواصل التمدد', desc: 'إغلاق المسام' },
            { step: 'تطبيق طبقة الأساس (Primer)', desc: 'لضمان الالتصاق' },
            { step: 'تطبيق طبقات العزل المختارة', desc: '3-4 طبقات' },
            { step: 'اختبار العزل بالماء', desc: 'التأكد من الجودة' },
        ],
        price: 'يبدأ من 35 ريال للمتر',
        warranty: '10 سنوات',
        duration: '1-3 أيام',
        color: 'from-[#0d64ab] to-[#05ccca]',
        rating: 4.9,
        reviews: 180,
        faqs: [
            { question: 'هل يلزم تكسير البلاط للعزل؟', answer: 'لا، معظم تقنياتنا الحديثة تطبق فوق البلاط مباشرة بكفاءة عالية وضمان حقيقي.' },
            { question: 'ما هو أفضل عزل للسطح المبلط؟', answer: 'يعتمد على الاستخدام. إذا كان السطح يستخدم للمشي، ننصح بالعزل الشفاف أو الإيبوكسي. إذا كان غير مستخدم، فالفوم هو الأفضل.' },
            { question: 'هل يمنع العزل الحرارة؟', answer: 'نعم، خاصة عند استخدام الفوم أو المواد العاكسة للحرارة، ستشعر بفرق كبير في تكييف المنزل.' },
        ],
        gallery: [
            { src: '/thermcoat_termal_acoustic_insulation_pu_spray_foam_3.webp', alt: 'عزل فوق البلاط', title: 'عزل الأسطح المبلطة' },
            { src: '/spray-foam-roofing-01.webp', alt: 'عزل فوم للبلاط', title: 'طبقة حماية للبلاط' },
        ],
        testimonials: [
            { name: 'خالد العنزي', location: 'الرياض - حي الروضة', rating: 5, text: 'كنت شايل هم التكسير، لكن الشباب الله يعطيهم العافية عزلوا السطح فوق البلاط وشغلهم ممتاز.', service: 'عزل مبلط', date: '2024-01-20' },
        ],
    },
    'shincko-insulation': {
        slug: 'shincko-insulation',
        icon: WrenchScrewdriverIcon,
        title: 'عزل شينكو ومستودعات بالرياض',
        shortTitle: 'عزل شينكو',
        subtitle: 'حلول عزل حراري وصوتي للهناجر والمستودعات',
        metaDescription: 'شركة عزل شينكو وهناجر بالرياض. عزل فوم بولي يوريثان للأسطح المعدنية. حماية من الصدأ والحرارة وتخفيض فواتير الكهرباء. ضمان شامل.',
        description: 'خدمات متخصصة في عزل هناجر الشينكو والمستودعات باستخدام الفوم. حل نهائي لمشاكل الحرارة العالية وتسربات مياه الأمطار وضجيج المطر.',
        longDescription: `تعاني الهناجر والمستودعات (الشينكو) في الرياض من ارتفاع شديد في درجات الحرارة صيفاً، مما قد يتلف البضائع المخزنة ويجعل بيئة العمل لا تطاق.
كما تعاني من تسربات الأمطار وضجيجها العالي.

الحل الأمثل والوحيد الفعال هو **عزل الفوم بولي يوريثان**.
يتميز بقدرته على الالتصاق بالأسطح المعدنية المتعرجة، ويغلق جميع الفتحات وأماكن المسامير، مما يمنع التسرب تماماً ويعزل الحرارة بنسبة كبيرة.`,
        features: [
            { title: 'عزل حراري قوي جداً', desc: 'يخفض الحرارة 15-20 درجة' },
            { title: 'يمنع تسربات الأمطار', desc: 'إغلاق محكم' },
            { title: 'يقلل ضجيج المطر', desc: 'عزل صوتي' },
            { title: 'يحمي الشينكو من الصدأ', desc: 'يطيل عمر السقف' },
            { title: 'سعر اقتصادي', desc: 'مقارنة بالبدائل' },
            { title: 'سرعة التنفيذ', desc: 'آلاف الأمتار في أيام' },
        ],
        process: [
            { step: 'غسيل السطح بالماء وضغط الهواء', desc: 'تنظيف شامل' },
            { step: 'رش الفوم بالسماكة المطلوبة', desc: '3 سم كمتوسط' },
            { step: 'دهان طبقة أكريليك', desc: 'حماية من الشمس' },
            { step: 'التركيز على أماكن المسامير والوصلات', desc: 'نقاط الضعف' },
        ],
        price: 'يبدأ من 20 ريال للمتر',
        warranty: '10 سنوات',
        duration: 'يومين لكل 1000 متر',
        color: 'from-[#0d64ab] to-[#6c757d]',
        rating: 4.8,
        reviews: 140,
        faqs: [
            { question: 'هل يحمي الفوم من الصدأ؟', answer: 'نعم، الفوم يمنع وصول الهواء والرطوبة للمعدن، مما يوقف عملية الصدأ تماماً ويحمي السقف.' },
            { question: 'كم سماكة الفوم المناسبة للشينكو؟', answer: 'عادة 3 سم هي السماكة القياسية والكافية لعزل الشينكو في الرياض.' },
            { question: 'هل يتحمل المشي فوقه؟', answer: 'عزل الفوم للشينكو يكون بكثافة عالية تتحمل المشي لأعمال الصيانة الخفيفة.' },
        ],
        gallery: [
            { src: '/best-practices-spray-foam-installation-on-roof.webp', alt: 'عزل شينكو', title: 'عزل سطح مستودع' },
            { src: '/closed-cell-spray-foam-on-house-garage-walls.webp', alt: 'عزل هناجر', title: 'عزل جدران الهناجر' },
        ],
        testimonials: [
            { name: 'شركة الإعمار', location: 'الرياض - الصناعية الثانية', rating: 5, text: 'عزلنا 3 مستودعات معهم. الفرق في الحرارة لا يصدق، والموظفين مرتاحين جداً الآن.', service: 'عزل شينكو', date: '2024-01-10' },
        ],
    },
}

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const service = services[slug as keyof typeof services]

    if (!service) {
        return { title: 'الخدمة غير موجودة' }
    }

    return {
        title: `${service.title} | أفضل شركة عزل بالرياض | 0507961706`,
        description: `${service.metaDescription} اتصل الآن 0507961706 للحصول على عرض سعر مجاني.`,
        keywords: [service.title, service.shortTitle, 'عزل الرياض', 'شركة عزل', 'عزل أسطح بالرياض', 'ضمان 15 سنة'],
        openGraph: {
            title: `${service.title} | 0507961706`,
            description: service.metaDescription,
            type: 'website',
        },
    }
}

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({ slug }))
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params
    const service = services[slug as keyof typeof services]

    if (!service) {
        notFound()
    }

    const IconComponent = service.icon

    return (
        <>
            <Header />
            <main className="pt-20 bg-gray-50">
                {/* Hero Section */}
                <section className={`relative py-16 md:py-24 bg-gradient-to-br ${service.color} text-white overflow-hidden`}>
                    {/* Background Elements */}
                    <div className="absolute inset-0   opacity-10" />
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center space-x-2 space-x-reverse text-sm mb-8 text-white/80">
                            <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
                            <span>/</span>
                            <Link href="/services" className="hover:text-white transition-colors">الخدمات</Link>
                            <span>/</span>
                            <span className="text-white font-medium">{service.shortTitle}</span>
                        </nav>

                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                            <div className="flex-1 text-center lg:text-right">
                                {/* Rating Badge */}
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 border border-white/20">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/40'}`} />
                                        ))}
                                    </div>
                                    <span className="font-bold">{service.rating}</span>
                                    <span className="text-white/80">({service.reviews} تقييم)</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                                    {service.subtitle}
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a href="tel:0507961706" className="inline-flex items-center justify-center gap-2 bg-white text-[#0d64ab] px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                        <PhoneIcon className="w-5 h-5" />
                                        <span>اتصل الآن</span>
                                    </a>
                                    <a href="https://wa.me/966507961706" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.572 2.135.889 3.298.889 3.18 0 5.767-2.587 5.767-5.771.001-3.185-2.585-5.767-5.766-5.767z" /></svg>
                                        <span>واتساب</span>
                                    </a>
                                </div>
                            </div>

                            {/* Icon */}
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-110" />
                                    <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                                        <IconComponent className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto lg:mx-0">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                <div className="text-2xl font-bold">{service.price.split(' ')[2]}</div>
                                <div className="text-sm text-white/80">ريال/متر</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                <div className="text-2xl font-bold">{service.warranty.split(' ')[0]}</div>
                                <div className="text-sm text-white/80">سنوات ضمان</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
                                <div className="text-2xl font-bold">{service.duration.split(' ')[0]}</div>
                                <div className="text-sm text-white/80">أيام</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Content Column */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* About Service */}
                            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-12 h-12 rounded-xl bg-[#0d64ab]/10 flex items-center justify-center">
                                        <CubeIcon className="w-6 h-6 text-[#0d64ab]" />
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-900">عن الخدمة</h2>
                                </div>
                                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed whitespace-pre-line">
                                    {service.longDescription}
                                </div>
                            </section>

                            {/* Features */}
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-12 h-12 rounded-xl bg-[#0d64ab]/10 flex items-center justify-center">
                                        <CheckCircleIcon className="w-6 h-6 text-[#0d64ab]" />
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-900">مميزات الخدمة</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[#0d64ab]/30 hover:shadow-lg transition-all group">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                                                    <CheckCircleIcon className="w-5 h-5 text-green-600 group-hover:text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                                                    <p className="text-sm text-gray-500">{feature.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Process */}
                            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="w-12 h-12 rounded-xl bg-[#0d64ab]/10 flex items-center justify-center">
                                        <ClockIcon className="w-6 h-6 text-[#0d64ab]" />
                                    </span>
                                    <h2 className="text-2xl font-bold text-gray-900">خطوات تنفيذ العمل</h2>
                                </div>
                                <div className="space-y-6">
                                    {service.process.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 md:gap-6 group">
                                            <div className="flex-shrink-0 relative">
                                                <div className="w-12 h-12 rounded-full bg-[#0d64ab] text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                                    {idx + 1}
                                                </div>
                                                {idx < service.process.length - 1 && (
                                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gray-200" />
                                                )}
                                            </div>
                                            <div className="pt-2">
                                                <h3 className="font-bold text-gray-900 mb-1">{item.step}</h3>
                                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Gallery */}
                            <ServiceGallery images={service.gallery} title="معرض أعمالنا" />

                            {/* Testimonials */}
                            <ServiceTestimonials testimonials={service.testimonials} serviceTitle={service.shortTitle} />

                            {/* FAQ */}
                            <ServiceFAQ faqs={service.faqs} serviceTitle={service.shortTitle} />
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24 space-y-6">
                                {/* Service Card */}
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">تفاصيل الخدمة</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                            <span className="text-gray-600">السعر التقريبي</span>
                                            <span className="font-bold text-[#0d64ab]">{service.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                            <span className="text-gray-600">فترة الضمان</span>
                                            <span className="font-bold text-[#0d64ab]">{service.warranty}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                            <span className="text-gray-600">مدة التنفيذ</span>
                                            <span className="font-bold text-[#0d64ab]">{service.duration}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        <a href="tel:0507961706" className="flex items-center justify-center gap-2 w-full bg-[#0d64ab] hover:bg-[#094a83] text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                                            <PhoneIcon className="w-5 h-5" />
                                            اتصل الآن
                                        </a>
                                        <a href="https://wa.me/966507961706" className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                                            واتساب
                                        </a>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <div className="inline-flex items-center gap-2 text-green-600 text-sm bg-green-50 px-4 py-2 rounded-full">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            نستقبل الطلبات الآن
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">لماذا تختارنا؟</h3>
                                    <ul className="space-y-3">
                                        {['عمالة فنية مدربة ومحترفة', 'مواد عزل عالية الجودة', 'ضمان حقيقي موثق', 'سرعة في الإنجاز والتسليم'].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                                                <CheckCircleIcon className="w-5 h-5 text-[#0d64ab] flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Location */}
                                <div className="bg-gradient-to-br from-[#0d64ab]/5 to-[#05ccca]/5 rounded-2xl p-6 border border-[#0d64ab]/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <MapPinIcon className="w-6 h-6 text-[#0d64ab]" />
                                        <h3 className="font-bold text-gray-900">مناطق الخدمة</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">نخدم جميع أحياء الرياض والخرج ومحيطها</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA */}
                <section className="py-16 bg-gradient-to-r from-[#0d64ab] to-[#05ccca]">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">جاهز لحماية مبناك؟</h2>
                        <p className="text-white/90 mb-8 text-lg">احصل على معاينة مجانية وعرض سعر فوري اليوم</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:0507961706" className="bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                اتصل الآن
                            </a>
                            <a href="https://wa.me/966507961706" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors">
                                طلب عرض سعر
                            </a>
                        </div>
                    </div>
                </section>

                {/* Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": service.title,
                            "description": service.description,
                            "provider": {
                                "@type": "LocalBusiness",
                                "name": "شركة عزل اسطح الرياض",
                                "telephone": "0507961706",
                                "address": { "@type": "PostalAddress", "addressLocality": "الرياض", "addressCountry": "SA" }
                            },
                            "areaServed": { "@type": "City", "name": "الرياض" },
                            "aggregateRating": { "@type": "AggregateRating", "ratingValue": service.rating, "reviewCount": service.reviews }
                        })
                    }}
                />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    )
}
