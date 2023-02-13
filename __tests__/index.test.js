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

const cases = [
  ['__fixtures__/file1.json', '__fixtures__/file2.json', expectedValueStylish],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yaml', expectedValueStylish],
  ['__fixtures__/file1.json', '__fixtures__/file2.json', expectedValueStylish, 'stylish'],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yaml', expectedValueStylish, 'stylish'],
  ['__fixtures__/file1.json', '__fixtures__/file2.json', expectedValuePlain, 'plain'],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yaml', expectedValuePlain, 'plain'],
  ['__fixtures__/file1.json', '__fixtures__/file2.json', expectedValueJson, 'json'],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yaml', expectedValueJson, 'json'],
];

describe('output format', () => {
  test.each(cases)('difference %s and %s', (a, b, expectedResult, format = 'stylish') => {
    expect(genDiff(a, b, format)).toEqual(expectedResult);
  });
});
