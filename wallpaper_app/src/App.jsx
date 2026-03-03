import useEntropy from './hooks/useEntropy.js';
import WallpaperCanvas from './components/WallpaperCanvas.jsx';

function App() {
  // Get the live score from the API (updates every 3 seconds)
  const { score, error } = useEntropy();

  // If the API server is not running, show a simple error screen
  if (error) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <h2 style={{ color: '#ff4444' }}>⚠️ Cannot reach API</h2>
        <p style={{ opacity: 0.5 }}>Make sure wallpaper_api is running on port 3000</p>
        <p style={{ opacity: 0.3, fontSize: '12px' }}>cd wallpaper_api && npm run dev</p>
      </div>
    );
  }

  // Normal state — pass score to WallpaperCanvas
  return <WallpaperCanvas score={score} />;
}

export default App;