import yaml from 'js-yaml';

const getObject = (fileContent, fileType) => {
  switch (fileType) {
    case 'JSON':
      return JSON.parse(fileContent);
    case 'YAML':
      return yaml.load(fileContent);
    case 'YML':
      return yaml.load(fileContent);
    default:
      throw new Error(`Unexprcted type: ${fileType}`);
  }
};

export default getObject;
