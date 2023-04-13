
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSelection from './BookSelection'
import PropTypes from 'prop-types'

// Destructure props
function SearchPage({ books, onMoveBook }) {

  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const updateSearchQuery = (query) => {
    if (query.length > 0) {
      setResults([])
      setQuery(query)
      myBookSearch(query)
    }
    else {
      clearSearchQuery()
    }
  }

  const clearSearchQuery = () => {
    setQuery("")
    setResults([])
  }

  const updateCurrentShelves = (searchResults) => {
    if (!searchResults.error) {
      const appBooks = books
      const addBookToState = searchResults.filter((result) => appBooks.find(b => {
        if (b.id === result.id) {
          result.shelf = b.shelf
          return result
        }
      }))
      appBooks.concat(addBookToState)
      return searchResults
    }
  }

  const myBookSearch = (query) => {
    if (query.length > 0)
      BooksAPI.search(query)
        .then(searchResults => {
          if (query) {
            setResults(updateCurrentShelves(searchResults))
          }
        })
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={clearSearchQuery}>X
        </button>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author e.g Games, Kafka, Android, Art"
            value={query}
            onChange={(event) => updateSearchQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          <li>
            { results && query !== "" ? (
                results.map((book) => (
                  <BookSelection
                    key={book.id}
                    book={book}
                    moveBook={onMoveBook}
                  />
                ))
              ) : (
                <h4>Type in a "valid" search term for this app above...</h4>
              )
            }
          </li>
        </ol>

        <Link
          to='/'
          className="return-home">
        </Link>
      </div>
    </div>
  )

}

SearchPage.propTypes = {
  onMoveBook: PropTypes.func.isRequired
}

export default SearchPage