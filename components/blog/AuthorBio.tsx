import { UserCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

interface AuthorBioProps {
    name: string
    bio?: string
    avatar?: string
    role?: string
}

export default function AuthorBio({ name, bio, avatar, role = 'فريق التحرير' }: AuthorBioProps) {
    return (
        <div className="bg-gradient-to-br from-[#0d64ab]/5 to-[#05ccca]/5 rounded-2xl p-6 border border-[#0d64ab]/10">
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                    {avatar ? (
                        <img
                            src={avatar}
                            alt={name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0d64ab] to-[#05ccca] flex items-center justify-center border-4 border-white shadow-lg">
                            <UserCircleIcon className="w-12 h-12 text-white" />
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
                        <span className="text-xs bg-[#0d64ab] text-white px-2 py-0.5 rounded-full">
                            {role}
                        </span>
                    </div>

                    {bio ? (
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {bio}
                        </p>
                    ) : (
                        <p className="text-gray-600 text-sm leading-relaxed">
                            نحن فريق من الخبراء المتخصصين في مجال عزل الأسطح وكشف التسربات. نقدم محتوى موثوق ومفيد لمساعدتكم في حماية مبانيكم.
                        </p>
                    )}

                    {/* CTA */}
                    <div className="mt-4 flex items-center gap-3">
                        <Link
                            href="tel:0574666444"
                            className="inline-flex items-center gap-2 text-[#0d64ab] hover:text-[#0a5a9a] font-medium text-sm transition-colors"
                        >
                            <span>تواصل معنا</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
