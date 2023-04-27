import Book from "./book";
import { book_table_body_name, book_table_name } from "../names";

  
function BookTable({books}) {
    if (books == null || books.livros == null)
        return null;

    console.log("BOOKS: ", books);
    
    return(
        <table id = {book_table_name} className = "styled-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Data de publicação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id = {book_table_body_name}>
                {books.livros.map((book, index) => {
                    return (<Book book = {book} index = {index}/>);
                })}
            </tbody>
            
        </table>
    );
}

export default BookTable;