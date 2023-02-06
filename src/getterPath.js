import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
// import { cwd } from 'process';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const getPath = (fileName) => resolve(dirName, '..', '__fixtures__', fileName);

export default getPath;
