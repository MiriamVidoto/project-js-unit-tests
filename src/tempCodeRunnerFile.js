const myCounter = () => {
  var myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      myArray.push(counter);
    }
  }
  return myArray;
};
console.log(myCounter());