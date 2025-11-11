//VARIABLES
let signIn = document.getElementById("signIn-form");
let note = document.getElementById("note");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

//GET THE DATA WHEN THE BUTTON SUBMIT IS CLICKED
signIn.addEventListener("submit", function(e){

//PREVENT THE PAGE FROM REFRESHIN WHEN THE SUBMIT BUTTON IS CLICKED
    e.preventDefault();

//CALL THE validaForm() FUNCTION AND PASS THE FORM DATA AS AN ARGUMENT
    validateForm(e);
});

//validateForm() FUNCTION IS USED TO VALIDATE THE INPUTS
const validateForm = function(e){
    let fname = e.target.fname.value;
    let lname = e.target.lname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    // Regular Expressions for validation
    let nameRegex = /^\s*$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //VALIDATION
    // It checks which input is valid or invalid. 
    // If an input is invalid, it will display a red box with a message, and the input border will turn red.
    // After 5 seconds, it will reset.

    //FIRSTNAME
    if(nameRegex.test(fname)){

        note.style.display = "flex";
        let p = document.createElement("p");
        p.innerText = "Invalid first name"
        note.appendChild(p);

        firstName.style.border = "2px solid #fd5c63";
        fname.value = "";
    }

    //LASTNAME
    if(nameRegex.test(lname)){

        note.style.display = "flex";
        let p = document.createElement("p");
        p.innerText = "Invalid Last name"
        note.appendChild(p);

        lastName.style.border = "2px solid #fd5c63";
        lname.value = "";
    }

    //EMAIL
    if(!emailRegex.test(email)){

        note.style.display = "flex";
        let p = document.createElement("p");
        p.innerText = "Invalid email address!"
        note.appendChild(p);

        emailInput.style.border = "2px solid #fd5c63";
        email.value = "";
    }
    
    //PASSWORD
    if(!passwordRegex.test(password)){
    
        note.style.display = "flex";
        let p = document.createElement("p");
        p.innerText = "Invalid password. Password require at least 8 characters, one uppercase, one lowercase, one speacial character (@, $, !, %, etc.) and a number."
        note.appendChild(p);

        passwordInput.style.border = "2px solid #fd5c63";
        password.value = "";
    }

    if(!nameRegex.test(fname) && !nameRegex.test(lname) && emailRegex.test(email) && passwordRegex.test(password)){
        validForm();
    }

    //Reset the inputs
    setTimeout(()=>{
        note.style.display = "none";
        note.innerHTML = "";
        firstName.style.border = "1px solid #000";
        lastName.style.border = "1px solid #000";
        emailInput.style.border = "1px solid #000";
        passwordInput.style.border = "1px solid #000";
    },5000);
}


const validForm = function (){
    signIn.reset();

}