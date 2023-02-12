import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/index.js';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);
const readFile = (nemeOfFile) => readFileSync(resolve(dirName, '..', '__fixtures__', nemeOfFile), 'utf-8');

const expectedValueStylish = readFile('expectedStylishDiff.txt');
const expectedValuePlain = readFile('expectedPlainDiff.txt');
const expectedValueJson = readFile('expectedJsonDiff.txt');

test('diff JSON files with stylish format', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish')).toEqual(expectedValueStylish);
});
test('diff YAML files with stylish format', () => {
  expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'stylish')).toEqual(expectedValueStylish);
});

test('diff JSON files with plain format', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(expectedValuePlain);
});
test('diff YAML files with plain format', () => {
  expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain')).toEqual(expectedValuePlain);
});

test('diff JSON files with json format', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toEqual(expectedValueJson);
});
test('diff YAML files with json format', () => {
  expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json')).toEqual(expectedValueJson);
});

const cases = [
  ['__fixtures__/file1.json', '__fixtures__/file2.json', expectedValueStylish],
  ['__fixtures__/file1.yaml', '__fixtures__/file2.yaml', expectedValueStylish],
];

describe('default format', () => {
  test.each(cases)('difference %s and %s', (a, b, expectedResult) => {
    expect(genDiff(a, b)).toEqual(expectedResult);
  });
});
