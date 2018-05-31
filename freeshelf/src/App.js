import React, { Component } from 'react';
import './App.css';
import books from './books.json';

class App extends Component {
  constructor () {
    super() ;
    this.state = {
      books: books,
    }
  }
  render() {
    const books = this.state.books;
    return (
        <div className="app">
        <p className="App-intro"> 
        <div className="generalInfo">
        {books.map((books, idx) =>
        <div className="book">
        <div key={idx} className="title">
        {books.title}
        </div>
        <div key={idx} className="author">
        {books.author}
        </div>
        <div key={idx} className="short">
        {books.shortDescription}
        </div>
        <img key={idx} className="pic" src={books.coverImageUrl} />
        <hr/>
        </div>
        )}
        </div>
        </p>
        </div>
    );
  }
}

export default App;
