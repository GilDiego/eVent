import {
    GET_PRUEBA,
  } from "../actions/actions";
  
  const initialState = {
statePrueba: 'prueba'
  };
  
  function rootReducer(state = initialState, action) {
   
    if (action.type === GET_PRUEBA) {
      return {
        ...state,
        statePrueba: action.payload,
      };
    }
   
  
    return state;
  }
  
  export default rootReducer;
  