import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { homePageType } from "./homePageType";

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, homePageType],
};
