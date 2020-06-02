let column = 1;

function addRow () {
    
    let table = document.getElementById ("table");
    let row = document.createElement ("tr");
    table.appendChild (row);
    for (let i = 0; i < column; i++) {
        let cell = document.createElement ("td");
        row.append (cell);
        cell.textContent = "Hello";
    }

}

function addColumn () {
    let table = document.getElementById ("table");
    let rows = Array.from (table.children);
    for (let i = 0; i < rows.length; i++) {
        let cell = document.createElement ("td");
        rows[i].append (cell);
        cell.textContent = "Hello";
    }
    column +=1;
}




/*let newRow = document.createElement("row");
let a = newRow.insertCell (0);
let b = newRow.insertCell (1);
a.innerHTML = "new row, 0";
b.innerHTML = "new row, 1";
(document.querySelector("tr")).appendChild(newRow);





function insert_Row()
{
var x=document.getElementById('sampleTable').insertRow(0);
var y = x.insertCell(0);
var z = x.insertCell(1);
y.innerHTML="New Cell1";
z.innerHTML="New Cell2";
}
*/

//node.appendChild(newNode);