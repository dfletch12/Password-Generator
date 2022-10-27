// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var passwordLength = 12;
// var password = "";

// for (var i = 0; i <= passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() * chars.length);
//   password += chars.substring(randomNumber, randomNumber +1);
//  }

//Dom
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}
// Generate event listen
generateBtn.addEventListener('click',()=> {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.Checked;
  const hasUpper = uppercaseEl.Checked;
  const hasNumber = numberEl.Checked;
  const hasSymbol = SymbolEl.Checked;
  
  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper,
    hasNumber, 
    asSymbol, 
    length
    );
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  //1. Init pw var
  //2. Filter out unchecked
  //3. Loop over length call generator function
  //4. Add final pw to pw var and return
  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol

  const typesArr =  [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item) [0]);

  if(typesCount === 0) {
    return '';
  }
  for(let i=0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName] ();

    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

//Generate Elements
function getRandomLower() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}


function getRandomUpper() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 65); 
}

function getRandomNumber() {
  return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol () {
  const symbols = '!@#$%^&*()';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

