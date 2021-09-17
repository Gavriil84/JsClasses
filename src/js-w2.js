import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//create a variable name city and assign a blank object to it then log it to console
const city1 = {};
console.log(city1);
//print the varialbe type to console
console.log(typeof city1);

// add a property named 'name' with value "vancouver" to object & again log variable to console
city1.name = "Vancouver";
console.log(city1);

// add a property named 'province' with value "BC" to object & again log the variable to console
city1.province = "BC";
console.log(city1);

// add a population property to objec (assign number value)
city1.population = 647540;
console.log(city1);

city1.isCapital = false;
console.log(city1);

// create another variable called city2 and assign an object
//with properties name, population, isCapital
const city2 = {
  name: "Victoria",
  isCapital: true,
  population: 84289
};

//copy province propery from city to city2, then log city2 into console
city2.province = city1.province;

//iterate over properties of city2
for (let prop in city2) {
  console.log(prop + "=" + city2[prop]);
}

function City(name, population, capital) {
  this.name = name;
  this.population = population;
  this.isProvince = capital;
}

console.log(City);

let City1 = new City("Vancouver", "500000", false);
console.log(City1);

class City2 {
  constructor(name, population, capital) {
    this.name = name;
    this.population = population;
    this.isProvince = capital;
  }

  printMe() {
    return this.name + " " + this.population + " " + this.isProvince;
  }
}

let myCity = new City2("Vancouver", 50000, false);
console.log(myCity.printMe());

let myCity2 = new City2("Victoria", 90000, true);
console.log(myCity2.printMe());
