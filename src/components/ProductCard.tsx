"use client";

import { useRef, useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import { Play } from "lucide-react";

interface ProductCardProps {
  title: string;
  image: string;
  video?: string;
  category: string;
  minOrder: string;
  priceRange: string;
}

export function ProductCard({
  title,
  image,
  video,
  category,
  minOrder,
  priceRange,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection observer for mobile auto-play
  useEffect(() => {
    if (!isMobile || !video || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile, video]);

  // Play/pause video based on hover (desktop) or in-view (mobile)
  useEffect(() => {
    if (!videoRef.current || !video) return;

    const shouldPlay = isMobile ? inView : isHovered;
    if (shouldPlay) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, inView, isMobile, video]);

  const showVideo = video && (isMobile ? inView : isHovered);

  return (
    <>
      <div
        ref={cardRef}
        className="product-card group relative bg-card-bg rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (isMobile && video) setShowFullscreen(true);
        }}
      >
        {/* Image / Video container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Video overlay */}
          {video && (
            <div
              className={`video-overlay absolute inset-0 ${showVideo ? "in-view" : ""}`}
            >
              <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}

          {/* Play icon indicator */}
          {video && !showVideo && (
            <div className="absolute bottom-3 right-3 bg-black/60 rounded-full p-2">
              <Play size={16} className="text-white" fill="white" />
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded">
            {category}
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="font-semibold text-primary text-sm mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center justify-between text-xs text-muted">
            <span className="font-medium text-accent text-sm">{priceRange}</span>
            <span>Min: {minOrder}</span>
          </div>
        </div>
      </div>

      {/* Fullscreen video modal (mobile) */}
      {showFullscreen && video && (
        <div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          onClick={() => setShowFullscreen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white z-10 bg-white/20 rounded-full p-2"
            onClick={() => setShowFullscreen(false)}
            aria-label="Close video"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <video
            src={video}
            autoPlay
            loop
            playsInline
            controls
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
