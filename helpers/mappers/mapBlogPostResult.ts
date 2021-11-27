interface IContentBlock {
  type: string;
  value: string;
}

interface IBlogPostPage {
  title: string;
  description: string;
  blocks: IContentBlock[];
}

interface IBlocks {}

export const mapFields = (fields, includes) => {
  const blocks = [];

  Object.keys(fields).map((field) => {
    console.log(field);
    switch (field) {
      case "contentBlock": {
        const blocksValues = [];
        fields[field].content.map((element) => {
          const blockValue = element.content.map((el) => el.value);
          blocksValues.push({
            type: element.nodeType,
            value: blockValue.toString(),
          });
        });
        blocks.push({
          type: field,
          value: blocksValues,
        });
        break;
      }
      case "heroImage":
      case "imageForTest": {
        const imageId = fields[field].sys.id;
        const imageValue = includes.Asset.find(
          (asset) => asset.sys.id === imageId
        );
        const { file, title } = imageValue.fields;
        const image = {
          title: title,
          url: file.url,
          type: file.contentType,
        };

        blocks.push({
          type: field,
          value: image,
        });
        break;
      }
      default:
        blocks.push({ type: field, value: fields[field] });
        break;
    }
  });

  return blocks;
};

export const mapBlogPostResult = (data): IBlogPostPage => {
  const blocks = mapFields(data.items[0].fields, data.includes);

  console.log(blocks);

  return {
    title: "",
    description: "",
    blocks: [],
  };
};
