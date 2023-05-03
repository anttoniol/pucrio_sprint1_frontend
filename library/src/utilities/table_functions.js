var column_order = ["id", "title", "author", "publication_date"];

function create_row(table_id, class_name) {
    var table = document.getElementById(table_id);
    var new_row = table.insertRow(-1);
    
    var last_index = table.rows.length - 2; // Obtém o nome da classe da linha anterior à linha nova da tabela
    if (last_index >= 0) {
        var prev_class_name = table.rows[last_index].className;
        if (prev_class_name.length === 0) 
            new_row.setAttribute("class", class_name);
    }
    
    return new_row;
}

export default function insert_into_table(table_id, data, func) {
    var new_row = create_row(table_id, "active-row");
    new_row.id = data["id"];
  
    var num_columns = column_order.length;
  
    var i = 0;
    for (i = 0; i < num_columns; i++) {
        var new_cell = new_row.insertCell();
        var key = column_order[i];
        new_cell.innerHTML = data[key];
    }
    var button_cell = new_row.insertCell();
    var button = document.createElement("button");
    var text = document.createTextNode("Remover");
    button.appendChild(text);
    button.onclick = func;
    button_cell.appendChild(button);
}