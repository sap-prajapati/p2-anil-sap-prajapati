const fibonacci = {
    [Symbol.iterator]() {
      var n1 = 0, n2 = 1, value;
      var i=0;
      return {
        next() {
          
          i++;
          [value, n1, n2] = [n1, n2, n1 + n2];
          return {value , done : i>10};
        }
      };
    }
  };
   
  for (const n of fibonacci) {
 
    console.log(n);
  }