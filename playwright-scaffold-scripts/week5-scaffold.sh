mkdir -p tests/week5

cat > tests/week5/multi-tab.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('handle multi-tab flow', async ({ context }) => { const page = await context.newPage(); await page.goto('https://example.com'); });
EOF

cat > tests/week5/iframes.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('interact with iframe', async ({ page }) => { await page.goto('https://the-internet.herokuapp.com/iframe'); });
EOF

cat > tests/week5/keyboard-mouse.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('keyboard interaction', async ({ page }) => { await page.goto('https://example.com'); await page.keyboard.type('Hello'); });
EOF

cat > tests/week5/dialogs.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('handle dialog', async ({ page }) => { page.on('dialog', dialog => dialog.accept()); await page.evaluate(() => alert('Test')); });
EOF