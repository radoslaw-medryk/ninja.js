export function calculateTotalNumberOfPages(rowsPerPage, rows) {
  if (rowsPerPage == 0) return 0;
  return Math.ceil(rows.length / rowsPerPage);
}
