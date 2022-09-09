
import {Route,Switch} from 'react-router-dom';
// import './App.scss'

import AllRestaraunts from './components/AllRestaraunt/AllRestaraunt';
import NewRestaraunts from './components/NewRestaraunt/NewRestaraunt';
import Login from './components/Login/Login';
 import Navbar from './components/Navbar/Navbar';
import SignUp from './components/Login/SignUp';

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
      <Route path='/sign-up'>
        <SignUp />
        
      </Route>
     
      </Switch>
    </div>
  );
}

export default App;
