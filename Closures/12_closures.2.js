// when a function rembers its lexical scope even when the function is executed outside that lexical scope
function foo() {
  var bar = 'bar';

  return function () {
    console.log(bar);
  }
}

function bam(baz) {
  //returns the function expression, and then executes it.
  foo()();  
}


bam();