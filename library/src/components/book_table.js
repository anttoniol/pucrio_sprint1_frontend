import Book from "./book";

  
function BookTable({books}) {
    if (books == null || books.livros == null)
        return null;

    console.log("BOOKS: ", books);
    
    return(
        <table id = "book_table" className = "styled-table">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Data de publicação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {books.livros.map((book, index) => {
                    return (<Book book = {book} index = {index}/>);
                })}
            </tbody>
            
        </table>
    );
}

export default BookTable;