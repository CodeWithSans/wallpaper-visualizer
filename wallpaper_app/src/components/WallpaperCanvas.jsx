import { AnimatePresence, motion } from 'framer-motion';
import CalmState from '../visualizers/CalmState.jsx';
import ActiveState from '../visualizers/ActiveState.jsx';
import ChaosState from '../visualizers/ChaosState.jsx';

// Decides which visualizer to render based on the score
function getVisualizer(score) {
  if (score <= 30) return 'calm';
  if (score <= 70) return 'active';
  return 'chaos';
}

function WallpaperCanvas({ score }) {
  const state = getVisualizer(score); // 'calm', 'active', or 'chaos'

  return (
    // AnimatePresence allows smooth transitions when swapping visualizers
    <AnimatePresence mode="wait">

      {state === 'calm' && (
        <motion.div
          key="calm"
          initial={{ opacity: 0 }}   // starts invisible
          animate={{ opacity: 1 }}   // fades in
          exit={{ opacity: 0 }}      // fades out when leaving
          transition={{ duration: 1.5 }}
        >
          <CalmState score={score} />
        </motion.div>
      )}

      {state === 'active' && (
        <motion.div
          key="active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <ActiveState score={score} />
        </motion.div>
      )}

      {state === 'chaos' && (
        <motion.div
          key="chaos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}  // chaos appears faster!
        >
          <ChaosState score={score} />
        </motion.div>
      )}

    </AnimatePresence>
  );
}

export default WallpaperCanvas;