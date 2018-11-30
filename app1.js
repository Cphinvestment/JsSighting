// from data.js
var tableData = data;
// Select the submit button

//var submit = d3.select("#filter-btn");

var tablebody = d3.select("tbody");

function buildTable(data){
    tablebody.html(""),
    data.forEach((dataRow) => {
        var row = tablebody.append("tr");
        Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
            cell.text(val);
        }
        );
    });
}


function renderTable(){
    var inputElement = d3.select("#datetime").property("value");
     d3.event.preventDefault();
    let filteredData = tableData;

    filteredData = tableData.filter(sighting=>
    sighting.datetime === inputElement 
    );
    buildTable(filteredData);
}

 d3.selectAll("#filter-btn").on("click", renderTable)

 buildTable(tableData);




