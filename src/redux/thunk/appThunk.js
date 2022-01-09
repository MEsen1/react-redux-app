import axios from "axios";
import {
  setLoadingTrueAction,
  setLoadingFalseAction,
} from "../actions/appActions";
import { setUserListAction } from "../actions/userActions";

export const getUserList = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingTrueAction());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    dispatch(setUserListAction(response.data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingFalseAction());
  }
};
