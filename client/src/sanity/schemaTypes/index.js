import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { blogType } from "./blogType";
import { authorType } from "./authorType";
import { homePageType } from "./homePageType";

export const schema = {
  types: [blockContentType, categoryType, blogType, authorType, homePageType],
};
