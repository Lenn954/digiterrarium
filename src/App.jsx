import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Step0Home from './components/Step0Home'
import Step1ChooseJar from './components/Step1ChooseJar'
import Step2FillJar from './components/Step2FillJar'
import Step3Atmosphere from './components/Step3Atmosphere'
import Step4WriteCard from './components/Step4WriteCard'
import Step5Support from './components/Step5Support'
import Step6Share from './components/Step6Share'

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.35 } },
}

function FloatingParticles() {
  const dots = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 5,
    opacity: Math.random() * 0.15 + 0.05,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {dots.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{
            width: d.size,
            height: d.size,
            left: `${d.left}%`,
            top: `${d.top}%`,
            background: `radial-gradient(circle, rgba(196,149,106,${d.opacity}) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -20, -10, 0],
            opacity: [d.opacity, d.opacity * 2, d.opacity * 1.5, d.opacity],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function ProgressDots({ step }) {
  if (step === 0 || step === 6) return null
  const stepLabels = ['Choose Jar', 'Fill Items', 'Atmosphere', 'Write Card', 'Support']
  return (
    <nav aria-label="Creation progress" className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3, 4, 5].map((s) => (
        <motion.div
          key={s}
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={5}
          aria-label={`Step ${s}: ${stepLabels[s - 1]}${s === step ? ' (current)' : s < step ? ' (completed)' : ''}`}
          className={`rounded-full transition-all duration-500 ${
            s === step ? 'w-6 h-1.5 bg-[#C4956A]' : s < step ? 'w-1.5 h-1.5 bg-[#C4956A]/60' : 'w-1.5 h-1.5 bg-[#D4D0C8]'
          }`}
          layoutId={`dot-${s}`}
        />
      ))}
    </nav>
  )
}

export default function App() {
  const [step, setStep] = useState(0)
  const [selectedJar, setSelectedJar] = useState('')
  const [selectedItems, setSelectedItems] = useState([])
  const [atmosphere, setAtmosphere] = useState('Daylight')
  const [cardDetails, setCardDetails] = useState({ to: '', message: '', from: '' })
  const [generatedLink, setGeneratedLink] = useState('')

  const state = { step, selectedJar, selectedItems, atmosphere, cardDetails, generatedLink }
  const actions = { setStep, setSelectedJar, setSelectedItems, setAtmosphere, setCardDetails, setGeneratedLink }

  const steps = [Step0Home, Step1ChooseJar, Step2FillJar, Step3Atmosphere, Step4WriteCard, Step5Support, Step6Share]
  const CurrentStep = steps[step]

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center relative">
      {/* Warm gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F5E6D3]/30 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#E8DDD0]/25 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#FFF3D6]/20 blur-[80px]" />
      </div>

      <FloatingParticles />

      <div className="relative z-10 w-full flex flex-col items-center">
        <Header step={step} />
        <ProgressDots step={step} />
        <main className="w-full max-w-2xl px-5 pb-24 flex-1" role="main" aria-label="Terrarium jar builder">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <CurrentStep state={state} actions={actions} />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="w-full text-center py-6 text-[10px] text-[#C4956A]/50 tracking-[0.2em] uppercase font-sans" role="contentinfo">
          <p>Made with warmth &amp; pixels</p>
          <p className="mt-1">© {new Date().getFullYear()} Digiterrarium. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
