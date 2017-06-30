// when a function rembers its lexical scope even when the function is executed outside that lexical scope
function foo() {
  var bar = 'bar';
  setTimeout(function() {
    console.log(bar);
  });
}

foo();