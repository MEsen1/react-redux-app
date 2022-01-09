import { SET_NEWS_LIST, SET_SELECTED_NEWS } from "../types/newsTypes";

export const setNewsList = (news) => ({ type: SET_NEWS_LIST, payload: news });
export const setSelectedNews = (selectedNews) => ({
  type: SET_SELECTED_NEWS,
  payload: selectedNews,
});
