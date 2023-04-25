import {delete_book} from "../routes/book_routes";

export default function Book({book, index}) {
    console.log("BOOK ITEM: " + book);

    if (index % 2 === 0) {
        return(
            <tr id={book['id']}>
                <td>{book['título']}</td>
                <td>{book['autor']}</td>
                <td>{book['data de publicação']}</td>
                <td><button onClick={() => delete_book(book['id'])}>Remover</button></td>
            </tr>
        );
    }
    return(
        <tr className="active-row" id={book['id']}>
            <td>{book['título']}</td>
            <td>{book['autor']}</td>
            <td>{book['data de publicação']}</td>
            <td><button onClick={() => delete_book(book['id'])}>Remover</button></td>
        </tr>
    )
    
}