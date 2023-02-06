const getStyleFormat = (obj1, obj2, diffTree, style) => {
  if (style === 'JSON') {
    const arrOfDiff = Object.entries(diffTree);

    const cb = (acc, element) => {
      const [key, status] = element;
      switch (status) {
        case 'deleted':
          acc.push(`  - ${key}: ${obj1[key]}\n`);
          break;
        case 'unchanged':
          acc.push(`    ${key}: ${obj1[key]}\n`);
          break;
        case 'changed':
          acc.push(`  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`);
          break;
        case 'added':
          acc.push(`  + ${key}: ${obj2[key]}\n`);
          break;
        default:
          throw new Error(`property ${key} have no status`);
      }
      return acc;
    };

    const formatedTree = arrOfDiff.reduce(cb, []);

    const result = `{\n${formatedTree.join('')}}`;
    return result;
  }
  return 'another format';
};

export default getStyleFormat;
