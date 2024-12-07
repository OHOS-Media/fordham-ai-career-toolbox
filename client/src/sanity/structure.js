// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Website")
    .items([
      // Top Level Pages
      S.documentTypeListItem("homepage").title("Home Page"),
      S.documentTypeListItem("aboutPage").title("About Page"),
      S.documentTypeListItem("blogPage").title("Blog Page"),
      S.documentTypeListItem("faqPage").title("FAQ Page"),
      S.divider(),
      // Sub Pages
      S.documentTypeListItem("footer").title("Footer"),
      S.divider(),
      // Content
      S.documentTypeListItem("faq").title("FAQ Content"),
      S.documentTypeListItem("blog").title("Blog Content"),
      S.documentTypeListItem("author").title("Authors Content"),
      S.documentTypeListItem("teamMember").title("Team Members Content"),
    ]);
