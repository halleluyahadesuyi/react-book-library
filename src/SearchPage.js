// Kindly note:
// Only search terms among the following words would return query results:
// ---------------------------------------------------------------------------------
// 'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 
// 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 
// 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 
// 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 
// 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 
// 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 
// 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 
// 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 
// 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 
// 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 
// 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 
// 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSelection from './BookSelection'

// Destructure props
function SearchPage({ books, onMoveBook, query, results }) {
  const { state, setState } = useState({ query: '', results: [] })

    function updateSearchQuery(query) {
        if (query.length > 0 ) {
          setState(() => ({
            query: query,
            results: []
        }))
          myBookSearch(query)
        }
        else {
          clearSearchQuery()
        }
    }

    function clearSearchQuery() {
      setState({
        query: '',
        results: []
      })
    }

    function updateCurrentShelves(searchResults) {
      if (!searchResults.error) {
       const appBooks = books
       const addBookToState = searchResults.filter((result) => appBooks.find(book => {
         if(book.id === result.id) {
           result.shelf = book.shelf
           return result
         }
       }))
       appBooks.concat(addBookToState)
       return searchResults
      }
    }

    function myBookSearch(query) {
      if (query.length > 0)
        BooksAPI.search(query)
          .then(searchResults => {
            if(query === state.query)
              setState({ 
                results: updateCurrentShelves(searchResults)
              })
          }
        )
     }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                  <button
                    className="close-search"
                    onClick={ clearSearchQuery }>
                  </button>

                  <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author or subject"
                        value={query}
                        onChange={(event) => updateSearchQuery(event.target.value)}
                    />
                  </div>
                </div>

                <div className="search-books-results">
                  <ol className="books-grid">
                    <li>
                      { results ? (
                        results.map((book) => (
                          <BookSelection
                            key={book.id}
                            book={book}
                            moveBook={onMoveBook} 
                          />
                          ))
                        ) : (
                          <h4>No results for, "{query}"</h4>
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

export default SearchPage