"use client";

import { useRef, useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import { Play, Eye } from "lucide-react";

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

  useEffect(() => {
    if (!isMobile || !video || !cardRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile, video]);

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
        className="product-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 cursor-pointer border border-border hover:border-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (isMobile && video) setShowFullscreen(true);
        }}
      >
        {/* Image / Video container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2.5 shadow-lg">
              <Play size={14} className="text-white" fill="white" />
            </div>
          )}

          {/* Quick view on hover */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <button className="w-full bg-white/95 backdrop-blur-sm text-primary font-semibold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg">
              <Eye size={14} />
              Quick View
            </button>
          </div>

          {/* Category badge */}
          <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
            {category}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-semibold text-primary text-sm mb-3 line-clamp-2 leading-snug">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-accent text-base">{priceRange}</span>
            <span className="text-[11px] text-muted bg-gray-50 px-2.5 py-1 rounded-full font-medium">
              Min: {minOrder}
            </span>
          </div>
        </div>
      </div>

      {/* Fullscreen video modal (mobile) */}
      {showFullscreen && video && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setShowFullscreen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white z-10 bg-white/15 backdrop-blur-sm rounded-full p-3 hover:bg-white/25 transition-colors"
            onClick={() => setShowFullscreen(false)}
            aria-label="Close video"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
