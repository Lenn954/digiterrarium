import { motion } from 'framer-motion'

export function BlackButton({ children, onClick, disabled = false, className = '' }) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      className={`bg-[#1A1A1A] text-white text-[11px] uppercase tracking-[0.3em] px-12 py-4 
        rounded-[2px] font-sans font-medium transition-all duration-300
        hover:bg-[#2A2A2A] hover:shadow-lg hover:shadow-black/10
        disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-[#1A1A1A] disabled:hover:shadow-none
        ${className}`}
    >
      {children}
    </motion.button>
  )
}

export function OutlineButton({ children, onClick, className = '' }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`border border-[#C4956A]/40 text-[#8A8A7A] text-[11px] uppercase tracking-[0.3em] px-12 py-4 
        rounded-[2px] font-sans font-medium transition-all duration-300
        hover:border-[#C4956A] hover:text-[#C4956A] hover:shadow-sm
        ${className}`}
    >
      {children}
    </motion.button>
  )
}

export function NavButtons({ onBack, onNext, nextDisabled = false, nextLabel = 'Next' }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-14">
      {onBack && <OutlineButton onClick={onBack}>Back</OutlineButton>}
      <BlackButton onClick={onNext} disabled={nextDisabled}>{nextLabel}</BlackButton>
    </div>
  )
}

export function SectionTitle({ children, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-[11px] uppercase tracking-[0.35em] text-[#8A8A7A] font-sans font-medium mb-1">
        {children}
      </h2>
      {subtitle && (
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#C4956A]/60 font-sans mt-2">
          {subtitle}
        </p>
      )}
    </div>
  )
}
