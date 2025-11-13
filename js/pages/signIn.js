//VARIABLES
let signIn = document.getElementById("signIn-form");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let inputs = [firstName, lastName, emailInput, passwordInput];

// This function checks the input's validity and shows the matching error message.
function displayError(input){

  const errorSpan = input.nextElementSibling;

  if(!errorSpan)return;
  // FirstName & LastName
  if(input.validity.patternMismatch && input.name === "fname" || input.name === "lname"){
    errorSpan.setAttribute("class", "active-error");
    errorSpan.textContent = "Invalid: numbers are not allowed and spaces.";
  }
  //Email
  if(input.validity.patternMismatch && input.name === "email"){
    errorSpan.setAttribute("class", "active-error");
    errorSpan.textContent = "Please enter a valid email address.";
  }
  //Password
  if(input.validity.patternMismatch && input.name === "password"){
    errorSpan.setAttribute("class", "active-error");
    errorSpan.textContent = " Password require at least 8 characters, one uppercase, one lowercase, one speacial character (@, $, !, %, etc.)";
  }
  //If the input field is empty
  if(input.validity.valueMissing){
      errorSpan.setAttribute("class", "active-error");
      errorSpan.textContent = "This field is required";
  }
}

// Removes the "active-error" class from the span tag and removes content.
function clearError(input){

  const  errorSpan = input.nextElementSibling;
  
  errorSpan.classList.remove("active-error");

  if(errorSpan){
    errorSpan.textContent = "";
  }
}

// Prevents errors when this script runs on other than signIn.html
if(signIn){

  //GET THE DATA WHEN THE BUTTON SUBMIT IS CLICKED
  signIn.addEventListener("submit", function (e) {
    let formIsValid = true;

    inputs.forEach((input) =>{

      //checks if there are invalid inputs.
      if(!input.validity.valid){
        formIsValid = false;

        //calls displayError() and passes the invalid input as its argument.
        displayError(input);
        e.preventDefault();
      }else{
        clearError(input); // clear error message input field that is correct
      }
    
    });

    if(!formIsValid){
      e.preventDefault();
    }else{
      // if everything is ok, call validForm() function and passes the value from first name and last name.
      e.preventDefault();
      validForm(firstName.value, lastName.value)
    }

  });
}
 
const validForm = function (fname, lname){
  // Stores the first and last name in localStorage for use on index.html.    l
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);

  //Redirect to index.html
  window.location.href = "../index.html";

  // Saves a flag in localStorage so index.html knows to display the top-up message.
  localStorage.setItem("showTopUp", "true");

  //rest all values from the form.
  signIn.reset();

}
