//Examples from Fun Fun Function

let animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'},
]

//FILTER//
// let dogs = animals.filter(function(animal) {
//   return animal.species === 'dog'
// })

let isDog = function(animal) {
  return animal.species === 'dog';
}
let dogs = animals.filter(isDog);

//MAP//
// let names = animals.map((animal) => animal.name);

let names = animals.map(function(animal) {
  return animal.name + ' is a ' + animal.species
});

//REDUCE// - any list transformation

let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325}
]

let totalAmount = orders.reduce(function(sum, order) {
  return sum + order.amount;
  
}, 0);

console.log(totalAmount);

