mkdir -p tests/week8

cat > tests/week8/cross-browser.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('cross-browser support test', async ({ page }) => { await page.goto('https://example.com'); });
EOF

cat > tests/week8/mobile.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('mobile emulation', async ({ page }) => { await page.goto('https://example.com'); });
EOF

cat > tests/week8/geo-locale.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('set geo and locale', async ({ page }) => { await page.goto('https://example.com'); });
EOF