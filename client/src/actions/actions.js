import axios from 'axios'
//*detalles de evento
export const GET_DETAIL = "GET_DETAIL"
// detalle switch
export const SWITCH_SIDE_BAR = 'SWITCH_SIDE_BAR';



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
