import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import homePage from "./homePage";

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, homePage],
};
