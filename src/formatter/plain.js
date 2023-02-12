const getValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const getPlainFormat = (diffTree) => {
  const iter = (tree, path = '') => {
    const properties = tree
      .filter((el) => el.status !== 'unchanged')
      .map((node) => {
        const currentPath = `${path}${node.key}`;
        switch (node.status) {
          case 'nested':
            return iter(node.children, `${currentPath}.`);
          case 'changed':
            return `Property '${currentPath}' was updated. From ${getValue(node.value1)} to ${getValue(node.value2)}`;
          case 'added':
            return `Property '${currentPath}' was added with value: ${getValue(node.value)}`;
          case 'deleted':
            return `Property '${currentPath}' was removed`;
          default:
            throw new Error(`Unknowing status: ${node.status}`);
        }
      });
    return properties.join('\n');
  };

  const plainDiff = iter(diffTree);
  return plainDiff;
};

export default getPlainFormat;
