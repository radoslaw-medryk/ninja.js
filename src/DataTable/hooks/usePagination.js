import React from 'react';

export function usePagination(rowsPerPage, rows) {
  const [currentPageNumber, setCurrentPageNumber] = React.useState(0);
  const [currentPageRows, setCurrentPageRows] = React.useState(rows);

  React.useEffect(() => {
    setCurrentPageNumber(0);
  }, [rows, rowsPerPage]);

  React.useEffect(() => {
    const startIndex = currentPageNumber * rowsPerPage;
    const newCurrentPageRows = rows.slice(startIndex, startIndex + rowsPerPage);
    setCurrentPageRows(newCurrentPageRows);
  }, [currentPageNumber, rowsPerPage, rows]);

  const totalNumberOfPages = rowsPerPage
    ? Math.ceil(rows.length / rowsPerPage)
    : 0;

  return {
    setCurrentPageNumber,
    currentPageNumber,
    totalNumberOfPages,
    currentPageRows,
  };
}
