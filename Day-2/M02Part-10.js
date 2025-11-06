const events = [
  { timestamp: "2025-11-03T12:01:01Z", type: "click" },
  { timestamp: "2025-11-03T12:05:01Z", type: "click" },
  { timestamp: "2025-11-03T12:10:01Z", type: "click" },
  { timestamp: "2025-11-03T12:15:01Z", type: "click" },
  { timestamp: "2025-11-03T12:20:01Z", type: "click" },
  { timestamp: "2025-11-03T12:30:01Z", type: "click" }
];

const INTERVAL = 30 * 60 * 1000;

const getBiningTimeStamp = (timestamp) => {
    const date = new Date(timestamp);

    const flooredDate = Math.floor(date.getTime() / INTERVAL) * INTERVAL;
    return new Date(flooredDate).toISOString();
}

const binnedDate = events.reduce((acc, event) => {
    const bin = getBiningTimeStamp(event.timestamp);
    if(!acc[bin]){
        acc[bin] = {total: 0}
    }

    acc[bin].total = acc[bin].total + 1;

    return acc;
}, {});

console.log(binnedDate);