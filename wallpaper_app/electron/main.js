import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// These two lines are needed because we're using ES Modules
// They give us __dirname (current folder path) which isn't available by default
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  // Create the desktop window
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,        // opens fullscreen like a wallpaper
    frame: false,            // no titlebar or window borders
    alwaysOnTop: false,      // sits behind other windows (wallpaper behavior)
    webPreferences: {
      nodeIntegration: false, // security: don't expose Node.js to the web page
      contextIsolation: true  // security: isolate Electron from React
    }
  });

  // In development: load from Vite dev server
  // In production: load from built files
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173'); // Vite default port
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

// When Electron is ready, create the window
app.whenReady().then(() => {
  createWindow();
});

// Quit the app when all windows are closed (except on Mac)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});