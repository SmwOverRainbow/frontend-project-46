const getObject = (fileContent, extention) => {
  if (extention.toUpperCase() === '.JSON') {
    return JSON.parse(fileContent);
  }

  return 'oops';
};

export default getObject;
