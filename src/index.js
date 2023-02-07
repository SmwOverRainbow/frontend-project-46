import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import { cwd } from 'process';
import getObject from './parser.js';
import getStyleFormat from './formatter.js';
import getDiffTree from './getDiff.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const extention1 = extname(filePath1);
  const extention2 = extname(filePath2);
  const fileContent1 = readFileSync(resolve(cwd(), filePath1), 'utf-8');
  const fileContent2 = readFileSync(resolve(cwd(), filePath2), 'utf-8');

  const obj1 = getObject(fileContent1, extention1);
  const obj2 = getObject(fileContent2, extention2);

  const diffTree = getDiffTree(obj1, obj2);
  const result = getStyleFormat(obj1, obj2, diffTree, format);
  // console.log(result);
  return result;
};

export default genDiff;
