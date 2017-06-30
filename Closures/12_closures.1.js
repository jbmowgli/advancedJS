// when a function rembers its lexical scope even when the function is executed outside that lexical scope
function foo() {
  var bar = 'bar';

  function baz() {
    console.log(bar);
  }
  bam(baz);
}

function bam(baz) {
  // the fact that bar stayed with baz through lexical scope 
  // is closure
  baz();   // bar
}


foo()