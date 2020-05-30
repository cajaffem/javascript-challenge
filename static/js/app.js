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

var button = d3.select("#filter-btn");

button.on("click", function () {
  var dateSpace = d3.select("#datetime");
  var inputDate = dateSpace.property("value");
  var filteredData = data.filter((date) => date.datetime === inputDate);
  buildTable(filteredData);
});

// var inputBox = d3.select("#datetime");

var inputBox = document.getElementById("datetime");

inputBox.addEventListener("keydown", function (event) {
  if (event.which === 13) {
    event.preventDefault();
    document.getElementById("filter-btn").click();
  }
});

var reset = d3.select("#reset-btn");

reset.on("click", function () {
  tbody.html("");
  buildTable(tableData);
});

buildTable(tableData);
