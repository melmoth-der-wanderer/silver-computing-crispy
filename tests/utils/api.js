const { expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const userData = require('../../logged_user.json').cookies;

exports.Api = class Api {
  /**
   * @param {import('@playwright/test').APIRequest} request
   */
  constructor(request) {
    this.request = request;
    this.csrftoken = '1M51gCgQO12gL1bOSrgiP8vQUX7AZE9U'; // Expires 2022-04-17T13:37:35.786Z
  }

  async getUser() {
    const credentials = {
      username: faker.internet.userName(),
      password: faker.internet.password(),
    };

    const response = await this.request.post('/accounts/register/',
      {
        form: {
          username: credentials.username,
          password1: credentials.password,
          password2: credentials.password,
          submit: 'Submit',
          csrfmiddlewaretoken: this.csrftoken,
        },
        headers: { Cookie: `csrftoken=${this.csrftoken};` },
      });
    expect(await response.ok()).toBeTruthy();
    return credentials;
  }

  async createNewFeed(url) {
    const user = userData.find((item) => item.name === 'sessionid');
    const response = await this.request.post('/feeds/new/',
      {
        form: {
          feed_url: url,
          submit: 'Submit',
          csrfmiddlewaretoken: this.csrftoken,
        },
        headers: { Cookie: `csrftoken=${this.csrftoken}; sessionid=${user.value}` },
      });

    expect(await response.ok()).toBeTruthy();
  }
};
