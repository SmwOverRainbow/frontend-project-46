// import _ from 'lodash';
import { readFileSync } from 'fs';
import { extname } from 'path';
import getPath from './getterPath.js';
import getObject from './parser.js';
import getStyleFormat from './formatter.js';
import getDiffTree from './getDiff.js';

const genDiff = (file1, file2, format = 'JSON') => {
  const filePath1 = getPath(file1);
  const filePath2 = getPath(file2);
  const extention1 = extname(file1);
  const extention2 = extname(file2);
  const fileContent1 = readFileSync(filePath1, 'utf-8');
  const fileContent2 = readFileSync(filePath2, 'utf-8');

  const obj1 = getObject(fileContent1, extention1);
  const obj2 = getObject(fileContent2, extention2);

  //   const keys = _.union(_.keys(obj1), _.keys(obj2));
  //   const sortedKeys = _.sortBy(keys);
  //   // console.log(keys);

  //   const cb = (acc, element) => {
  //     if (!Object.hasOwn(obj1, element)) {
  //       acc[element] = 'added';
  //     } else if (!Object.hasOwn(obj2, element)) {
  //       acc[element] = 'deleted';
  //     } else if (obj1[element] !== obj2[element]) {
  //       acc[element] = 'changed';
  //     } else {
  //       acc[element] = 'unchanged';
  //     }
  //     return acc;
  //   };

  //   const diffTree = sortedKeys.reduce(cb, {});

  const diffTree = getDiffTree(obj1, obj2);
  const result = getStyleFormat(obj1, obj2, diffTree, format);
  console.log(result);
  return result;
};

export default genDiff;
