// when a function rembers its lexical scope even when the function is executed outside that lexical scope

for (var i = 1; i <= 5; i++) { //if you replace var with let, it works
  setTimeout(function() {
    console.log("i: " + i);
  }, i * 1000);
}

for (var j = 1; j <= 5; j++) {
  (function(j) {
    setTimeout(function() {
      console.log("j: " + j);
    }, j * 1000);
  })(j);
}