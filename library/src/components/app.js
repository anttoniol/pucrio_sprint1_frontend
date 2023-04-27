import '../css/app.css';
import {BookForm} from './book_form';
import BookTable from "./book_table";
import React, { useState, useEffect } from 'react';
import { books_url } from '../routes/book_routes';


const App = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const get_books = async () => {
            try {
                const response = await fetch(books_url);
                const response_data = await response.json();
                console.log("DATA: " + response_data);
                setBooks(response_data);
            } catch (error) {
                console.log("error", error);
            }
        };

        get_books();
    }, []);

    if (books == null)
        return null;
    
    return (
        <div>
            <div>
                <BookForm />
            </div>
            
            <div>
                <BookTable books={books}/>
            </div>
        </div>
    );
};

export default App
