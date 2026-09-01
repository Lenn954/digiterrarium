import { motion } from 'framer-motion'
import { SectionTitle, NavButtons } from './UI'
import JarPlaceholder from './JarPlaceholder'

export default function Step4WriteCard({ state, actions }) {
  const update = (field, value) => {
    actions.setCardDetails({ ...state.cardDetails, [field]: value })
  }

  return (
    <div className="flex flex-col items-center">
      <SectionTitle subtitle="Leave a cozy message on the tag">Write The Hanging Label</SectionTitle>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-xl">
        {/* Jar preview */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <JarPlaceholder
            jarType={state.selectedJar}
            items={state.selectedItems}
            atmosphere={state.atmosphere}
            size="sm"
          />
        </motion.div>

        {/* Styled paper tag card */}
        <motion.div
          className="flex-1 w-full max-w-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Twine / string */}
          <div className="flex justify-center mb-0">
            <div className="w-px h-8 bg-gradient-to-b from-[#C4956A]/0 via-[#C4956A]/40 to-[#C4956A]/60" />
          </div>

          {/* Tag body */}
          <div className="relative bg-gradient-to-br from-[#FAF3E8] via-[#F5EDE0] to-[#EDE4D4] 
            rounded-lg shadow-lg shadow-[#C4956A]/10 border border-[#E0D5C4]/80 overflow-hidden">
            
            {/* Subtle paper texture lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 28px, #8A7A5A 28px, #8A7A5A 29px)' }} />
            
            {/* Hole punch */}
            <div className="flex justify-center pt-3">
              <div className="w-4 h-4 rounded-full border-2 border-[#D4C8B0] bg-[#FDFBF7] shadow-inner" />
            </div>

            {/* Watercolor stain decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#C4956A]/[0.04] rounded-full blur-xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#8A7A5A]/[0.03] rounded-full blur-xl pointer-events-none" />

            <div className="px-6 pb-6 pt-3 space-y-5 relative">
              <div>
                <label className="text-[9px] uppercase tracking-[0.25em] text-[#B0A48E] font-sans block mb-2 font-medium">
                  Dear
                </label>
                <input
                  type="text"
                  value={state.cardDetails.to}
                  onChange={(e) => update('to', e.target.value)}
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-[#D4C8B0]/60 pb-2 text-[15px] font-serif
                    text-[#4A3A2A] placeholder:text-[#D4C8B0]/80 focus:border-[#C4956A] transition-colors duration-300"
                />
              </div>

              <div>
                <label className="text-[9px] uppercase tracking-[0.25em] text-[#B0A48E] font-sans block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  value={state.cardDetails.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Write something cozy..."
                  rows={4}
                  className="w-full bg-white/30 border border-[#D4C8B0]/40 rounded-md p-3 text-[14px] font-serif leading-relaxed
                    text-[#4A3A2A] placeholder:text-[#D4C8B0]/80 focus:border-[#C4956A] focus:bg-white/50 transition-all duration-300 resize-none"
                />
              </div>

              <div>
                <label className="text-[9px] uppercase tracking-[0.25em] text-[#B0A48E] font-sans block mb-2 font-medium">
                  Sincerely
                </label>
                <input
                  type="text"
                  value={state.cardDetails.from}
                  onChange={(e) => update('from', e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-[#D4C8B0]/60 pb-2 text-[15px] font-serif
                    text-[#4A3A2A] placeholder:text-[#D4C8B0]/80 focus:border-[#C4956A] transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <NavButtons
        onBack={() => actions.setStep(3)}
        onNext={() => actions.setStep(5)}
      />
    </div>
  )
}
