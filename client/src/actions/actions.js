import axios from 'axios'
//*detalles de evento
export const GET_DETAIL = "GET_DETAIL"
// detalle switch
export const SWITCH_SIDE_BAR = 'SWITCH_SIDE_BAR';
export const POST_EVENT = 'POST_EVENT';

const URL = 'http://localhost:3001/'



// detalle dafne 

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


// termina 

//*__SWITCH_DE_NAVBAR____________________________________________________

export function setSideBar(boolean){
  return{
    type: SWITCH_SIDE_BAR,
    payload: boolean
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