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
    const properties = tree.map((node) => {
      const currentPath = `${path}${node.key}`;
      if (node.status === 'nested') {
        const nestedPath = `${currentPath}.`;
        return iter(node.children, nestedPath);
      }
      if (node.status === 'changed') {
        return `Property '${currentPath}' was updated. From ${getValue(node.value1)} to ${getValue(node.value2)}`;
      }
      if (node.status === 'added') {
        return `Property '${currentPath}' was added with value: ${getValue(node.value)}`;
      }
      if (node.status === 'deleted') {
        return `Property '${currentPath}' was removed`;
      }
      return '';
    });
    const result = properties.filter((el) => el !== '');
    return result.join('\n');
  };

  const plainDiff = iter(diffTree);
  return plainDiff;
};

export default getPlainFormat;
