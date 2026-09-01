import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle, BlackButton } from './UI'
import JarPlaceholder from './JarPlaceholder'

export default function Step6Share({ state, actions }) {
  const [loading, setLoading] = useState(false)
  const [link, setLink] = useState('')
  const [copied, setCopied] = useState(false)

  const generateLink = () => {
    setLoading(true)
    setTimeout(() => {
      const id = Math.random().toString(36).substring(2, 7)
      setLink(`digiterrarium.com/jar/${id}`)
      setLoading(false)
    }, 1000)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(`https://${link}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const restart = () => {
    actions.setStep(0)
    actions.setSelectedJar('')
    actions.setSelectedItems([])
    actions.setAtmosphere('Daylight')
    actions.setCardDetails({ to: '', message: '', from: '' })
    actions.setGeneratedLink('')
  }

  const hasCard = state.cardDetails.to || state.cardDetails.message || state.cardDetails.from

  return (
    <div className="flex flex-col items-center">
      <SectionTitle subtitle="Your cozy jar is ready to share">Coziness Delivered!</SectionTitle>

      {/* Final jar display */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <JarPlaceholder
          jarType={state.selectedJar}
          items={state.selectedItems}
          atmosphere={state.atmosphere}
          size="lg"
        />
      </motion.div>

      {/* Card preview — styled CSS tag */}
      {hasCard && (
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 1.5 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Twine */}
          <div className="flex justify-center mb-0">
            <div className="w-px h-5 bg-gradient-to-b from-[#C4956A]/0 to-[#C4956A]/50" />
          </div>

          <div className="w-52 bg-gradient-to-br from-[#FAF3E8] via-[#F5EDE0] to-[#EDE4D4] 
            rounded-md shadow-lg shadow-[#C4956A]/10 border border-[#E0D5C4]/80 px-5 py-4 text-center relative overflow-hidden">
            
            {/* Hole */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#D4C8B0] bg-[#FDFBF7]" />
            
            {/* Watercolor stains */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#C4956A]/[0.04] rounded-full blur-xl pointer-events-none" />
            
            <div className="mt-3">
              {state.cardDetails.to && (
                <p className="text-[10px] text-[#B0A48E] font-sans">
                  Dear <span className="font-serif text-[13px] text-[#4A3A2A]">{state.cardDetails.to}</span>
                </p>
              )}
              {state.cardDetails.message && (
                <p className="text-[12px] font-serif text-[#4A3A2A] mt-2 leading-relaxed italic line-clamp-4">
                  "{state.cardDetails.message}"
                </p>
              )}
              {state.cardDetails.from && (
                <p className="text-[10px] text-[#B0A48E] font-sans mt-2.5">
                  — <span className="font-serif text-[13px] text-[#4A3A2A]">{state.cardDetails.from}</span>
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Generate / Link area */}
      {!link && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <BlackButton onClick={generateLink}>Generate Link</BlackButton>
        </motion.div>
      )}

      {loading && (
        <motion.div
          className="flex flex-col items-center gap-3 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-[#C4956A]"
                animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ delay: i * 0.15, duration: 0.6, repeat: Infinity }}
              />
            ))}
          </div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A8A7A] font-sans">
            Crafting your jar...
          </span>
        </motion.div>
      )}

      {link && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="bg-white/70 backdrop-blur-sm border border-[#E8E4DC] rounded-xl px-5 py-4 flex items-center gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF3D6] to-[#FFE8B8] flex items-center justify-center shrink-0">
              <span className="text-sm">🔗</span>
            </div>
            <span className="text-sm font-sans text-[#4A4A4A] select-all font-medium">{link}</span>
            <motion.button
              onClick={copyLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-[10px] uppercase tracking-[0.2em] font-sans font-semibold px-4 py-2 rounded-lg transition-all duration-300
                ${copied
                  ? 'bg-[#C4956A] text-white'
                  : 'bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]'
                }`}
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Restart */}
      <motion.button
        onClick={restart}
        whileHover={{ y: -1 }}
        className="mt-16 text-[11px] text-[#C4956A]/70 font-sans tracking-[0.15em]
          border-b border-dashed border-[#C4956A]/30 pb-0.5 
          hover:text-[#C4956A] hover:border-[#C4956A] transition-all duration-300"
      >
        ✦ Make another jar? ✦
      </motion.button>
    </div>
  )
}
