
import {Route,Switch} from 'react-router-dom';
import './App.scss'

import AllRestaraunts from './components/AllRestaraunt/AllRestaraunt';
import NewRestaraunts from './components/NewRestaraunt/NewRestaraunt';
import Login from './components/Login/Login';
 import Navbar from './components/Navbar/Navbar';

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
