import {
    GET_DETAIL, 
    GET_EDIT,
   SWITCH_SIDE_BAR,
   POST_EVENT
  } from "../actions/actions";
  
  const initialState = {
    //*detalles de evento
    detailsEvent:[true],
    copyDetails:[true],
    //*switch de nav-bar
    sideBarSwitch: false,
    posts:[]
    
  };
  
  function rootReducer(state = initialState, action) {
   
    //*__DETALLES_DE_EVENTOS
    if(action.type=== GET_DETAIL){
      return{
        ...state,
        detailsEvent: action.payload,
        copyDetails :action.payload
      }
    }
    if (action.type === GET_EDIT){
      return state.detailsEvent.map((eventDetail)=>eventDetail.id === action.id?
      {...eventDetail, editing: !eventDetail.editing}: eventDetail
      )
    }


    //*__SWITCH_NAV_BAR
    if(action.type=== SWITCH_SIDE_BAR){
      return{
        sideBarSwitch: action.payload
      }
    }
    if(action.type=== POST_EVENT){
      return{
        ...state,
        posts: action.payload
      }
    }
  
    return state;
  }
  
  export default rootReducer;
  