# 🔧 Playwright Fixtures Explained

## What is a Fixture?

A **fixture** is a reusable setup that prepares the environment your tests need. Fixtures help you avoid duplicating setup code like creating pages, navigating to URLs, or logging in users.

In Playwright, fixtures are automatically passed to your tests and can be built-in or custom.

---

## ✅ Example: Built-in Fixture

```ts
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://example.com');
});
```

- `page` is a **built-in fixture**.
- Playwright provides it so you don't have to manually create a browser or tab.

---

## 🔧 Custom Fixture Example

You can create your own fixture using `test.extend()`:

```ts
import { test as base } from '@playwright/test';

const test = base.extend({
  adminPage: async ({ page }, use) => {
    await page.goto('/admin');
    await use(page);
  }
});

test('admin dashboard loads', async ({ adminPage }) => {
  await expect(adminPage.locator('h1')).toHaveText('Admin Dashboard');
});
```

---

## 🧼 Why Use Fixtures?

- Reuse setup logic across multiple tests
- Keep test code clean and focused
- Automatically manage setup and teardown

---

## 🔁 Common Use Cases

- Page objects (e.g., homepage, login page)
- Logged-in user sessions
- API mocking or server setup
- Preloaded test data

---

## 📌 Tips

- Always call `await use(...)` to pass the fixture into your test
- Use `test.use()` for per-test config overrides
- Global fixtures can be declared in `playwright.config.ts` or a shared `fixtures.ts`

---

Happy testing! 🧪
