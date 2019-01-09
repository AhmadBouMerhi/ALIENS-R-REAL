// from data.js
var tableData = data;

console.log(tableData[0]);

var tbody = d3.select("tbody");

tableData.forEach(function(aliens){
    console.log(aliens);
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

 console.log("clicked!");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
 
 // Get the value property of the input element
 var inputValue = inputElement.property("value");

 console.log(inputValue);
 
// Filter based on the input date
 var filteredData = tableData.filter(alien => alien.datetime === inputValue);
 console.log(filteredData);

 // Clear the table body
 tbody.html("");
 
 // Append the filtered data
 filteredData.forEach(function(aliens){
    console.log(aliens);
    var row = tbody.append("tr");
    Object.entries(aliens).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

});

