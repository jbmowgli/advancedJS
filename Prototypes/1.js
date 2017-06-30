function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  // this copy of the function is used for all of Foo's children
  // a1 ... a1000 would all reference this exact copy, as it would
  // climb the prototype chain
  return 'I am ' + this.me;
};

var a1 = new Foo('a1');
var a2 = new Foo('a2');

a2.speak = function() {
  alert('Hello, ' + this.identify() + '.');
};

a1.identify = function() {
  // in this case I have overwritten a1's version of identify
  // this is called shadowing
  alert('hello ' + Foo.prototype.identify.call(this) + '.');
  // above I see that to call the identify on the Foo prototype, I have
  // go up the prototype chain and call it with this to bind
};

a1.constructor === Foo;
a1.constructor === a2.constructor;
a1.__proto__ === Foo.prototype;
a1.__proto__ === a2.__proto__;
