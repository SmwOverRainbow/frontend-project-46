import { readFileSync } from 'fs';
import { extname } from 'path';

const getExt = (stringPath) => extname(stringPath);

const getObject = (filePath) => {
  const extention = getExt(filePath);
  const fileContent = readFileSync(filePath, 'utf-8');

  if (extention.toUpperCase() === '.JSON') {
    return JSON.parse(fileContent);
  }

  return 'oops';
};

export default getObject;
