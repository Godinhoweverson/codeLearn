let courseId = localStorage.getItem("courseId");
let heading = document.getElementById("course-details-heading");
let img = document.getElementsByClassName("courseDetail-main-course-card-img")[0];
let lectures = document.getElementById("lectures");
let Subcribes = document.getElementById("Subcribes");
let reviews = document.getElementById("course-reviews");
let informationBtn = document.getElementById("information-button");
let description = document.getElementById(
  "courseDetail-description"
);

fetch("../database/courseDataSet.json")
.then((res)=> res.json())
.then((courses)=>{

  let course;
  let courseSub = localStorage.getItem("course");
  
  if(!courseSub){
    course = courses.filter((course) => course.course_id === Number(courseId));
  }else{
    course = courses.filter((course) => course.course_id === Number(courseSub));
  }
  localStorage.removeItem("course");
  
  if(heading){
      heading.textContent = `${course[0].course_title}`
  img.src=`../assets/images/courses/${course[0].image}`;
  img.alt = `${course[0].main_technology} programming icon`;
  lectures.textContent = `${course[0].num_lectures}`;
  Subcribes.textContent = `${course[0].num_subscribers}`;
  reviews.textContent = `${course[0].num_reviews}`;

  description.innerHTML = `${course[0].description}`;
  }

})

if(informationBtn){
  informationBtn.addEventListener("click", function(){
    informationBtn.textContent = "Enrolled";
  })
}
