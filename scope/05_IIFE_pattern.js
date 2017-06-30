var foo ='foo';

// IIFE Pattern (Immediately invoked function expression) used to seperate scope
(function (){

  var foo = 'foo2';
  console.log(foo); // foo2

})(); // parens execute you can also pass in a value. If you passed in foo then it would 
// log foo twice

console.log(foo); // foo
