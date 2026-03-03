import {motion}from 'framer-motion';

function CalmState ({score}){
return (
    <div style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        background:'linear-gradient(135deg, #0a0e27, #0d2137, #0a3d62)',
        alignItems:'center',
        justifyContent:'center',
       overflow:'hidden',
       position:'relative'
    }}>
    {/* Three slow glowing circles — like calm breathing */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${i * 200}px`,
            height: `${i * 200}px`,
            borderRadius: '50%',                    // makes it a circle
            border: '1px solid rgba(100,200,255,0.2)',
            background: 'rgba(0,150,255,0.05)'
          }}
          animate={{
            scale: [1, 1.1, 1],          // slowly pulse in and out
            opacity: [0.3, 0.6, 0.3]     // slowly fade in and out
          }}
          transition={{
            duration: 4 + i,             // each circle has different speed
            repeat: Infinity,            // loop forever
            ease: 'easeInOut'
          }}
        />
      ))}

       {/* Score display in center */}
      <div style={{ textAlign: 'center', color: 'white', zIndex: 10 }}>
        <p style={{ fontSize: '14px', opacity: 0.5, letterSpacing: '4px' }}>ENTROPY</p>
        <h1 style={{ fontSize: '80px', margin: 0, color: '#64c8ff' }}>{score}</h1>
        <p style={{ fontSize: '14px', opacity: 0.5 }}>CALM FOCUS</p>
      </div>

    </div>
);
}
export default CalmState;