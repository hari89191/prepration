
//scope ==> life time visibiity of an variable


/// types of scopes in javascript  ==> global scope, functional scope

// global scope  ==>

// functional scope

// block scope

// closure

// hoisting

//

const t=1000000000000;
const r = 111111;
function sum()
{
  var r=44444;

  return function (){

  } ()
//   console.log(r)

    // var b = 100;
    // const c =10;

}
sum();
// console.log('r : ' , r);
// console.log('b : ' , b);
// console.log('c : ' , c);
// console.log('d : ' , d);
// console.log('e : ' , e);
// console.log('f : ' , f);
console.log('t :',t,"r : ", r)