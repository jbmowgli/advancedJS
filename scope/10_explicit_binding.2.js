// we can create a utility to bind objects to functions:
function bind (boundFunction, bindingObject) {
  return function() {
    boundFunction.call(bindingObject);
  }
}

function foo() {
  console.log(this.bar)
}

var obj = { bar: 'bar'};
var obj2 = { bar: 'bar2'};

foo = bind(foo, obj);

foo(); // bar
foo.call(obj2) //bar because we cannot overide the bind