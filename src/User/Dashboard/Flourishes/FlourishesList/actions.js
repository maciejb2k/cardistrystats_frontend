import {createAction} from "App/__store__/actions";
import {
  FETCH_FLOURISHES_REQUEST,
  DELETE_FLOURISH_REQUEST,
} from "./constants";

export const fetchFlourishes = (data) => createAction(FETCH_FLOURISHES_REQUEST, data);
export const deleteFlourish = (id) => createAction(DELETE_FLOURISH_REQUEST, id);
