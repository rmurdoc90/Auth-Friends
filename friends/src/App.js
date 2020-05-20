import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import newFriends from './components/newFriends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className='App'>

      </div>
      <Switch>
        <PrivateRoute exact path='/protected' component={newFriends}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
