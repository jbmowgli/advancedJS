
var foo = function bar() {
  var foo = 'baz';

  function baz(foo) {
    foo = 'bam';
    foo;
  }
  baz ();
};

foo();
bar(); //reference error

// anonymous function (if bar weren't on line 2) expression 3 negatives:
// 1. when it is not named, there is no way in the function to refer to itself
// 2. They don't play well in debugging.
// 3. Anonymous functions don't document themselves


// block scope as of es3 functions are not the only atomic unit of scope, the catch clause is as well.

try {
  foo.length;
} catch (err) {
  console.log(err); //TypeError
}

console.log(err); //ReferenceError
