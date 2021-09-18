import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import FormUsers from './components/FormUsers/formUsers';
import FormPromoter from './components/formPromoter/FormPromoter';
import EventDetailsUsario from './components/Details/EventDetailsUsario/EventDetailsUsario';
import EventsDetailsPromoter from './components/EventDetailsPromotor/EventsDetailsPromoter'
import FormEvent from './components/FormEvent/formEvent';
import Comments from './components/Comments/Comments'
import Loading from './components/Loading/Loading';


function App() {
  return (
    <>
      <Route path='/'>
        <NavBar />
      </Route>
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
      <Route path='/EventsDetailsPromoter/:id' >
        <EventsDetailsPromoter/>
      </Route>
      <Route path= '/loading'>
        <Loading/>
      </Route>

      <Route path='/FormEvent' >
        <FormEvent />
      </Route>

      {/* Diego: Ruta provisional para pruebas de Comentarios */}
      <Route path='/Comentarios'>
        <Comments />
      </Route>



      <Footer />
    </>
  );
}

export default App;
