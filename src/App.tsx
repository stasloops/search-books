import React from 'react';
import './App.css';
import Search from './components/Search/Search';
import { Switch, Route } from 'react-router-dom'
import Books from './components/Books/Books';

function App() {
  return (
    <div className="app">
      <Search />
      <Switch>
        <Route path='' component={Books}/>
      </Switch>
    </div>
  );
}

export default App;
