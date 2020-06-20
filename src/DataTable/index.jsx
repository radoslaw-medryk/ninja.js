import React from 'react';
import Pagination from './Pagination';
import Row from './Row';
import Search from './Search';
import { calculateTotalNumberOfPages } from './utils/calculateTotalNumberOfPages';
import { rowsInPageNumber } from './utils/rowsInPageNumber';

const DataTable = (props) => {
  const [rows, setRows] = React.useState(props.rows);
  const [currentPageNumber, setCurrentPageNumber] = React.useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = React.useState(
    calculateTotalNumberOfPages(props.rowsPerPage, props.rows)
  );

  const search = (event) => {
    const text = event.target.value;
    let rowsFound = props.rows;

    if (text) {
      rowsFound = props.rows.filter((row) => {
        return (
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
        );
      });
    }

    setRows(rowsFound);
    setCurrentPageNumber(0);
    setTotalNumberOfPages(
      calculateTotalNumberOfPages(props.rowsPerPage, rowsFound)
    );
  };

  const rowsToRender = rows
    .map((row) => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(props.rowsPerPage, currentPageNumber));

  return (
    <div>
      <Search onSearch={search} />
      <table>
        <tbody>{rowsToRender}</tbody>
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
