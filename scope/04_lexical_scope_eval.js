// lexical scope determined at compile time
var bar = 'bar';

function foo() {

  function baz(str) {
    eval(str); //cheating !!
      console.log(bar); // 42
  }
  baz ();
};

foo('var bar = 42;');

// eval makes your code run a lot slower
// don't use eval


var obj ={
  a: 2,
  b: 3,
  c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
  a = b + c;
  c = b - a;
  d = 3; //??
}
 obj.d; //undefined
d; // 3 -- oops! we didn't create a d element in obj because it didn't have that in it's scope
