import { info, success } from '../utils/logger.js';

let eventBuffer = [];
let lastScore = 0;
const DECAY_RATE = 0.7;

function addEvent(event) {
  eventBuffer.push({
    ...event,
    timestamp: Date.now()
  });
  info(`Event received: ${event.type}`);
}

function calculateScore() {
  let newEvents = 0;

  const tabSwitches = eventBuffer.filter(e => e.type === 'tabSwitch').length;
  const scrollEvents = eventBuffer.filter(e => e.type === 'scroll').length;
  const rapidClicks  = eventBuffer.filter(e => e.type === 'rapidClick').length;
  const pageLoads    = eventBuffer.filter(e => e.type === 'pageLoad').length;

  newEvents += tabSwitches * 10;
  newEvents += scrollEvents * 2;
  newEvents += rapidClicks * 5;
  newEvents += pageLoads * 3;

  let score = (lastScore * DECAY_RATE) + newEvents;

  score = Math.min(100, Math.max(0, score));

  lastScore = score;
  eventBuffer = [];

  success(`Score: ${score.toFixed(1)}`);
  return Math.round(score);
}

export { addEvent, calculateScore };