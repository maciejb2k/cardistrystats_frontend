import {all, fork} from "redux-saga/effects";

import {accountsRootSaga} from "Pages/Accounts/sagas";
import {listFlourishesRootSaga} from "User/Dashboard/Flourishes/FlourishesList/sagas";
import {addFlourishRootSaga} from "User/Dashboard/Flourishes/FlourishesAdd/sagas";
import {previewFlourishRootSaga} from "User/Dashboard/Flourishes/FlourishesPreview/sagas";

const sagas = [
  accountsRootSaga,
  listFlourishesRootSaga,
  addFlourishRootSaga,
  previewFlourishRootSaga,
];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
