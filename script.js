const username = document.querySelector('#username');
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password2');


document.getElementById("buton").addEventListener('click',function(){
    checkInput();
})

const setSucsess = (input) =>{
    const control = input.parentElement
    control.className = 'form-control sucsess';
 }
 
 const setError = (input,message)=>{
     const control1 = input.parentElement;
     control1.className = 'form-control error';
     const small = control1.querySelector('small');
      small.innerHTML = message;
 }
 

const checkInput=()=>{
    usernameValue = username.value.trim();
    emailValue = email.value.trim();
    pass1Value = pass1.value.trim();
    pass2Value = pass2.value.trim();

    if(usernameValue === ''){
        setError(username,"Username cannot be left blank");
    }else{
        setSucsess(username);
    }

    if(emailValue === ''){
        setError(email,"Email cannot be left blank")
    }else if(!isEmail(emailValue)){
        setError(email,"Enter the correct email")
    }else{
        setSucsess(email)
    }

    if(pass1Value === ''){
        setError(pass1, 'Password cannot be left blank')
    }else if(pass1Value !== pass2Value){
        setError(pass1, 'Passwords does not match')
    }else{
        setSucsess(pass1);
    }

    if(pass2Value === ''){
        setError(pass2, 'Password cannot be left blank')
    }else if(pass2Value !== pass1Value){
        setError(pass2, 'Passwords does not match')
    }else{
        setSucsess(pass2);
    }








//is email function//
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    } 
}



//Scripted By Azizov :))  <3

const errorIcon = document.querySelector("#form > div:nth-child(3) > i.fas.fa-exclamation-circle");

errorIcon.addEventListener('click',()=>{
    if(pass1.type === "password"){
        pass1.type = "text";
    }else {
        pass1.type = "password";
    }
});