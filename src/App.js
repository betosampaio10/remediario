import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login.js'
import Home from './Pages/Home.js'
import CadastrarRemedio from './Pages/CadastrarRemedio.js'
import ConsultarRemedio from './Pages/ConsultarRemedio.js'
import Historico from './Pages/Historico.js'

const App = () => {
  return (
    <div >
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path={'/'} component={Login} />
              <Route exact path={'/Home'} component={Home} />
              <Route exact path={'/CadastrarRemedio'} component={CadastrarRemedio} />
              <Route exact path={'/ConsultarRemedio'} component={ConsultarRemedio} />
              <Route exact path={'/Historico'} component={Historico} />
            </Switch>
          </div>
        </Router>
      </div>
    </div >
  );
}

export default App;
