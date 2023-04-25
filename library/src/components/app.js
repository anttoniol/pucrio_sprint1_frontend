import '../css/app.css';
import {BookForm} from './book_form';


import BookTable from "./book_table";
import React, { useState, useEffect } from 'react'


const App = () => {
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const base_url = "http://localhost:5000";

        const get_books = async () => {
            try {
                const response = await fetch(base_url + "/book/");
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
            <BookForm />
            <div>
                <BookTable books={books}/>
            </div>
        </div>
    );
};

export default App
