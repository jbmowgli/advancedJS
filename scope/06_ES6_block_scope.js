// let keyword attaches it self to the scope of the block that it is in

function foo(){
  var bar = 'bar';
  for (let i=0; i<bar.length; i++){ //block scoped to the for loop
    console.log(bar.charAt(i));
  }
}

function foo1(bar){
  if(bar) {
    let baz = bar;
    if (baz) {
      console.log('hello world'); // bam doesn't exist here
      let bam = baz; // let keyword doesn't hoist to top of if statement
    }
    console.log(bam); //Error bam is scoped to if (baz) {}
  }
  console.log(baz); //Error baz scoping
}

foo();
