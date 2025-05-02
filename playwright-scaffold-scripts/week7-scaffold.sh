mkdir -p tests/week7

cat > tests/week7/ci-github.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('simulate GitHub CI env', async ({ page }) => { await page.goto('https://example.com'); });
EOF

cat > tests/week7/reporter.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('generate a report', async ({ page }) => { await page.goto('https://example.com'); });
EOF

cat > tests/week7/flaky.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('simulate flaky test', async ({ page }) => { test.fail(); await page.goto('https://example.com'); });
EOF