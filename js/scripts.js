let cardString = "4102080880435620";


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

  function luhnAlgorithm(string){
    const cardArray = string.split("");
    const doubledEvenArray = [];
    let doubleDigit = [];
    console.log(cardArray);
    for(i = 0; i < cardArray.length; i ++ ){
      if(i % 2 != 0){
        console.log("odd");
        let doubled = parseInt(cardArray[i]) * 2;
        doubledEvenArray.push(doubled);
      }else{
        console.log("even");
        doubledEvenArray.push(parseInt(cardArray[i]));
      }
    };
    for(i = 0; i < doubledEvenArray.length; i++){
      if(doubledEvenArray[i] > 9){
        let needToAdd = doubledEvenArray[i];
        doubleDigit.push(needToAdd);
      }
    }console.log(doubleDigit);
  }

  cardCompanyChecker(cardString);

  luhnAlgorithm(cardString);