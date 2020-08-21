function valid (num) {
  
  for (let i = num.length - 2; i > 0; i-=2) {
    // double the number 
    var doubleNum = parseInt(num[i] * 2);
    // if greater than 9
    console.log(doubleNum)
    if (doubleNum > 9) {
      // convert to str and split 
      var doubleArr = doubleNum.toString().split('');
      // add both numbers
      var sum = doubleArr[0] + doubleArr[1];
      console.log('test', sum, num[i])
      // set num[i] to new sum 
      num[i] = sum.toString();
    } else {
      // otherwise set num[i] to the doubleNum 
      num[i] = doubleNum.toString();
    }
    console.log(num);
  }
  
  return [];
}

console.log(valid("7541825"))
