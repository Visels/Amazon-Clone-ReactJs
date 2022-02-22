import React from 'react';
import './App.css';
import './Header';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>

    <div className="App">



   <Switch>




          <Route path='/checkout'>

          <Header />
          <h2>I am a checkout page</h2>

          </Route>
    

          <Route path='/'>

          <Header />
          <Home />

          </Route>
    
   </Switch>
    </div>

    </Router>
  );
}

export default App;
