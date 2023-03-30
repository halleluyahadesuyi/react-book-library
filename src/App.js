import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books)
    })
  }, [])

  const moveBook = (book, shelfName) => {
    const bookFromShelfState = books.find((b) => b.id === book.id);
    if (bookFromShelfState) {
      // update the existing shelf
      bookFromShelfState.shelf = shelfName;
      BooksAPI.update(book, shelfName).then(() => {
        setBooks([...books]);
      });
    } else {
      // add new book to shelf
      book.shelf = shelfName;
      BooksAPI.update(book, shelfName).then(() => {
        setBooks([...books, book]);
      });
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <HomePage
              books={books}
              onMoveBook={moveBook}
            />
          } />
          <Route exact path='/search' element={
            <SearchPage
              books={books}
              onMoveBook={moveBook}
            />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App