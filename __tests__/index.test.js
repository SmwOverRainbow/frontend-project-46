// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from '@jest/globals';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';
import getPath from '../src/getterPath.js';

const expectedValue = readFileSync(getPath('expectedPlaneFile.txt'), 'utf-8');

test('get difference', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedValue);
});
