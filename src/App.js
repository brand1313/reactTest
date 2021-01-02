import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import {Main,Blocks,Transactions} from './pages'; 
import { Header } from './components/main';

class App extends Component {

  render(){
    return(
      <div>
        <Header/>
        <Route exact path="/" component={Main}></Route>
        <Route path="/blocks" component={Blocks}/>
        <Route path="/txs" component={Transactions}/>
      </div>
    )
  }
}

export default App;
