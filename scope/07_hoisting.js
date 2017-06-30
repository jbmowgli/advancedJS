a;
b;
var a = b; // these declarations move to the top
var b = 2;
b;  //2
a;  //??
/////////////////////////////////////////////////////////

//var foo = a(); //this works
//var bar = b(); // this is undefined
function A() {
// this gets hoisted because it is a function declaration (LHS)
}

var b = function() {
  //this function does not get hoisted because it is an RHS
};


bar();

var bar = 2;

function bar(){
  console.log('foo')
}

function bar(){
  console.log('bar'); //this is the value of bar();
}

//there is no hoisting of let
function baz() {
  if (true) {
    console.log(value); //temporal deadzone
    let value = 'hello'
  }
}

baz();