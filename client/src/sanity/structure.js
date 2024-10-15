// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Website")
    .items([
      S.documentTypeListItem("blog").title("Blog"),
      S.divider(),
      S.documentTypeListItem("homepage").title("Home Page"),
    ]);
