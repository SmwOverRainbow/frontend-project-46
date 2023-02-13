import yaml from 'js-yaml';

const getParse = (fileContent, format) => {
  switch (format) {
    case 'JSON':
      return JSON.parse(fileContent);
    case 'YAML':
      return yaml.load(fileContent);
    case 'YML':
      return yaml.load(fileContent);
    default:
      throw new Error(`Unexprcted type: ${format}`);
  }
};

export default getParse;
