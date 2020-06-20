export function rowsInPageNumber(rowsPerPage, pageNumber) {
  const startIndex = pageNumber * rowsPerPage;
  return [startIndex, startIndex + rowsPerPage];
}
