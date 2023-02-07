import _ from 'lodash';

const getDiffTree = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  // const keysObjChild = sortedKeys.filter((key) => _.isObject(obj1[key]));
  // const childDiffTree = keysObjChild.map((el) => getDiffTree(obj1[el], obj2[el]));

  const cb = (acc, element) => {
    if (_.isObject(obj1[element]) && _.isObject(obj2[element])) {
      acc[element] = getDiffTree(obj1[element], obj2[element]);
      return acc;
    }
    if (_.isObject(obj1[element]) && !obj2[element]) {
      acc[element] = _.cloneDeep(obj1[element]);
      return acc;
    }
    if (_.isObject(obj2[element]) && !obj1[element]) {
      acc[element] = _.cloneDeep(obj2[element]);
      return acc;
    }
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
  console.log(diffTree);
  return diffTree;
};

export default getDiffTree;
