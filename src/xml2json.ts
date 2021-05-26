import * as xml from 'xml-js';

export default (data: string) => {
  const str = xml.xml2json(data, {
    compact: true,
  });
  return JSON.parse(str);
};
