
import {Route,Switch} from 'react-router-dom';

import AllRestaraunts from './components/landing/AllRestaraunts';
import NewRestaraunts from './components/landing/NewRestaraunts';
import Login from './components/landing/Login';

function App() {
  return (
    <div className="container">
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
