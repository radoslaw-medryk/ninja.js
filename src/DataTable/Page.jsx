import React from 'react';
import classNames from 'class-names';

const Page = ({ pageNumber, isActivePage, onChange }) => {
  function click(event) {
    event.preventDefault();
    onChange(pageNumber);
  }

  const renderedPageNumber = pageNumber + 1;

  const buttonClassName = classNames(['page-link'], {
    'button-outline': isActivePage,
  });

  return (
    <li className="page-item mr-1">
      <button className={buttonClassName} onClick={click}>
        {renderedPageNumber}
      </button>
    </li>
  );
};

export default Page;
