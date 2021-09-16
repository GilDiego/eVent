import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import FormUsers from './components/FormUsers/formUsers';
import FormPromoter from './components/formPromoter/FormPromoter';
import EventDetailsUsario from './components/Details/EventDetailsUsario/EventDetailsUsario';
import FormEvent from './components/FormEvent/formEvent';


function App() {
  return (
    <>
    <NavBar/>
      
        <Route exact path= '/'>
          <Home/>
        </Route>

        <Route exact path= '/login'>
          <Login/>
        </Route>
        
        <Route path='/formUser' >
          <FormUsers/>
        </Route>

        <Route path='/formPromoter' >
          <FormPromoter/>
        </Route>

        <Route path='/eventDetailsUsuario' >
          <EventDetailsUsario/>
        </Route>

        <Route path='/FormEvent' >
          <FormEvent/>
        </Route>

    <Footer />
    </>
  );
}

export default App;
