function Foo(who) {
  this.me = who;
}

Foo.prototype.indentify = function() {
  return 'I am ' + this.me;
};

Foo.prototype.speak = function() {
  alert('Hello, ' + this.identify() + '.'); // super unicorn magic
  // this = a1, a1 doesn't have speak, so it goes up the prototype chain
};

var a1 = new Foo('a1');

a1.speak(); //alerts: "Hello, I am a1"
