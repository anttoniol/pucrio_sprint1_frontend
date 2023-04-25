import React from 'react'

function Book({book: {id, title, author, publication_date} }) {

  return (
        <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{publication_date}</td>
            <td><button>Remover</button></td>
        </tr>
  )
}
export default Book