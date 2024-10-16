import { blockContentType } from "./blockContentType";
import { blogType } from "./blogType";
import { authorType } from "./authorType";
import { homePageType } from "./homePageType";

export const schema = {
  types: [blockContentType, blogType, authorType, homePageType],
};
