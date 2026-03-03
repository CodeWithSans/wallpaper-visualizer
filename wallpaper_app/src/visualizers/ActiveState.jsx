import { motion } from 'framer-motion';

function ActiveState({ score }) {
  return (
    // Warm orange/amber dark background
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #1a0a00, #2d1500, #3d2000)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative'
    }}>

      {/* 5 rotating particles flying around */}
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${10 + i * 5}px`,       // each particle slightly bigger
            height: `${10 + i * 5}px`,
            borderRadius: '50%',
            background: `rgba(255, ${100 + i * 20}, 0, 0.7)` // orange shades
          }}
          animate={{
            x: [0, 100 * Math.cos(i), -100 * Math.sin(i), 0],  // moves sideways
            y: [0, -80 * Math.sin(i), 100 * Math.cos(i), 0],   // moves up/down
            scale: [1, 1.5, 0.8, 1],                            // grows and shrinks
            opacity: [0.7, 1, 0.5, 0.7]
          }}
          transition={{
            duration: 3 - i * 0.3,     // faster = more chaotic feel
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Glowing ring behind the score */}
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 150, 0, 0.4)',
          background: 'rgba(255, 100, 0, 0.05)'
        }}
        animate={{ rotate: 360 }}             // slowly spins
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Score display */}
      <div style={{ textAlign: 'center', color: 'white', zIndex: 10 }}>
        <p style={{ fontSize: '14px', opacity: 0.5, letterSpacing: '4px' }}>ENTROPY</p>
        <h1 style={{ fontSize: '80px', margin: 0, color: '#ff9500' }}>{score}</h1>
        <p style={{ fontSize: '14px', opacity: 0.5 }}>ACTIVE MIND</p>
      </div>

    </div>
  );
}

export default ActiveState;