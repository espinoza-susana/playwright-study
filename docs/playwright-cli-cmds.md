# 🧪 Playwright CLI Cheat Sheet

## 🔧 Basic CLI Commands

| Command | What It Does |
|---------|---------------|
| `npx playwright test` | Run all tests |
| `npx playwright test tests/week5` | Run tests in `week5` folder |
| `npx playwright test --project=week6` | Run only tests assigned to `week6` in your config |
| `npx playwright test my-test.spec.ts` | Run a spcdecific test file |
| `npx playwright test -g "search returns"` | Run test by title (grep match) |
| `npx playwright test --ui` | Launch interactive test runner UI (v1.39+) |

---

## 🧪 Debugging & Tracing

| Command | What It Does |
|---------|---------------|
| `PWDEBUG=1 npx playwright test` | Run test in debug mode (pause + devtools) |
| `npx playwright show-trace trace.zip` | Open a saved trace file |
| `npx playwright codegen https://example.com` | Record UI actions into test code |

---

## 📦 Test Reporting

| Command | What It Does |
|---------|---------------|
| `npx playwright test --reporter=html` | Generate and open HTML test report |
| `npx playwright show-report` | Open the last generated report |

---

## 🛠 Installation & Setup

| Command | What It Does |
|---------|---------------|
| `npx playwright install` | Install all supported browsers |
| `npx playwright install-deps` | Install required OS dependencies (Linux) |

---

## 📁 Project Tools

| Command | What It Does |
|---------|---------------|
| `npx playwright test --project=week11` | Run tests for project `week11` |
| `npx playwright test --headed` | Run tests in visible (non-headless) mode |
| `npx playwright test --workers=1` | Run tests sequentially (no parallelism) |
