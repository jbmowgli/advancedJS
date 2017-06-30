// lexical scope determined at compile time

function foo(){
  var bar = 'bar';

  function baz() {
    console.log(bar); //lexical!
  }
  baz ();
};

foo();
