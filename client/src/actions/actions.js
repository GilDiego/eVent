import axios from 'axios'
export const GET_PRUEBA = "GET_PRUEBA";
export const GET_DETAIL = "GET_DETAIL"
export const GET_EDIT = 'GET_EDIT'



//*get data
export function getPrueba() {
  return { type: GET_PRUEBA, payload: 'funciona' };
}

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
