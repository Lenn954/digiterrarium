import { motion } from 'framer-motion'

export default function Header({ step }) {
  return (
    <header className="w-full pt-10 pb-4 text-center select-none relative" aria-label="Digiterrarium - Digital Terrarium Gift Builder">
      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4 mb-3" aria-hidden="true">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C4956A]/30" />
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-[#C4956A]/40"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C4956A]/30" />
      </div>

      <motion.h1
        className="font-serif text-4xl md:text-5xl tracking-tight text-[#1A1A1A]"
        initial={step === 0 ? { opacity: 0, y: -10 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Digiterrarium
        <span className="sr-only"> — Build and share a digital terrarium jar gift</span>
      </motion.h1>

      {/* Subtle underline ornament */}
      <div className="flex items-center justify-center gap-2 mt-3" aria-hidden="true">
        <div className="w-8 h-px bg-[#C4956A]/20" />
        <div className="w-1 h-1 rounded-full bg-[#C4956A]/30" />
        <div className="w-16 h-px bg-[#C4956A]/30" />
        <div className="w-1 h-1 rounded-full bg-[#C4956A]/30" />
        <div className="w-8 h-px bg-[#C4956A]/20" />
      </div>
    </header>
  )
}
