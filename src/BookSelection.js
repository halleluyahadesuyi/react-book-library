import React from 'react'

// Destructure props
function BookSelection({ book, moveBook }) {

  return (
    <section className="book" key={book.id}>
      <div className="book-top">
        <div className="book-cover"
          style={{
            width: 131,
            height: 195,
            backgroundImage: (book.imageLinks)
              ? `url(${book.imageLinks.thumbnail})`
              : `url(${'icons/book-placeholder.svg'})`
          }}>
        </div>

        <div className="book-shelf-changer">
          <select
            value={book.shelf ? book.shelf : 'none'}
            onChange={(event) => moveBook(book, event.target.value)}
          >
            <option disabled>Move selected book to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      <div className="book-title">
        {book.title}
      </div>

      {book.authors ? (book.authors.length > 1 ? (book.authors.map((author) => (
        <div key={author} className="book-authors">{author}</div>
      )))
        : (<div className="book-authors">{book.authors}</div>)
      ) : (<div className="book-authors">Author is currently unavailable</div>)}
    </section>
  )
}

export default BookSelection