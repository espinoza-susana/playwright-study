mkdir -p tests/week10

cat > tests/week10/mock-user-flow.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('mock full user flow', async ({ page }) => { await page.goto('https://example.com'); });
EOF

cat > tests/week10/complex-mock.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('conditional mock response', async ({ page }) => { await page.goto('https://example.com'); });
EOF

cat > tests/week10/salesforce-oms.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('Salesforce OMS login and nav', async ({ page }) => { await page.goto('https://login.salesforce.com'); });
EOF