import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import {connectRouter} from "connected-react-router";

import accounts from "Pages/Accounts/reducer";
import userDashboard from "User/Dashboard/reducer";
import listFlourishes from "User/Dashboard/Flourishes/FlourishesList/reducer";
import addFlourish from "User/Dashboard/Flourishes/FlourishesAdd/reducer";
import previewFlourish from "User/Dashboard/Flourishes/FlourishesPreview/reducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  form,
  accounts,
  userDashboard,
  listFlourishes,
  addFlourish,
  previewFlourish,
});
