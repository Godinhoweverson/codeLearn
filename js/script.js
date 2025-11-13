
// KEEP THE COPYRIGHT DATE UPDATED
document.getElementById("year").textContent = new Date().getFullYear();


// TO PREVENT THE PAGE REFRESH WHEN CLICK IN JOIN BUTTON ON FOOTER
document.getElementsByClassName("footer-btn")[0].addEventListener("click", function(event){
  event.preventDefault()
});

let showTopUp = document.getElementById("topUpBox");
let userName = document.getElementById("name-topUp");
let headingSignIn = document.getElementById("headingSignIn");

if(showTopUp && localStorage.getItem("showTopUp") === "true"){
  let fname = localStorage.getItem("fname");
  let lname = localStorage.getItem("lname");

  showTopUp.style.display = "flex";

  userName.innerText = `${fname} ${lname}`;

  setTimeout(() => {
    showTopUp.style.display = "none";
  }, 7000);
  localStorage.removeItem("fname");
  localStorage.removeItem("lname");
  localStorage.removeItem("showTopUp");

  headingSignIn.textContent = "Sign out";
}
// I Have to finish it
if(headingSignIn.textContent === "Sign out"){
  console.log('yes')
}