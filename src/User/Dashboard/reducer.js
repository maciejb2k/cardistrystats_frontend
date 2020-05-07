import {TOGGLE_NAV_REQUEST} from "./constants";

const initialState = {
  isNavActive: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_NAV_REQUEST:
    return {
      ...state,
      isNavActive: !state.isNavActive,
    };
  default:
    return state;
  };
}
