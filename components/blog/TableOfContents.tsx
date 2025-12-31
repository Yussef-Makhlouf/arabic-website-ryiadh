'use client'

import { useEffect, useState } from 'react'
import { ListBulletIcon } from '@heroicons/react/24/outline'

interface TOCItem {
    id: string
    text: string
    level: number
}

interface TableOfContentsProps {
    content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
    const [headings, setHeadings] = useState<TOCItem[]>([])
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        // Extract headings from content
        const headingRegex = /^#{2,3}\s+(.+)$/gm
        const matches = Array.from(content.matchAll(headingRegex))

        const items: TOCItem[] = matches.map((match, index) => ({
            id: `heading-${index}`,
            text: match[1].trim(),
            level: match[0].startsWith('###') ? 3 : 2
        }))

        setHeadings(items)
    }, [content])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '-20% 0% -35% 0%' }
        )

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [headings])

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    if (headings.length === 0) return null

    return (
        <nav className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                <span className="w-10 h-10 rounded-xl bg-[#0d64ab]/10 flex items-center justify-center">
                    <ListBulletIcon className="w-5 h-5 text-[#0d64ab]" />
                </span>
                <h3 className="font-bold text-gray-900">محتويات المقال</h3>
            </div>

            <ul className="space-y-2">
                {headings.map((heading) => (
                    <li key={heading.id}>
                        <button
                            onClick={() => scrollToHeading(heading.id)}
                            className={`w-full text-right py-2 px-3 rounded-lg transition-all duration-200 text-sm ${heading.level === 3 ? 'pr-6' : ''
                                } ${activeId === heading.id
                                    ? 'bg-[#0d64ab] text-white font-medium'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#0d64ab]'
                                }`}
                        >
                            {heading.text}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
