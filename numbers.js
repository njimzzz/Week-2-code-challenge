function generateArray(value1, value2) {
    let arr = [];//print if condtition is true
    for (let i = value1; i<= value2 ; i++){
        //for loop checks is the value2 is less than or equal to value1, if value1 is greater the loop stops,if value2 is greater then the loop continues 
    arr.push(i);
   }
   return arr;
   }
   console.log(generateArray(-6,8))//the function is called and output printed