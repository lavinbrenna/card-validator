let cardString = "3400000000000000";


  function numberChecker(string){
    const regex = /^[0-9]+$/;
    if((string.match(regex) != null) && (string.length >= 15 && string.length <= 16)){
      console.log("This card number is valid.");
      return "This card number is valid";
    }else{
      console.log("This card number is not valid.");
      return "This card number is not valid";
    }
  }

  numberChecker(cardString);

  console.log(cardString.charAt(0));
  console.log(cardString.charAt(1));

  function isCardAmericanExpress(string){
    const cardArray = string.split("");
    console.log(cardArray);
    if((parseInt(cardArray[0])=== 3) && (parseInt(cardArray[1])=== 4 || parseInt(cardArray[1]) === 7)){
      console.log("amex");
      console.log(cardArray[0], cardArray[1]);
    }else{
      console.log("invalid");
    }
  }

  isCardAmericanExpress(cardString);