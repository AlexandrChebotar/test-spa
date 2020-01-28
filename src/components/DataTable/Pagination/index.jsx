import React, {Component, Fragment, useState} from 'react';
import {Pane, Text, Button, Select} from 'evergreen-ui';

import './style.scss';

const Pagination = (props) => {
  // const pageCount = 12;
  const {pageCount, currentPage, rowsOnPage, setCurrentPage, setRowsOnPage} = props;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [rowsOnPage, setRowsOnPage] = useState(15);

  const firstPage = (currentPage < 4) ? 1 
    : (pageCount - currentPage > 2) ? currentPage - 3 
    : (pageCount - 6 < 1) ? 1
    : pageCount - 6;
  const lastPage = (pageCount < 7) ? pageCount
    : (firstPage + 6 > pageCount) ? pageCount
    : (currentPage + 3 > pageCount) ? pageCount
    : (currentPage < 4) ? firstPage + 6
    : currentPage + 3

  let pageButtons = [];
  for (let i = firstPage; i <= lastPage; i++) {
    pageButtons.push(
      <Button key={i} appearance={i === currentPage ? 'primary' : 'default'} onClick={() => setCurrentPage(i)} >
        {i}
      </Button>
    );
  }

  return (
      <Pane className="pagination" display="flex">
        <Button disabled={currentPage === firstPage} onClick={() => setCurrentPage(currentPage - 1)} >Previous</Button>
        {firstPage !== 1 &&
          <Text size={600} >...</Text>
        }
        {pageButtons}
        {lastPage !== pageCount &&
          <Text  >...</Text>
        }
        <Button disabled={currentPage === lastPage} onClick={() => setCurrentPage(currentPage + 1)} >Next</Button>
        <Pane marginLeft="auto">
          <Text>Rows on page:</Text>
          <Select value={rowsOnPage} onChange={e => setRowsOnPage(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
        </Pane>
      </Pane>
  );
};

export default Pagination;
