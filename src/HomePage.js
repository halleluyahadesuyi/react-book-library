import React from 'react';
import { Link } from 'react-router-dom'
import BookSelection from './BookSelection'
import './App.css'

// Array of objects for selection of books
const bookshelves = [
  {
    key: 'currentlyReading',
    name: 'Currently Reading'
  },
  {
    key: 'wantToRead',
    name: 'Want To Read'
  },
  {
    key: 'read',
    name: 'Read'
  },
];

// Destructure props
function HomePage({ books, onMoveBook }) {

  function handleBookSelection(bookShelfKey) {
    return books.filter(book => book.shelf === bookShelfKey);
  }

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads App</h1>
        </div>

        <div className="list-books-content">
          <div>
            {bookshelves.map((shelf) => (
              <div key={shelf.key} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                {handleBookSelection(shelf.key).length === 0
                  ? (<div>
                    <h4>There are no books on this shelf at the moment</h4>
                  </div>
                  )

                  : (<div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        {handleBookSelection(shelf.key).map((book) => (
                          <BookSelection key={book.id}
                            book={book}
                            moveBook={onMoveBook}
                          />
                        ))
                        }
                      </li>
                    </ol>
                  </div>
                  )
                }
              </div>
            ))}
          </div>
        </div>
        <Link
          to='/search'
          className="open-search">
        </Link>
      </div>

    </div>
  )
}

export default HomePage