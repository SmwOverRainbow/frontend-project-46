import yaml from 'js-yaml';

const getObject = (fileContent, extention) => {
  if (extention.toUpperCase() === '.JSON') {
    return JSON.parse(fileContent);
  }
  if (extention.toUpperCase() === '.YAML' || extention.toUpperCase() === '.YML') {
    return yaml.load(fileContent);
  }

  return 'oops! Unexprcted format';
};

export default getObject;
