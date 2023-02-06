import _ from 'lodash';

const getDiffTree = (obj1, obj2) => {
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
  return diffTree;
};

export default getDiffTree;
