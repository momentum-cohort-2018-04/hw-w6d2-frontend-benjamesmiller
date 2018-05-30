import React, { Component } from 'react';
import logo from './logo.svg';
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
    const author = this.state.books.author;
    const title = this.state.books.title;
    const pic = this.state.books.coverImageUrl;
    const short = this.state.books.shortdescription;
    return (
      <div className="App">
        <p className="App-intro"> 
        <div className="generalInfo">
        {books.map((books, idx) =>
        <div key={idx} className="title">
        {books.title}
        </div>
        <div key={idx} className="author">
        {books.author}
        </div>
        <div key={idx} className="short">
        {books.shortdescription}
        </div>
        <div key={idx} className="pic">
        {books.coverImageUrl}
        </div>
        )}
        </div>
        </p>
      </div>
    );
  }
}

export default App;
