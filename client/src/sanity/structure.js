// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Website")
    .items([
      S.documentTypeListItem("blog").title("Blog"),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("faq").title("Frequently Asked Questions"),
      S.divider(),
      S.documentTypeListItem("homepage").title("Home Page"),
    ]);
