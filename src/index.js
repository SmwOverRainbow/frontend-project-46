import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import getParse from './parser.js';
import getFormat from './formatter/index.js';
import getDiffTree from './getDiff.js';

const getTypeFile = (pathOfFile) => {
  const components = pathOfFile.split('.');
  const typeofFile = components.at(-1);
  return typeofFile.toUpperCase();
};

const getFileContent = (pathOfFile) => readFileSync(resolve(cwd(), pathOfFile), 'utf-8');

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const fileType1 = getTypeFile(filePath1);
  const fileType2 = getTypeFile(filePath2);
  const fileContent1 = getFileContent(filePath1);
  const fileContent2 = getFileContent(filePath2);

  const obj1 = getParse(fileContent1, fileType1);
  const obj2 = getParse(fileContent2, fileType2);

  const diffTree = getDiffTree(obj1, obj2);
  return getFormat(diffTree, format);
};

export default genDiff;
