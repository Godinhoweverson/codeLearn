
// KEEP THE COPYRIGHT DATE UPDATED
document.getElementById("year").textContent = new Date().getFullYear();

// ****************************************
// TO PREVENT THE PAGE REFRESH WHEN CLICK IN JOIN BUTTON ON FOOTER
document.getElementsByClassName("footer-btn")[0].addEventListener("click", function(event){
  event.preventDefault()
});


// ****************************************
//Top up message
let showTopUp = document.getElementById("topUpBox");
let userName = document.getElementById("name-topUp");

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


