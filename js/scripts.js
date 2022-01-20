let cardString = "0";

function numberChecker(cardString){
  let numberArray = [0,1,2,3,4,5,6,7,8,9];
  parseInt(cardString);
  console.log(cardString);
  let numCounter = 0;
  for(i = 0; i < numberArray.length; i ++ ){
    if(cardString.includes(numberArray[i])){
      numCounter ++;
      return true;
    }else{
      return false;
    }
  }
}
numberChecker(cardString);