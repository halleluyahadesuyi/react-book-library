import React, { Component } from 'react'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  moveBook = (book, shelfName) => {
    const bookFromState = this.state.books.find(b => b.id === book.id);
    if (bookFromState) {
      // update existing
      bookFromState.shelf = shelfName;
      BooksAPI.update(book, shelfName)
      .then(this.setState(currentState => ({
        books: currentState.books
      })))
    } else {
      // add new one
        book.shelf = shelfName;
        BooksAPI.update(book, shelfName)
        .then(this.setState(prevState => ({
          books: prevState.books.concat(book)
      })))
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={
              <HomePage
              books={this.state.books}
              onMoveBook={this.moveBook}
              />
            } />
            <Route exact path='/search' element={
              <SearchPage
              books={this.state.books}
              onMoveBook={this.moveBook}
              />
            } />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
export default BooksApp