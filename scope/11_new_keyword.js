function foo() {
  this.baz = baz;
  console.log(this.bar + " " + baz); //this returns undefined undefined
  // ** return this;
}

var bar = "bar";
// when you but the new keyword in front of a function call
// it makes it a constructor call. 
// four things occur when you put a new in front of a function call:
// 1. A brand new object is created
// 2. Object gets linked to a different Object*
// 3. Object gets bound as the this keyword for the purposes of that function call
// 4. If that function does not return anything it will return "this" **
var baz = new foo();

// four things to ask about the this keyword
// 1. was the function called with new, if so use that object
// 2. was it called with call or apply?
// 3. was it an implicit call containing/owning
// 4. DEFAULT: global object (except strict mode) 
