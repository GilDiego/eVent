import axios from 'axios'
//*detalles de evento
export const GET_DETAIL = "GET_DETAIL"
//*detalle switch
export const SWITCH_SIDE_BAR = 'SWITCH_SIDE_BAR';
//*event
export const POST_EVENT = 'POST_EVENT';
//*user
export const SET_USER = 'SET_USER'
//*activities home
export const GET_EVENTS_HOME = 'GET_EVENTS_HOME';
//filter
export const FILTER_TAGS = 'FILTER_TAGS';
export const FILTER_AGE_RATING = 'FILTER_AGE_RATING';


const API = 'http://localhost:3001/api/'


//*_get_activities_home______________________________________________
export function getEventsHome(){
  return function(dispatch) {
    try{
      fetch(`${API}main`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_EVENTS_HOME, payload: json });
      });
    }catch(error){
      console.log(error)
    }
  };
}

//*_detalle dafne_____________________________________________________ 
export function getEventDetail(id){
  return async function (dispatch) {
    const response = await 
    axios.get(`http://localhost:3001/api/event/${id}`)
    dispatch({
      type: GET_DETAIL,
      payload: response.data
    })
    
  }
}


//*__SWITCH_DE_NAVBAR____________________________________________________

export function setSideBar(boolean){
  return{
    type: SWITCH_SIDE_BAR,
    payload: boolean
  }
}

//*___USER_________________________________________________________________
export function setUser(user){
  localStorage.setItem('User',JSON.stringify(user))//Envia a localStorage
  return{
    type: SET_USER,
    payload: user
  }
}

//* POST_EVENT
export function postEvent(event){
  console.log(event,'event ACTIONS')
  return function(dispatch){
    axios.post(`http://localhost:3001/api/event`,event)
    .then((res)=> {
      dispatch({
        type:POST_EVENT,
        payload: res.data
      })
    })
  }
}

// * FILTER 
export function filterTags(type){
  console.log(type,'action')
  return{
    type:FILTER_TAGS,
    payload: type
  }
}
export function filterAgeRating(type){
  console.log(type,'action rating')
  return{
    type:FILTER_AGE_RATING,
    payload: type
  }
}