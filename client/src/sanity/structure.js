// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Website")
    .items([
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("teamMember").title("Team Members"),
      S.documentTypeListItem("blog").title("Blog"),
      S.documentTypeListItem("faq").title("Frequently Asked Questions"),
      S.divider(),
      S.documentTypeListItem("homepage").title("Home Page"),
      S.documentTypeListItem("aboutpage").title("About Page"),
      S.divider(),
      S.documentTypeListItem("footer").title("Footer"),
    ]);
