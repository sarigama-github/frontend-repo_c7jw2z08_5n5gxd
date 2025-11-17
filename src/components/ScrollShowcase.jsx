import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

function SmsBadge({ progress }) {
  const scale = useTransform(progress, [0.1, 0.25, 0.35], [0, 1.1, 1])
  const opacity = useTransform(progress, [0.18, 0.25], [0, 1])
  const y = useTransform(progress, [0.2, 0.35], [12, 0])
  const springScale = useSpring(scale, { stiffness: 300, damping: 20 })

  return (
    <motion.div
      style={{ scale: springScale, opacity, y }}
      className="absolute -top-2 -right-2 bg-white/90 backdrop-blur-md text-slate-900 font-bold text-xs px-2 py-1 rounded-full shadow-lg border border-white/60"
    >
      New SMS
    </motion.div>
  )
}

function PhoneGraphic({ progress }) {
  const dropY = useTransform(progress, [0, 0.15, 0.3], [-200, 0, -8])
  const shadowScale = useTransform(progress, [0, 0.2], [0.6, 1])
  const shadowOpacity = useTransform(progress, [0.05, 0.25], [0, 0.25])

  return (
    <motion.div
      style={{ y: dropY }}
      className="relative w-[260px] h-[520px]"
    >
      <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
        {/* Screen */}
        <div className="absolute inset-[10px] rounded-[36px] bg-gradient-to-b from-slate-950 to-slate-800">
          {/* Notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 h-6 w-28 rounded-b-2xl bg-black/60" />
          {/* Signal + time mock */}
          <div className="absolute top-4 left-4 text-[11px] text-slate-200/80 tracking-wide">09:41</div>
          <div className="absolute top-4 right-4 flex gap-1.5">
            <div className="h-2 w-3 rounded-sm bg-emerald-400/80" />
            <div className="h-2 w-3 rounded-sm bg-yellow-400/80" />
            <div className="h-2 w-3 rounded-sm bg-red-400/80" />
          </div>
          {/* Subtle wallpaper */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.25),transparent_35%)]" />
        </div>
      </div>

      <SmsBadge progress={progress} />

      {/* Soft shadow */}
      <motion.div
        style={{ scale: shadowScale, opacity: shadowOpacity }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-6 w-[70%] bg-black/60 blur-2xl rounded-full"
      />
    </motion.div>
  )
}

function SimChip() {
  return (
    <div className="relative w-28 h-24 rounded-xl bg-amber-300/90 border border-amber-200/60 shadow-inner">
      <div className="absolute inset-[8px] rounded-lg border-2 border-amber-500/60" />
      <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="h-2 bg-amber-500/70 rounded" />
        ))}
      </div>
    </div>
  )
}

function ESIMGraphic({ progress }) {
  const opacity = useTransform(progress, [0.55, 0.7], [0, 1])
  const y = useTransform(progress, [0.55, 0.8], [40, 0])
  const rotate = useTransform(progress, [0.55, 1], [-10, 0])
  return (
    <motion.div style={{ opacity, y, rotate }} className="relative flex flex-col items-center gap-5">
      <div className="relative w-[280px] h-[360px]">
        {/* eSIM card */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100 rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
          {/* Cut corner effect */}
          <div className="absolute right-0 top-0 w-24 h-24 overflow-hidden rounded-tr-2xl">
            <div className="absolute -right-8 -top-8 w-32 h-32 rotate-45 bg-slate-200" />
          </div>
          <div className="absolute inset-0 p-8 flex flex-col items-center justify-between">
            <SimChip />
            <div className="text-center">
              <div className="text-sm uppercase tracking-[0.35em] text-slate-500">eSIM</div>
              <div className="mt-1 text-4xl font-extrabold bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">ae telco</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-200/80 text-center max-w-sm">
        Activate instantly. No plastic, just signal.
      </div>
    </motion.div>
  )
}

export default function ScrollShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // Crossfade/transform between phone and eSIM
  const rotateY = useTransform(scrollYProgress, [0.4, 0.7], [0, 180])
  const scale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.95, 1.05])
  const glowOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0.1, 0.6])

  const phoneOpacity = useTransform(scrollYProgress, [0.45, 0.65], [1, 0])
  const simOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])

  return (
    <section ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ scale }}
          className="relative w-full max-w-5xl flex items-center justify-center"
        >
          {/* Scene container with 3D feel */}
          <div className="relative w-full flex items-center justify-center">
            {/* Ambient glows */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute -z-10 size-[600px] rounded-full bg-gradient-to-tr from-sky-500/40 via-blue-500/30 to-indigo-500/30 blur-3xl"
            />

            {/* Phone side */}
            <motion.div style={{ opacity: phoneOpacity }} className="relative">
              <PhoneGraphic progress={scrollYProgress} />
            </motion.div>

            {/* Flip transform container */}
            <motion.div
              style={{ rotateY }}
              className="preserve-3d relative"
            >
              {/* Hidden backface phone silhouette to reinforce the flip */}
              <div className="backface-hidden" />
            </motion.div>

            {/* eSIM side */}
            <motion.div style={{ opacity: simOpacity }} className="relative">
              <ESIMGraphic progress={scrollYProgress} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Spacer content to guide scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-slate-300/80">
        <div className="text-xs uppercase tracking-widest">Scroll to transform</div>
      </div>
    </section>
  )
}
