# 📘 Playwright Learning Plan (Week-by-Week)

## ✅ Week 1 – Basics & Assertions
**Goals**: Understand the Playwright test structure, locators, and basic assertions.

**Files**:
- `basic.spec.ts`
- `assertions.spec.ts`
- `selectors.spec.ts`
- `locator-api.spec.ts`
- `page-object/`

**Best Practices**:
- Always use `await` with async Playwright actions.
- Prefer `locator()` over older `page.$` methods for retry-ability.
- Use Page Object Model to keep tests maintainable.

---

## ✅ Week 2 – Sessions, Downloads & Storage
**Goals**: Learn about authentication, storage state, and handling downloads/uploads.

**Files**:
- `auth-session.spec.ts`
- `download.spec.ts`
- `storage.spec.ts`
- `upload.spec.ts`

**Best Practices**:
- Reuse authentication sessions with `storageState`.
- Clean up downloaded/uploaded files after tests.
- Keep login logic out of test files—use setup.

---

## ✅ Week 3 – Configuration, Tracing & Projects
**Goals**: Customize Playwright configuration and use the trace viewer.

**Files**:
- `config-projects.spec.ts`
- `trace-view.spec.ts`
- `env-config.spec.ts`
- `global-setup.spec.ts`

**Best Practices**:
- Use environment variables to configure credentials and base URLs.
- Enable tracing for flaky tests.
- Use multiple `projects` for browser/device coverage.

---

## ✅ Week 4 – Network & Visual Testing
**Goals**: Mock APIs and perform screenshot-based testing.

**Files**:
- `network/network-intercept.spec.ts`
- `network/mock-rest-api.spec.ts`
- `visual/screenshot.spec.ts`
- `visual/comparison.spec.ts`

**Best Practices**:
- Use `route.fulfill()` to mock backend responses.
- Version-control visual snapshots.
- Test in headless mode for consistent rendering.

---

## 🔄 Week 5 – Advanced Features
**Goals**: Simulate real-world interactions like tabs, frames, dialogs.

**Files**:
- `multi-tab.spec.ts`
- `iframes.spec.ts`
- `keyboard-mouse.spec.ts`
- `dialogs.spec.ts`

**Best Practices**:
- Wait for events like `popup`, `dialog` using `page.waitForEvent()`.
- Use `frameLocator()` for nested frame access.
- Chain keyboard actions with `keyboard.press()` and `keyboard.type()`.

---

## 🔄 Week 6 – Fixtures, Hooks & Parallelism
**Goals**: Leverage fixtures and hooks to improve test architecture.

**Files**:
- `fixtures.spec.ts`
- `parallel.spec.ts`
- `before-hooks.spec.ts`

**Best Practices**:
- Use `test.use()` to customize context per test.
- Leverage `beforeEach`, `afterEach` for setup/cleanup.
- Group related tests logically to enable parallelism.

---

## 🔄 Week 7 – CI Integration & Reporting
**Goals**: Run tests in CI/CD, and generate useful reports.

**Files**:
- `ci-github.spec.ts`
- `reporter.spec.ts`
- `flaky.spec.ts`

**Best Practices**:
- Use `--reporter=html` or JSON to generate artifacts.
- Add `retries` config to handle flaky CI tests.
- Use `test.skip()` or `test.fixme()` to isolate unstable tests.

---

## 🔄 Week 8 – Cross-Browser, Mobile & Locale Testing
**Goals**: Validate app behavior across different browsers, devices, and regions.

**Files**:
- `cross-browser.spec.ts`
- `mobile.spec.ts`
- `geo-locale.spec.ts`

**Best Practices**:
- Define `projects` for Chromium, Firefox, WebKit.
- Use built-in devices like `iPhone 12` for mobile emulation.
- Test translations and locale behavior with `locale`, `timezone`, and `geolocation`.

---

## 🔄 Week 9 – Test Data & File Handling
**Goals**: Use external test data sources and interact with files (e.g., Excel).

**Files**:
- `excel-read.spec.ts` – Read from `.xlsx` files using `xlsx` or `exceljs`
- `excel-write.spec.ts` – Write test results or data to Excel
- `csv-data.spec.ts` – Load test data from CSV using `fs` and parameterize
- `json-data.spec.ts` – Reuse mock JSON for test scenarios

**Best Practices**:
- Store mock data in `/fixtures` or `/resources/data`
- Keep test logic separate from data (data-driven testing)
- Use `test.describe()` + `test.each()` for data-driven variations

---

## 🔄 Week 10 – Advanced Mocks & Third-Party Systems
**Goals**: Use complex mocks and interact with third-party platforms like Salesforce OMS.

**Files**:
- `mock-user-flow.spec.ts` – End-to-end flow with mock APIs
- `complex-mock.spec.ts` – Use conditional logic in `route.fulfill()`
- `salesforce-oms.spec.ts` – Salesforce Order Management automation (if feasible)

**Best Practices**:
- Use `route.fromHAR()` if your backend returns dynamic payloads
- Wrap third-party interactions in utility modules
- If testing Salesforce, prioritize API-based testing or stable frontend selectors
