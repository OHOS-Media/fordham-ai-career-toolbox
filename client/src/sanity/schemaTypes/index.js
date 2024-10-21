import { blockContentType } from "./blockContentType";
import { blogType } from "./blogType";
import { authorType } from "./authorType";
import { homePageType } from "./homePageType";
import { faqType } from "./faqType";
import { footerType } from "./footerType";

export const schema = {
  types: [blockContentType, blogType, authorType, faqType, homePageType, footerType],
};
