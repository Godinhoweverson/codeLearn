
// KEEP THE COPYRIGHT DATE UPDATED
document.getElementById("year").textContent = new Date().getFullYear();


// TO PREVENT THE PAGE REFRESH WHEN CLICK IN JOIN BUTTON ON FOOTER
document.getElementsByClassName("footer-btn")[0].addEventListener("click", function(event){
  event.preventDefault()
});

// SIGNIN FORM
let signIn = document.getElementById("signIn-form");
console.log(signIn)
signIn.addEventListener("submit", function(e){
    e.preventDefault();

    if(e.target.fname.value == ""){
        alert("yes")
    }
})
