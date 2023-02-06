import { expect, test } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const expectedValue = String(readFileSync(resolve(dirName, '..', '__fixtures__', 'expectedPlainFile.txt'), 'utf-8'));

test('get difference', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(expectedValue);
});
