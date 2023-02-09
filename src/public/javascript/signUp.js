"use strict"
const cError = function error(){
    document.getElementById("error").innerHTML = "Your E-Mail Adress already exist.";
}

const  cSendData = function sendData(){

}

document.getElementById("buttonSignUp").addEventListener("click", cSendData);