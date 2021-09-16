import {
    GET_PRUEBA,GET_DETAIL, GET_EDIT
  } from "../actions/actions";
  
  const initialState = {
    statePrueba: 'prueba',
    detailsEvent:[]
    
  };
  
  function rootReducer(state = initialState, action) {
   
    if (action.type === GET_PRUEBA) {
      return {
        ...state,
        statePrueba: action.payload,
      };
    }
    if(action.type=== GET_DETAIL){
      return{
        ...state,
        detailsEvent: action.payload
      }
    }
    if (action.type === GET_EDIT){
      return state.detailsEvent.map((eventDetail)=>eventDetail.id === action.id?
      {...eventDetail, editing: !eventDetail.editing}: eventDetail
      )
        
      
    }
    
  
  
    return state;
  }
  
  export default rootReducer;
  