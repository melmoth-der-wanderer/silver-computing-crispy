#  Simple RSS scraper Automation
Test execution results: [![Allure Report](https://img.shields.io/badge/Allure%20Report-deployed-yellowgreen)](https://melmoth-der-wanderer.github.io/silver-computing-crispy/)

---

### Technology
Playwright, Allure Report, Eslint, Faker

---

### Browsers
Chrome, Firefox, Safari

---

### Platforms
MacOS, Linux

---

### CI
Have been used Github Actions. Job is running automatically on the `push` action. See details `.github/workflows/playwright.yml`. This job will run full regression test suite in 3 browsers. In real life there will be different options to manipulate the numbers of tests and browsers to provide: Smoke, Acceptance and Regression tasks for different purposes.

---

### User flows
* Login
  * Valid
* Sign Up
  * Valid
* Feeds
  * Adding a new feed
  * Updating feed
  * Saving feed to bookmarks
* Items
  * Opening item from the feed 
  * Commenting item

All the logic, including negative flows should be isolated and covered at Unit and API layers, but the goal of this project was to show competence in e2e tests creation.

## Local Set Up

Clone the repository to your local computer
```
git clone https://github.com/melmoth-der-wanderer/silver-computing-crispy.git
```

Use the package manager `npm` to install dependencies:
```
npm install
```

Install the browsers
```
npx playwright install
```

Run the UI automation tests:
```
npm test  
```
(please note, that this command also runs web-server inside and tests run in headless mode)

To run tests in other browsers use:
```
npm test:webkit or npm test:firefox 
```

Run the UI automation tests in headful mode:
```
npm run debug
```
(please note, that this command also runs web-server inside)

Get the report:
```
npm run report
```
---

#### Notes:

- All the feeds in the tests are choosing randomly from the `tests/data/feeds.json` list;
- To authenticate user once, `global setup` and `storageState` were used;
- To clean feeds data before test run, direct manipulating with DB was used. See `global setup` and `tests\utils\db.js`. Not very proud of this, but it makes tests stable. In real world API to clean these data should be provided;
- API was used to create preconditions before test run, such as: User and Feed creation;
- Without product requirements it is impossible to assure that these use cases are completely correct and provide full coverage;
- Structure and selected test scenarios should be discussed via pull-request procedure with a team;
- It is not possible to run tests in parallel yet, but it will be a further step to do;
- Mobile emulation is also possible, but wasn't considered in this project as it is completely adaptive.
