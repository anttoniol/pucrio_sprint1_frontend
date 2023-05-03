import { root } from "../index";
import BookTable from "../components/book_table";
import {BookForm} from "../components/book_form";


export default function render_page(data) {
    root.render(
      <div>
        <BookForm />
        <div>
            <BookTable books={data}/>
        </div>
      </div>
    );
}