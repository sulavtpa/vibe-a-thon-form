"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface ChibiMascotProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
  imageSrc?: string
  alt: string
  className?: string
  animate?: boolean
}

export function ChibiMascot({ 
  position, 
  imageSrc, 
  alt, 
  className,
  animate = true 
}: ChibiMascotProps) {
  const positionClasses = {
    "top-left": "top-8 left-8",
    "top-right": "top-8 right-8",
    "bottom-left": "bottom-8 left-8",
    "bottom-right": "bottom-8 right-8",
    "center-left": "top-1/2 left-8 -translate-y-1/2",
    "center-right": "top-1/2 right-8 -translate-y-1/2",
  }

  // If no image provided, show a cute placeholder mascot
  if (!imageSrc) {
    return (
      <div 
        className={cn(
          "mascot-container fixed z-20 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56",
          positionClasses[position],
          animate && "animate-float",
          className
        )}
        aria-hidden="true"
      >
        <ChibiPlaceholder />
      </div>
    )
  }

  return (
    <div 
      className={cn(
        "mascot-container fixed z-20 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56",
        positionClasses[position],
        animate && "animate-float",
        className
      )}
      aria-hidden="true"
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={224}
        height={224}
        className="chibi-shadow object-contain w-full h-full drop-shadow-lg"
      />
    </div>
  )
}

// Cute SVG placeholder mascot
function ChibiPlaceholder() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full chibi-shadow">
      {/* Body */}
      <circle cx="50" cy="60" r="30" fill="#8ED9D2" />
      {/* Head */}
      <circle cx="50" cy="35" r="25" fill="#F6EBD7" />
      {/* Eyes */}
      <circle cx="42" cy="32" r="5" fill="#2C2C2C" />
      <circle cx="58" cy="32" r="5" fill="#2C2C2C" />
      {/* Eye shine */}
      <circle cx="44" cy="30" r="2" fill="#FFFFFF" />
      <circle cx="60" cy="30" r="2" fill="#FFFFFF" />
      {/* Blush */}
      <ellipse cx="35" cy="40" rx="5" ry="3" fill="#E3B7A7" opacity="0.6" />
      <ellipse cx="65" cy="40" rx="5" ry="3" fill="#E3B7A7" opacity="0.6" />
      {/* Smile */}
      <path d="M 43 45 Q 50 52 57 45" stroke="#2C2C2C" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Tech antenna */}
      <line x1="50" y1="10" x2="50" y2="18" stroke="#2B9A9A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="8" r="4" fill="#A7372D" />
      {/* Arms */}
      <ellipse cx="25" cy="60" rx="8" ry="12" fill="#8ED9D2" />
      <ellipse cx="75" cy="60" rx="8" ry="12" fill="#8ED9D2" />
    </svg>
  )
}

export function FloatingTechElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Floating circuit elements */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-vibe-teal/20 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-6 h-6 rounded-lg bg-vibe-mint/30 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-1/4 w-10 h-10 rounded-full bg-vibe-red/10 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-4 h-4 rounded bg-vibe-orange/20 animate-bounce-soft" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 right-1/3 w-8 h-8 rounded-full bg-vibe-blush/40 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Code brackets decoration */}
      <div className="absolute top-1/4 left-6 text-4xl font-mono text-vibe-teal/20 animate-bounce-soft hidden lg:block">{"{"}</div>
      <div className="absolute bottom-1/4 right-6 text-4xl font-mono text-vibe-teal/20 animate-bounce-soft hidden lg:block" style={{ animationDelay: '1s' }}>{"}"}</div>
      
      {/* Binary decoration */}
      <div className="absolute top-3/4 left-16 text-xs font-mono text-vibe-mint/30 hidden lg:block">01010</div>
      <div className="absolute top-1/2 right-16 text-xs font-mono text-vibe-mint/30 hidden lg:block">10101</div>
    </div>
  )
}
