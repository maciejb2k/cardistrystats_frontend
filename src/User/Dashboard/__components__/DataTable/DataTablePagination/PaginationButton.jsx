import React from "react";

import styles from "./DataTablePagination.module.scss";

export default function PaginationButton(props) {
  return (
    <button onClick={props.setPage} className={
      `${styles["Pagination-page"]} ${props.value === props.currentPage ? `${styles["Pagination-page--active"]}` : null}`}>
      {props.value}
    </button>
  );
}
