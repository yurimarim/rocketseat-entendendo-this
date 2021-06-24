// o Local Scope não pega a varíavel do Global Scope


// global scope
this.name = "Diego";

function sayMyName() {
  // local scope
  console.log(this.name); // undefined
}

sayMyName();

