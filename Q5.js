{
  console.log("Before assignment:");
  console.log(myLet); // Outputs: ReferenceError: Cannot access 'myLet' before initialization

  let myLet = 5;

  console.log("\nAfter assignment:");
  console.log(myLet); // Outputs: 5
}
