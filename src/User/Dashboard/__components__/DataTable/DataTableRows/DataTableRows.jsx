import React, {useState, useEffect, useCallback, Fragment} from "react";
import {useHistory} from "react-router-dom";
import {FiMoreVertical, FiEdit, FiTrash2} from "react-icons/fi";

import DataTableCheckbox from "User/Dashboard/__components__/DataTable/DataTableCheckbox";

import {TableCell, TableBodyCell} from "./DataTableRows.styled";
import styles from "./DataTableRows.module.scss";

export default function DataTableRows(props) {
  const {tableData, checkboxChange, checkboxClick, checkboxSelected, isCheckboxMenu, selectAllRows, isLoading} = props;
  const {editLink, rowLink, deleteRow} = props;

  const history = useHistory();

  /*
  ** Set of actions for toggling dropdown with actions on row.
  */

  const [activeEditMenu, setEditMenu] = useState();

  const toggleEditMenu = (e) => {
    e.stopPropagation();
    const id = Number(e.currentTarget.attributes.editmenuid.value);
    if (id !== activeEditMenu) {
      setTimeout(() => {
        document.addEventListener("click", closeEditMenu);
        setEditMenu(id);
      }, 0);
    }
    else {
      setEditMenu(undefined);
    }
  };

  const closeEditMenu = useCallback(() => {
    setEditMenu(undefined);
    document.removeEventListener("click", closeEditMenu);
  }, []);

  // Removes listener on component unmount
  useEffect(() => {
    return () => {
      document.removeEventListener("click", closeEditMenu);
    };
  }, [closeEditMenu]);

  /*
  ** Redirects on row click.
  */

  const onRowClick = (e) => {
    if (e.currentTarget.attributes.hasOwnProperty("rowid")) {
      const id = e.currentTarget.attributes.rowid.value;
      const link = rowLink.replace(":id", id);
      history.push(link);
    }
  };

  const editRow = (e) => {
    e.stopPropagation();
    if (e.currentTarget.attributes.hasOwnProperty("rowid")) {
      const id = e.currentTarget.attributes.rowid.value;
      const link = editLink.replace(":id", id);
      history.push(link);
    }
  };

  /*
  ** Builds table header from `tableData` array.
  */

  const tableHeader = tableData.length > 0 && tableData[0].map((cell) => (
    Object.keys(cell).map((item, itemIndex) => {
      if (item.substring(0, 2) === "__") {
        return null;
      }
      else if (item === "_id") {
        return (
          <TableCell key={itemIndex} align="center" width="5%" className={styles["TableHeaderCell"]}>
            <DataTableCheckbox
              htmlid={`HeaderCheckbox_${cell["_id"]}`}
              onChange={selectAllRows}
              checked={isCheckboxMenu}
            />
          </TableCell>
        );
      }
      else if (item === "_action") {
        return (
          <TableCell key={itemIndex} width="5%" className={styles["TableHeaderCell"]}></TableCell>
        );
      }
      else {
        return (
          <TableCell key={itemIndex} width={cell["__width"]} align={cell["__align"]} className={styles["TableHeaderCell"]}>
            {cell["__title"]}
          </TableCell>
        );
      }
    })
  ));

  /*
  ** Builds table body from `tableData` array.
  */

  const tableBody = tableData.map((row, rowId) => (
    <div
      onClick={rowLink ? onRowClick : null}
      key={row[0]._id}
      rowid={row[0]._id}
      className={styles["TableBodyRow"]}
    >
      {row.map((cell) => (
        Object.keys(cell).map((item, itemIndex) => {
          if (item.substring(0, 2) === "__") {
            return null;
          }
          else if (item === "_id") {
            return (
              <TableCell key={itemIndex} width="5%" className={styles["TableBodyCell"]}>
                <div className={styles["TableBodyCell-title"]}>
                  id
                </div>
                <TableBodyCell align="center" className={styles["TableBodyCell-value"]}>
                  <DataTableCheckbox
                    onChange={checkboxChange}
                    onClick={checkboxClick}
                    keyid={rowId}
                    rowid={cell["_id"]}
                    htmlid={`RowCheckbox_${cell["_id"]}`}
                    checked={checkboxSelected[rowId]}
                  />
                </TableBodyCell>
              </TableCell>
            );
          }
          else if (item === "_action") {
            return (
              <TableCell key={itemIndex} width="5%" className={styles["TableBodyCell"]}>
                <div className={styles["TableBodyCell-title"]}>
                  action
                </div>
                <div className={styles["TableBodyCell-value"]}>
                  <div className={`${styles["RowEdit"]} ${cell["_action"]["id"] === activeEditMenu
                    ? `${styles["RowEdit--active"]}`
                    : null}`}>
                    <button onClick={toggleEditMenu} editmenuid={cell["_action"]["id"]} className={styles["RowEdit-button"]}>
                      <FiMoreVertical />
                    </button>
                    <ul className={`${styles["RowEdit-list"]}`}>
                      {cell["_action"].hasOwnProperty("edit") && cell["_action"]["edit"] === true
                        ? (
                          <li
                            onClick={editRow}
                            rowid={cell["_action"]["id"]}
                            className={styles["RowEdit-el"]}
                          >
                            <FiEdit />Edit
                          </li>
                        )
                        : null}
                      {cell["_action"].hasOwnProperty("delete") && cell["_action"]["delete"] === true
                        ? (
                          <li
                            onClick={deleteRow}
                            rowid={cell["_action"]["id"]}
                            className={styles["RowEdit-el"]}
                          >
                            <FiTrash2 />Delete
                          </li>
                        )
                        : null}
                    </ul>
                  </div>
                </div>
              </TableCell>
            );
          }
          else {
            return (
              <TableCell
                key={itemIndex}
                width={cell["__width"]}
                className={`${styles["TableBodyCell"]} ${checkboxSelected[rowId] ? `${styles["TableBodyCell--selected"]}` : ""}`}
              >
                <div className={styles["TableBodyCell-title"]}>
                  {cell["__title"]}
                </div>
                <TableBodyCell bold={cell["__bold"]} align={cell["__align"]} className={styles["TableBodyCell-value"]}>
                  {typeof cell[item] == "string" && cell[item].length !== 0
                    ? cell[item].length > cell["__maxLength"]
                      ? `${cell[item].substring(0, cell["__maxLength"])}...`
                      : cell[item]
                    : "-"}
                </TableBodyCell>
              </TableCell>
            );
          }
        })
      ))}
    </div>
  ));

  return (
    <div className={styles["Table"]}>
      {isLoading && tableData.length === 0
        ? (<p className={styles["Table-noResults"]}>Didn't find any results.</p>)
        : (
          <Fragment>
            <div className={styles["TableHeaderRow"]}>
              {tableHeader}
            </div>
            <div className={styles["TableBody"]}>
              {tableBody}
            </div>
          </Fragment>
        )}
    </div>
  );
}
