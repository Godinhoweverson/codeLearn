
// KEEP THE COPYRIGHT DATE UPDATED
document.getElementById("year").textContent = new Date().getFullYear();

// ****************************************
//Newsletter Form
let newsletterForm = document.getElementById("newsletter-form");
let newsletterContainerForm = document.getElementsByClassName("footer-container-newsletter-form")[0];
let Pmessage = document.getElementById("footer-container-newsletter-paragraph");


// This event listener hides the newsletter form input, displays a message to the user,
// then after 5 seconds shows the form input again and clears the field.
newsletterForm.addEventListener("submit", function(event){
  event.preventDefault()
  let newsletterInput = document.getElementById("newsletter-input").value;
  if(newsletterInput){
     newsletterContainerForm.style.display = "none";
     Pmessage.style.display = "flex";
     setTimeout(()=>{
        Pmessage.style.display = "none";
        newsletterContainerForm.style.display = "flex";
        newsletterInput.textContent = "";
        newsletterForm.reset();
     },5000);
  }
});


// ****************************************
//Top up message
let showTopUp = document.getElementById("topUpBox");
let userName = document.getElementById("name-topUp");
let signIn = document.getElementById("headingSignIn");
let signOut = document.getElementById("headingSignout");

if(showTopUp && localStorage.getItem("showTopUp") === "true"){
  let fname = localStorage.getItem("fname");
  let lname = localStorage.getItem("lname");

  showTopUp.style.display = "flex";

  userName.innerText = `${fname} ${lname}`;

  setTimeout(() => {
    showTopUp.style.display = "none";
  }, 7000);

  signIn.style.display = "none";
  signOut.style.display = "flex";

  localStorage.removeItem("fname");
  localStorage.removeItem("lname");
  localStorage.removeItem("showTopUp");
}

if(signOut){
  signOut.addEventListener("click", function (e) {
    signOut.style.display = "none";
    signIn.style.display = "flex";
  });
}

// ****************************************
//Courses 
// It triggers the value from the categories in the navbar and stores it in localStorage. 
// This value is then retrieved in course.js to filter and display the courses.

let categoriesIndex = document.querySelectorAll(".dropdown-item");
categoriesIndex.forEach((element) => {
     element.addEventListener("click", function () {
       localStorage.setItem("category", this.textContent);
     });
   });




   //Finish............
let items = document.querySelectorAll(".sub-heading-items-tec");

items.forEach((item)=>{
  item.addEventListener("click", function(e){
    const course = e.target.closest(".sub-heading-items-tec");
    localStorage.setItem('course',course.dataset.course)
    
    window.location.href = "../courseDetail/courseDetail.html"
})})