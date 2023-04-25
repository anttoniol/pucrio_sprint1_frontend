import React from "react";
import save_book from "../routes/book_routes"


export const BookForm = () => {
  return (
    <div id="form_div">
      <p>Título: <input type="text" id="title"/> </p> 
      <p>Autor: <input type="text" id="author"/> </p> 
      <p>Data de publicação: <input type="date" id="publication_date"/> </p> 
      <p><button id="save_book" onClick={save_book}>Cadastrar livro</button></p>
    </div>
  );
};
