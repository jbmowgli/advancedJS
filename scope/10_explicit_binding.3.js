// we can create a utility to bind objects to functions:
if (!Function.prototype.bind2) {
  Function.prototype.bind2 =
    function (o) {
      var fn = this;
      return function () {
        return fn.apply(o, arguments);
      }
    }
}
function foo(baz) {
  console.log(this.bar + " " + baz)
}

var obj = { bar: 'bar'};
foo = foo.bind2(obj)

foo("baz"); // bar baz