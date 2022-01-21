let cardString = "4102080860435620";


  function numberChecker(string){
    const regex = /^[0-9]+$/;
    if((string.match(regex) != null) && (string.length >= 15 && string.length <= 16)){
      return "This card number is valid";
    }else{
      return "This card number is not valid";
    }
  }

  function cardCompanyChecker(string){
    const cardArray = string.split("");
    if(cardArray[0].includes(3) && (cardArray[1].includes(4) ||cardArray[1].includes(7))){
      return "Amex";
    }else if(cardArray[0].includes(4)){
      return "Visa";
    }else if(cardArray[0].includes(5)){
      return "Mastercard";
    }else if(cardArray[0].includes(6)){
      return "Discover";
    }else{
      return "invalid"
    }
  }

  function luhnAlgorithm(string){
    const cardArray = string.split("");
    const doubledArray = [];
    let sum = 0;
    for(i = 0; i < cardArray.length; i ++ ){
      if(i % 2 != 0){
        let doubled = parseInt(cardArray[i]) * 2;
        if(doubled > 9){
          let digits = doubled.toString().split('');
          doubledArray.push(parseInt(digits[0]) + parseInt(digits[1]));
        }
        else{
          doubledArray.push(doubled);
        }
      }else{
        doubledArray.push(parseInt(cardArray[i]));
      }
    }
    doubledArray.forEach(function(element){
      sum += element;
    });
    let isValid = sum.toString().split('');
    if(isValid[isValid.length-1] != 0){
      return "invalid";
    }
    else{
      return "valid";
    }
  }
  numberChecker(cardString);
  cardCompanyChecker(cardString);
  luhnAlgorithm(cardString);