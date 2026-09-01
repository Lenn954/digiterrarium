import { motion } from 'framer-motion'
import { SectionTitle } from './UI'

export default function Step5Support({ actions }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <SectionTitle>Support The Project</SectionTitle>

      {/* Cozy container */}
      <motion.div
        className="bg-white/50 backdrop-blur-sm border border-[#E8E4DC] rounded-2xl p-8 md:p-10 max-w-sm w-full mb-8 text-center shadow-sm flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heart icon */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFF3D6] to-[#FFE8B8] flex items-center justify-center mx-auto mb-5 shadow-inner">
          <span className="text-xl">🫶</span>
        </div>

        <p className="text-sm text-[#4A4A4A] text-center leading-relaxed font-sans mb-8">
          Hey! This site is run by a solo developer. If Digiterrarium brought you joy today,
          please consider pitching in!
        </p>

        {/* Saweria QR code */}
        <motion.div
          className="mx-auto mb-6 w-48 h-48 rounded-xl overflow-hidden border-2 border-[#E8E4DC] shadow-md bg-white p-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src="/assets/Saweria.png"
            alt="Saweria QR Code"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4956A] font-sans font-medium mb-1">
          Scan to donate via Saweria
        </p>
        <p className="text-[10px] text-[#8A8A7A]/60 font-sans">
          Any amount is appreciated ✨
        </p>
      </motion.div>

      {/* Skip section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <p className="text-[11px] text-[#8A8A7A]/70 font-sans mb-3 italic">
          No pressure! You can skip and generate your jar.
        </p>
        <motion.button
          onClick={() => actions.setStep(6)}
          whileHover={{ y: -1 }}
          className="text-[11px] uppercase tracking-[0.25em] text-[#C4956A] font-sans font-medium
            border-b border-[#C4956A]/30 pb-0.5 hover:border-[#C4956A] transition-all duration-300"
        >
          Continue to Gift →
        </motion.button>
      </motion.div>
    </div>
  )
}
