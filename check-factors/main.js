
function checkFactors(array, number){
    var myNumber = 0;
   myNumber += number % array[0]
   myNumber += number % array[1]
   myNumber += number % array[2]
   if(myNumber === 0){
       return true
   } else {
       return false
   }
}