import React from 'react'; 
import Login from './Login'
import Signup from './Signup'
import Wishes from './Wishes'

import {
  BrowserRouter, 
  Switch, 
  Route, 
  Link
} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route path='/wishes' component ={Wishes} />
        <Route exact path='/' component={Login} />
        {/* ADD 404 PAGE  */}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
