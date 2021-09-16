import axios from 'axios'
//*detalles de evento
export const GET_DETAIL = "GET_DETAIL"
export const GET_EDIT = 'GET_EDIT'
export const UPDATE = 'UPDATE'
export const SWITCH_SIDE_BAR = 'SWITCH_SIDE_BAR';

let data ={
  id: 1,
eventName: "El amor de las Luciernagas",
description: "Esta es la descripcion del modelo",
location: "Colombia/Valle/cali",
address: "cra 7ksdfkdsj",
pictures: [{
 image: 'https://cdn2.actitudfem.com/media/files/styles/large/public/images/2014/06/c1.jpg',
 image1: 'https://teatro-eidos1.netdna-ssl.com/wp-content/uploads/2012/08/D01A68D9-33A3-4B28-8F86-9F071B1306F6.jpeg',
 image2: 'https://img.maspormas.com/2016/06/66960_761474527244358_2747025554889634211_n.jpg',
 image3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECEdV0QEAwZgjL9h6fObK07gZdNjC3GrFa9szyIsMMHpLmiO2&s',
 image4: 'https://i.ytimg.com/vi/dbo9jDeBLcY/maxresdefault.jpg'
}],
start_date: "2021-10-30",
schedule: [
  "10:00",'12:00'
],
weekdays: [
  "SUN",
  "FRI"
],
tags: "Indoors",
age_rating: "7+",
price: "290",
starring: null,   
finish_date: null,  
ticket_limit: null,  
seat_booking: null,
disponibility:24,  
}



// export function getEventDetail(id){
//   return async function (dispatch) {
//     const response = await 
//     axios.get(`http://localhost:3001/event/${id}`)
//     dispatch({
//       type: GET_DETAIL,
//       payload: response.data
//     })
    
//   }

// }
export function getEventDetail(payload){
  return {
    type: GET_DETAIL,
    payload:data
  }
}
 
//*switch

export function editDetail(id){
  return{
    type: GET_EDIT,
    payload:id 
  }
}
 export function update (id){
   return{
     type: UPDATE,
     payload: id
   }
 }


//*__SWITCH_DE_NAVBAR____________________________________________________

export function setSideBar(boolean){
  return{
    type: SWITCH_SIDE_BAR,
    payload: boolean
  }
}
