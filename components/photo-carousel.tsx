"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play, X, Maximize2 } from "lucide-react"

const photos = [
  {
    id: 1,
    src:'/velmaCas/velmaCas1.jpg',
    alt: 'photo'
  },
  {
    id: 2,
    src: "/velmaCas/velmaCas2.jpg",
    alt: 'photo'
  },
  {
    id: 3,
    src: "/velmaCas/velmaCas3.jpg",
    alt: 'photo'
  },
  {
    id: 4,
    src: "/velmaCas/velmaCas4.jpg",
    alt: 'photo'
  },
  {
    id: 5,
    src: "/velmaCas/velmaCas5.jpg",
    alt: 'photo'
  },
  {
    id: 6,
    src: "/velmaCas/velmaCas6.webp",
    alt: 'photo'
  },
  {
    id: 7,
    src: "/velmaCas/velmaCas7.jpg",
    alt: 'photo'
  },
  {
    id: 8,
    src: "/velmaCas/velmaCas8.jpg",
    alt: 'photo'
  },
  {
    id: 9,
    src: "/velmaCas/velmaCas9.webp",
    alt: 'photo'
  },
  {
    id: 10,
    src: "/velmaCas/velmaCas10.webp",
    alt: 'photo'
  },
  {
    id: 11,
    src: "/velmaCas/velmaCas11.webp",
    alt: 'photo'
  },
  
  
  
]

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying || isFullscreen) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isPlaying, isFullscreen])

  // Handle escape key for fullscreen
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false)
      }
    }

    if (isFullscreen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isFullscreen])

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const openFullscreen = () => {
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
  }

  // Fullscreen Modal Component
  const FullscreenModal = () => (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
        onClick={closeFullscreen}
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
        onClick={prevPhoto}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
        onClick={nextPhoto}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Main image container */}
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="relative max-w-full max-h-full">
          <Image
            src={photos[currentIndex].src || "/placeholder.svg"}
            alt={photos[currentIndex].alt}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <p className="text-white text-xl font-medium text-center">{photos[currentIndex].caption}</p>
        <p className="text-white/80 text-sm text-center mt-2">
          {currentIndex + 1} of {photos.length}
        </p>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <div className="flex space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-0">
            {/* Main Image Display */}
            <div className="relative bg-slate-100 flex items-center justify-center min-h-[400px] max-h-[600px]">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={photos[currentIndex].src || "/placeholder.svg"}
                  alt={photos[currentIndex].alt}
                  width={800}
                  height={600}
                  className="object-contain max-w-full max-h-full cursor-pointer"
                  style={{ width: 'auto', height: 'auto', maxHeight: '600px' }}
                  onClick={openFullscreen}
                />
              </div>

              {/* Navigation Overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/80 hover:bg-white/90 text-slate-800"
                  onClick={prevPhoto}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/80 hover:bg-white/90 text-slate-800"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>

              {/* Control buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/80 hover:bg-white/90 text-slate-800"
                  onClick={openFullscreen}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/80 hover:bg-white/90 text-slate-800"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <p className="text-white text-lg font-medium text-center">{photos[currentIndex].caption}</p>
                <p className="text-white/80 text-sm text-center mt-1">
                  {currentIndex + 1} of {photos.length}
                </p>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="p-4 bg-white">
              <div className="flex justify-center space-x-2 overflow-x-auto">
                {photos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      index === currentIndex
                        ? "border-slate-800 ring-2 ring-slate-300"
                        : "border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      width={64}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="px-4 pb-4">
              <div className="flex justify-center space-x-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? "bg-slate-800" : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && <FullscreenModal />}
    </>
  )
}