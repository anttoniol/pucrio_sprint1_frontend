import React from 'react'
import Book from './book'

function Books({books}) {
  console.log(books);
  return (
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Data de Publicação</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            { books.livros.map(book => <Book key={book.id} book={book}/>) }
          </tbody>
        </table>
  )
}

export default Books
