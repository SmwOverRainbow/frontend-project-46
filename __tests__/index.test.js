import { expect, test } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirName = dirname(__filename);

const expectedValue = String(readFileSync(resolve(__dirName, '..', '__fixtures__', 'expectedPlainFile.txt'), 'utf-8'));

test('get difference', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(expectedValue);
});
