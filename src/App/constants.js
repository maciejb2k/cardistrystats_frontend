export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const ROUTES = {
  HOME: "/",
  ACCOUNTS: {
    BASE: "/accounts/",
    SIGN_IN: "/accounts/sign-in/",
    REGISTER: "/accounts/register/",
    LOGOUT: "/accounts/logout/",
    FORGOT: "/accounts/forgot-password/",
  },
  USER: {
    BASE: "/dashboard/",
    HOME: "/dashboard/home/",
    STATS: "/dashboard/stats/",
    FLOURISHES: {
      BASE: "/dashboard/flourishes/",
      LIST: "/dashboard/flourishes/list/",
      PREVIEW: "/dashboard/flourishes/preview/:id/",
      EDIT: "/dashboard/flourishes/edit/:id/",
      ADD: "/dashboard/flourishes/add/",
    },
    DECKS: "/dashboard/decks/",
    SETTINGS: "/dashboard/settings/",
  },
  ADMIN: {
    BASE: "/admin/",
  },
};

export const API_ENDPOINTS = {
  ACCOUNTS: {
    CONFIRM: "accounts/confirm/",
    DETAILS: "accounts/details/",
    PASSWORD_CHANGE: "accounts/password/change/",
    PASSWORD_RESET: "accounts/password/reset/",
    REGISTER: "accounts/register/",
    TOKEN: "accounts/token/",
    TOKEN_REFRESH: "accounts/token/refresh/",
    TOKEN_VERIFY: "accounts/token/verify/",
  },
  USER: {
    FLOURISHES: {
      LIST: "user_panel/flourishes-list/",
      LIST_ID: "user_panel/flourishes-list/:id/",
      GALLERY: "/user_panel/flourishes-gallery/",
      GALLERY_ID: "/user_panel/flourishes-gallery/:id/",
      GALLERY_ALL: "/user_panel/flourishes-gallery/:id/all/",
      TRACKING: "/user_panel/flourishes-tracking/",
      TRACKING_ID: "/user_panel/flourishes-tracking/:id/",
      TRACKING_ALL: "/user_panel/flourishes-tracking/:id/all/",
    },
  },
};

export const API_PREFIX = "api/";
export const TOKEN_TYPE = "Bearer";
export const TOKEN_LOCALSTORAGE_KEY = "access";
export const REFRESH_TOKEN_LOCALSTORAGE_KEY = "refresh";
export const USER_DETAILS_LOCALSTORAGE_KEY = "userDetails";
