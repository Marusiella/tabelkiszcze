var select = document.querySelector('select');

/**
 * @param {Date} DateOfCreation
 * @param {string} Name
 * @param {Number} Price
 * @param {number} Ratings
 */
function Games(DateOfCreation, Name, Price, Ratings) {
    this.DateOfCreation = DateOfCreation;
    this.Name = Name;
    this.Price = Price;
    this.Ratings = Ratings;
    this.returnGameString = () => {
        return "<tr><td>" + this.DateOfCreation + "</td><td>" + this.Name + "</td><td>" + this.Price + "</td><td>" + this.Ratings + "</td></tr>";
    }
}

/**
 * @param {string} className
 * @param {Games[]} data
 */

function createTable(data, className) {
    var table = `<table class="${className}"><tr><th>Date of Creation</th><th>Name</th><th>Price</th><th>Ratings</th></tr>`;
    data.forEach((game) => {
        table += game.returnGameString();
    })
    table += "</table>";
    return table;
}
function createList(data, className) {
    var list = `<ul class="${className}">`;
    data.forEach((game) => {
        list += `<li>${game.Name}</li>`;
    })
    list += "</ul>";
    return list;
}
const games = [
    new Games("2019-01-01", "GTA V", 100, 4.5),
    new Games("2011-01-01", "GTA IV", 50, 4.5),
    new Games("2010-01-01", "GTA III", 30, 4.5),
]
document.querySelector('#root').innerHTML = createTable(games, "table");

select.onchange = (e) => {
    console.log(e.target.value)
    if (e.target.value === "Tabelka") {
        document.querySelector('#root').innerHTML = createTable(games, "table");
    } else {
        document.querySelector('#root').innerHTML = createList(games, "list");
    }
}