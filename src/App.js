import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import Game from './pages/Game.js';
import Instruction from'./pages/Instructions';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/game" component={Game}/>
        <Route exact path="/instruction" component={Instruction}/>
        <Route path="*" render={() => <h1>404 NOT FOUND</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;