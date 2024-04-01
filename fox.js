function changeCase(str){
    let result = ''
    //assign the result variable to a string 
    for (let i = 0; i < str.length; i++) {
        //for loop iterates through each value in the string 
        if (str[i] === str[i].toLowerCase()){
            //if the value in the string is in lowercase it converts it to uppercase
            result += str[i].toUpperCase()
        } else {
            // if the value in the string is in uppercase it is then converted to lowercase
            result += str[i].toLowerCase()
        }
    }
    return result 
  }
  // the function is called and the result variable with the new string is returned 
  console.log(changeCase('The Quick Brown Fox'))
