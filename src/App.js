import React from 'react';
import './App.css';
import { HashRouter , Route , Switch} from 'react-router-dom';
import MainComponent from './Layout/MainComponent';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" name="Home" component={MainComponent} />
      </Switch>
    </HashRouter>
  );
}

export default App;
