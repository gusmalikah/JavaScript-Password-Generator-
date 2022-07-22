const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let useNumbers = false
let useSymbols = false
let password1 = ""
let password2 = ""
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let range = document.getElementById("range")
let slider = document.getElementById("my-range")
let check1 = document.getElementById("check1")
let check2 = document.getElementById("check2")


function generatePassword() {
    for(let i =0; i < slider.value; i++){
        if(check1.checked === true && check2.checked === true){
        randomPassword1 = Math.floor(Math.random()* characters.length)
        randomPassword2 = Math.floor(Math.random()* characters.length)
        password1 += characters[randomPassword1]
        password2 += characters[randomPassword2]
        btn1.textContent += characters[randomPassword1]
        btn2.textContent += characters[randomPassword2]
        } else if(check1.checked === true && check2.checked === false){
        randomPassword1 = Math.floor(Math.random()* numbers.length)
        randomPassword2 = Math.floor(Math.random()* numbers.length)
        password1 += numbers[randomPassword1]
        password2 += numbers[randomPassword2]
        btn1.textContent += numbers[randomPassword1]
        btn2.textContent += numbers[randomPassword2]
        } else if (check1.checked === false && check2.checked === true){
        randomPassword1 = Math.floor(Math.random()* symbols.length)
        randomPassword2 = Math.floor(Math.random()* symbols.length)
        password1 += symbols[randomPassword1]
        password2 += symbols[randomPassword2]
        btn1.textContent += symbols[randomPassword1]
        btn2.textContent += symbols[randomPassword2]
        } else {
        randomPassword1 = Math.floor(Math.random()* alphabets.length)
        randomPassword2 = Math.floor(Math.random()* alphabets.length)
        password1 += alphabets[randomPassword1]
        password2 += alphabets[randomPassword2]
        btn1.textContent += alphabets[randomPassword1]
        btn2.textContent += alphabets[randomPassword2]
        }
    }
}
function getPassword() {
    btn1.textContent= ""
    btn2.textContent= ""
    generatePassword()
}
function updateSlider() {
    range.textContent = slider.value
}
function copyPassword(button) {
    if(button === "button1"){
    const range = document.createRange();
    range.selectNode(document.getElementById("btn1"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    } else if (button === "button2"){
    const range = document.createRange();
    range.selectNode(document.getElementById("btn2"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    }
} 


