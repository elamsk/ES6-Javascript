var people = [
  {name: 'Arun', sal: 5000000},
  {name: 'Saurab', sal: 90000000}, 
  {name: 'Sneha', sal: 40000000}, 
  {name: 'Arun', sal: 19000000}, 
  {name: 'Nitesh', sal: 16000000}
]

function highPaidPerson(person) {
    return person.sal > 10 && person.sal < 40000000
}

//Find will send the condtion value, if stafiy, it not it will return error

var FirstHighPaidPerson = people.find(highPaidPerson)

console.log('First found High Paid Person:', FirstHighPaidPerson.name)



var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

// callback apply to each element . if all condtion satficy then it will retuen True . It's Similar to AND
var everyoneIsTeenager = people.every(teenager)

console.log('Everyone is teenager: ', everyoneIsTeenager)



var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

// callback apply to each element . it return True if anyone one condtion statify. It's Similar to OR

var thereAreTeenagers = people.some(teenager)

console.log('There are teenagers:', thereAreTeenagers)




var array = [1, 2, 3, 4]

function sum(acc, value) {
  return acc + value
}

function product(acc, value) {
  return acc * value
}

// Accumlater is been used as one of the parameter. Concept is called reduction concept

var sumOfArrayElements = array.reduce(sum, 0)
var productOfArrayElements = array.reduce(product, 1)

console.log('Sum of', array, 'is', sumOfArrayElements)
console.log('Product of', array, 'is', productOfArrayElements)






