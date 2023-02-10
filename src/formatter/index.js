import getPlainFormat from './plain.js';
import getStylishFormat from './stylish.js';

const getFormat = (diffTree, format) => {
  if (format === 'stylish') {
    return getStylishFormat(diffTree);
  }
  if (format === 'plain') {
    return getPlainFormat(diffTree);
  }
  throw new Error(`oops! Unexpected format: ${format}`);
};

export default getFormat;
