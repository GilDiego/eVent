import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import FormUsers from './components/formUsers';
import EventDetailsUsario from './components/Details/EventDetailsUsario/EventDetailsUsario';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={EventDetailsUsario} />
    </BrowserRouter>
  );
}

export default App;
