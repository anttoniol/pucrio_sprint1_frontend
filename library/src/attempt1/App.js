// App.js
import React, { useEffect, useState } from "react";
import Books from "./books";

function App() {
  // set state
  const [books, setBooks] = useState([]);

  // first data grab
  useEffect(() => {
    fetch("http://localhost:5000/book") 
      .then(resp => resp.json())
      .then(data => setBooks(data))
  }, []);

  return (
      <div>
        <Books books={books}/>
      </div>
    );
}
export default App
