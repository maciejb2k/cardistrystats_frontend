import React, {useState, useEffect, useCallback} from "react";
import {useHistory} from "react-router-dom";
import {FiSearch, FiPlus, FiSliders, FiX} from "react-icons/fi";

import styles from "./DataTableControls.module.scss";

export default function DataTableControls(props) {
  const {isCheckboxMenu, checkboxRowId, tableTitle, sortableFields, resultsCount, addLink} = props;
  const {deleteRow, fetchRows} = props;

  const [isSortMenu, setSortMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  const addNew = (e) => {
    history.push(addLink);
  };

  /* Ordering */

  const toggleSortMenu = (e) => {
    e.preventDefault();
    setTimeout(() => setSortMenu(!isSortMenu), 0);
    document.addEventListener("click", closeSortMenu);
  };

  const closeSortMenu = useCallback(() => {
    setSortMenu(false);
    document.removeEventListener("click", closeSortMenu);
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener("click", closeSortMenu);
    };
  }, [closeSortMenu]);

  const sortMenuAction = (e) => {
    e.preventDefault();
    const desc = e.currentTarget.attributes.desc.textContent === "true" ? true : false;
    const fieldname = e.currentTarget.attributes.fieldname.value;
    const query = desc ? `-${fieldname}` : `${fieldname}`;
    fetchRows({ordering: query});
  };

  /* Searching */

  const onSearchInputType = (e) => setSearchValue(e.target.value);

  const searchMenuAction = () => {
    fetchRows({
      search: searchValue,
      page: 1,
    });
  };

  return (
    <div className={`${styles["Controls"]} ${isCheckboxMenu ? `${styles["Controls--delete"]}` : null}`}>
      <div className={styles["TableInfo"]}>
        {isCheckboxMenu
          ? (
            <button
              onClick={deleteRow}
              title="Delete selected rows"
              className={`${styles["Button"]} ${styles["Button--delete"]}`}
            >
              <FiX />
            </button>
          )
          : null}
        <div>
          <h2 className={styles["TableInfo-title"]}>
            {tableTitle}
          </h2>
          <p className={styles["TableInfo-text"]}>
            <span className={styles["TableInfo-fragment"]}>
              Number of results:&nbsp;
              <span className={styles["TableInfo-text--bold"]}>
                {resultsCount}
              </span>
            </span>
            {isCheckboxMenu ? (
              <span className={styles["TableInfo-fragment"]}>
                Selected items:&nbsp;
                <span className={styles["TableInfo-text--bold"]}>
                  {checkboxRowId.length}
                </span>
              </span>
            ) : null}
          </p>
        </div>
      </div>
      <div className={styles["Controls-right"]}>
        <div className={styles["Search"]}>
          <input
            className={styles["Search-input"]}
            type="text"
            placeholder="Search..."
            onChange={onSearchInputType}
          />
          <button
            onClick={searchMenuAction}
            className={styles["Search-button"]}>
            <FiSearch />
          </button>
        </div>
        <div className={styles["Ordering"]}>
          <button
            title="Sort Results"
            className={`${styles["Button"]} ${styles["Button--sort"]}`}
            onClick={toggleSortMenu}
          >
            <FiSliders />
          </button>
          {isSortMenu
            ? (
              <ul className={styles["OrderingList"]}>
                {sortableFields.map((field, index) => {
                  return ([
                    <li key={`${field}_${index}_asc`}><button
                      fieldname={field}
                      desc="false"
                      className={styles["OrderingList-el"]}
                      onClick={sortMenuAction}
                    >
                      <span className={styles["OrderingList-name"]}>{field}</span> - Ascending
                    </button></li>,
                    <li key={`${field}_${index}_desc`}><button
                      fieldname={field}
                      desc="true"
                      className={styles["OrderingList-el"]}
                      onClick={sortMenuAction}>
                      <span className={styles["OrderingList-name"]}>{field}</span> - Descending
                    </button></li>,
                  ]);
                })}
              </ul>
            )
            : null}
        </div>
        <button
          onClick={addNew}
          title="Add New"
          className={`${styles["Button"]} ${styles["Button--add"]}`}
        >
          <FiPlus />
        </button>
      </div>
    </div >
  );
}
