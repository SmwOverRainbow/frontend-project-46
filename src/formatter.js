// import _ from 'lodash';

const stringify = (value, indent = '    ', depth = 1) => {
  if (typeof value !== 'object') {
    return `${value}`;
  }
  const objToArr = Object.entries(value);
  const elements = objToArr.map(([key, valueEl]) => {
    let newValue = valueEl;
    if (typeof valueEl === 'object' && valueEl !== null) {
      newValue = stringify(valueEl, indent, depth + 1);
    }
    return `${indent.repeat(depth)}${key}: ${newValue}\n`;
  });

  const jsonFormat = elements.join('');
  const result = `{\n${jsonFormat}${indent.repeat(depth - 1)}}`;
  return result;
};

const getStyleFormat = (diffTree, style = 'stylish') => {
  if (style === 'stylish') {
    // const iter = (diffObjects, depth = 1, countOfRepeat = 1) => {
    // const indent = '    ';
    const result = diffTree.map((node) => {
      switch (node.status) {
        case 'nested':
          return `    ${node.key}: ${getStyleFormat(node.children)}`;
        case 'deleted':
          return `  - ${node.key}: ${stringify(node.value)}`;
        case 'added':
          return `  + ${node.key}: ${stringify(node.value)}`;
        case 'changed':
          return `  - ${node.key}: ${stringify(node.value1)}\n  + ${node.key}: ${stringify(node.value2)}`;
        case 'unchanged':
          return `    ${node.key}: ${stringify(node.value)}`;
        default: throw new Error('oops!');
      }
    });

    console.log(result);
    return `{\n${result.join('\n')}\n}`;
  }
  return 'another format';
};

export default getStyleFormat;
