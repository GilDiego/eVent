import './App.css';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "./actions/actions";
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import FormUsers from './components/FormUsers/FormUsers';
import FormPromoter from './components/FormPromoter/FormPromoter';
import EventDetailsUsario from './components/Details/EventDetailsUsario/EventDetailsUsario';
import EventsDetailsPromoter from './components/EventDetailsPromotor/EventsDetailsPromoter'
// import FormEvent from './components/FormEvent/FormEvent';
// import Comments from './components/Comments/CreateComment/CreateComment.jsx'

function App({ setUser }) {
  // Usuario en local storage
  let loginUser = JSON.parse(localStorage.getItem( 'User' )) 
  useEffect(() => {
    if( loginUser){
      setUser(loginUser)
    }else
    setUser({})
  }, [setUser])

  return (
    <>
      <NavBar />

      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/login'>
        <Login />
      </Route>

      <Route path='/formUser' >
        <FormUsers />
      </Route>

      <Route path='/formPromoter' >
        <FormPromoter />
      </Route>

      <Route path='/eventDetailsUsuario' >
        <EventDetailsUsario />
      </Route>

      {/* <Route path='/FormEvent' >
        <FormEvent />
      </Route> */}

      <Route path='/EventsDetailsPromoter/:id' >
        <EventsDetailsPromoter />
      </Route>

      {/* Diego: Ruta provisional para pruebas de Comentarios */}
      {/* <Route path='/nuevoComentario'>
        <Comments />
      </Route> */}

      <Footer />
    </>
  );
}


function mapStateToProps(state) {
  return {
    user: state.userState
  };
}
export default connect(mapStateToProps, { setUser })( App);