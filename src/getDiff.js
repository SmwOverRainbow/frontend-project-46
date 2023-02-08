import _ from 'lodash';

const getDiffTree = (obj1, obj2) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);

  const diffTree = sortedKeys.map((key) => {
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return { status: 'nested', key: [key], children: getDiffTree(obj1[key], obj2[key]) };
    }
    if (_.isObject(obj1[key]) && !obj2[key]) {
      return { status: 'deleted', key: [key], value: _.cloneDeep(obj1[key]) };
    }
    if (_.isObject(obj2[key]) && !obj1[key]) {
      return { status: 'added', key: [key], value: _.cloneDeep(obj2[key]) };
    }
    if (!_.has(obj1, key)) {
      return { status: 'added', key: [key], value: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { status: 'deleted', key: [key], value: obj1[key] };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        status: 'changed', key: [key], value1: obj1[key], value2: obj1[key],
      };
    }
    return { status: 'unchanged', key: [key], value: obj1[key] };
  });
  console.log(diffTree);
  return diffTree;
};

export default getDiffTree;
