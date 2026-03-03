import { motion } from 'framer-motion';

function ChaosState({ score }) {
  return (
    // Deep red/purple dark background
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #1a0010, #2d0020, #1a0030)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>

      {/* 8 chaotic fragments flying in random directions */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${5 + i * 8}px`,
            height: `${5 + i * 3}px`,
            borderRadius: '2px',                        // sharp edges, not circles
            background: `rgba(${200 + i * 5}, 0, ${100 + i * 15}, 0.8)` // red-purple mix
          }}
          animate={{
            x: [0, (i % 2 === 0 ? 1 : -1) * 150 * i, 0],  // alternates left/right
            y: [0, (i % 3 === 0 ? 1 : -1) * 120 * i, 0],  // alternates up/down
            rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],     // spins in both directions
            scale: [1, 2, 0.5, 1],                          // dramatic size changes
            opacity: [1, 0.6, 1]
          }}
          transition={{
            duration: 0.8 + i * 0.2,   // very fast — pure chaos
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Pulsing danger ring */}
      <motion.div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          border: '3px solid rgba(255, 0, 80, 0.5)',
          background: 'rgba(200, 0, 50, 0.05)'
        }}
        animate={{
          scale: [1, 1.2, 0.9, 1],     // rapidly pulses
          opacity: [0.5, 1, 0.3, 0.5],
          rotate: 360
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />

      {/* Score display — slightly shaking */}
      <motion.div
        style={{ textAlign: 'center', color: 'white', zIndex: 10 }}
        animate={{ x: [-2, 2, -1, 1, 0] }}     // subtle shake effect
        transition={{ duration: 0.3, repeat: Infinity }}
      >
        <p style={{ fontSize: '14px', opacity: 0.5, letterSpacing: '4px' }}>ENTROPY</p>
        <h1 style={{ fontSize: '80px', margin: 0, color: '#ff0050' }}>{score}</h1>
        <p style={{ fontSize: '14px', opacity: 0.5 }}>COGNITIVE CHAOS</p>
      </motion.div>

    </div>
  );
}

export default ChaosState;