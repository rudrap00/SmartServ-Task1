const url = "https://s3.amazonaws.com/open-to-cors/assignment.json";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((obj) => {
    //let numRows = 1;
    let objArr = [];

    // Convert object of object to array of objects
    Object.keys(obj["products"]).forEach((key) =>
      objArr.push({
        title: obj["products"][key]["title"],
        price: obj["products"][key]["price"],
        popularity: obj["products"][key]["popularity"]
      })
    );

    // Sort array by descending order of popularity
    objArr.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    // Populate table with rows
    for (let val of objArr) {
      let table = document.getElementById("myTable");
      let row = table.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      cell1.innerHTML = val["title"];
      cell2.innerHTML = val["price"];
      cell3.innerHTML = val["popularity"];
    }
  })
  .catch((err) => {
    console.log(err);
  });
