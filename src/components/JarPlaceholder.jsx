import { motion } from 'framer-motion'

const jarImages = {
  'Round Glass': '/assets/jar-3.png',
  'Potion Bottle': '/assets/jar-1.png',
  'Wood Lantern': '/assets/jar-2.png',
}

const itemImages = {
  'Lush Green Moss': '/assets/moss.png',
  'Rose Quartz': '/assets/rock.png',
  'Amethyst': '/assets/crystal.png',
  'Mini Cactus': '/assets/cactus.png',
  'Glow Bugs': '/assets/kunang.png',
  'Sleeping Cat': '/assets/cat.png',
  'Tiny Frog': '/assets/frog.png',
  'Small Owl': '/assets/owl.png',
}

export { itemImages }

// Layout positions: [left%, top%, scale, zIndex, rotateDeg]
// Positions are tuned so items sit inside the lower-center belly of each jar
const layouts = {
  1: [
    [50, 60, 1, 20, 0],
  ],
  2: [
    [38, 60, 0.9, 20, -5],
    [62, 58, 0.9, 21, 6],
  ],
  3: [
    [30, 62, 0.82, 20, -8],
    [50, 54, 0.88, 22, 0],
    [70, 60, 0.82, 21, 7],
  ],
  4: [
    [30, 58, 0.72, 20, -6],
    [55, 50, 0.78, 22, 3],
    [70, 58, 0.72, 21, 8],
    [45, 66, 0.7, 23, -3],
  ],
  5: [
    [28, 58, 0.65, 20, -8],
    [50, 48, 0.72, 22, 0],
    [72, 56, 0.65, 21, 8],
    [36, 66, 0.62, 23, -4],
    [62, 66, 0.62, 24, 5],
  ],
}

export default function JarPlaceholder({ jarType = 'Round Glass', items = [], atmosphere = 'Daylight', size = 'lg' }) {
  // Much larger base dims so the jar + items feel substantial
  const dims = {
    sm: { w: 200, h: 240, itemBase: 80 },
    md: { w: 260, h: 310, itemBase: 100 },
    lg: { w: 310, h: 380, itemBase: 120 },
  }

  const d = dims[size]
  const count = Math.min(items.length, 5)
  const positions = layouts[count] || []

  return (
    <div className="flex flex-col items-center relative">
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none transition-colors duration-700"
        style={{
          width: d.w * 0.9,
          height: d.h * 0.7,
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          background: atmosphere === 'Twilight'
            ? 'radial-gradient(circle, rgba(180,200,230,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,240,200,0.35) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="relative"
        style={{ width: d.w, height: d.h }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Jar image (base layer) */}
        <img
          src={jarImages[jarType] || jarImages['Round Glass']}
          alt={jarType}
          className="absolute inset-0 w-full h-full object-contain drop-shadow-lg"
          style={{ zIndex: 5 }}
        />

        {/* Items inside the jar */}
        {items.map((item, i) => {
          if (i >= count) return null
          const [leftPct, topPct, scale, z, rotate] = positions[i]
          const itemSize = d.itemBase * scale
          return (
            <motion.img
              key={item}
              src={itemImages[item]}
              alt={item}
              initial={{ opacity: 0, scale: 0.2, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 180, damping: 14 }}
              className="absolute pointer-events-none"
              style={{
                width: itemSize,
                height: itemSize,
                objectFit: 'contain',
                left: `${leftPct}%`,
                top: `${topPct}%`,
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                zIndex: z,
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))',
              }}
            />
          )
        })}

        {/* Glass overlay — sits on top so items look "behind glass" */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700"
          style={{
            zIndex: 30,
            background: atmosphere === 'Twilight'
              ? 'linear-gradient(170deg, rgba(200,212,232,0.12) 0%, transparent 40%, rgba(180,200,230,0.08) 100%)'
              : 'linear-gradient(170deg, rgba(255,250,235,0.15) 0%, transparent 40%, rgba(255,240,200,0.06) 100%)',
            borderRadius: '30%',
          }}
        />
      </motion.div>
    </div>
  )
}
