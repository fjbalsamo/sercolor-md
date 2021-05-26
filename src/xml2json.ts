import * as xml from 'xml-js';

export default <T>(data: string): T => {
  const str = xml.xml2json(data, {
    compact: true,
  });
  return JSON.parse(str) as T;
};
