import React from 'react';
import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';
import { useSearch } from './hooks/useSearch';
import { usePagination } from './hooks/usePagination';

const DataTable = ({ rows, rowsPerPage }) => {
  const [searchText, setSearchText] = React.useState('');
  const filteredRows = useSearch(rows, searchText);
  const {
    setCurrentPageNumber,
    currentPageNumber,
    currentPageRows,
    totalNumberOfPages,
  } = usePagination(rowsPerPage, filteredRows);

  return (
    <div>
      <Search onSearch={setSearchText} />
      <table>
        <tbody>
          {currentPageRows.map((row) => (
            <Row key={row.per_id} row={row} />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={setCurrentPageNumber}
      />
    </div>
  );
};

DataTable.defaultProps = {
  rowsPerPage: 40,
};

export default DataTable;
