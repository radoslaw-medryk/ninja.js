import React from 'react';

const Search = ({ onSearch }) => {
  function onChange(event) {
    onSearch && onSearch(event.target.value);
  }

  return (
    <div className="p-b-1">
      <input
        type="search"
        className="form-control"
        placeholder="Søg brugere"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
