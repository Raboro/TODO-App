"use strict"

const cError = function error(){
    document.getElementById("error").innerHTML = "Please check your login data!";
}

document.getElementById("buttonSignIn").addEventListener("click", cError);

