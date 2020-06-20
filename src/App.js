import React from 'react';
import DataTable from './DataTable';
import './App.css';
import { useRows } from './hooks/useRows';

const App = () => {
  const rows = useRows();

  return (
    <div className="container mt-3">
      <DataTable rows={rows} rowsPerPage={5} />
    </div>
  );
};

export default App;
