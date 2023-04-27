import { book_form_author, book_form_publication_date, book_form_title, book_table_body_name, book_table_name } from "../names";
import React from "react";
import BookTable from "../components/book_table";
import {BookForm} from "../components/book_form";

import { root } from "../index";

export const books_url = "http://localhost:5000/book/";
const frontend_app_url = 'http://localhost:3000';

function check_insert_values(values) {
  for (var key in values) {
    if (values[key].trim().length === 0) {
      alert("Nenhum campo deve estar em branco!");
      return false;
    }
  }
  return true;
}

function check_search_values(values) {
  var filled_values = {};
  for (var key in values) {
    if (values[key].trim().length !== 0)
      filled_values[key] = values[key];
  }
  return filled_values;
}

function get_form_values() {
  var title = document.getElementById(book_form_title).value;
  var author = document.getElementById(book_form_author).value;
  var publication_date = document.getElementById(book_form_publication_date).value;
  
  var data = {
    "title": title,
    "author": author,
    "publication_date": publication_date
  }

  return data;
}

export function delete_book(id) {
  const request_options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  fetch(`${books_url}${id}`, request_options)
      .then(async response => {
          await response.json();

          if (!response.ok) 
              alert("Houve um erro ao remover livro!");
          else {
              alert("Livro removido com sucesso!");
              document.getElementById(id).remove();
          }
      })
      .catch(() => {
        alert("Houve um erro ao remover livro!");
      });
}

const save = async (form_values, table_id) => {
  const request_options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': frontend_app_url,
               'Access-Control-Allow-Headers': '*'
             },
    body: JSON.stringify(form_values)
  };
  fetch(books_url, request_options)
      .then(async response => {
          var data = await response.json();
          console.log(data);

          if (!response.ok) 
              alert("Houve um erro ao cadastrar livro!");
          else {
              alert("Livro cadastrado com sucesso!");
              form_values["id"] = data["id"];
              insert_into_table(table_id, form_values);
          }
      })
      .catch(() => {
        alert("Houve um erro ao cadastrar livro!");
      });
};

export default function save_book() {
  var form_values = get_form_values();
  if (check_insert_values(form_values)) {
    save(form_values, book_table_name);
  }
}

function insert_into_table(table_id, data) {
  var table = document.getElementById(table_id);
  var new_row = table.insertRow(-1);
  new_row.id = data["id"];
  
  var keys = Object.keys(data);
  var num_keys = keys.length;
  var i = 0;
  for (i = 0; i < num_keys; i++) {
      var key = keys[i];
      var new_cell = new_row.insertCell(i);
      new_cell.innerHTML = data[key];
  }
  var button_cell = new_row.insertCell(i);
  var button= document.createElement("button");
  var text = document.createTextNode("Remover");
  button.appendChild(text);
  button.onclick = () => {delete_book(data["id"])}
  button_cell.appendChild(button);
}

function insert_search_result_into_table(search_result) {
  root.render(
    <div>
      <BookForm />
      <div>
          <BookTable books={search_result}/>
      </div>
    </div>
  );
}

export function search_book() {
  var values = get_form_values();

  var filled_values = check_search_values(values);
  console.log("FILLED VALUES: ", filled_values);

  var url = new URL(books_url);  
  url.search = new URLSearchParams(filled_values).toString();

  fetch(url)
  .then(async response => {
    var search_result = await response.json();
    console.log(search_result);

    if (!response.ok) 
        alert("Houve um erro ao procurar livro!");
    else {
        insert_search_result_into_table(search_result);
    }
  })
  .catch(() => {
    alert("Houve um erro ao procurar livro!");
  });
}

