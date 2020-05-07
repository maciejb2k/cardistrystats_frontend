import React, {useEffect} from "react";

import {ROUTES} from "App/constants";

import PageLoader from "User/Dashboard/__components__/PageLoader";
import DataTableWrapper from "User/Dashboard/__components__/DataTable/DataTableWrapper";

export default function FlourishesList(props) {
  const {fetchFlourishes, deleteFlourish} = props;
  const {appState, appState: {isLoading, isDeleting}} = props;

  useEffect(() => {
    fetchFlourishes();
  }, [fetchFlourishes]);

  return isLoading || isDeleting ? <PageLoader /> : (
    <div className="DashPage">
      <DataTableWrapper
        appState={appState}
        tableTitle="Flourishes"
        fetchRows={fetchFlourishes}
        onDelete={(id) => deleteFlourish(id)}
        rowLink={ROUTES.USER.FLOURISHES.PREVIEW}
        editLink={ROUTES.USER.FLOURISHES.EDIT}
        addLink={ROUTES.USER.FLOURISHES.ADD}
        sortableFields={["name"]}
        tableScheme={[
          {
            name: "name",
            title: "Name",
            width: "20%",
            bold: true,
          },
          {
            name: "desc",
            title: "Description",
            maxLength: 50,
          },
          {
            name: "creator",
            title: "Creator",
            width: "20%",
          },
        ]}
        rowOptions={{
          edit: true,
          delete: true,
        }}
      />
    </div>
  );
}
