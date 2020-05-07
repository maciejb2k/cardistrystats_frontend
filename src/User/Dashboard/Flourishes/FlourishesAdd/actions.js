import {createAction} from "App/__store__/actions";
import {
  ADD_FLOURISH_REQUEST,
} from "./constants";

export const addNewFlourish = (data) => createAction(ADD_FLOURISH_REQUEST, data);
