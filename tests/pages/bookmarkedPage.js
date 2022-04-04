const { BasePage } = require('./basePage');

exports.BookmarkedPage = class BookmarkedPage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.URL = '/feeds/bookmarked/';
    this.feedTitle = page.locator('//tbody/descendant::*[contains (@href, "/feeds/")]');
  }
};
