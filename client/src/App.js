import './App.css';
import Prueba from './components/Prueba/Prueba'
import {BrowserRouter, Route } from 'react-router-dom';
import FormUsers from './components/FormUsers/formUsers';

function App() {
  return (
    <BrowserRouter>
    <Route path='/' component={FormUsers} />
 <Prueba />
    </BrowserRouter
  );
}

export default App;
