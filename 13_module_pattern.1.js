// two characteristics, must have an outer function, and must return a refernce to at least 1 inner function
var foo = (function(){
  var o = { bar: 'bar'};

  return {
    bar: function() {
      console.log(o.bar);
    }
  };
})();

foo.bar();