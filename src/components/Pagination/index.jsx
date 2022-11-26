import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from "./Pagination.module.scss"



function Pagination({currentPage, onChangePage}) {
  return (
    <div> <ReactPaginate
    className={styles.root}
    breakLabel="..."
    previousLabel="<"
    nextLabel=">"
    onPageChange={(event)=>onChangePage(event.selected+1)}
    pageRangeDisplayed={4}
    forcePage={currentPage -1}
    pageCount={3}
    
    renderOnZeroPageCount={null}
  /></div>
  )
}

export default Pagination