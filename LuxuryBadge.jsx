import { useState, useRef, useEffect } from "react"

const LuxuryBadge = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const badgeRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    const handler = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!badgeRef.current || isReducedMotion) return
      
      const rect = badgeRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)
      
      // Constrain to reasonable limits for institutional sophistication
      const constrainedX = Math.max(-0.5, Math.min(0.5, deltaX))
      const constrainedY = Math.max(-0.5, Math.min(0.5, deltaY))
      
      setMousePosition({ x: constrainedX, y: constrainedY })
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
      setIsHovered(false)
    }

    if (isHovered && !isReducedMotion) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHovered, isReducedMotion])

  // Sophisticated 3D transforms - institutional restraint
  const rotateX = mousePosition.y * 12
  const rotateY = mousePosition.x * -12
  const translateZ = isHovered ? 30 : 0
  const scale = isHovered ? 1.08 : 1

  return (
    <div className="flex justify-center lg:justify-end">
      <div 
        ref={badgeRef}
        className="luxury-badge-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          className="luxury-badge"
          style={{
            transform: isReducedMotion ? 'none' : `
              rotateX(${rotateX}deg) 
              rotateY(${rotateY}deg) 
              translateZ(${translateZ}px) 
              scale(${scale})
            `,
            transition: isHovered && !isReducedMotion ? 'none' : 'all 800ms cubic-bezier(0.2, 0.8, 0.2, 1)'
          }}
        >
          {/* Outer Luxury Ring */}
          <div className="badge-outer-ring">
            {/* Inner Verification Content */}
            <div className="badge-inner-content">
              {/* Logo Container with Depth */}
              <div className="badge-logo-container">
                <img 
                  src="/favicon.ico" 
                  alt="Quentlex Institutional Verification" 
                  className="badge-logo"
                />
              </div>
              
              {/* Institutional Text */}
              <div className="badge-text-container">
                <div className="badge-text-primary">VERIFIED SEAL</div>
                <div className="badge-text-secondary">INSTITUTIONAL GRADE</div>
              </div>
            </div>
            
            {/* Animated Verification Glow */}
            <div 
              className="badge-verification-glow"
              style={{
                opacity: isHovered ? 0.8 : 0.4,
                transform: isReducedMotion ? 'none' : `rotate(${mousePosition.x * 20}deg)`
              }}
            />
            
            {/* Luxury Light Sweep */}
            <div 
              className="badge-light-sweep"
              style={{
                opacity: isHovered ? 1 : 0.6,
                animationPlayState: isHovered && !isReducedMotion ? 'running' : 'paused'
              }}
            />
            
            {/* Institutional Pulse */}
            <div 
              className="badge-institutional-pulse"
              style={{
                animationPlayState: isHovered && !isReducedMotion ? 'running' : 'paused'
              }}
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .luxury-badge-container {
          width: 340px;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .luxury-badge {
          width: 320px;
          height: 320px;
          position: relative;
          transform-style: preserve-3d;
        }
        
        .badge-outer-ring {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: 
            radial-gradient(circle at 25% 25%, #F4D03F 0%, #D4AF37 30%, #B48D3A 70%, #8B6914 100%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 40%, rgba(255, 255, 255, 0.1) 100%);
          box-shadow: 
            0 25px 80px rgba(180, 141, 58, 0.5),
            0 12px 32px rgba(0, 0, 0, 0.25),
            inset 0 3px 6px rgba(255, 255, 255, 0.5),
            inset 0 -3px 6px rgba(0, 0, 0, 0.3),
            inset 0 0 0 2px rgba(255, 255, 255, 0.2);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transform-style: preserve-3d;
        }
        
        .badge-inner-content {
          width: 82%;
          height: 82%;
          border-radius: 50%;
          background: 
            radial-gradient(circle at 30% 30%, #FFFFFF 0%, #FAFAFA 40%, #F3F4F6 100%),
            linear-gradient(135deg, rgba(180, 141, 58, 0.08) 0%, transparent 50%, rgba(59, 130, 246, 0.03) 100%);
          box-shadow: 
            inset 0 6px 16px rgba(0, 0, 0, 0.15),
            inset 0 -3px 8px rgba(255, 255, 255, 0.9),
            inset 0 0 0 1px rgba(180, 141, 58, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 3;
          transform: translateZ(10px);
        }
        
        .badge-logo-container {
          width: 90px;
          height: 90px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: 
            radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95) 0%, rgba(243, 244, 246, 0.9) 100%);
          border-radius: 50%;
          box-shadow: 
            0 6px 16px rgba(0, 0, 0, 0.12),
            inset 0 2px 4px rgba(255, 255, 255, 0.95),
            inset 0 -1px 2px rgba(0, 0, 0, 0.05);
          transform: translateZ(8px);
        }
        
        .badge-logo {
          width: 68px;
          height: auto;
          filter: 
            drop-shadow(0 3px 6px rgba(0, 0, 0, 0.15))
            drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
        }
        
        .badge-text-container {
          text-align: center;
          transform: translateZ(5px);
        }
        
        .badge-text-primary {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 1.2px;
          color: #B48D3A;
          margin-bottom: 6px;
          text-shadow: 
            0 2px 4px rgba(0, 0, 0, 0.1),
            0 1px 2px rgba(255, 255, 255, 0.8);
        }
        
        .badge-text-secondary {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.8px;
          color: #6B7280;
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.05),
            0 0 1px rgba(255, 255, 255, 0.9);
        }
        
        .badge-verification-glow {
          position: absolute;
          top: -15px;
          left: -15px;
          right: -15px;
          bottom: -15px;
          border-radius: 50%;
          background: 
            conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(180, 141, 58, 0.4) 60deg,
              rgba(59, 130, 246, 0.3) 120deg,
              rgba(16, 185, 129, 0.3) 180deg,
              rgba(180, 141, 58, 0.4) 240deg,
              rgba(59, 130, 246, 0.3) 300deg,
              transparent 360deg
            );
          animation: luxuryRotate 12s linear infinite;
          z-index: 1;
        }
        
        .badge-light-sweep {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: 
            linear-gradient(
              45deg,
              transparent 20%,
              rgba(255, 255, 255, 0.6) 45%,
              rgba(255, 255, 255, 0.8) 50%,
              rgba(255, 255, 255, 0.6) 55%,
              transparent 80%
            );
          animation: luxurySweep 4s ease-in-out infinite;
          z-index: 2;
        }
        
        .badge-institutional-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: 
            radial-gradient(
              circle, 
              rgba(180, 141, 58, 0.25) 0%, 
              rgba(59, 130, 246, 0.1) 40%,
              transparent 70%
            );
          transform: translate(-50%, -50%);
          animation: institutionalPulse 6s ease-in-out infinite;
          z-index: 0;
        }
        
        @keyframes luxuryRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes luxurySweep {
          0%, 100% { 
            transform: rotate(-45deg);
            opacity: 0.3;
          }
          50% { 
            transform: rotate(45deg);
            opacity: 0.8;
          }
        }
        
        @keyframes institutionalPulse {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.4;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.2;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .badge-verification-glow,
          .badge-light-sweep,
          .badge-institutional-pulse {
            animation: none !important;
          }
          
          .luxury-badge {
            transition: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .luxury-badge-container {
            width: 280px;
            height: 280px;
          }
          
          .luxury-badge {
            width: 260px;
            height: 260px;
          }
          
          .badge-logo-container {
            width: 70px;
            height: 70px;
            margin-bottom: 16px;
          }
          
          .badge-logo {
            width: 52px;
          }
          
          .badge-text-primary {
            font-size: 14px;
            letter-spacing: 1px;
          }
          
          .badge-text-secondary {
            font-size: 11px;
            letter-spacing: 0.6px;
          }
        }
      `}</style>
    </div>
  )
}

export default LuxuryBadge

