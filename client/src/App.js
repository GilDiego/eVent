import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import FormUsers from './components/formUsers';

function App() {
  return (
    <BrowserRouter>
    <Route path='/' component={FormUsers} />
    </BrowserRouter>
  );
}

export default App;
