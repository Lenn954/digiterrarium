import { motion } from 'framer-motion'
import { SectionTitle, NavButtons } from './UI'
import JarPlaceholder from './JarPlaceholder'

export default function Step3Atmosphere({ state, actions }) {
  const atmospheres = [
    { name: 'Daylight', emoji: '☀️', desc: 'Warm & golden', color: 'from-[#FFF3D6] to-[#FFE8B8]', border: 'border-[#C4956A]', bg: 'bg-[#FFF8E7]' },
    { name: 'Twilight', emoji: '🌙', desc: 'Cool & dreamy', color: 'from-[#D8E2F0] to-[#C0CDE0]', border: 'border-[#7B8FA8]', bg: 'bg-[#E8EEF8]' },
  ]

  return (
    <div className="flex flex-col items-center">
      <SectionTitle subtitle="Set the mood for your jar">Customize Your Jar Layout</SectionTitle>

      <motion.div
        className="mb-12"
        key={state.atmosphere}
        initial={{ opacity: 0.8, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <JarPlaceholder
          jarType={state.selectedJar}
          items={state.selectedItems}
          atmosphere={state.atmosphere}
          size="lg"
        />
      </motion.div>

      <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A8A7A]/60 mb-5 font-sans">
        Select Atmosphere
      </p>

      <div className="flex gap-4 mb-2">
        {atmospheres.map((atm) => (
          <motion.button
            key={atm.name}
            onClick={() => actions.setAtmosphere(atm.name)}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`flex flex-col items-center gap-2.5 px-8 py-5 rounded-xl transition-all duration-400 border-2
              ${state.atmosphere === atm.name
                ? `${atm.bg} ${atm.border} shadow-lg shadow-black/5`
                : 'border-[#E8E4DC] bg-white/30 hover:bg-white/60'
              }`}
          >
            {/* Gradient orb */}
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${atm.color} flex items-center justify-center shadow-inner
              ${state.atmosphere === atm.name ? 'shadow-md' : ''}`}>
              <span className="text-lg">{atm.emoji}</span>
            </div>
            <span className={`text-[11px] uppercase tracking-[0.2em] font-sans font-medium
              ${state.atmosphere === atm.name ? 'text-[#1A1A1A]' : 'text-[#8A8A7A]'}`}>
              {atm.name}
            </span>
            <span className={`text-[9px] font-sans
              ${state.atmosphere === atm.name ? 'text-[#8A8A7A]' : 'text-[#C4956A]/40'}`}>
              {atm.desc}
            </span>
          </motion.button>
        ))}
      </div>

      <NavButtons
        onBack={() => actions.setStep(2)}
        onNext={() => actions.setStep(4)}
      />
    </div>
  )
}
