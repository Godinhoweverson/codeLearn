let courseId = localStorage.getItem("courseId");
let description = document.getElementById(
  "courseDetail-description"
);

fetch("../database/courseDataSet.json")
.then((res)=> res.json())
.then((courses)=>{
   const course = courses.filter((course) => course.course_id === Number(courseId));

   description.innerHTML = `${courses[4].description}`

})