function foo() {
  console.log(this.bar)
}

var bar = 'bar1';
var obj = { bar: 'bar2'}

foo(); //non-strict bar1
foo.call(obj); //bar2