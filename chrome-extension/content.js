const API_URL = 'http://localhost:3000/api/events';

async function sendEvent(type, value = 1) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, value })
    });
  } catch (err) {
    // silently fail if API not running
  }
}

// --- SCROLL TRACKING ---
let scrollCount = 0;
let scrollTimer = null;

window.addEventListener('scroll', () => {
  scrollCount++;

  // Reset timer on every scroll
  clearTimeout(scrollTimer);

  // Wait 1 second after scrolling stops, then send the event
  scrollTimer = setTimeout(() => {
    if (scrollCount > 5) {         // only send if scrolled a lot
      sendEvent('scroll', scrollCount);
      console.log(`Scroll burst: ${scrollCount} → event sent`);
    }
    scrollCount = 0;               // reset counter
  }, 1000);
});

// --- RAPID CLICK TRACKING ---
let clickCount = 0;
let clickTimer = null;

window.addEventListener('click', () => {
  clickCount++;

  clearTimeout(clickTimer);

  // Wait 2 seconds after last click, then check if it was rapid
  clickTimer = setTimeout(() => {
    if (clickCount >= 3) {         // 3+ clicks in 2 seconds = rapid
      sendEvent('rapidClick', clickCount);
      console.log(`Rapid clicks: ${clickCount} → event sent`);
    }
    clickCount = 0;
  }, 2000);
});