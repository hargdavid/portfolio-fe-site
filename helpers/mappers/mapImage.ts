export const mapImage = (fields, includes, field) => {
  const imageId = fields[field].sys.id;
  const imageValue = includes.Asset.find((asset) => asset.sys.id === imageId);
  const { file, title } = imageValue.fields;
  return {
    title: title,
    url: file.url,
    type: file.contentType,
  };
};
