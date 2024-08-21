
// function add (a,b) {

//   return a + b;
  
// }
// console.log(add(5,6))

// var x=1000;
// var x = 10000;
// {
// const x =10;
//   console.log(x)//10

// }
// console.log(x)//100000

// //scope ==> life time visibiity of an variable

// /// types of scopes in javascript  ==> global scope, functional scope

// // global scope  ==>

// // functional scope

// // block scope

// // closure

// // hoisting

// //

// const t=1000000000000;
// const r = 111111;
// function sum()
// {
//   var r=44444;

//   return function (){

//   } ()
// //   console.log(r)

//     // var b = 100;
//     // const c =10;

// }
// sum();
// // console.log('r : ' , r);
// // console.log('b : ' , b);
// // console.log('c : ' , c);
// // console.log('d : ' , d);
// // console.log('e : ' , e);
// // console.log('f : ' , f);
// console.log('t :',t,"r : ", r)

// console.log(this)
// var a = 10;

// const b = 100;
// let c = 1000;

// console.log(a);
// console.log(b);
// console.log(c);
// hosting
// temporial deadzone
// global exexcutaion context
//shadowing
// block
// closure
//lexical environment

/// function ==> logical group of one or more expressions
// ways to write a function

//==> function declaration
// ==> function expression
// ==> arrow function

// function add(){
// console.log("dfgggggd")
// }
// add()

//function declartion



// let x = ;
//invokation

// function expression
// console.log(multiply(4,6))
// var multiply=function(c, d){   
//     return  c * d};
// let z=multiply(4,6)


// arrow function

// let divide =(x, y)=>x/y

// console.log(divide(29,2)) 
// console.log(some(5,78))
// var some=(a,b)=> a + b;
// let f = some(2,9)
// console.log(f)

// let a =[2,3,4,5];
// // let b = a;
// // let b =[...a]
// // let b = JSON.parse(JSON.stringify(a));
// let b = [Object.assign(a),{}]
// console.log(a,b)// before added changes in b
// b.push(6)
// console.log(a,b)// after added changes in b
// // b.push(3)
// console.log(a)// hari false naseer true 

 // + operator

 // operands

 // shallow copy and deep copy



 // closure  ==> inner function can able to access the parent function local variables by itself but 
 //vice versa is not possible is acalled closure

 // closure  ==> function  bundle together with it's lexical environment

// functions

// function Declaration
console.log(sumOfNumbers());
function sumOfNumbers (){
  let a =1000;
  let b = 20;
  let c = a +b
  return c
}

///  function Expression
var addition = function  (){
  let a =1000;
  let b = 20;
  let c = a +b
  return c
}
console.log(addition());

// Arrow Function
console.log(minusDigits(23, 45))

var minusDigits =(a, b)=> a + b;

// function => logical group of one or more expressions


