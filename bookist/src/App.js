import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import BookList from './components/BookList.js';
import Shelf from './components/Shelf.js';
import Data from './Data.js';

class App extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
      <Header />
      <BookList />
      <Shelf />
      <Data />
      </div>
    );
  }
}

export default App;
