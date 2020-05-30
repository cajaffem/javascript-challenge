// from data.js
var tableData = data;

// YOUR CODE HERE!
const tbody = d3.select("tbody ");

function buildTable(ufos) {
  tbody.html("");
  ufos.forEach((dataRow) => {
    const row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

function handleClick() {
  // filter
  // buildTable(filterdata)
}

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {
  // Select the input element and get the raw HTML node
  var dateSpace = d3.select("#datetime");

  // Get the value property of the input element
  var inputDate = dateSpace.property("value");

  console.log(inputDate);
  console.log(data);

  var filteredData = data.filter((date) => date.datetime === inputDate);

  buildTable(filteredData);
});

buildTable(tableData);
