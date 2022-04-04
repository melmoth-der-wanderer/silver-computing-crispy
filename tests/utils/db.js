const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'crispy',
  password: 'password',
  port: 5432,
});

module.exports = {

  async clearFeedsHistory() {
    client.connect();
    client.query('TRUNCATE feed_feed, feed_entry, web_comment, web_bookmark;', (err) => {
      if (err != null) {
        throw new Error(err);
      }
      client.end();
    });
  },
};
