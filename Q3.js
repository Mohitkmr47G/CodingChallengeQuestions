function demonstrateVariableHoisting(num1, num2) {
  console.log("Value before assignment:", myVar); // Outputs: undefined
  
  var myVar; // Variable declaration
  myVar = num1 + num2; // Variable assignment
  
  console.log("Value after assignment:", myVar); // Outputs: sum of num1 and num2
}

// Call the function
demonstrateVariableHoisting(5, 7);
