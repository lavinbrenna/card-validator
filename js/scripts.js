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

  function cardCompanyChecker(string){
    const cardArray = string.split("");
    console.log(cardArray);
    if(cardArray[0].includes(3) && (cardArray[1].includes(4) ||cardArray[1].includes(7))){
      console.log("amex");
      return "amex";
    }else if(cardArray[0].includes(4)){
      console.log("visa");
      return "visa";
    }else if(cardArray[0].includes(5)){
      console.log("mastercard");
      return "mastercard";
    }else if(cardArray[0].includes(6)){
      console.log("discover");
      return "discover";
    }else{
      console.log("invalid");
      return "invalid"
    }
  }

  cardCompanyChecker(cardString);