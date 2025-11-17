let courseId = localStorage.getItem("courseId");
let description = document.getElementsByClassName("courseDetail-description-content")[0];

fetch("../database/courseDataSet.json")
.then((res)=> res.json())
.then((courses)=>{
   const course = courses.filter((course) => course.course_id === Number(courseId));

   description.innerHTML = `${courses[0].description}`

})