import React, {useState, useEffect} from "react";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

import PaginationButton from "./PaginationButton";

import styles from "./DataTablePagination.module.scss";

export default function DataTableControls(props) {
  const {pagesLinks, pagesCount} = props;
  const {appState: {apiParams: {page: currentPage}}} = props;
  const {fetchRows} = props;

  const prevPage = (e) => {
    let newPage = currentPage;
    fetchRows({page: --newPage});
  };

  const nextPage = (e) => {
    let newPage = currentPage;
    fetchRows({page: ++newPage});
  };

  const setPage = (e) => {
    fetchRows({page: Number(e.currentTarget.textContent)});
  };

  const goToPage = (e) => {
    const page = Number(e.target.value);
    if (page >= 1 && page <= pagesCount) {
      fetchRows({page});
    }
  };

  const createPagination = () => {
    const buttons = [];

    const startOffset = currentPage - 1;
    const endOffset = pagesCount - currentPage;
    const breakPoint = 3;

    console.log(currentPage, startOffset, endOffset);

    if (startOffset <= 3 && endOffset <= 3) {
      for (let i = 1; i <= pagesCount; i++) {
        buttons.push(
          <PaginationButton
            key={i}
            setPage={setPage}
            currentPage={currentPage}
            value={i}
          />
        );
      }
    }

    return buttons;
  };

  const prevButton = (
    <button onClick={prevPage} className={`
        ${styles["Pagination-controls"]}
        ${styles["Pagination-controls--left"]}
        ${pagesLinks && !pagesLinks.previous ? `${styles["Pagination-controls--hidden"]}` : ""}
      `}>
      <FiChevronLeft />
    </button>
  );

  const nextButton = (
    <button onClick={nextPage} className={`
        ${styles["Pagination-controls"]}
        ${styles["Pagination-controls--right"]}
        ${pagesLinks && !pagesLinks.next ? `${styles["Pagination-controls--hidden"]}` : ""}
      `}>
      <FiChevronRight />
    </button>
  );

  return (
    <div className={styles["PaginationWrapper"]}>
      <div className={styles["Pagination"]}>
        <div className={styles["Pagination-selectPage"]}>
          <label className={styles["Pagination-label"]}>Select page:</label>
          <input
            onBlur={goToPage}
            type="number"
            className={styles["Pagination-input"]}
          />
        </div>
        {prevButton}
        {createPagination()}
        {/* <p className={styles["Pagination-more"]}>...</p> */}
        {nextButton}
      </div>
    </div>
  );
}
