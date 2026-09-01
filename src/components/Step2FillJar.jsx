import { motion } from 'framer-motion'
import { SectionTitle, NavButtons } from './UI'
import JarPlaceholder, { itemImages } from './JarPlaceholder'

const allItems = [
  'Lush Green Moss', 'Rose Quartz', 'Amethyst', 'Mini Cactus',
  'Glow Bugs', 'Sleeping Cat', 'Tiny Frog', 'Small Owl',
]

export default function Step2FillJar({ state, actions }) {
  const toggle = (item) => {
    if (state.selectedItems.includes(item)) {
      actions.setSelectedItems(state.selectedItems.filter((i) => i !== item))
    } else if (state.selectedItems.length < 5) {
      actions.setSelectedItems([...state.selectedItems, item])
    }
  }

  return (
    <div className="flex flex-col items-center">
      <SectionTitle subtitle="Pick up to 5 items">Fill Your Jar</SectionTitle>

      <div className="mb-10">
        <JarPlaceholder jarType={state.selectedJar} items={state.selectedItems} size="md" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mb-6">
        {allItems.map((item, i) => {
          const selected = state.selectedItems.includes(item)
          const maxed = state.selectedItems.length >= 5 && !selected
          return (
            <motion.button
              key={item}
              onClick={() => toggle(item)}
              disabled={maxed}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={!maxed ? { y: -3, scale: 1.03 } : {}}
              whileTap={!maxed ? { scale: 0.95 } : {}}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 border
                ${selected
                  ? 'bg-white/90 border-[#C4956A]/40 shadow-md shadow-[#C4956A]/10'
                  : maxed
                    ? 'bg-transparent border-[#E8E4DC]/50 opacity-30 cursor-not-allowed'
                    : 'bg-white/30 border-[#E8E4DC] hover:bg-white/70 hover:border-[#C4956A]/20 hover:shadow-sm'
                }`}
            >
              <div className="w-12 h-12 flex items-center justify-center relative">
                {selected && (
                  <motion.div
                    className="absolute inset-0 bg-[#FFF3D6]/50 rounded-full blur-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <img
                  src={itemImages[item]}
                  alt={item}
                  className={`w-full h-full object-contain relative z-10 transition-transform duration-300
                    ${selected ? 'scale-110' : ''}`}
                />
              </div>
              <span className={`text-[9px] uppercase tracking-[0.12em] font-sans font-medium text-center leading-tight
                ${selected ? 'text-[#C4956A]' : 'text-[#8A8A7A]'}`}>
                {item}
              </span>
              {selected && (
                <motion.div
                  className="w-4 h-4 rounded-full bg-[#C4956A] flex items-center justify-center absolute -top-1 -right-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Counter */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                n <= state.selectedItems.length ? 'bg-[#C4956A]' : 'bg-[#E8E4DC]'
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] text-[#8A8A7A] font-sans">
          {state.selectedItems.length} / 5
        </span>
      </div>

      <NavButtons
        onBack={() => actions.setStep(1)}
        onNext={() => actions.setStep(3)}
        nextDisabled={state.selectedItems.length === 0}
      />
    </div>
  )
}
