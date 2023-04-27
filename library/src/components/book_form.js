import React from "react";
import save_book, { search_book } from "../routes/book_routes"
import { book_form_author, book_form_div, book_form_publication_date, book_form_title, save_book_button, search_book_button } from "../names";


export const BookForm = () => {
  return (
    <div id={book_form_div}>
      <p>Título: <input type="text" id={book_form_title}/> </p> 
      <p>Autor: <input type="text" id={book_form_author}/> </p> 
      <p>Data de publicação: <input type="date" id={book_form_publication_date}/> </p> 
      <p><button id={save_book_button} onClick={save_book}>Cadastrar livro</button>  &nbsp;&nbsp;&nbsp; <button id={search_book_button} onClick={search_book}>Procurar livro</button></p>
    </div>
  );
};

