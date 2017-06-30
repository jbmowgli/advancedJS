// this is not correct, don't use
function foo(){
  var bar = 'bar1';
  this.baz = baz; // this is a no-op. It says global.baz = global.baz
  this.baz();
}

function baz() {
  console.log(this.bar); //this is still the global
}

var bar = "bar2";
foo();//???