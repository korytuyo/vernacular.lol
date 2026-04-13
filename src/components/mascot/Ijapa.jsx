import { useState, useEffect } from 'react'

/**
 * Ijapa - The Wise Tortoise Mascot
 *
 * Expressions:
 *   resting     - neutral, occasional blink (dashboard idle)
 *   speaking    - mouth open, gentle bounce (AI responding)
 *   thinking    - eyes up, shell sways (AI loading/typing)
 *   celebrating - wide eyes, bounce (user success)
 *   encouraging - soft smile, gentle nod (after mistakes)
 *
 * Props:
 *   expression  - one of the above states
 *   size        - pixel width/height (default 80)
 *   className   - additional wrapper classes
 */

const expressions = {
  resting: {
    leftEye: { cx: 36, cy: 28, rx: 3.5, ry: 4 },
    rightEye: { cx: 52, cy: 28, rx: 3.5, ry: 4 },
    pupilOffset: { x: 0, y: 0 },
    mouth: 'M 38 38 Q 44 42 50 38',
    bodyAnim: '',
  },
  speaking: {
    leftEye: { cx: 36, cy: 28, rx: 3.5, ry: 4 },
    rightEye: { cx: 52, cy: 28, rx: 3.5, ry: 4 },
    pupilOffset: { x: 0, y: 0 },
    mouth: 'M 37 37 Q 44 46 51 37',
    bodyAnim: 'ijapa-bounce',
  },
  thinking: {
    leftEye: { cx: 36, cy: 28, rx: 3.5, ry: 4 },
    rightEye: { cx: 52, cy: 28, rx: 3.5, ry: 4 },
    pupilOffset: { x: 0, y: -2 },
    mouth: 'M 39 39 Q 44 41 49 39',
    bodyAnim: 'ijapa-sway',
  },
  celebrating: {
    leftEye: { cx: 36, cy: 28, rx: 4, ry: 4.5 },
    rightEye: { cx: 52, cy: 28, rx: 4, ry: 4.5 },
    pupilOffset: { x: 0, y: 0 },
    mouth: 'M 36 37 Q 44 48 52 37',
    bodyAnim: 'ijapa-celebrate',
  },
  encouraging: {
    leftEye: { cx: 36, cy: 28, rx: 3.5, ry: 3 },
    rightEye: { cx: 52, cy: 28, rx: 3.5, ry: 3 },
    pupilOffset: { x: 0, y: 0.5 },
    mouth: 'M 38 38 Q 44 43 50 38',
    bodyAnim: 'ijapa-nod',
  },
}

export default function Ijapa({ expression = 'resting', size = 80, className = '' }) {
  const [blinking, setBlinking] = useState(false)
  const [mouthOpen, setMouthOpen] = useState(true)
  const expr = expressions[expression] || expressions.resting

  // Blink cycle for resting state
  useEffect(() => {
    if (expression !== 'resting') return
    const interval = setInterval(() => {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 180)
    }, 3000 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [expression])

  // Mouth toggle for speaking state
  useEffect(() => {
    if (expression !== 'speaking') return
    const interval = setInterval(() => {
      setMouthOpen(prev => !prev)
    }, 300)
    return () => clearInterval(interval)
  }, [expression])

  const eyeScaleY = blinking ? 0.15 : 1
  const currentMouth = expression === 'speaking' && !mouthOpen
    ? 'M 39 39 Q 44 41 49 39'
    : expr.mouth

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 88 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={expr.bodyAnim}
        role="img"
        aria-label="Ijapa the tortoise mascot"
      >
        {/* CSS Animations */}
        <style>{`
          @keyframes ijapa-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px); }
          }
          @keyframes ijapa-sway {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-3deg); }
            75% { transform: rotate(3deg); }
          }
          @keyframes ijapa-celebrate {
            0%, 100% { transform: translateY(0) scale(1); }
            25% { transform: translateY(-5px) scale(1.03); }
            50% { transform: translateY(-2px) scale(1); }
            75% { transform: translateY(-4px) scale(1.02); }
          }
          @keyframes ijapa-nod {
            0%, 100% { transform: translateY(0); }
            30% { transform: translateY(2px); }
            60% { transform: translateY(0); }
          }
          .ijapa-bounce { animation: ijapa-bounce 0.6s ease-in-out infinite; }
          .ijapa-sway { animation: ijapa-sway 1.5s ease-in-out infinite; transform-origin: center 60px; }
          .ijapa-celebrate { animation: ijapa-celebrate 0.5s ease-in-out infinite; }
          .ijapa-nod { animation: ijapa-nod 1.2s ease-in-out infinite; }
        `}</style>

        {/* Shadow */}
        <ellipse cx="44" cy="82" rx="22" ry="4" fill="currentColor" opacity="0.08" />

        {/* Back legs */}
        <ellipse cx="28" cy="68" rx="7" ry="5" fill="#8B6914" className="dark:fill-amber-700" transform="rotate(-15 28 68)" />
        <ellipse cx="60" cy="68" rx="7" ry="5" fill="#8B6914" className="dark:fill-amber-700" transform="rotate(15 60 68)" />

        {/* Front legs */}
        <ellipse cx="30" cy="56" rx="6" ry="4.5" fill="#A67C1A" className="dark:fill-amber-600" transform="rotate(-20 30 56)" />
        <ellipse cx="58" cy="56" rx="6" ry="4.5" fill="#A67C1A" className="dark:fill-amber-600" transform="rotate(20 58 56)" />

        {/* Tail */}
        <path d="M 22 72 Q 16 74 14 70" stroke="#8B6914" strokeWidth="2.5" strokeLinecap="round" fill="none" className="dark:stroke-amber-700" />

        {/* Shell base */}
        <ellipse cx="44" cy="58" rx="24" ry="18" fill="#5D8C3E" className="dark:fill-green-700" />

        {/* Shell dome */}
        <ellipse cx="44" cy="54" rx="22" ry="17" fill="#7AB648" className="dark:fill-green-600" />

        {/* Adire-inspired shell pattern - hexagonal segments */}
        <path d="M 44 40 L 54 46 L 54 56 L 44 62 L 34 56 L 34 46 Z" stroke="#5D8C3E" strokeWidth="1.2" fill="none" className="dark:stroke-green-500" opacity="0.7" />
        <path d="M 44 40 L 44 62" stroke="#5D8C3E" strokeWidth="0.8" fill="none" className="dark:stroke-green-500" opacity="0.5" />
        <path d="M 34 46 L 54 56" stroke="#5D8C3E" strokeWidth="0.8" fill="none" className="dark:stroke-green-500" opacity="0.5" />
        <path d="M 54 46 L 34 56" stroke="#5D8C3E" strokeWidth="0.8" fill="none" className="dark:stroke-green-500" opacity="0.5" />

        {/* Outer shell detail dots - Adire motif */}
        <circle cx="30" cy="51" r="1.5" fill="#5D8C3E" className="dark:fill-green-500" opacity="0.6" />
        <circle cx="58" cy="51" r="1.5" fill="#5D8C3E" className="dark:fill-green-500" opacity="0.6" />
        <circle cx="44" cy="37" r="1.5" fill="#5D8C3E" className="dark:fill-green-500" opacity="0.6" />
        <circle cx="44" cy="65" r="1.5" fill="#5D8C3E" className="dark:fill-green-500" opacity="0.6" />
        <circle cx="35" cy="42" r="1" fill="#5D8C3E" className="dark:fill-green-500" opacity="0.4" />
        <circle cx="53" cy="42" r="1" fill="#5D8C3E" className="dark:fill-green-500" opacity="0.4" />
        <circle cx="35" cy="61" r="1" fill="#5D8C3E" className="dark:fill-green-500" opacity="0.4" />
        <circle cx="53" cy="61" r="1" fill="#5D8C3E" className="dark:fill-green-500" opacity="0.4" />

        {/* Neck */}
        <path d="M 38 42 Q 38 32 40 26 Q 41 24 44 24 Q 47 24 48 26 Q 50 32 50 42" fill="#A67C1A" className="dark:fill-amber-600" />

        {/* Head */}
        <ellipse cx="44" cy="26" rx="13" ry="11" fill="#BF9320" className="dark:fill-amber-500" />

        {/* Fila (cap) */}
        <path d="M 34 22 Q 34 14 44 14 Q 54 14 54 22 Q 50 20 44 19 Q 38 20 34 22 Z" fill="#1E6B3A" className="dark:fill-green-600" />
        <path d="M 34 22 Q 44 24 54 22" stroke="#155E30" strokeWidth="1" fill="none" className="dark:stroke-green-500" />
        {/* Fila fold detail */}
        <path d="M 38 17 Q 44 15.5 50 17" stroke="#155E30" strokeWidth="0.6" fill="none" className="dark:stroke-green-500" opacity="0.5" />

        {/* Eye whites */}
        <ellipse
          cx={expr.leftEye.cx}
          cy={expr.leftEye.cy}
          rx={expr.leftEye.rx}
          ry={expr.leftEye.ry * eyeScaleY}
          fill="white"
        />
        <ellipse
          cx={expr.rightEye.cx}
          cy={expr.rightEye.cy}
          rx={expr.rightEye.rx}
          ry={expr.rightEye.ry * eyeScaleY}
          fill="white"
        />

        {/* Pupils */}
        {!blinking && (
          <>
            <circle
              cx={expr.leftEye.cx + expr.pupilOffset.x}
              cy={expr.leftEye.cy + expr.pupilOffset.y}
              r="2"
              fill="#1a1a2e"
            />
            <circle
              cx={expr.rightEye.cx + expr.pupilOffset.x}
              cy={expr.rightEye.cy + expr.pupilOffset.y}
              r="2"
              fill="#1a1a2e"
            />
            {/* Eye shine */}
            <circle
              cx={expr.leftEye.cx + expr.pupilOffset.x + 0.8}
              cy={expr.leftEye.cy + expr.pupilOffset.y - 0.8}
              r="0.7"
              fill="white"
            />
            <circle
              cx={expr.rightEye.cx + expr.pupilOffset.x + 0.8}
              cy={expr.rightEye.cy + expr.pupilOffset.y - 0.8}
              r="0.7"
              fill="white"
            />
          </>
        )}

        {/* Mouth */}
        <path
          d={currentMouth}
          stroke="#6B4E0A"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="dark:stroke-amber-800"
        />

        {/* Cheek blush (celebrating/encouraging) */}
        {(expression === 'celebrating' || expression === 'encouraging') && (
          <>
            <ellipse cx="31" cy="32" rx="3" ry="1.5" fill="#E8A87C" opacity="0.4" />
            <ellipse cx="57" cy="32" rx="3" ry="1.5" fill="#E8A87C" opacity="0.4" />
          </>
        )}

        {/* Sparkles for celebrating */}
        {expression === 'celebrating' && (
          <>
            <g className="ijapa-celebrate" style={{ animationDelay: '0.1s' }}>
              <path d="M 16 20 L 17 17 L 18 20 L 21 21 L 18 22 L 17 25 L 16 22 L 13 21 Z" fill="#F59E0B" opacity="0.8" />
            </g>
            <g className="ijapa-celebrate" style={{ animationDelay: '0.3s' }}>
              <path d="M 66 16 L 67 13 L 68 16 L 71 17 L 68 18 L 67 21 L 66 18 L 63 17 Z" fill="#F59E0B" opacity="0.8" />
            </g>
            <g className="ijapa-celebrate" style={{ animationDelay: '0.2s' }}>
              <path d="M 72 36 L 73 34 L 74 36 L 76 37 L 74 38 L 73 40 L 72 38 L 70 37 Z" fill="#F59E0B" opacity="0.6" />
            </g>
          </>
        )}
      </svg>
    </div>
  )
}
