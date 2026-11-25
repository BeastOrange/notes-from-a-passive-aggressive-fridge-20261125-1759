import * as fs from 'node:fs';
import * as path from 'node:path';

const NOTE: string = 'Door opened 7 times since midnight. No new food spawned, but my camera watched you negotiate yourself down from leftover lasagna to shredded cheese from the bag.';

const outputDir = process.env.OUTPUT_DIR ?? '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), NOTE + '\n', 'utf8');
