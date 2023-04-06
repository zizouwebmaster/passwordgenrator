// Get DOM elements
const passwordInput = document.getElementById("password");
const generateButton = document.querySelector(".generate-btn");
const copyButton = document.querySelector(".copy-btn");
const optionsCheckboxes = document.querySelectorAll(
  ".password-options-form input[type='checkbox']"
);
const optionsRange = document.querySelector(".options-range");

// Generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor
  (Math.random() * (max - min + 1)) + min;
}

// Generate a random password based on the selected options
function generatePassword() {
  // Define character sets to include in password generation
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Initialize variable for generated password
  let generatedPassword = "";

  // Get selected options
  const length = optionsRange.value;
  const includeUppercase = optionsCheckboxes[0].checked;
  const includeLowercase = optionsCheckboxes[1].checked;
  const includeNumbers = optionsCheckboxes[2].checked;
  const includeSymbols = optionsCheckboxes[3].checked;

  // Construct character set for password generation based on selected options
  let characters = "";
  if (includeUppercase) {
    characters += uppercaseLetters;
  }
  if (includeLowercase) {
    characters += lowercaseLetters;
  }
  if (includeNumbers) {
    characters += numbers;
  }
  if (includeSymbols) {
    characters += symbols;
  }

  // Generate password by selecting random characters from the character set
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInt(0, characters.length - 1);
    generatedPassword += characters.charAt(randomIndex);
  }

  // Set the generated password in the password input field
  passwordInput.value = generatedPassword;
}

// Copy the generated password to the clipboard
function copyPassword() {
  passwordInput.select();
  document.execCommand("copy");
  copyButton.innerHTML = "Copied!";
  setTimeout(() => {
    copyButton.innerHTML = "Copy";
  }, 2000);
}

// Event listeners
generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);
