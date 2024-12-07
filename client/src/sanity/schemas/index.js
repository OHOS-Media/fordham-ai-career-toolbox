import { blockContentType } from "./blockContentType";
import { blogType } from "./blogType";
import { authorType } from "./authorType";
import { homePageType } from "./homePageType";
import { faqType } from "./faqType";
import { footerType } from "./footerType";
import aboutPageType from "./aboutPageType";
import teamMemberType from "./teamMemberType";
import blogPageType from "./blogPageType";
import faqPageType from "./faqPageType";

export const schema = {
  types: [
    blockContentType,
    blogType,
    authorType,
    faqType,
    homePageType,
    footerType,
    aboutPageType,
    teamMemberType,
    blogPageType,
    faqPageType,
  ],
};
