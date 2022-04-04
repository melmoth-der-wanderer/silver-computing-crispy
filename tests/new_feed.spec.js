// @ts-nocheck
const { test, expect } = require('@playwright/test');
const randomizer = require('./utils/randomizer');

const { AllFeedsPage } = require('./pages/allFeedsPage');
const { NewFeedPage } = require('./pages/newFeedPage');
const { FeedPage } = require('./pages/feedPage');

test.describe('Feeds', () => {
  let desiredFeed;

  test.use({ storageState: 'logged_user.json' });

  test.beforeEach(async () => {
    desiredFeed = randomizer.getRandomFeed();
  });

  test('Adding a new feed', async ({ page }) => {
    const allFeedsPage = new AllFeedsPage(page);
    const feedPage = new FeedPage(page);
    const newFeedPage = new NewFeedPage(page);

    await allFeedsPage.goto();
    await allFeedsPage.newFeedButton.click();
    await newFeedPage.addFeed(desiredFeed.url);
    await expect(feedPage.header).toHaveText(desiredFeed.name);
  });
});
