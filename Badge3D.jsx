import { useState, useEffect } from 'react'

const Badge3D = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    const handler = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const transformStyle = isHovered && !isReducedMotion 
    ? 'rotateX(2deg) rotateY(2deg) scale(1.02)' 
    : 'rotateX(0deg) rotateY(0deg) scale(1)'

  return (
    <div className="flex justify-center lg:justify-end">
      <div 
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Badge */}
        <div 
          className={`
            w-80 h-80 rounded-full relative overflow-hidden
            transition-transform duration-150 ease-out
          `}
          style={{
            transform: transformStyle,
            background: `
              radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 50%),
              linear-gradient(135deg, #B48D3A 0%, #8B6914 50%, #B48D3A 100%)
            `,
            boxShadow: `
              0 20px 40px rgba(0,0,0,0.15),
              inset 0 2px 4px rgba(255,255,255,0.3),
              inset 0 -2px 4px rgba(0,0,0,0.2)
            `
          }}
        >
          {/* Inner Circle */}
          <div 
            className="absolute inset-4 rounded-full flex items-center justify-center"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 50%),
                linear-gradient(135deg, #D4AF37 0%, #B8860B 50%, #D4AF37 100%)
              `,
              boxShadow: `
                inset 0 4px 8px rgba(0,0,0,0.2),
                inset 0 -2px 4px rgba(255,255,255,0.3)
              `
            }}
          >
            {/* Logo */}
            <div className="text-center">
              <img 
                src="/quentlex-logo.svg" 
                alt="Quentlex" 
                className="w-32 h-auto mb-2 opacity-90"
              />
              <div className="text-white font-serif font-bold text-sm tracking-wider">
                VERIFIED SEAL
              </div>
            </div>
          </div>
          
          {/* Rim Highlight */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                conic-gradient(
                  from 0deg,
                  transparent 0deg,
                  rgba(255,255,255,0.4) 45deg,
                  transparent 90deg,
                  transparent 270deg,
                  rgba(255,255,255,0.4) 315deg,
                  transparent 360deg
                )
              `
            }}
          />
          
          {/* Subtle Shimmer Effect */}
          <div 
            className={`
              absolute inset-0 rounded-full opacity-30
              ${isHovered && !isReducedMotion ? 'animate-pulse' : ''}
            `}
            style={{
              background: `
                linear-gradient(
                  45deg,
                  transparent 30%,
                  rgba(255,255,255,0.3) 50%,
                  transparent 70%
                )
              `
            }}
          />
        </div>
        
        {/* Glow Effect */}
        <div 
          className={`
            absolute inset-0 rounded-full -z-10
            transition-opacity duration-300
            ${isHovered ? 'opacity-60' : 'opacity-30'}
          `}
          style={{
            background: `radial-gradient(circle, rgba(180,141,58,0.3) 0%, transparent 70%)`,
            filter: 'blur(20px)',
            transform: 'scale(1.2)'
          }}
        />
      </div>
    </div>
  )
}

export default Badge3D

