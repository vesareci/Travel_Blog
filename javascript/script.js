//get data
const nameInput=document.querySelector("#name");
const lastname=document.querySelector("#lastname");
const email=document.querySelector("#email");
const mobilePhone=document.querySelector("#mobile-phone");
const message=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

//validate data
function validateForm(){

    clearMessages();
    let errorFlag=false;

    if(nameInput.value.length<1){
        errorNodes[0].innerText="First name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag=true;
    }

    if(lastname.value.length<1){
        errorNodes[1].innerText="Last name cannot be blank";
        lastname.classList.add("error-border");
        errorFlag=true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[2].innerText="Invalid email address";
        email.classList.add("error-border");
        errorFlag=true;
    }

    if(mobilePhone.value.length<1){
        errorNodes[3].innerText="Mobile phone cannot be blank";
        mobilePhone.classList.add("error-border");
        errorFlag=true;
    }
    
    if(message.value.length<1){
        errorNodes[4].innerText="Please enter your message";
        message.classList.add("error-border");
        errorFlag=true;
    }

    if(!errorFlag){
        success.innerText="Your message was received successfully! Our team will get back to you within 24 hours.";
    }
 }

//Clear error / success messages
function clearMessages(){
    for(let i=0;i<errorNodes.length;i++){
        errorNodes[i].innerText="";
    }

    success.innerText="";
    nameInput.classList.remove("error-border");
    lastname.classList.remove("error-border");
    mobilePhone.classList.remove("error-border");
    message.classList.remove("error-border");
    email.classList.remove("error-border");
}

//check if email is valid
function emailIsValid(email){
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}

