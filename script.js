// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("Input Password Length.")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Thats not a Number, Sir.");
    return;
  } 

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8-128 characters!");
    return;
  }
  
  var userNumbersConfirm = window.confirm("Should your password include numbers?")
  var userUppersConfirm = window.confirm("Should your password include uppercase etters?")
  var userLowersConfirm = window.confirm("Should your password include lowercase letters?")
  var userSymbolsConfirm = window.confirm("Should your password symbols?")

  var numberList= ["0","1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&","*","(",")"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var typesCount = []

  if (userNumbersConfirm == true) {
    typesCount.push(numberList)
  }
  if (userUppersConfirm == true) {
    typesCount.push(uppercaseList)
  }
  if (userLowersConfirm == true) {
    typesCount.push(lowercaseList)
  }
  if (userSymbolsConfirm == true) {
    typesCount.push(symbolList)
  }

  console.log(typesCount)
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // var passwordLength = 12;
// // var password = "";

// // for (var i = 0; i <= passwordLength; i++) {
// //   var randomNumber = Math.floor(Math.random() * chars.length);
// //   password += chars.substring(randomNumber, randomNumber +1);
// //  }

// //Dom
// const resultEl = document.getElementById('result');
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const symbolsEl = document.getElementById('symbols');
// const generateBtn = document.getElementById('generate');
// const clipboardEl = document.getElementById('clipboard');

// const randomFunc = {
//   const lower = getRandomLower;
//   var upper = getRandomUpper;
//   var number = getRandomNumber;
//   var symbol = getRandomSymbol;
// }
// // Generate event listen
// generateBtn.addEventListener('click',()=> {
//   const length = passwordLength;
//   const hasLower = lowercaseEl.Checked;
//   const hasUpper = uppercaseEl.Checked;
//   const hasNumber = numberEl.Checked;
//   const hasSymbol = SymbolEl.Checked;
  
//   resultEl.innerText = generatePassword(
//     hasLower, 
//     hasUpper,
//     hasNumber, 
//     asSymbol, 
//     length
//     );
// });

// // //Generate password function
// function generatePassword(lower, upper, number, symbol, length) {
// //   //1. Init pw var
// //   //2. Filter out unchecked
// //   //3. Loop over length call generator function
// //   //4. Add final pw to pw var and return


//   let generatedPassword = '';

//   var userInput = window.prompt("Input Password Length.")
//   var passwordLength = parseInt(userInput)

//   If (isNaN(passwordLength)); {
//   window.alert("Thats not a Number, Sir.");
//   return;
//   } 
//   if (passwordLength >= 8 || passwordLength > 128) {
//   window.alert("Password length must be between 8-128 characters!")
//   return
//   }

//   const typesCount = lower + upper + number + symbol

//   const typesArr =  [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item) [0]);

//   if(typesCount === 0) {
//     return '';
//   }
//   for(let i=0; i < length; i+= typesCount) {
//     typesArr.forEach(type => {
//       const funcName = Object.keys(type)[0];
//       generatedPassword += randomFunc[funcName] ();

//     });
//   }
//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;
// }

// //Generate Characters
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

