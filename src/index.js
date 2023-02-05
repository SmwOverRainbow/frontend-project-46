import _ from 'lodash';
import getObject from './parser.js';
import getStyleFormat from './formatter.js';

const genDiff = (filePath1, filePath2, format = 'JSON') => {
  const obj1 = getObject(filePath1);
  const obj2 = getObject(filePath2);

  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  // console.log(keys);

  const cb = (acc, element) => {
    if (!Object.hasOwn(obj1, element)) {
      acc[element] = 'added';
    } else if (!Object.hasOwn(obj2, element)) {
      acc[element] = 'deleted';
    } else if (obj1[element] !== obj2[element]) {
      acc[element] = 'changed';
    } else {
      acc[element] = 'unchanged';
    }
    return acc;
  };

  const diffTree = sortedKeys.reduce(cb, {});

  const result = getStyleFormat(obj1, obj2, diffTree, format);
  console.log(result);
  return result;
};

export default genDiff;
