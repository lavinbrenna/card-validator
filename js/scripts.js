
let cardString = "0000000000000000";

  function numberChecker(string){
    const regex = /^[0-9]+$/;
    if((string.match(regex) != null) && (string.length >= 15 && string.length <= 16)){
      return "This card number is valid.";
    }else{
      return "This card number is not valid.";
    }
  }

  numberChecker(cardString);