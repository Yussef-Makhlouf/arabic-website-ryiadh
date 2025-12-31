import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon, TagIcon, BookOpenIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import AuthorBio from '@/components/blog/AuthorBio'
import SocialShare from '@/components/blog/SocialShare'

const blogPosts = {
    'best-roof-insulation-types': {
        slug: 'best-roof-insulation-types',
        title: 'أفضل أنواع عزل الأسطح في الرياض',
        excerpt: 'دليل شامل لأنواع عزل الأسطح المتاحة في السوق السعودي ومميزات كل نوع.',
        category: 'عزل الأسطح',
        author: 'فريق عزل اسطح الرياض',
        authorRole: 'خبراء العزل',
        date: '2024-01-15',
        readTime: '8 دقائق',
        image: '/foam-insulation.jpg',
        content: `## مقدمة

يعتبر عزل الأسطح من أهم الخطوات للحفاظ على المباني في الرياض، خاصة مع ارتفاع درجات الحرارة في الصيف التي قد تصل إلى أكثر من 45 درجة مئوية. في هذا المقال، سنستعرض أفضل أنواع عزل الأسطح المتاحة في السوق السعودي.

## أنواع عزل الأسطح

### 1. عزل الفوم بولي يوريثان

يعتبر عزل الفوم من أحدث وأفضل أنواع العزل المتاحة حالياً. يتميز بقدرته على توفير عزل حراري ومائي في آن واحد.

**المميزات:**
- عزل حراري ممتاز يوفر حتى 50% من فاتورة الكهرباء
- عزل مائي متكامل
- خفة الوزن على السطح
- عمر افتراضي يتجاوز 25 سنة
- ضمان يصل إلى 10 سنوات

**السعر التقريبي:** 25-45 ريال للمتر المربع

### 2. العزل المائي البيتوميني

العزل المائي التقليدي باستخدام مادة البيتومين أو القار. مثالي للحماية من تسربات المياه.

**المميزات:**
- حماية ممتازة من التسربات
- تكلفة معقولة
- سهولة التطبيق
- مرونة في التعامل مع تمدد السطح

**السعر التقريبي:** 20-35 ريال للمتر المربع

### 3. العازل الأسمنتي

خيار ممتاز للأسطح الخرسانية والخزانات. يتميز بالمتانة العالية ومقاومة العوامل الجوية.

**المميزات:**
- متانة عالية جداً
- مناسب للخزانات ومياه الشرب
- مقاومة للتآكل والأملاح
- عمر افتراضي طويل

**السعر التقريبي:** 18-30 ريال للمتر المربع

## كيف تختار النوع المناسب؟

اختيار نوع العزل يعتمد على عدة عوامل:

1. **الميزانية المتاحة:** عزل الفوم أغلى لكنه يوفر في فاتورة الكهرباء على المدى الطويل
2. **طبيعة السطح:** بعض الأسطح تناسبها أنواع معينة أكثر من غيرها
3. **المشكلة الرئيسية:** هل هي حرارة أم تسربات أم كلاهما؟
4. **عمر المبنى:** المباني القديمة قد تحتاج معالجة خاصة

## نصائح مهمة

- اختر شركة عزل معتمدة ولديها ضمان
- تأكد من استخدام مواد عالية الجودة
- اطلب رؤية مشاريع سابقة للشركة
- قارن بين العروض قبل الاختيار

## الخلاصة

لا يوجد نوع عزل واحد يناسب جميع المباني. الأفضل هو الاستعانة بخبير لتقييم وضع السطح واقتراح النوع الأنسب. في شركة عزل اسطح الرياض، نقدم استشارة مجانية لمساعدتك في اختيار الحل الأمثل.`,
        relatedPosts: ['foam-vs-waterproof-insulation', 'insulation-reduces-electricity-bill'],
        tags: ['عزل الأسطح', 'عزل فوم', 'عزل مائي', 'الرياض']
    },
    'foam-vs-waterproof-insulation': {
        slug: 'foam-vs-waterproof-insulation',
        title: 'الفرق بين عزل الفوم والعزل المائي: أيهما أفضل؟',
        excerpt: 'مقارنة تفصيلية بين عزل الفوم بولي يوريثان والعزل المائي التقليدي.',
        category: 'مقارنات',
        author: 'م. أحمد السعيد',
        authorRole: 'مهندس عزل',
        date: '2024-01-10',
        readTime: '10 دقائق',
        image: '/waterproof-insulation.jpg',
        content: `## مقدمة

كثيراً ما يتساءل أصحاب المباني عن الفرق بين عزل الفوم والعزل المائي وأيهما أفضل لسطحهم. في هذا المقال، نقدم مقارنة تفصيلية تساعدك في اتخاذ القرار الصحيح.

## ما هو عزل الفوم؟

عزل الفوم بولي يوريثان هو مادة عازلة حديثة يتم رشها على السطح حيث تتمدد وتكون طبقة عازلة متماسكة. يوفر عزل حراري ومائي في نفس الوقت.

## ما هو العزل المائي؟

العزل المائي هو طبقة تحمي السطح من تسرب المياه، وعادة ما يكون من مادة البيتومين أو الممبرين أو الرولات العازلة.

## جدول المقارنة

| المعيار | عزل الفوم | العزل المائي |
|---------|----------|--------------|
| العزل الحراري | ممتاز | ضعيف |
| العزل المائي | جيد جداً | ممتاز |
| السعر | أعلى | أقل |
| العمر الافتراضي | 25+ سنة | 15+ سنة |
| توفير الطاقة | حتى 50% | حتى 20% |
| الضمان | 10 سنوات | 7 سنوات |

## متى تختار عزل الفوم؟

- إذا كانت مشكلتك الرئيسية هي الحرارة العالية
- إذا كنت تريد توفير في فاتورة الكهرباء
- للمباني الجديدة التي تحتاج حماية شاملة

## متى تختار العزل المائي؟

- إذا كانت مشكلتك الرئيسية هي تسربات المياه
- للميزانيات المحدودة
- للأسطح التي تحتاج صيانة دورية

## توصيتنا

في معظم الحالات في الرياض، ننصح بعزل الفوم لأنه يحل مشكلة الحرارة العالية التي هي التحدي الأكبر. لكن لكل مبنى ظروفه الخاصة، لذا ننصح بالاستشارة قبل الاختيار.`,
        relatedPosts: ['best-roof-insulation-types', 'insulation-reduces-electricity-bill'],
        tags: ['عزل فوم', 'عزل مائي', 'مقارنة']
    },
    'protect-home-from-leaks': {
        slug: 'protect-home-from-leaks',
        title: 'كيف تحمي منزلك من تسربات المياه؟',
        excerpt: 'نصائح عملية لحماية منزلك من تسربات المياه والرطوبة.',
        category: 'كشف التسربات',
        author: 'فريق عزل اسطح الرياض',
        authorRole: 'فريق التحرير',
        date: '2024-01-05',
        readTime: '6 دقائق',
        image: '/water-leak.avif',
        content: `## مقدمة

تسربات المياه من أخطر المشاكل التي تواجه المباني، فهي قد تسبب أضراراً هيكلية جسيمة إذا لم يتم اكتشافها وعلاجها مبكراً.

## علامات تسرب المياه

1. **بقع رطوبة على الجدران أو السقف**
2. **تقشر الطلاء أو الدهان**
3. **روائح عفن أو رطوبة**
4. **ارتفاع فاتورة المياه بشكل غير مبرر**
5. **ظهور ملح أو بقع بيضاء على الجدران**

## أسباب تسربات المياه

- تلف أو انسداد مواسير المياه
- ضعف أو تلف عزل السطح
- شروخ في الجدران أو الأسقف
- تلف وصلات المواسير
- مشاكل في السباكة

## كيفية الوقاية

### 1. الصيانة الدورية
افحص مواسير المياه والسباكة بانتظام، خاصة في الحمامات والمطابخ.

### 2. عزل السطح
تأكد من وجود عزل جيد للسطح وقم بصيانته دورياً.

### 3. عزل الخزانات
الخزانات غير المعزولة قد تكون مصدراً للتسربات.

### 4. الكشف المبكر
عند ملاحظة أي علامة من علامات التسرب، اتصل بمتخصص فوراً.

## خدمات كشف التسربات

نستخدم في شركتنا أحدث أجهزة كشف التسربات الإلكترونية التي تحدد مكان التسرب بدقة دون الحاجة للتكسير.

## الخلاصة

الوقاية خير من العلاج. الصيانة الدورية والكشف المبكر يوفران الكثير من المال والجهد.`,
        relatedPosts: ['best-roof-insulation-types', 'tank-insulation-guide'],
        tags: ['تسربات المياه', 'كشف تسربات', 'صيانة']
    },
    'insulation-reduces-electricity-bill': {
        slug: 'insulation-reduces-electricity-bill',
        title: 'كيف يوفر العزل الحراري في فاتورة الكهرباء؟',
        excerpt: 'اكتشف كيف يمكن لعزل السطح توفير حتى 50% من فاتورة الكهرباء.',
        category: 'توفير الطاقة',
        author: 'م. خالد العتيبي',
        authorRole: 'خبير توفير الطاقة',
        date: '2024-01-02',
        readTime: '7 دقائق',
        image: '/energy-saving.jpg',
        content: `## مقدمة

فاتورة الكهرباء في الصيف بالرياض قد تكون مرتفعة جداً بسبب تشغيل المكيفات لفترات طويلة. العزل الحراري الجيد يمكن أن يخفض هذه الفاتورة بشكل ملحوظ.

## كيف يعمل العزل الحراري؟

العزل الحراري يعمل كحاجز يمنع انتقال الحرارة من الخارج إلى الداخل صيفاً، ومن الداخل إلى الخارج شتاءً.

## نسب التوفير المتوقعة

| نوع العزل | نسبة التوفير |
|----------|--------------|
| عزل فوم عالي الكثافة | 40-50% |
| عزل فوم متوسط الكثافة | 30-40% |
| عزل الصوف الصخري | 25-35% |
| بدون عزل | 0% |

## حساب التوفير الفعلي

### مثال عملي:
- فاتورة الكهرباء قبل العزل: 1500 ريال شهرياً (صيفاً)
- بعد عزل الفوم (توفير 40%): 900 ريال شهرياً
- التوفير الشهري: 600 ريال
- التوفير السنوي (4 أشهر صيف): 2400 ريال

### العائد على الاستثمار:
إذا كانت تكلفة العزل لمبنى متوسط حوالي 8000 ريال، فإن العزل يسترد تكلفته خلال 3-4 سنوات، ثم يصبح التوفير صافياً لباقي عمر المبنى.

## نصائح لتعظيم التوفير

1. اختر سماكة عزل مناسبة (3-5 سم للفوم)
2. تأكد من تغطية كامل السطح بدون فجوات
3. استخدم عزل عاكس للحرارة
4. اهتم بعزل النوافذ أيضاً

## الخلاصة

العزل الحراري استثمار ذكي يوفر المال على المدى الطويل ويحسن راحة السكن.`,
        relatedPosts: ['best-roof-insulation-types', 'foam-vs-waterproof-insulation'],
        tags: ['توفير الكهرباء', 'عزل حراري', 'فاتورة الكهرباء']
    },
    'tank-insulation-guide': {
        slug: 'tank-insulation-guide',
        title: 'دليل عزل خزانات المياه: أنواعه وأهميته',
        excerpt: 'كل ما تحتاج معرفته عن عزل خزانات المياه.',
        category: 'عزل الخزانات',
        author: 'فريق عزل اسطح الرياض',
        authorRole: 'فريق التحرير',
        date: '2023-12-28',
        readTime: '5 دقائق',
        image: '/tank-insulation.jpg',
        content: `## أهمية عزل خزانات المياه

خزان المياه غير المعزول يتعرض لعدة مشاكل:
- تلوث المياه بسبب تسرب مواد من الخزان
- نمو البكتيريا والطحالب
- تسرب المياه وهدرها
- تأثر طعم ورائحة المياه

## أنواع عزل الخزانات

### 1. عزل الإيبوكسي
- آمن صحياً 100%
- معتمد من وزارة الصحة
- عمر افتراضي طويل
- لا يؤثر على طعم المياه

### 2. العزل الأسمنتي
- متانة عالية
- تكلفة اقتصادية
- مناسب للخزانات الكبيرة

## خطوات عزل الخزان

1. تفريغ الخزان بالكامل
2. تنظيف وتعقيم الخزان
3. معالجة الشروخ والتصدعات
4. تطبيق العزل
5. تجفيف العزل
6. فحص الجودة
7. إعادة ملء الخزان

## نصائح مهمة

- اختر مواد عزل معتمدة صحياً
- قم بصيانة دورية للخزان سنوياً
- نظف الخزان كل 6 أشهر
- تأكد من إحكام الغطاء

## الخلاصة

عزل الخزان ضروري لصحة الأسرة وسلامة مياه الشرب.`,
        relatedPosts: ['protect-home-from-leaks', 'best-roof-insulation-types'],
        tags: ['عزل خزانات', 'مياه الشرب', 'صحة']
    },
    'insulation-warranty-importance': {
        slug: 'insulation-warranty-importance',
        title: 'لماذا الضمان مهم عند اختيار شركة عزل؟',
        excerpt: 'تعرف على أهمية الضمان في خدمات العزل وما يجب أن يتضمنه.',
        category: 'نصائح',
        author: 'فريق عزل اسطح الرياض',
        authorRole: 'فريق التحرير',
        date: '2023-12-20',
        readTime: '4 دقائق',
        image: '/warranty.jpg',
        content: `## لماذا الضمان مهم؟

الضمان هو التزام من الشركة بجودة العمل. شركة تقدم ضمان طويل تثق في جودة عملها.

## ما يجب أن يتضمنه الضمان

1. **مدة الضمان الواضحة** (5-10 سنوات للعزل الجيد)
2. **تغطية التسربات** إذا حدثت
3. **الصيانة المجانية** خلال فترة الضمان
4. **شروط الضمان** مكتوبة وواضحة
5. **طريقة التواصل** في حالة وجود مشكلة

## علامات الشركة الموثوقة

- ضمان مكتوب وموثق
- سجل أعمال سابقة
- تقييمات إيجابية من العملاء
- ترخيص رسمي
- فريق عمل متخصص

## نصائح قبل التعاقد

- اقرأ شروط الضمان بعناية
- احتفظ بنسخة من العقد والضمان
- سجل تاريخ بدء وانتهاء الضمان
- التقط صور للعمل المنجز

## في شركتنا

نقدم ضمان يصل إلى 10 سنوات على عزل الفوم، مع صيانة مجانية وخدمة عملاء على مدار الساعة.`,
        relatedPosts: ['best-roof-insulation-types', 'foam-vs-waterproof-insulation'],
        tags: ['ضمان', 'شركة عزل', 'نصائح']
    },
}

function parseMarkdownToHTML(content: string): string {
    let html = content

    // Headings
    html = html.replace(/^### (.+)$/gm, '<h3 id="$1" class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>')
    html = html.replace(/^## (.+)$/gm, '<h2 id="$1" class="text-2xl font-bold text-gray-900 mt-10 mb-5 pb-2 border-b border-gray-100">$1</h2>')

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')

    // Lists
    html = html.replace(/^- (.+)$/gm, '<li class="flex items-start gap-2 mb-2"><span class="text-[#0d64ab] mt-1.5">•</span><span>$1</span></li>')
    html = html.replace(/^(\d+)\. (.+)$/gm, '<li class="flex items-start gap-3 mb-3"><span class="w-6 h-6 bg-[#0d64ab] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">$1</span><span>$2</span></li>')

    // Tables
    html = html.replace(/\|(.+)\|/g, (match) => {
        const cells = match.split('|').filter(c => c.trim())
        if (cells[0].includes('---')) return ''
        const isHeader = cells.some(c => c.includes('المعيار') || c.includes('نوع'))
        const tag = isHeader ? 'th' : 'td'
        const cellClass = isHeader ? 'bg-[#0d64ab] text-white font-bold p-3' : 'p-3 border-b border-gray-100'
        return `<tr>${cells.map(c => `<${tag} class="${cellClass}">${c.trim()}</${tag}>`).join('')}</tr>`
    })

    // Paragraphs
    html = html.split('\n\n').map(p => {
        if (p.startsWith('<') || p.trim() === '') return p
        return `<p class="text-gray-600 leading-relaxed mb-4">${p}</p>`
    }).join('\n')

    return html
}

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = blogPosts[slug as keyof typeof blogPosts]

    if (!post) {
        return { title: 'المقال غير موجود' }
    }

    return {
        title: `${post.title} | مدونة عزل اسطح الرياض`,
        description: post.excerpt,
        keywords: post.tags,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
    }
}

export async function generateStaticParams() {
    return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = blogPosts[slug as keyof typeof blogPosts]

    if (!post) {
        notFound()
    }

    const relatedPostsData = post.relatedPosts
        ?.map(s => blogPosts[s as keyof typeof blogPosts])
        .filter(Boolean) || []

    const headings = post.content.match(/^## .+$/gm)?.map(h => h.replace('## ', '')) || []

    return (
        <>
            <Header />
            <main className="pt-20 bg-gray-50">
                {/* Hero Header */}
                <section className="relative bg-gradient-to-br from-[#0d64ab] to-[#1a7bc4] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

                    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-white">المدونة</Link>
                            <span>/</span>
                            <span className="text-white truncate max-w-[200px]">{post.title}</span>
                        </nav>

                        {/* Category */}
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                            {post.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight max-w-4xl">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                                <UserIcon className="w-5 h-5" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="w-5 h-5" />
                                <span>{new Date(post.date).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="w-5 h-5" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Main Content */}
                        <article className="lg:col-span-8">
                            {/* Featured Image Placeholder */}
                            <div className="bg-gradient-to-br from-[#0d64ab]/10 to-[#05ccca]/10 rounded-2xl aspect-video flex items-center justify-center mb-8 border border-[#0d64ab]/10">
                                <PhotoIcon className="w-20 h-20 text-[#0d64ab]/30" />
                            </div>

                            {/* Article Body */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                                <div
                                    className="prose prose-lg max-w-none"
                                    dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(post.content) }}
                                />
                            </div>

                            {/* Tags */}
                            {post.tags && (
                                <div className="mt-8 flex flex-wrap items-center gap-3">
                                    <TagIcon className="w-5 h-5 text-gray-400" />
                                    {post.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-[#0d64ab]/10 hover:text-[#0d64ab] transition-colors cursor-pointer">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Author Bio */}
                            <div className="mt-8">
                                <AuthorBio name={post.author} role={post.authorRole} />
                            </div>

                            {/* Social Share */}
                            <div className="mt-8">
                                <SocialShare url={`https://example.com/blog/${post.slug}`} title={post.title} />
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-6">
                            {/* Table of Contents */}
                            {headings.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
                                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                                        <span className="w-10 h-10 rounded-xl bg-[#0d64ab]/10 flex items-center justify-center">
                                            <BookOpenIcon className="w-5 h-5 text-[#0d64ab]" />
                                        </span>
                                        <h3 className="font-bold text-gray-900">محتويات المقال</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {headings.map((heading, idx) => (
                                            <li key={idx}>
                                                <a href={`#${heading}`} className="block text-gray-600 hover:text-[#0d64ab] hover:bg-gray-50 px-3 py-2 rounded-lg text-sm transition-colors">
                                                    {heading}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* CTA Card */}
                            <div className="bg-gradient-to-br from-[#0d64ab] to-[#05ccca] rounded-2xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-3">هل تحتاج خدمة عزل؟</h3>
                                <p className="text-white/90 text-sm mb-4">تواصل معنا للحصول على استشارة مجانية وعرض سعر</p>
                                <a href="tel:0500000000" className="block w-full bg-white text-[#0d64ab] text-center py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                                    اتصل الآن
                                </a>
                            </div>
                        </aside>
                    </div>

                    {/* Related Posts */}
                    {relatedPostsData.length > 0 && (
                        <section className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">مقالات ذات صلة</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedPostsData.map(related => (
                                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                                        <div className="aspect-video bg-gradient-to-br from-[#0d64ab]/10 to-[#05ccca]/10 flex items-center justify-center">
                                            <PhotoIcon className="w-12 h-12 text-[#0d64ab]/30 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="p-5">
                                            <span className="text-xs bg-[#0d64ab]/10 text-[#0d64ab] px-2 py-1 rounded-full">{related.category}</span>
                                            <h3 className="font-bold text-gray-900 mt-3 group-hover:text-[#0d64ab] transition-colors line-clamp-2">{related.title}</h3>
                                            <p className="text-gray-500 text-sm mt-2">{related.readTime}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Back Link */}
                    <div className="mt-12">
                        <Link href="/blog" className="inline-flex items-center text-[#0d64ab] hover:text-[#0a5a9a] font-medium group">
                            <ArrowLeftIcon className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
                            العودة للمدونة
                        </Link>
                    </div>
                </div>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-[#0d64ab] to-[#05ccca]">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">هل لديك أسئلة عن العزل؟</h2>
                        <p className="text-white/90 mb-8">تواصل معنا للحصول على استشارة مجانية من خبرائنا</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="tel:0500000000" className="bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                اتصل الآن
                            </a>
                            <a href="https://wa.me/966500000000" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg">
                                واتساب
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
                            "@type": "Article",
                            "headline": post.title,
                            "description": post.excerpt,
                            "author": { "@type": "Person", "name": post.author },
                            "datePublished": post.date,
                            "publisher": { "@type": "Organization", "name": "شركة عزل اسطح الرياض" }
                        })
                    }}
                />
            </main>
            <Footer />
            <FloatingButtons />
        </>
    )
}
