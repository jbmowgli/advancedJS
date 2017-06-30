// Javascript is compiled.
var foo /* LHS reference */ = 'bar' /* RHS reference */;


function bar() {
  var foo = 'baz';
}

  foo = 'bam';
function baz(foo) {
  bam = 'yay'; // this gets hoisted to the global scope unless in strict mode
}


var foo = 'bar';


function bar() {
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam';
    bam = 'yay';
  }
  baz ();
}

bar(); // hey global scope do you have an RHS for bar()?
foo;
bam;
baz();
