# 📚 React Book Library

An interactive bookshelf app built with React. Users can search for books and organize them into three shelves:  
- Currently Reading  
- Want to Read  
- Read  

This project is based on Udacity’s MyReads starter template and demonstrates practical state management, routing, and API integration in a React application.

---

## Features

- Search for books by title or author
- Move books between shelves in real-time
- Persist shelf state
- Clean and responsive UI
- React Router for smooth navigation

---

## 🔗 Live Demo

👉 [View Live App](https://a-react-book-library.netlify.app/)  

> Deployed on Netlify.

---

## Tech Stack

- React
- React Router
- JavaScript (ES6+)
- CSS
- Books API (Udacity)

---

## Installation

- git clone https://github.com/halleluyahadesuyi/react-book-library.git
- cd react-book-library
- npm install
- npm start

> The app will be available at http://localhost:3000

---

## Usage

- On the main page, books are grouped by shelf.
- Click the `+` icon to search for new books.
- Use the dropdown to move a book to another shelf.
- Search results show which shelf (if any) a book is currently on.

### 🔑 Valid Search Terms

Only certain keywords return results due to limitations of the provided API.

Here are some terms that work:
---------------------------------------------------------------------------------
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 
'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 
'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 
'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 
'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 
'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 
'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 
'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 
'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 
'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 
'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 
'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

---

## Deployment

This project is ready for deployment on platforms like Vercel, Netlify, or GitHub Pages.

### To deploy on Netlify:
1. Push this project to a GitHub repository
2. Go to [netlify.com](https://www.netlify.com/)
3. Import your GitHub repo
4. Choose the root directory and let Netlify detect your React app
5. Done!

---

## 📁 Folder Structure

<pre>
```
react-book-library/
├── public/                 # Static files
│   ├── index.html          # Main HTML file
│   └── favicon.ico         # Favicon
├── src/                    # Source files
│   ├── assets/             # Static assets like images, fonts, etc.
│   ├── components/         # Reusable UI components
│   │   ├── BookCard/       # Displays individual book details
│   │   │   ├── BookCard.js
│   │   │   └── BookCard.css
│   │   ├── Shelf/          # Displays a collection of books
│   │   │   ├── Shelf.js
│   │   │   └── Shelf.css
│   │   └── SearchBar/      # Search input component
│   │       ├── SearchBar.js
│   │       └── SearchBar.css
│   ├── pages/              # Route-level components
│   │   ├── Home/           # Home page
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   └── Search/         # Search page
│   │       ├── Search.js
│   │       └── Search.css
│   ├── services/           # API calls and external services
│   │   └── booksAPI.js     # Functions to interact with the Books API
│   ├── utils/              # Utility functions
│   │   └── helpers.js      # General helper functions
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point of the application
│   └── routes.js           # Application routing
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```
</pre>

---

## Contributing
Contributions are welcome! If you’d like to add features or suggest improvements:

1. Fork this repo
2. Create your feature branch (git checkout -b feature/new-feature)
3. Commit your changes (git commit -m 'feat: add new feature')
4. Push to the branch (git push origin feature/new-feature)
5. Open a pull request

---

## 🔌 API Reference

https://reactnd-books-api.udacity.com/

---

## 📝 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

> A starter template for this application was originally provided by [Udacity's React Nanodegree](https://github.com/udacity/reactnd-project-myreads-starter).
