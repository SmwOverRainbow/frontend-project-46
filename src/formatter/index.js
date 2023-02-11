import getJsonStyle from './jsonStyle.js';
import getPlainFormat from './plain.js';
import getStylishFormat from './stylish.js';

const getFormat = (diffTree, format) => {
  if (format === 'stylish') {
    return getStylishFormat(diffTree);
  }
  if (format === 'plain') {
    return getPlainFormat(diffTree);
  }
  if (format === 'json') {
    return getJsonStyle(diffTree);
  }
  throw new Error(`Unexpected format: ${format}`);
};

export default getFormat;
