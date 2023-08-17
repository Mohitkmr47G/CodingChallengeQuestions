{
  console.log("Before declaration:");
  console.log("Let:", myLet); // Outputs: ReferenceError: Cannot access 'myLet' before initialization
  console.log("Var:", myVar); // Outputs: undefined
  console.log("Const:", myConst); // Outputs: ReferenceError: Cannot access 'myConst' before initialization
  
  let myLet = 5;
  var myVar = 10;
  const myConst = 15;
  
  console.log("\nAfter declaration:");
  console.log("Let:", myLet); // Outputs: 5
  console.log("Var:", myVar); // Outputs: 10
  console.log("Const:", myConst); // Outputs: 15
}
