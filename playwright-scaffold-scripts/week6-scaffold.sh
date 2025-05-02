mkdir -p tests/week6

cat > tests/week6/fixtures.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('custom test fixture demo', async ({ page }) => { await page.goto('https://example.com'); });
EOF

cat > tests/week6/parallel.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('run test in parallel', async ({ page }) => { await page.goto('https://example.com'); });
EOF

cat > tests/week6/before-hooks.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test.describe('setup example', () => { test.beforeEach(async ({ page }) => { await page.goto('https://example.com'); }); test('test with setup', async ({ page }) => { }); });
EOF