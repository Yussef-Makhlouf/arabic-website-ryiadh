'use client'

import { useState } from 'react'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, PhotoIcon } from '@heroicons/react/24/outline'

interface GalleryImage {
    src: string
    alt: string
    title?: string
}

interface ServiceGalleryProps {
    images: GalleryImage[]
    title?: string
}

export default function ServiceGallery({ images, title = 'معرض الصور' }: ServiceGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const openLightbox = (index: number) => {
        setSelectedImage(index)
        document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
        setSelectedImage(null)
        document.body.style.overflow = 'auto'
    }

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length)
        }
    }

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length)
        }
    }

    if (images.length === 0) return null

    return (
        <section className="py-12">
            <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-12 rounded-xl bg-[#0d64ab]/10 flex items-center justify-center">
                    <PhotoIcon className="w-7 h-7 text-[#0d64ab]" />
                </span>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    <p className="text-gray-500 text-sm">صور من أعمالنا السابقة</p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        {/* Placeholder with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0d64ab]/20 to-[#05ccca]/20 flex items-center justify-center">
                            <PhotoIcon className="w-12 h-12 text-[#0d64ab]/40" />
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-sm bg-[#0d64ab] px-4 py-2 rounded-full">
                                عرض الصورة
                            </span>
                        </div>

                        {/* Image Title */}
                        {image.title && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                                <span className="text-white text-sm font-medium">{image.title}</span>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                        <XMarkIcon className="w-6 h-6 text-white" />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage() }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage() }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                        <ChevronRightIcon className="w-6 h-6 text-white" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="max-w-4xl max-h-[80vh] w-full aspect-video bg-gray-800 rounded-2xl overflow-hidden flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="text-center p-8">
                            <PhotoIcon className="w-24 h-24 text-gray-600 mx-auto mb-4" />
                            <p className="text-gray-400 text-lg">{images[selectedImage].alt}</p>
                            {images[selectedImage].title && (
                                <p className="text-white text-xl font-bold mt-2">{images[selectedImage].title}</p>
                            )}
                        </div>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full">
                        <span className="text-white text-sm">
                            {selectedImage + 1} / {images.length}
                        </span>
                    </div>
                </div>
            )}
        </section>
    )
}
