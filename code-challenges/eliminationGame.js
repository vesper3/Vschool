function eliminateBFromA(a, b) {
    // Create a Set from array 'b' for more better performance
    const bSet = new Set(b);
  
    // Use filter to create a new array containing only elements from 'a'
    // that are not present in the 'bSet' using an arrow function.
    return a.filter(element => !bSet.has(element));
  }
  
  console.log(eliminateBFromA([1,2,2,3], [2])); // output: [1,3]