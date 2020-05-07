import React, {useEffect, useState} from "react";

import {confirmErrorDialog} from "App/__helpers__/alerts/";

import DataTableRows from "User/Dashboard/__components__/DataTable/DataTableRows";
import DataTableControls from "User/Dashboard/__components__/DataTable/DataTableControls";
import DataTablePagination from "User/Dashboard/__components__/DataTable/DataTablePagination";

import styles from "./DataTableWrapper.module.scss";

export default function DataTableWrapper(props) {
  const {appState, tableScheme, tableTitle, sortableFields, rowOptions} = props;
  const {rowLink, editLink, addLink} = props;
  const {onDelete, fetchRows} = props;
  const {isLoading, isDeleting, data: {
    count: resultsCount,
    results,
    links: pagesLinks,
    pages: pagesCount,
  }} = appState;

  const [tableData, setTableData] = useState([]);
  const [isCheckboxMenu, setCheckboxMenu] = useState(false);
  const [allCheckboxes, setAllCheckboxes] = useState(false);
  const [checkboxSelected, setCheckboxSelected] = useState([]);
  const [checkboxRowId, setCheckboxRowId] = useState([]);

  /*
  ** Builds table object from response.
  */

  useEffect(() => {
    const tableDataCreator = results && results.map((row) => {
      /* Will store preprocessed cells from
      ** given json object and tableScheme props.*/
      const tableRow = [];

      /* Block of code responsible for creating cells
      ** from NON-SPECIAL tableScheme.*/
      for (const key in row) {
        if (row.hasOwnProperty(key)) {
          tableScheme.forEach((field) => {
            if (field.name === key) {
              const tableCell = {};
              const config = {
                align: "flex-start",
                width: null,
                maxLength: 15,
                bold: false,
              };

              /* Checks whether custom name was set
              ** in schema for column title.*/
              if (field.hasOwnProperty("title")) {
                tableCell[[key]] = row[key];
                tableCell["__title"] = field.title;
              }
              else {
                tableCell[[key]] = row[key];
                tableCell["__title"] = key;
              }

              /* Checks whether user prefers
              ** align inside cell.*/
              if (field.hasOwnProperty("align")) {
                if (field.align === "left") {
                  config.align = "flex-start";
                }
                else if (field.align === "center") {
                  config.align = "center";
                }
                else if (field.align === "right") {
                  config.align = "flex-end";
                }
                else {
                  config.align = "flex-start";
                }
              }
              tableCell["__align"] = config.align;

              /* Checks whether user prefers
              ** custom column width.*/
              if (field.hasOwnProperty("width")) {
                config.width = field.width;
              }
              tableCell["__width"] = config.width;

              /* Checks whether user prefers
              ** custom max text length.*/
              if (field.hasOwnProperty("maxLength")) {
                config.maxLength = field.maxLength;
              }
              tableCell["__maxLength"] = config.maxLength;

              /* Checks whether user prefers
              ** bold text.*/
              if (field.hasOwnProperty("bold")) {
                config.bold = field.bold;
              }
              tableCell["__bold"] = config.bold;

              // Set single cell to row.
              tableRow.push(tableCell);
            }
          });
        }
      }

      /* Block of code responsible for creating cells
      ** from SPECIAL tableScheme.*/
      tableRow.unshift({_id: row["id"]});

      const actions = {};

      if (rowOptions.hasOwnProperty("delete") && rowOptions["delete"]) {
        actions["delete"] = true;
      }
      if (rowOptions.hasOwnProperty("edit")) {
        actions["edit"] = true;
      }
      actions["id"] = Number(row["id"]);
      tableRow.push({_action: actions});

      return tableRow;
    });

    setTableData(tableDataCreator);
  }, [results, rowOptions, tableScheme]);

  /* To jest tak zwany kurwa HICIK,
     JAK SIE KURWA TOGGLUJE SIDEMENU DASHA TO NIE SPIERDALAJĄ SIE CHECXKBOXY */
  useEffect(() => {
    const initRowsState = results && results.map(() => false);
    setCheckboxSelected(initRowsState);
  }, [results]);


  /*
  ** Checkboxes functionality.
  */

  const checkboxClick = (e) => {
    e.stopPropagation();
  };

  const checkboxChange = (e) => {
    if (!e.target.attributes.hasOwnProperty("keyid")) {
      throw new Error("Key ID in row error");
    }
    if (!e.target.attributes.hasOwnProperty("rowid")) {
      throw new Error("Row ID in row error");
    }

    const keyid = e.target.attributes.keyid.value;
    const rowId = Number(e.target.attributes.rowId.value);

    /*
    ** Array of boolean values, which checkbox is set.
    */
    const stateCopySelected = [...checkboxSelected];
    stateCopySelected[keyid] = !stateCopySelected[keyid];

    /*
    ** Array of number values, which row id checkbox.
    */
    const stateCopyRows = [...checkboxRowId];
    const index = stateCopyRows.indexOf(rowId);
    if (index > -1) {
      stateCopyRows.splice(index, 1);
    }
    else {
      stateCopyRows.push(rowId);
    }

    setCheckboxSelected(stateCopySelected);
    setCheckboxRowId(stateCopyRows);
  };

  useEffect(() => {
    const toggleEditMenu = () => {
      for (const item of checkboxSelected) {
        if (item) {
          setCheckboxMenu(true);
          return;
        }
      }

      setCheckboxMenu(false);
      return;
    };

    toggleEditMenu();
  }, [checkboxSelected, setCheckboxMenu]);

  const selectAllRows = () => {
    setAllCheckboxes(!allCheckboxes);

    if (allCheckboxes) {
      resetCheckboxes();
    }
    else {
      setCheckboxMenu(true);
      setCheckboxSelected([...checkboxSelected].map(() => true));
      setCheckboxRowId(tableData.map((row) => row[0]._id));
    }
  };

  /*
  ** Functions.
  */

  const resetCheckboxes = () => {
    setCheckboxMenu(false);
    setAllCheckboxes(false);
    setCheckboxSelected([...checkboxSelected].map(() => false));
    setCheckboxRowId([]);
  };

  const deleteRow = (e) => {
    e.stopPropagation();
    const deleteButton = e.currentTarget;

    confirmErrorDialog("Confirm Deletion", "You won't be able to revert this action.")
      .then((res) => {
        if (res.value) {
          /* Single delete */
          if (deleteButton.attributes.hasOwnProperty("rowid")) {
            const rowId = Number(deleteButton.attributes.rowid.value);
            onDelete(Array.of(rowId));
          }
          /* Multiple rows delete */
          else {
            onDelete(checkboxRowId);
          }

          resetCheckboxes();
        }
      });
  };

  return (
    <div className={`${styles["DataTableWrapper"]} animated fadeIn`}>
      <DataTableControls
        isCheckboxMenu={isCheckboxMenu}
        checkboxRowId={checkboxRowId}
        tableTitle={tableTitle}
        deleteRow={deleteRow}
        fetchRows={fetchRows}
        sortableFields={sortableFields}
        resultsCount={resultsCount}
        addLink={addLink}
        isDeleting={isDeleting}
      />
      <DataTableRows
        isLoading={isLoading}
        tableData={tableData}
        isCheckboxMenu={isCheckboxMenu}
        setCheckboxMenu={setCheckboxMenu}
        selectAllRows={selectAllRows}
        checkboxChange={checkboxChange}
        checkboxClick={checkboxClick}
        checkboxSelected={checkboxSelected}
        rowLink={rowLink}
        editLink={editLink}
        deleteRow={deleteRow}
        actionEdit={editLink}
        actionDelete={onDelete}
      />
      <DataTablePagination
        fetchRows={fetchRows}
        appState={appState}
        pagesLinks={pagesLinks}
        pagesCount={pagesCount}
      />
    </div>
  );
}
