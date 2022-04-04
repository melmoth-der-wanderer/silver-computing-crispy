const { request } = require('@playwright/test');
const { Api } = require('./tests/utils/api');
const db = require('./tests/utils/db');

module.exports = async () => {
  db.clearFeedsHistory();
  const requestContext = await request.newContext({ baseURL: 'http://127.0.0.1:8000' });
  const api = new Api(requestContext);
  await api.getUser();
  await requestContext.storageState({ path: 'logged_user.json' });
  await requestContext.dispose();
};
