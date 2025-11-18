let courseId = localStorage.getItem("courseId");
let heading = document.getElementById("heading");
let img = document.getElementsByClassName("courseDetail-main-course-card-img")[0];
let lectures = document.getElementById("lectures");
let Subcribes = document.getElementById("Subcribes");
let reviews = document.getElementById("course-reviews");


let description = document.getElementById(
  "courseDetail-description"
);

fetch("../database/courseDataSet.json")
.then((res)=> res.json())
.then((courses)=>{
  const course = courses.filter((course) => course.course_id === Number(courseId));
  
  heading.textContent = `${course[0].course_title}`
  img.src=`../assets/images/courses/${course[0].image}`;
  img.alt = `${course[0].main_technology} programming icon`;
  lectures.textContent = `${course[0].num_lectures}`;
  Subcribes.textContent = `${course[0].num_lectures}`;
  reviews.textContent = `${course[0].num_lectures}`;

  description.innerHTML = `${course[0].description}`
})