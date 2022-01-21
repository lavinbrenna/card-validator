# Credit Card Validator
#### By Brenna Lavin, Jake Haley

#### This program will validate whether a credit card number is real or not

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Test Cases

Description: numberChecker()

Test: "It should determine whether a string is only composed of numbers"

Code:
let cardString = "0";
numberChecker(cardString);
Expected Output:
True

Test: "It should determine whether a string returns false if there are letters"
Code:
let cardString = "0Vb";
numberChecker(cardString);
Expected Output:
False

Test: "It should determine whether a string has the correct number of numbers"
Code:
let cardString = "0Vb";
numberChecker(cardString);
Expected Output:
False

Test: "It should determine whether a string has the right number of numbers"
Code:
let cardString = "000000000000000"
numberChecker(cardString);
Expected Output:
True

Test: "It should determine whether a string has too many numbers"
Code:
let cardString = "00000000000000000000"
numberChecker(cardString);
Expected Output:
False

Description: cardCompanyChecker()

Test: "It should determine whether a string starts with 34 or 37"
Code:
let cardString = "340000000000000";
cardCompanyChecker(cardString)
Expected Output:
"amex"

Test:"It should determine whether a string starts with 4"
Code:
let cardString = "4000000000000000";
cardCompanyChecker(cardString);
Expected Output:
"visa"

Test:"It should determine whether a string starts with 5"
Code:
let cardString = "5000000000000000";
cardCompanyChecker(cardString);
Expected Output:
"mastercard"

Description: luhnAlgorithm()

Test:"it should specify whether the index of the array is even or odd"
Code:
let cardString = "4102080880435620";
luhnAlgorithm(cardString);
Expected Output:
even
odd
even
odd
even
odd
even
odd
even
odd
even
odd
even
odd
even
odd

Test: "it should double the values in odd indices, not modify values at even indices, and push all to new array"
Code:
let cardString = "4102080880435620"
luhnAlgorithm(cardString);
Expected Output:
[4,2,0,4,0,16,0,16,8,0,4,6,5,12,2,0]

Test: "it should find values with more than one digit"
Code:
let cardString = "4102080880435620";
luhnAlgorithm(cardString);
Expected Output:
[16,16,12]

Test: "It should split values with more than one digit, add them together"
Code:
let cardString = "4102080880435620";
luhnAlgorithm(cardString);
Expected Output:
[4,2,0,4,0,7,0,7,8,0,4,6,5,3,2,0]

Test: "It should add all numbers in transformed array"
Code:
let cardString = "4102080880435620";
luhnAlgorithm(cardString);
Expected Output:
52

Test:"it should return invalid if last digit in sum is not 0"
let cardString = "4102080880435620";
luhnAlgorithm(cardString);
Expected Output:
invalid

Test:"it should return valid if last digit in sum is 0"
## License

MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

