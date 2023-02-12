import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import getObject from './parser.js';
import getFormat from './formatter/index.js';
import getDiffTree from './getDiff.js';

const getTypeFile = (pathOfFile) => {
  const components = pathOfFile.split('.');
  const typeofFile = components.at(-1);
  return typeofFile.toUpperCase();
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fileType1 = getTypeFile(filePath1);
  const fileType2 = getTypeFile(filePath2);
  const fileContent1 = readFileSync(resolve(cwd(), filePath1), 'utf-8');
  const fileContent2 = readFileSync(resolve(cwd(), filePath2), 'utf-8');

  const obj1 = getObject(fileContent1, fileType1);
  const obj2 = getObject(fileContent2, fileType2);

  const diffTree = getDiffTree(obj1, obj2);
  const result = getFormat(diffTree, format);
  console.log(result);
  return result;
};

export default genDiff;
