import {ROUTES, ROLES, USER_DETAILS_LOCALSTORAGE_KEY} from "App/constants";
import sessionStorageWrapper from "App/__helpers__/sessionStorage";

export function setUserDetails(data) {
  return sessionStorageWrapper.set(USER_DETAILS_LOCALSTORAGE_KEY, data, true);
}

export function removeUserDetails() {
  return sessionStorageWrapper.remove(USER_DETAILS_LOCALSTORAGE_KEY);
}

export function getUserDetails() {
  return sessionStorageWrapper.get(USER_DETAILS_LOCALSTORAGE_KEY, true);
}

export function getUserRole() {
  return String(getUserDetails().role).trim().toLowerCase();
}

export function dashRouteByRole() {
  switch (getUserRole()) {
  case ROLES.ADMIN:
    return ROUTES.ADMIN.BASE;
  case ROLES.USER:
    return ROUTES.USER.HOME;
  default:
    return ROUTES.HOME;
  }
}
