
generatePassword = () => {
const passwordLength = document.querySelector("#length");
const valueLength = parseInt(passwordLength.value);
if (isNaN(valueLength) || valueLength < 1 || valueLength > 16) {
    alert("Please enter a valid Number");
    return;
} 
const includeNum = document.querySelector("#includeNum").checked;
const includeLow = document.querySelector("#includeLow").checked;
const includeUpper = document.querySelector("#includeUpper").checked;
const excludeSim = document.querySelector("#excludeSim").checked;

let charSet = "";
if (includeNum) charSet += "0123456789";
if (includeLow) charSet += "abcdefghijklmnopqrstuvwxyz";
if (includeUpper) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const similarChars = "LlOo0Ii";
if (excludeSim) {
    for (let i = 0; i < similarChars.length; i++) {
        charSet = charSet.replace(similarChars[i], "");
    }
}

if (charSet.length === 0) charSet = "abcdefghijklmnopqrstuvwxyz";


let password = "";
for (let i = 0; i < valueLength; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
}


document.querySelector("#newPassword").value = password;

};

document.querySelector("#generate").addEventListener("click", generatePassword);




const copyPassword = () => {
    
    const passwordField = document.querySelector("#newPassword");
  
    
    passwordField.select();
  
    
    navigator.clipboard.writeText(passwordField.value).then(function() {
      console.log("Password copied to clipboard");
    }, function(err) {
      console.error("Failed to copy to clipboard:", err);
    });
  };
  
 
  document.querySelector("#copy").addEventListener("click", copyPassword);
