import React from 'react';

export function useSearch(rows, searchText) {
  const [foundRows, setFoundRows] = React.useState(rows);

  React.useEffect(() => {
    if (!searchText) {
      setFoundRows(rows);
      return;
    }

    const newFoundRows = rows.filter(
      (row) =>
        row.name1.toLowerCase().search(searchText.toLowerCase()) > -1 ||
        (row.email &&
          row.email.toLowerCase().search(searchText.toLowerCase()) > -1)
    );

    setFoundRows(newFoundRows);
  }, [rows, searchText]);

  return foundRows;
}
