mkdir -p tests/week4

cat > tests/week4/network/mock-rest-api.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('mock a GET request', async ({ page }) => { await page.route('**/api/**', route => route.fulfill({ status: 200, body: JSON.stringify({ data: 'mock' }) })); await page.goto('https://example.com'); });
EOF

cat > tests/week4/network/network-intercept.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('intercept and assert network request', async ({ page }) => { await page.route('**/*.png', route => route.abort()); await page.goto('https://example.com'); });
EOF

cat > tests/week4/visual/screenshot.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('take a screenshot', async ({ page }) => { await page.goto('https://example.com'); await page.screenshot({ path: 'screenshot.png' }); });
EOF

cat > tests/week4/visual/comparison.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('visual comparison', async ({ page }) => { await page.goto('https://example.com'); await expect(page).toHaveScreenshot(); });
EOF