// @ts-nocheck
const { test, expect } = require('@playwright/test');
const randomizer = require('./utils/randomizer');

const { Api } = require('./utils/api');
const { AllFeedsPage } = require('./pages/allFeedsPage');
const { BookmarkedPage } = require('./pages/bookmarkedPage');
const { FeedPage } = require('./pages/feedPage');

test.describe('Feeds', () => {
  let desiredFeed;

  test.use({ storageState: 'logged_user.json' });

  test.beforeEach(async ({ request }) => {
    desiredFeed = randomizer.getRandomFeed();

    const api = new Api(request);
    await api.createNewFeed(desiredFeed.url);
  });

  test('Updating feed', async ({ page }) => {
    const allFeedsPage = new AllFeedsPage(page);
    const feedPage = new FeedPage(page);

    await allFeedsPage.goto();
    await allFeedsPage.openFeed(desiredFeed.name);
    await feedPage.updateFeed();
    await expect(feedPage.updatingAlert).toBeVisible();
  });

  test('Saving feed to bookmarks', async ({ page }) => {
    const allFeedsPage = new AllFeedsPage(page);
    const bookmarkedPage = new BookmarkedPage(page);
    const feedPage = new FeedPage(page);

    await allFeedsPage.goto();
    await allFeedsPage.openFeed(desiredFeed.name);
    await feedPage.addFeedToBookmark();
    await feedPage.gotoBookmarkedList();
    await expect(bookmarkedPage.feedTitle).toHaveText(desiredFeed.name);
  });
});
