import {createAction} from "App/__store__/actions";
import {
  TOGGLE_NAV_REQUEST,
} from "./constants";

export const toggleNav = () => createAction(TOGGLE_NAV_REQUEST);
