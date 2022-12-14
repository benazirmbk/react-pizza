import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    previousLabel="<"
    nextLabel=">"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    forcePage={currentPage - 1}
    pageCount={3}
  />
);

export default Pagination;
