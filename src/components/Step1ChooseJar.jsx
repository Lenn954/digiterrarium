import { motion } from 'framer-motion'
import { SectionTitle, NavButtons } from './UI'

const jars = [
  { name: 'Round Glass', image: '/assets/jar-3.png' },
  { name: 'Potion Bottle', image: '/assets/jar-1.png' },
  { name: 'Wood Lantern', image: '/assets/jar-2.png' },
]

export default function Step1ChooseJar({ state, actions }) {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle>Choose Your Jar</SectionTitle>
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        {jars.map((jar, i) => (
          <motion.button
            key={jar.name}
            onClick={() => actions.setSelectedJar(jar.name)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className={`group flex flex-col items-center gap-3 p-5 rounded-lg transition-all duration-400 w-40
              ${state.selectedJar === jar.name
                ? 'bg-white/80 shadow-lg shadow-[#C4956A]/10 ring-2 ring-[#C4956A]/30'
                : 'bg-white/30 hover:bg-white/60 hover:shadow-md hover:shadow-[#C4956A]/5'
              }`}
          >
            <div className="w-28 h-32 flex items-center justify-center relative">
              {/* Glow effect when selected */}
              {state.selectedJar === jar.name && (
                <motion.div
                  className="absolute inset-0 bg-[#FFF3D6]/40 rounded-full blur-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
              <img
                src={jar.image}
                alt={jar.name}
                className={`w-full h-full object-contain relative z-10 transition-all duration-300 drop-shadow-md
                  ${state.selectedJar === jar.name ? 'scale-105' : 'group-hover:scale-[1.03]'}`}
              />
            </div>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-sans font-medium transition-colors duration-300
              ${state.selectedJar === jar.name ? 'text-[#C4956A]' : 'text-[#8A8A7A] group-hover:text-[#4A4A4A]'}`}
            >
              {jar.name}
            </span>
          </motion.button>
        ))}
      </div>
      <NavButtons
        onNext={() => actions.setStep(2)}
        nextDisabled={!state.selectedJar}
      />
    </div>
  )
}
