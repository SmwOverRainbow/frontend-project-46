import getJsonStyle from './jsonStyle.js';
import getPlainFormat from './plain.js';
import getStylishFormat from './stylish.js';

const getFormat = (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return getStylishFormat(diffTree);
    case 'plain':
      return getPlainFormat(diffTree);
    case 'json':
      return getJsonStyle(diffTree);
    default:
      throw new Error(`Unexpected format: ${format}`);
  }
};

export default getFormat;
