import './App.css';
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "./redux/actions";
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import FormUsers from './components/Forms/FormUsers/FormUsers';
import FormPromoter from './components/Forms/FormPromoter/FormPromoter.jsx';
import EventDetailsUsario from './components/Details/EventDetailsUsario/EventDetailsUsario';
import EventsDetailsPromoter from './components/Details/EventDetailsPromoter/EventsDetailsPromoter'
import FormEvent from './components/Forms/FormEvent/FormEvent';
import Comments from './components/Comments/CreateComment/CreateComment.jsx'
import Registration from './components/Registration/Registration';
import UserProfile from './components/Profiles/UserProfile/UserProfile';
import { Redirect } from 'react-router-dom';
import Modal from './components/Modal/Modal';
import LoginContainer from './components/Log/LoginContainer/LoginContainer';
import ShoppingCart from './components/Cart/ShoppingCart/ShoppingCart';
import PromoterProfile from './components/Profiles/PromoterProfile/PromoterProfile';


function App({ setUser, user, modal }) {
  console.log(user)

  // Usuario en local storage
  let loginUser = JSON.parse(localStorage.getItem('User'))
  console.log(loginUser)
  useEffect(() => {
    if (loginUser) {
      console.log('ENTREEE EL IF', user)
      setUser(loginUser)
    } else
    console.log('ENTREEE EL ELSE')
      setUser({})
  }, [setUser]) 

  return (
    <>

      <NavBar />
       
       



      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/login'>
        <LoginContainer />
      </Route>

      <Route exact path='/registration'>
        <Registration />
      </Route>

      <Route path='/formUser' >
        <FormUsers />
      </Route>

      <Route path='/formPromoter' >
        <FormPromoter />
      </Route>

      <Route path='/eventDetailsUsuario/:id' >
        <EventDetailsUsario />
      </Route>

      <Route path='/FormEvent' >
        {user.msg? user.type === 'user'?<Home />:<FormEvent promoterId={user.id}/>: <Redirect to='/login'/>}
      </Route>

      <Route path='/EventsDetailsPromoter/:id' >
        <EventsDetailsPromoter />
      </Route>

      <Route path='/perfil' >
        {user.msg? user.type === 'user' ?<UserProfile/> : <PromoterProfile userData={user}/> : <Redirect to='/login'/>}
      </Route>


      <Route path='/nuevoComentario'>
        <Comments />
      </Route>

      {/* <Route path='/perfilPromoter'>
        <PromoterProfile />
      </Route> */}

      <Route path='/shoppingCart'>
        <ShoppingCart />
      </Route>

      <Footer />
      {modal.render ? <Modal message={modal.message} type={modal.type} /> : null}
    </>
  );
}


function mapStateToProps(state) {
  return {
    user: state.userState,
    modal: state.modal
  };
}
export default connect(mapStateToProps, { setUser })(App);