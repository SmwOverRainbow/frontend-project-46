// eslint-disable-next-line import/no-extraneous-dependencies
import { expect, test } from '@jest/globals';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';
import getPath from '../src/getterPath.js';

const expectedValue = readFileSync(getPath('expectedPlaneFile.txt'));

test('get difference', () => {
  expect(genDiff()).toEqual(expectedValue);
});
