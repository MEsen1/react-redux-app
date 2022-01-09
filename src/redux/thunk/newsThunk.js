import axios from "axios";
import {
  setLoadingTrueAction,
  setLoadingFalseAction,
} from "../actions/appActions";

import { setNewsList } from "../actions/newsActions";

export const getAllNews = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingTrueAction());
    const response = await axios.get(
      "https://bing-news-search1.p.rapidapi.com/news",
      {
        params: { textFormat: "Raw", safeSearch: "Off" },
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            "b907a3d365msh835fe561949cc40p166018jsn1d3b860b00ee",
        },
      }
    );
    console.log(response.data.value);
    dispatch(setNewsList(response.data.value));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoadingFalseAction());
  }
};
