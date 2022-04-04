// @ts-nocheck
const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const randomizer = require('./utils/randomizer');

const { Api } = require('./utils/api');
const { AllFeedsPage } = require('./pages/allFeedsPage');
const { FeedPage } = require('./pages/feedPage');
const { ItemPage } = require('./pages/itemPage');

test.describe('Items', () => {
  let desiredFeed;

  test.use({ storageState: 'logged_user.json' });

  test.beforeEach(async ({ request }) => {
    desiredFeed = randomizer.getRandomFeed();

    const api = new Api(request);
    await api.createNewFeed(desiredFeed.url);
  });

  test('Opening item from the feed', async ({ page }) => {
    const allFeedsPage = new AllFeedsPage(page);
    const feedPage = new FeedPage(page);
    const itemPage = new ItemPage(page);

    await allFeedsPage.goto();
    await allFeedsPage.openFeed(desiredFeed.name);
    const itemTitle = await feedPage.openItem(randomizer.getRandomItem(await feedPage.items.elementHandles()));
    await expect(itemPage.header).toHaveText(itemTitle);
  });

  test('Commenting item', async ({ page }) => {
    const comment = faker.lorem.sentences();

    const allFeedsPage = new AllFeedsPage(page);
    const feedPage = new FeedPage(page);
    const itemPage = new ItemPage(page);

    await allFeedsPage.goto();
    await allFeedsPage.openFeed(desiredFeed.name);
    await feedPage.openItem(randomizer.getRandomItem(await feedPage.items.elementHandles()));
    await itemPage.addComment(comment);
    await expect(itemPage.commentAlert).toHaveText('Comment added successfully');
    await expect(itemPage.comment).toHaveText(comment);
  });
});
