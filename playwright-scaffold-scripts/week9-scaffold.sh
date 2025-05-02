mkdir -p tests/week9

cat > tests/week9/excel-read.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('read excel file', async () => { /* Use exceljs or xlsx */ });
EOF

cat > tests/week9/excel-write.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('write to excel file', async () => { /* Use exceljs or xlsx */ });
EOF

cat > tests/week9/csv-data.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('read data from CSV', async () => { /* fs.readFile usage */ });
EOF

cat > tests/week9/json-data.spec.ts <<EOF
import { test, expect } from '@playwright/test';
test('load JSON data', async () => { const data = require('./data.json'); });
EOF