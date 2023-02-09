import { expect, test } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const expectedValueNested = String(readFileSync(resolve(dirName, '..', '__fixtures__', 'expectedNestedDiff.txt'), 'utf-8'));

test('get difference nested files JSON', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(expectedValueNested);
});

test('get difference nested files YAML', () => {
  expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(expectedValueNested);
});
