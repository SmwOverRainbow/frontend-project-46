// import _ from 'lodash';

const getCurrentIndent = (depth, intend = 4) => ' '.repeat(intend * depth - 2);
const getClosingIndent = (depth, intend = 4) => ' '.repeat(intend * depth - intend);

const stringify = (value, depth = 1) => {
  const iter = (node, depthIter) => {
    const iterIndent = getCurrentIndent(depthIter);
    if (typeof node !== 'object' || node === null) {
      return `${node}`;
    }
    const objToArr = Object.entries(node);
    const elements = objToArr.map(([key, valueEl]) => `${iterIndent}  ${key}: ${iter(valueEl, depthIter + 1)}`);

    const closingIndent = getClosingIndent(depthIter);
    return ['{', ...elements, `${closingIndent}}`].join('\n');
  };
  return iter(value, depth);
};

const getStylishFormat = (diffTree) => {
  const iter = (diffObjects, depth = 1) => {
    const iterIndent = getCurrentIndent(depth);
    const closingIndent = getClosingIndent(depth);

    const result = diffObjects.flatMap((node) => {
      switch (node.status) {
        case 'nested':
          return `${iterIndent}  ${node.key}: ${iter(node.children, depth + 1)}`;
        case 'deleted':
          return `${iterIndent}- ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'added':
          return `${iterIndent}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
        case 'changed':
          return [`${iterIndent}- ${node.key}: ${stringify(node.value1, depth + 1)}`,
            `${iterIndent}+ ${node.key}: ${stringify(node.value2, depth + 1)}`];
        case 'unchanged':
          return `${iterIndent}  ${node.key}: ${stringify(node.value, depth + 1)}`;
        default: throw new Error(`Unexpected status: ${node.status}`);
      }
    });
    return ['{', ...result, `${closingIndent}}`].join('\n');
  };

  return iter(diffTree);
};

export default getStylishFormat;
