// from data.js
var tableData = data;
// Select the submit button

var submit = d3.select("#filter-btn");

var tablebody = d3.select("tbody");

function buildTable(data){
    data.forEach((dataRow) => {
        var row = tablebody.append("tr");
        Object.values(dataRow).forEach((val) => {
        var cell = row.append("td");
            cell.text(val);
        }
        );
    });
};

// }
var inputElement = d3.select("#datetime");
var inputValue=inputElement.property("value");
// console(buildTable)
function renderTable(){
    d3.event.preventDefault();
    
    var filteredData = tableData.filter(sighting=>
    sighting.datetime == inputValue 
    );
    buildTable(filteredData);
};
//submit.on("click", function()
//{

    

    //newtable=filteredData.map(sighting=>sighting);
   
    // renderTable()
//  });
 d3.selectAll("#filter-btn").on("click", renderTable)

 buildTable(tableData);




//   // Prevent the page from refreshing
//   d3.event.preventDefault();

//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select("#datetime");

//   // Get the value property of the input element
// //   var inputValue = inputElement.property("value");

// // //   console.log(inputValue);
// // //   console.log(sighting);

//   var filteredData = sighting.filter(sighting => sighting.datetime === inputValue);

// //   console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   //    var ages = filteredData.map(person => person.age);


// var inputValue=inputElement.property("value");
  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

  // Finally, add the summary stats to the `ul` tag
//   d3.select(".table-head")
//     .append("li").text(`City: ${city}`)
//     .append("li").text(`State: ${state}`)
//     .append("li").text(`Country: ${country}`)
//     .append("li").text(`Shape: ${shape}`)
//     .append("li").text(`Comment: ${comment}`);
// });


// var sighting = filteredData.map(sighting => sighting);
// renderTable(sightings);

// function renderTable(sightings)
// {var tbody
// }

// data.forEach((datetime) => {
//     var row = tbody.append("tr");
//     Object.entries(datetime).forEach(([key, value]) => {
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
