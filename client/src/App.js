import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import FormUsers from './components/FormUsers/formUsers';
import EventDetailsUsario from './components/Details/EventDetailsUsario/EventDetailsUsario';


function App() {
  return (
    <>
    <NavBar/>
      
        <Route exact path= '/'>
          <Home/>
        </Route>

        <Route path='/formUser' >
          <FormUsers/>
        </Route>

        <Route path='/eventDetailsUsuario' >
          <EventDetailsUsario/>
        </Route>

    <Footer />
    </>
  );
}

export default App;
