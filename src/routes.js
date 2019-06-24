const HOME = "/";

/******************
 * global request
 ******************/
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";

/******************
 * document request
 ******************/

const DOCUMENTS = "/documents";
const READ_DOCUMENT = "/read";
const CREATE_DOCUMENT = "/create";
const UPDATE_DOCUMENT = "/update";
const DELETE_DOCUMENT = "/delete";

/******************
 * user information request
 ******************/

const USER = "/user";
const USER_PROFILE = "/profile";

export const routes = {
  home: HOME,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,
  documents: DOCUMENTS,
  read_document: READ_DOCUMENT,
  create_document: CREATE_DOCUMENT,
  update_document: UPDATE_DOCUMENT,
  delete_document: DELETE_DOCUMENT,
  user: USER,
  user_profile: USER_PROFILE
};
