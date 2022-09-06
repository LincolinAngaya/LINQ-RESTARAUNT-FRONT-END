
import {Route,Switch} from 'react-router-dom';
import './App.scss'

import AllRestaraunts from './components/landing/AllRestaraunts';
import NewRestaraunts from './components/landing/NewRestaraunts';
import Login from './components/landing/Login';
 import Navbar from './components/landing/Navbar/Navbar';

function App() {
  return (
    <div>
     <Navbar /> 
      <Switch>
      <Route exact path='/'>
        <AllRestaraunts />
      </Route>
      <Route path='/new-restaraunt'>
        <NewRestaraunts />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
