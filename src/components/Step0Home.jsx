import { motion } from 'framer-motion'
import { BlackButton } from './UI'
import JarPlaceholder from './JarPlaceholder'

export default function Step0Home({ actions }) {
  return (
    <div className="flex flex-col items-center pt-2">
      <motion.p
        className="text-[11px] uppercase tracking-[0.4em] text-[#C4956A]/70 mb-2 font-sans text-center leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        A jar of cozy things
      </motion.p>
      <motion.p
        className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A7A]/50 mb-12 font-sans text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        crafted digitally, sent with love
      </motion.p>

      <motion.div
        className="mb-14"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <JarPlaceholder size="lg" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <BlackButton onClick={() => actions.setStep(1)}>
          Start Your Jar
        </BlackButton>
      </motion.div>

      {/* Decorative bottom flourish */}
      <motion.div
        className="flex items-center gap-3 mt-16 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C4956A]" />
        <span className="text-[9px] text-[#C4956A] tracking-[0.3em] uppercase font-sans">✦</span>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#C4956A]" />
      </motion.div>
    </div>
  )
}
