import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import User from './User';
import About from './About';
import ProtectedPageHaha from './ProtectedPage';
import LoginPage from './LoginPage';

function App() {

  // useState parentheses is for default value of state
  const [name, setName] = useState(false);

  const setNameValue = async => {
    // Toogle Session
    setName(!name);
  }

  return (
    <Router>
      <div>
        {console.log(name)}
        {/* Link is like anchor tag in HTML */}
        <ul>
          {/* activeStyle for designing active navlink */}
          <NavLink to={'/'} exact activeStyle={
            {color: 'green'}
          } >Home</NavLink>
        </ul>
        <ul>
          <NavLink to={'/about'} exact activeStyle={
            {color: 'green'}
          }>About</NavLink>
        </ul>
        <ul>
          <NavLink to={'/protected'} exact activeStyle={
            {color: 'green'}
          }>Protected Route</NavLink>
        </ul>
        <Prompt
          when={!name}
          // message={'Are you sure'}
          message={
            (location) => {
              return location.pathname.startsWith('/protected') ? 'Are you sure?' : true;
            }
          }
        />
        <Route path={'/about'} component={About}></Route>
        <Route path={'/login'} component={LoginPage}></Route>
        <Route path={'/'} exact render={
          () => {
            return(
              <h1>Welcome Home</h1>
            )
          }
        } />
        <Route path={'/user/:username'} component={User} />
        {/* ProtectedRoute Path  */}
        <Route path={'/protected'} render={
          () => (
            name == false ? (<Redirect to={'/login'}/>) : (<ProtectedPageHaha/>)
          )
        } />
        <button onClick={setNameValue}>{name == false? 'Login' : 'Logout'}</button>
      </div>
    </Router>
  );
}


export default App;


