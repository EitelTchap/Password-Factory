// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Create an empty array that will contain all the possible characters to choose from based on user input
var PasswordOptions = [];

//Create a global PasswordLength object that will contain the user password length input 
let PasswordLength = null;



// Function 1 to prompt user for password options
function getPasswordOptions() {

//Allow for PasswordOptions to be reset each time a password is generated
PasswordOptions = [];

//Password character length
PasswordLength = prompt("Choose the length of your password (Between 8 and 128 characters):");

//Retry if input is not between 8 and 128
if (!PasswordLength || isNaN(PasswordLength) || PasswordLength < 8 || PasswordLength > 128) {
  alert("Please enter a valid password length between 8 and 128 characters.");
  getPasswordOptions(); // Run the function again
  return; // Exit the function to avoid further execution
}

//Selection of character type
const Lowercase = confirm("Do you want lowercase characters in your password? \nPress 'OK' for yes or 'Cancel' for no");
const Uppercase = confirm("Do you want uppercase characters in your password? \nPress 'OK' for yes or 'Cancel' for no");
const Numeric = confirm("Do you want numeric characters in your password? \nPress 'OK' for yes or 'Cancel' for no");
const SpecialCha = confirm("Do you want special characters in your password? \nPress 'OK' for yes or 'Cancel' for no");

//Retry if no character type is selected.
if(!(Lowercase || Uppercase || Numeric || SpecialCha)) {
  alert("At least one character type must be selected.");
  getPasswordOptions();
}

//Populate Password options based on user input
if(Lowercase === true){
  PasswordOptions.push(...lowerCasedCharacters)
};
if(Uppercase === true){
  PasswordOptions.push(...upperCasedCharacters)
};
if(Numeric === true){
  PasswordOptions.push(...numericCharacters)
};
if(SpecialCha === true){
  PasswordOptions.push(...specialCharacters)
};
}


// Function 2 for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random()*arr.length);
  return arr[randomIndex];
}


// Function 3 to generate password with user input
var GeneratedPassword = [];
function generatePassword() {
  //Reset generatedPassword each time button is clicked
  GeneratedPassword = [];
  getPasswordOptions();
  for(let i = 0; i <PasswordLength; i++) {
    GeneratedPassword.push(...getRandom(PasswordOptions));
  }
  return GeneratedPassword.join('');
}

// Get references to the #generate and #Copy elements
var generateBtn = document.querySelector('#generate');


// Function 4 Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listeners to generate and Copy buttons
generateBtn.addEventListener('click', writePassword);

