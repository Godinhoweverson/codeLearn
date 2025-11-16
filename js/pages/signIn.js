$(function(){
  //variables
  const $signIn = $("#signIn-form");
  const $firstName = $("#fname");
  const $lastName = $("#lname");
  const $emailInput = $("#email");
  const $passwordInput = $("#password");

  const $inputs = $firstName
    .add($lastName)
    .add($emailInput)
    .add($passwordInput);

  //This function checks the input's validity and show the matching error message.
  function displayError($input){
    const input = $input[0];
    const $errorSpan = $input.next();

    if(!$errorSpan.length) return;

    //FirstName & LastName
    if(
      input.validity.patternMismatch &&
      (input.name === "fname" || input.name === "lname")
    ){
      $errorSpan.addClass("active-error");
      $errorSpan.text(
        "Invalid: numbers are not allowed and spaces."
      );
    }

    //Email
    if(input.validity.patternMismatch && input.name === "email"){
      $errorSpan.addClass("active-error");
      $errorSpan.text("Please enter a valid email address.");
    }
    
    //Password
    if(input.validity.patternMismatch && input.name === "password"){
      $errorSpan.addClass("active-error");
      $errorSpan.text(
        " Password require at least 8 characters, one uppercase, one lowercase, one speacial character (@, $, !, %, etc.)"
      );
    }

    // If the input field is empty
    if(input.validity.valueMissing){
      $errorSpan.addClass("active-error");
      $errorSpan.text("This field is required");
    }
  }
  
  // Removes the "active-error" class from the span tag and removes content.
  function clearError($input){
    const $errorSpan = $input.next();

    $errorSpan.removeClass("active-error");

    if($errorSpan.length){
      $errorSpan.text("");
    }
  }

  //Prevents error when this script runs on other page than sign.html
  if($signIn.length){
    //Trigged the data when the button is clicked
    $signIn.on("submit", function(e){
    
      let formIsvalid = true;

      $inputs.each(function(){
        const $input = $(this);
        const input = this;

        //checks if there are invalid inputs.
        if(!input.validity.valid){
          formIsvalid = false;
          
          //call displayError() and passes the invalid as its argument.
          displayError($input);
        }else{
          //clear error message input field that is correct
          clearError($input);
        }
      });

      if(!formIsvalid){
        e.preventDefault();
      }else{
        //if everything is ok, call validForm() and passes the value from first name and last name.
        e.preventDefault();
        validForm($firstName.val(), $lastName.val());
      }  
    });
  }

  function validForm(fname, lname){
    //stores the first and last name in localStorage for use on index.html
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);

    //redirect to index.html
    window.location.href = "../index.html";

    //saves a flag in localStorage so index.html knows when display the top-up message.
    localStorage.setItem("showTopUp", "true");

    //rest all values from the form
    if($signIn.length){
      $signIn[0].reset();
    }
  }
});