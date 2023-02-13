import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import getParse from './parser.js';
import getFormat from './formatter/index.js';
import getDiffTree from './getDiff.js';

const getInputFormat = (pathOfFile) => {
  const components = pathOfFile.split('.');
  const dataFormat = components.at(-1);
  return dataFormat.toUpperCase();
};

const getFileContent = (pathOfFile) => readFileSync(resolve(cwd(), pathOfFile), 'utf-8');

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const dataFormat1 = getInputFormat(filePath1);
  const dataFormat2 = getInputFormat(filePath2);
  const fileContent1 = getFileContent(filePath1);
  const fileContent2 = getFileContent(filePath2);

  const obj1 = getParse(fileContent1, dataFormat1);
  const obj2 = getParse(fileContent2, dataFormat2);

  const diffTree = getDiffTree(obj1, obj2);
  return getFormat(diffTree, format);
};

export default genDiff;
