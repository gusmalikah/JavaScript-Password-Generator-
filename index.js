const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let password1 = ""
let password2 = ""
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let range = document.getElementById("range")
let slider = document.getElementById("my-range")

function generatePassword() {
    for(let i =0; i < slider.value; i++){
        randomPassword1 = Math.floor(Math.random()* characters.length)
        randomPassword2 = Math.floor(Math.random()* characters.length)
        password1 += characters[randomPassword1]
        password2 += characters[randomPassword2]
        btn1.textContent += characters[randomPassword1]
        btn2.textContent += characters[randomPassword2]
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
