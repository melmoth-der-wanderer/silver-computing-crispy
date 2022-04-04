const feeds = require('../data/feeds.json');

module.exports = {
  getRandomFeed() {
    const num = Math.floor(Math.random() * feeds.length);
    const feed = feeds[num];
    feeds.splice(num, 1);
    return feed;
  },
  getRandomItem(items) {
    const num = Math.floor(Math.random() * items.length);
    return num + 1;
  },
};
