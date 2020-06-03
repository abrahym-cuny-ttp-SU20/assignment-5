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
    let colrow = Array.from (table.children);
    for (let i = 0; i < colrow.length; i++) {
        let cell = document.createElement ("td");
        colrow[i].append (cell);
        cell.textContent = "Hello";
    }
    column +=1;
}

function deleteRow () {
        let table = document.getElementById ("table").deleteRow(0);
    }
    


//var firstRow = document.getElementById("myTable").rows[0];
//firstRow.deleteCell(0);


function deleteColumn () {
    let table = document.getElementById ("table");
    let rows = Array.from (table.children);
    for (let i = 0; i < rows.length; i++) {
        let delrow = document.getElementById ("table").rows[i];
        delrow.deleteCell(0);
       
    }
    column -=1;
}

/****
    Select color from dropdown
****/


/****
    Fill all uncolored cells with 
    the currented selected color
****/
fillAllUncolored(){
    return;
}

/****
    Fill all colored cells with
    the currently selected color
****/
fillAllColored(){
    return;
}


/****
    Clear all cells and restores their initial color
****/
restoreCells(){
    return;
}


/****
    Click and hold from a single cell, 
    to a different cell that affects
    all cells hovered from start to end
    to the selected color
****/
//eventListener



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