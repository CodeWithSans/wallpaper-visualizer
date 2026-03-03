const API_URL = 'http://localhost:3000/api/events';

async function sendEvent(type, value = 1) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, value })
    });
  } catch (err) {
    console.log('Wallpaper API is not reachable');
  }
}

chrome.tabs.onActivated.addListener(() => {
  sendEvent('tabSwitch', 1);
  console.log('Tab switched -> Event Sent');
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
    sendEvent('pageLoad', 1);
    console.log('Page loaded -> Event Sent');
  }
});