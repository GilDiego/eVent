import axios from 'axios';
import { API_URL } from '../config';
export const GET_DETAIL = 'GET_DETAIL';
export const SWITCH_SIDE_BAR = 'SWITCH_SIDE_BAR';
export const POST_EVENT = 'POST_EVENT';
export const SET_USER = 'SET_USER';
export const SET_PROMOTER = 'SET_PROMOTER';
export const GET_EVENTS_PROMOTER = 'GET_EVENTS_PROMOTER';
export const GET_EVENTS_HOME = 'GET_EVENTS_HOME';
export const GET_EVENTS = 'GET_EVENTS';
export const FILTER_TAGS = 'FILTER_TAGS';
export const FILTER_AGE_RATING = 'FILTER_AGE_RATING';
export const FILTER_WEEKDAYS = 'FILTER_WEEKDAYS';
export const REMOVE_FILTERS = 'REMOVE_FILTERS';
export const CHANGE_MODAL = 'CHANGE_MODAL';
export const SEARCH_NAME = 'SEARCH_NAME';
export function getEventsHome() {
  return function (dispatch) {
    fetch(`${API_URL}/main`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_EVENTS_HOME,
          payload: json,
        });
      });
  };
}
export function getEvents() {
  return function (dispatch) {
    axios.get(`${API_URL}/main`).then((res) => {
      dispatch({
        type: GET_EVENTS,
        payload: res.data,
      });
    });
  };
}
export function getEventDetail(id) {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}/event/${id}`);
    dispatch({
      type: GET_DETAIL,
      payload: response.data,
    });
  };
}
export function setSideBar(boolean) {
  return {
    type: SWITCH_SIDE_BAR,
    payload: boolean,
  };
}
export function setUser(user) {
  localStorage.setItem('User', JSON.stringify(user));
  return {
    type: SET_USER,
    payload: user,
  };
}
export function setPromoter(promoter) {
  localStorage.setItem('User', JSON.stringify(promoter));
  return {
    type: SET_PROMOTER,
    payload: promoter,
  };
}
export function getEventPromoter(id) {
  return async function (dispatch) {
    const response = await axios(`${API_URL}/promoter/${id}`);
    return dispatch({
      type: GET_EVENTS_PROMOTER,
      payload: response.data.eventPromotor.events,
    });
  };
}
export function postEvent(event) {
  return function (dispatch) {
    axios.post(`${API_URL}/event`, event).then((res) => {
      dispatch({
        type: POST_EVENT,
        payload: res.data,
      });
    });
  };
}
export function filterTags(type) {
  return {
    type: FILTER_TAGS,
    payload: type,
  };
}
export function filterAgeRating(type) {
  return {
    type: FILTER_AGE_RATING,
    payload: type,
  };
}
export function filerWeekdays(type) {
  return {
    type: FILTER_WEEKDAYS,
    payload: type,
  };
}
export function removeFilters() {
  return {
    type: REMOVE_FILTERS,
  };
}
export function changeModal(type, message) {
  return {
    type: CHANGE_MODAL,
    payload: {
      type,
      message,
    },
  };
}
export function searchName(name) {
  return {
    type: SEARCH_NAME,
    payload: name,
  };
}
