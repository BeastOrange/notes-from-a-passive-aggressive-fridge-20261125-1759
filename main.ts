import * as fs from 'node:fs';
import * as path from 'node:path';

const NOTE: string = 'Door opened 7 times since midnight. Inventory remained unchanged, but my camera watched you negotiate your dignity down from leftover lasagna to shredded cheese straight from the bag.';

const outputDir = process.env.OUTPUT_DIR ?? '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), NOTE + '\n', 'utf8');
