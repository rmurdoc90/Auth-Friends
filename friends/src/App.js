import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Friends</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <PrivateRoute exact path='/protected' component={Friends}/>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
