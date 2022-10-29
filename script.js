// button
var generateBtn = document.querySelector("#generate");

//functions for random char selection
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomItem(typesCount) {
  return typesCount[randomInt(0,typesCount.length -1)]
}
// function to generate password by adding options and generating random chars then printing
function generatePassword() {

  var userInput = window.prompt("Input Password Length of 8-128.")

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
  var userUppersConfirm = window.confirm("Should your password include uppercase letters?")
  var userLowersConfirm = window.confirm("Should your password include lowercase letters?")
  var userSymbolsConfirm = window.confirm("Should your password include symbols?")

  var numberList= ["0","1","2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@","#","$","%","^","&","*","(",")"]
  var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var typesCount = new Array()

  if (userNumbersConfirm) {
    typesCount = typesCount.concat(numberList)
  }

  if (userUppersConfirm ) {
    typesCount = typesCount.concat(uppercaseList)
  }

  if (userLowersConfirm) {
    typesCount = typesCount.concat(lowercaseList)
  }

  if (userSymbolsConfirm) {
    typesCount = typesCount.concat(symbolList)
  }
 
  if (typesCount == 0) {
    window.alert("Sir, this is a Wendy's...");
    passwordText.value =""
    return;
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
      generatedPassword += getRandomItem(typesCount)
     }
     
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

