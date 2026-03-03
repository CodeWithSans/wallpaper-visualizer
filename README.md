# 🎨 Wallpaper Visualizer

> A behavior-reactive desktop wallpaper that dynamically changes its visual state based on your real-time browsing behavior — powered by a Chrome extension, a Node.js entropy engine, and an Electron desktop app.

---

## 🧠 How It Works

```
Chrome Extension  →  Tracks browsing events (tab switches, scrolls, clicks)
       ↓
Node.js API       →  Calculates a "Cognitive Entropy Score" (0–100)
       ↓
Electron App      →  Renders a live animated wallpaper that reacts to the score
```

| Entropy Score | Visualizer State | Meaning                                |
| ------------- | ---------------- | -------------------------------------- |
| 0 – 30        | **Calm** 🌊      | Focused, slow browsing                 |
| 31 – 69       | **Active** ⚡    | Normal activity                        |
| 70 – 100      | **Chaos** 🌪️     | Rapid tab switching, frantic scrolling |

---

## 📁 Project Structure

```
wallpaper-visualizer/
├── chrome-extension/        # Manifest V3 Chrome extension
│   ├── manifest.json        # Extension config ("Dopamine Drift Tracker")
│   ├── background.js        # Service worker — sends events to API
│   └── content.js           # Injected into pages — detects scroll, clicks
│
├── wallpaper_api/           # Node.js + Express backend
│   ├── src/
│   │   ├── server.js        # Express server entry point
│   │   ├── routes/
│   │   │   ├── entropy.js   # GET /entropy — returns current score
│   │   │   └── events.js    # POST /events — receives browser events
│   │   ├── services/
│   │   │   └── entropyEngine.js  # Core scoring algorithm
│   │   └── utils/
│   │       └── logger.js    # Colored console logger
│   └── package.json
│
├── wallpaper_app/           # Electron + React desktop app
│   ├── electron/
│   │   └── main.js          # Electron main process
│   ├── src/
│   │   ├── App.jsx           # Root component
│   │   ├── components/
│   │   │   └── WallpaperCanvas.jsx  # Main canvas wrapper
│   │   ├── visualizers/
│   │   │   ├── CalmState.jsx        # Low entropy visualizer
│   │   │   ├── ActiveState.jsx      # Medium entropy visualizer
│   │   │   └── ChaosState.jsx       # High entropy visualizer
│   │   └── hooks/
│   │       └── useEntropy.js        # Polls API for entropy score
│   └── package.json
│
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Google Chrome](https://www.google.com/chrome/)
- [Git](https://git-scm.com/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/CodeWithSans/wallpaper-visualizer.git
cd wallpaper-visualizer
```

---

### 2. Setup the API

```bash
cd wallpaper_api
npm install
```

Create a `.env` file:

```bash
cp .env.example .env   # or create manually
```

```env
PORT=3000
```

Start the API:

```bash
npm run dev     # development (with nodemon)
# or
npm start       # production
```

API will run at: `http://localhost:3000`

---

### 3. Setup the Desktop App

```bash
cd wallpaper_app
npm install
```

Run in development:

```bash
# Option 1: Vite dev server only (browser preview)
npm run dev

# Option 2: Full Electron app
npm run electron:dev
```

---

### 4. Load the Chrome Extension

1. Open Chrome → go to `chrome://extensions/`
2. Enable **Developer Mode** (top right toggle)
3. Click **"Load unpacked"**
4. Select the `chrome-extension/` folder

The **Dopamine Drift Tracker** extension will now track your browsing and send events to the API.

---

## 🔧 Entropy Score Algorithm

The entropy engine (`wallpaper_api/src/services/entropyEngine.js`) calculates a score using weighted browser events:

| Event       | Weight  |
| ----------- | ------- |
| Tab Switch  | +10 pts |
| Page Load   | +3 pts  |
| Rapid Click | +5 pts  |
| Scroll      | +2 pts  |

The score also applies a **decay rate of 0.7** — meaning past behavior fades over time, so the wallpaper gradually calms down if you stop being frantic.

```
score = (previousScore × 0.7) + newEvents
score = clamp(0, 100)
```

---

## 🛠️ Tech Stack

| Layer       | Technology                                                               |
| ----------- | ------------------------------------------------------------------------ |
| Desktop App | [Electron](https://www.electronjs.org/) + [React 19](https://react.dev/) |
| Animations  | [Framer Motion](https://www.framer-motion.com/)                          |
| Build Tool  | [Vite](https://vitejs.dev/)                                              |
| API         | [Express 5](https://expressjs.com/) + Node.js                            |
| Extension   | Chrome Manifest V3                                                       |

---

## 📜 API Endpoints

| Method | Endpoint   | Description                                      |
| ------ | ---------- | ------------------------------------------------ |
| `GET`  | `/entropy` | Returns current entropy score `{ score: 42 }`    |
| `POST` | `/events`  | Receives a browser event `{ type: "tabSwitch" }` |

---

## 🌿 Branching Strategy

| Branch   | Purpose                       |
| -------- | ----------------------------- |
| `master` | Stable, production-ready code |
| `dev`    | Active development            |

---

## 👤 Author

**Sanskruti Hirve**  
GitHub: [@CodeWithSans](https://github.com/CodeWithSans)

---

## 📄 License

ISC License — feel free to use and modify!
