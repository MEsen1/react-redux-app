import { SET_SELECTED_USER, SET_USER_LIST } from "../types/userTypes";
export const setSelectedUserAction = (selUser) => ({
  type: SET_SELECTED_USER,
  payload: selUser,
});

export const setUserListAction = (user) => ({
  type: SET_USER_LIST,
  payload: user,
});
