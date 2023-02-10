import { expect, test } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const expectedValueStylish = readFileSync(resolve(dirName, '..', '__fixtures__', 'expectedStylishDiff.txt'), 'utf-8');
const expectedValuePlain = readFileSync(resolve(dirName, '..', '__fixtures__', 'expectedPlainDiff.txt'), 'utf-8');

test('diff JSON files with stylish format', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(expectedValueStylish);
});

test('diff YAML files with stylish format', () => {
  expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(expectedValueStylish);
});

test('diff JSON files with plain format', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(expectedValuePlain);
});

test('diff YAML files with plain format', () => {
  expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain')).toEqual(expectedValuePlain);
});
