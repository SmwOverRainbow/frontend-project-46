// import _ from 'lodash';

const getCurrentIndent = (depth, intend = 4) => ' '.repeat(intend * depth - 2);
const getClosingIndent = (depth, intend = 4) => ' '.repeat(intend * depth - intend);

const stringify = (value, depth = 1) => {
  const iter = (node, depthIter) => {
    const iterIndent = getCurrentIndent(depthIter);
    if (typeof value !== 'object' || value === null) {
      return `${value}`;
    }
    const objToArr = Object.entries(node);
    const elements = objToArr.map(([key, valueEl]) => {
      let newValue = valueEl;
      if (typeof valueEl === 'object') {
        newValue = iter(valueEl, depthIter + 1);
      }
      return `${iterIndent}  ${key}: ${newValue}`;
    });

    const closingIndent = getClosingIndent(depthIter);
    const jsonFormat = elements.join('\n');
    const result = `{\n${jsonFormat}\n${closingIndent}}`;
    return result;
  };
  return iter(value, depth);
};

const getStyleFormat = (diffTree, style) => {
  if (style === 'stylish') {
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
          default: throw new Error('oops!');
        }
      });
      return `{\n${result.join('\n')}\n${closingIndent}}`;
    };

    const stylishTree = iter(diffTree);
    // console.log(stylishTree);
    return stylishTree;
  }
  return 'another format';
};

export default getStyleFormat;
