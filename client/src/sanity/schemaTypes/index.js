import { blockContentType } from "./blockContentType";
import { blogType } from "./blogType";
import { authorType } from "./authorType";
import { homePageType } from "./homePageType";
import { faqType } from "./faqType";

export const schema = {
  types: [blockContentType, blogType, authorType, faqType, homePageType],
};
