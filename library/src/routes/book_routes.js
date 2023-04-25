//import insert_row_into_table from "../utilities/table_functions";

const books_url = "http://localhost:5000/book/";

function check_values(values) {
  for (var key in values) {
    if (values[key].trim().length === 0) {
      alert("Nenhum campo deve estar em branco!");
      return false;
    }
  }
  return true;
}

function get_form_values() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var publication_date = document.getElementById("publication_date").value;
  
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
               'Access-Control-Allow-Origin': 'http://localhost:3000',
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
              insert_into_table(table_id, form_values, data["id"]);
          }
      })
      .catch(() => {
        alert("Houve um erro ao cadastrar livro!");
      });
};

export default function save_book() {
  var form_values = get_form_values();
  if (check_values(form_values)) {
    var table_id = "book_table";
    save(form_values, table_id);
  }
}

function insert_into_table(table_id, data, id) {
  var table = document.getElementById(table_id);
  var new_row = table.insertRow(-1);
  new_row.id = id;
  
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
  button.onclick = () => {delete_book(id)}
  button_cell.appendChild(button);
}

