// // named function
// function doIt() {
// console.log('Doin it')
// }

// console.log(doIt)//shows the fuction itself
// console.log(doIt())//undefined due to no return statement
// doIt()// correct way to call on the function for results

// let stillDoinIt = doIt

// stillDoinIt()// this is how you can verify a variable to a function

// // anonymous function
// let anonFun = function() {
//   console.log('chillin')
// }

// anonFun()

// let anonFun2 = function (num1, num2){
//   console.log(num1, num2);
// }

// anonFun(2,3)

// Practice: Write an anonymous function that prints your name
// 3 min
// let anonName = function(){
//   console.log('Brandi')
// }

// anonName()

// self-invoked, or immediately invoked
// (function() {
//   console.log('chillin')
// })()// this allows the function to immediately run without having to call upon it.

// let add5 = function(num) {
//   return num + 5
// }

// console.log(add5())//NaN
// console.log(add5(5))//10
// console.log(add5('5'))//55

// let myAdd5 = add5
// let shouldBe8 = myAdd5(3)
// console.log(shouldBe8)

// Practice: Write a function that takes two numbers and returns a fun string containing those two numbers
// 5 min
// function fun (num1, num2){
// console.log(num1 + ' is number, so is '+ num2)
// }

// fun(1,2)


// function sumAll() {
//   let sum = 0
//   for(num of arguments) {
//     sum += num
//   }
//   return sum
// }

// let sum = sumAll(1,2,3,4)
// console.log(sum)

// // spread syntax
// let nums = [2,3,4,5]
// let sum2 = sumAll(...nums)
// console.log(sum2)// takes an array and makes it individual parameters to pass through the function-- in this case individual numbers to run the function just like the "sum" function above does.

// Practice: Write a function that takes any number of names to invite to your birthday party and returns a string containing the invite list.
// 6 min

// function inviteList () {
//   let invitees = ""
//   for(name of arguments){
//   invitees += name + ', '
//   }
// return invitees
// }

// let names = inviteList('brandi', 'john', 'bill')
// console.log(names)

// const getInvitationList = (...args) => args.reduce ( (list,name)=> list + name + ", ",' ')

// console.log(getInvitationList('radu', 'brad', 'lisa','amy'))

// const birthday = (...args) =>{
//   let string = ''
//   for(let i=0; i < args.length; i++){
//     string += args[i] + " "
//   }return `these people are coming: $(string)`
// }// does not work-- something is missing

// let list = birthday('bob', 'joe', 'su')

// // functions as parameters to other functions

function callMe(anotherFun) {
    anotherFun()
}

function sayBoo() {
    console.log('boo!')
}

// callMe()// type error
// callMe(sayBoo)//logs-- basically renames the function
// callMe(sayBoo())//type error and log

// Practice: Write a function that takes two functions and calls them in order.
// 5 minutes

function multiple (first, second){
    first()
    second()
}

function blah(){
    console.log('Number 1')
}

function bleb(){
    console.log('Number 2')
}
multiple (blah, bleb)

// // functions as property values

// let myFuns = {
//   sayBoo: function() {
//     console.log('boo!')
//   },
//   add5: function(num) {
//     return num + 5
//   }
// }

// myFuns.sayBoo()
// let shouldBe15 = myFuns.add5(10)
// console.log(shouldBe15)

// let cat = {
//   name: 'Liz',
//   type: 'spots',
//   meow: function() {
//     console.log('meow!')
//   }
// }

// console.log(cat.name)
// cat.meow()
// cat['meow']()
// let catMeow = cat['meow']
// catMeow()
// cat.meow()

// cat.meow = function() {
//   console.log('nice meow')
// }
// cat.meow()

// Practice: Make an object that has two properties, each of which is assigned a function.  Have one function add two numbers, and the other function multiple two numbers.
// 7 minutes

// functions as types

// function cat(name, type) {
//   this.name = name
//   this.type = type
//   this.meow = function() {
//     console.log('meow!')
//   }
// }

// let liz = new cat('Liz', 'marble')
// let bella = new cat('Bella', 'stripes')

// console.log(liz.name)
// console.log(bella.name)

// liz.meow()
// bella.meow()

// Practice: Make a function type for a car, with a few properties and at least one member function.
// Examples:
// myCar.mileage
// myCar.drive()
// 10 min