exports.BasePage = class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.bookmarkedButton = page.locator('.navbar-nav [href="/feeds/bookmarked/"]');
    this.newFeedButton = page.locator('.navbar-right [href="/feeds/new/"]');
  }

  async gotoBookmarkedList() {
    await Promise.all([
      this.page.waitForNavigation(),
      this.bookmarkedButton.click(),
    ]);
  }
};
