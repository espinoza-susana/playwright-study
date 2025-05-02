mkdir -p tests/week3

cat > tests/week3/config-projects.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('loads config for projects', async ({ page }) => { await page.goto('https://demo.playwright.dev/todomvc/'); });
EOF

cat > tests/week3/trace-view.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('trace generation demo', async ({ page }) => { await page.goto('https://demo.playwright.dev/todomvc/'); });
EOF

cat > tests/week3/env-config.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('use baseURL from env', async ({ page }) => { await page.goto(process.env.BASE_URL || 'https://example.com'); });
EOF

cat > tests/week3/global-setup.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('should leverage global setup', async ({ page }) => { await page.goto('https://example.com'); });
EOF