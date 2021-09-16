import axios from 'axios'
//*detalles de evento
export const GET_DETAIL = "GET_DETAIL"
export const GET_EDIT = 'GET_EDIT'
//*switch
export const SWITCH_SIDE_BAR = 'SWITCH_SIDE_BAR';

//*__DETALLES_DE_EVENTO_____________________________________________
export function getEventDetail(id){
  return async function (dispatch) {
    const response = await 
    axios.get(`http://localhost:3001/event/${id}`)
    dispatch({
      type: GET_DETAIL,
      payload: response.data
    })
  }
}
export function editDetail(id){
  return{
    type: GET_EDIT,
    payload:id 
  }
}


//*__SWITCH_DE_NAVBAR____________________________________________________

export function setSideBar(boolean){
  return{
    type: SWITCH_SIDE_BAR,
    payload: boolean
  }
}