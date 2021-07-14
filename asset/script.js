// Clears console on refresh
console.clear();
    document.body.style.height = `${innerHeight}px`

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*-+=_?";

// variables for each DOM
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incLower = document.getElementById("lowercase");
const incUpper = document.getElementById("uppercase");
const incNumbers = document.getElementById("number");
const incSymbols = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");

// generatePassword function that passes in data
generateBtn.addEventListener("click", () => {
    let characters = "";
    incLower.checked ? (characters += lower) : "";
    incUpper.checked ? (characters += upper) : "";
    incNumbers.checked ? (characters += number) : "";
    incSymbols.checked ? (characters += symbol) : "";
    passwordTxt.value = generatePassword(length.value, characters)
})

//generatePassword function that generates password
const generatePassword = (length, charBank) => {
    let password = "";
    for (let i= 0; i < length; i++) {
        password += charBank.charAt(
            Math.floor(Math.random() * charBank.length)
        );
    }
    return password;
}

//source: https://w3collective.com/random-password-generator-javascript/