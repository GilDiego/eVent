import {
    GET_DETAIL, 
    GET_EDIT,
   SWITCH_SIDE_BAR,
   POST_EVENT,
   SET_USER,
   GET_EVENTS_HOME
  } from "../actions/actions";

  // Pruebas para guardar usuario en el local storage
  // let loginUser = JSON.parse(localStorage.getItem( user )) 
  const initialState = {
    eventsHome: [],
    //*detalles de evento
    detailsEvent:[true],
    //*switch de nav-bar
    sideBarSwitch: false,
    //*post
    posts:[],
    //*user
    userState:{}
  };

 
  
  function rootReducer(state = initialState, action) {
    //*__GET_DE_EVENTOS_EN_HOME
    if(action.type=== GET_EVENTS_HOME){
      return{
        ...state,
        eventsHome: action.payload,
      } 
    }
    //*__DETALLES_DE_EVENTOS
    if(action.type=== GET_DETAIL){
      return{
        ...state,
        detailsEvent: action.payload,
      } 
    }
    //*__SWITCH_NAV_BAR
    if(action.type=== SWITCH_SIDE_BAR){
      return{
        ...state,
        sideBarSwitch: action.payload
      }
    }
    //*__POST
    if(action.type=== POST_EVENT){
      return{
        ...state,
        posts: action.payload
      }
    }
    //*_USER_______
    if(action.type=== SET_USER){
      return{
        ...state,
        userState: action.payload
      }
    }
  
    return state;
  }
  
  export default rootReducer;
  