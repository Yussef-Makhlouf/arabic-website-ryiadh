import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon, TagIcon, BookOpenIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import AuthorBio from '@/components/blog/AuthorBio'
import SocialShare from '@/components/blog/SocialShare'

import { blogPosts } from '@/lib/blog-data'

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
        title: `${post.title} | شركة عزل الرياض | 0574666444`,
        description: `${post.excerpt} للاستشارة المجانية اتصل 0574666444`,
        keywords: [...post.tags, 'عزل الرياض', 'شركة عزل'],
        openGraph: {
            title: `${post.title} | 0574666444`,
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
                    <div className="absolute inset-0   opacity-10" />
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
                            {/* Featured Image */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 border border-[#0d64ab]/10 shadow-md">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
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
                                <a href="tel:0574666444" className="block w-full bg-white text-[#0d64ab] text-center py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
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
                                        <div className="relative aspect-video bg-gray-100">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
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
                            <a href="tel:0574666444" className="bg-white text-[#0d64ab] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                                اتصل الآن
                            </a>
                            <a href="https://wa.me/966574666444" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg">
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
