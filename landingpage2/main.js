
function checkPalindrome() {
    const inputText = document.getElementById('inputText').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = inputText.split('').reverse().join('');
    
    if (inputText === reversedText) {
        document.getElementById('result').innerText = `"${inputText}" is a palindrome.`;
    } else {
        document.getElementById('result').innerText = `"${inputText}" is not a palindrome.`;
    }
}

const string = "Suraj"
console.log(string.split("").reverse().join(""))
/  let secondName = ("my is bidrohi")
let age = 20
 userHappy =true
   let userName = ("bidu")
 let mon = userName + 'mohapatra' + ` ` + secondName +"i am" +age +'year old'
