# SauceDemo Playwright Tests

End-to-end test automation for [saucedemo.com](https://www.saucedemo.com/) using Playwright and TypeScript, built with the Page Object Model.

## Current Coverage

- **Login**
  - Standard user can log in successfully
  - Locked-out user sees the correct error message

More pages (inventory, cart, checkout) are planned as the suite grows.

## Tech Stack

- [Playwright](https://playwright.dev/) (TypeScript)
- Page Object Model architecture
- GitHub Actions for CI

## Prerequisites

- Node.js (LTS)
- npm

## Setup

```bash
git clone https://github.com/Ruby20-50/saucedemo-playwright-tests.git
cd saucedemo-playwright-tests
npm install
npx playwright install --with-deps
```

## Running the tests

```bash
npx playwright test
```

Runs across Chromium, Firefox, and WebKit as configured in `playwright.config.ts`. After the run, view the HTML report:

```bash
npx playwright show-report
```
run and detect the automated test 

```bash
npx playwright test --ui
```

## Continuous Integration

Every push to `main` automatically triggers a GitHub Actions workflow that runs the full test suite across Chromium, Firefox, and WebKit. The resulting HTML report is uploaded as a workflow artifact, viewable from the **Actions** tab on GitHub for 30 days (see `.github/workflows/playwright.yml`).

## Project Structure
```
tests/
├── login.spec.ts # Login test scenarios
└── pages/
└── LoginPage.ts # Page Object for the login page (locators + actions)

playwright.config.ts # Playwright configuration (browsers, reporter, retries)
.github/workflows/
└── playwright.yml # CI workflow
```

## Roadmap

- Page Objects and specs for inventory, cart, and checkout flows
- Broader assertion coverage per page (sorting, item details, cart totals)