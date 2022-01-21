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
    const doubledArray = [];
    let sum = 0;
    console.log(cardArray);
    for(i = 0; i < cardArray.length; i ++ ){
      if(i % 2 != 0){
        console.log("odd");
        let doubled = parseInt(cardArray[i]) * 2;
        if(doubled > 9){
          let digits = doubled.toString().split('');
          doubledArray.push(parseInt(digits[0]) + parseInt(digits[1]));
        }
        else{
          doubledArray.push(doubled);
        }
      }else{
        console.log("even");
        doubledArray.push(parseInt(cardArray[i]));
      }
    }
    doubledArray.forEach(function(element){
      sum += element;
    });
  }

  cardCompanyChecker(cardString);

  luhnAlgorithm(cardString);