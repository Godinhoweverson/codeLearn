//VARIABLES
let courseGrid = document.getElementById("courses-grid");
let categories = document.querySelectorAll(".category");

//This triggers the value from the categories on the courses page and sends the value to filter the data.
 function onCategorySelect(callback){
  categories.forEach((element) => {
    element.addEventListener("click", function () {
      callback(this.textContent);
    });
  });
}

// Fetching the data and filtering it according to the user's choice. 
// The user can choose a category from the navbar on another page or on the courses page. 
// After filtering, it will call the displayCourses() function and pass the filtered courses as an argument. 
// The user can filter by selecting a category or by typing in the search bar.
fetch("../dataBase/courseDateSet.json")
  .then((res) => res.json())
  .then((courses) => {

    //It retrieves the value from index.html and uses it to filter and display.
    let categoryIn = localStorage.getItem("category");
    if(categoryIn){
      //Filter
      const coursesList = courses.filter((course) => course.category === categoryIn);
      displayCourses(coursesList);
      
      //Remove the value
      localStorage.removeItem("category");

    }else{
      //If the value is null, all courses will be displayed.
      displayCourses(courses)
    }

    onCategorySelect((cat) => {
      if(cat === "All courses"){
        displayCourses(courses);
      }else{
        const coursesList = courses.filter((course) => course.category === cat);
        displayCourses(coursesList);
      }
    });

});

// It creates the HTML structure and classes for each card that will be displayed on courses.html.
function displayCourses(coursesList) {
  if(courseGrid){
    courseGrid.innerHTML = ""; // Cleans the value before displaying a new one.
    coursesList.forEach((course) => {
      //create a div element
      let coursesGridItem = document.createElement("div");
      //add the class
      coursesGridItem.classList.add("courses-grid-item");
      courseGrid.appendChild(coursesGridItem);

      //Create img element
      let img = document.createElement("img");
      img.classList.add("courses-grid-item-img");
      img.src = `../assets/images/courses/${course.image}`;
      coursesGridItem.appendChild(img);

      //Create Div element for set the description of the course
      let courseGridItemContent = document.createElement("div");
      courseGridItemContent.classList.add("courses-grid-item-content");
      coursesGridItem.appendChild(courseGridItemContent);

      //Create p element for title
      let courseGridItemContentTitle = document.createElement("p");
      courseGridItemContentTitle.classList.add(
        "courses-grid-item-content-title"
      );
      courseGridItemContentTitle.textContent = `${course.course_title}`;
      courseGridItemContent.appendChild(courseGridItemContentTitle);

      //Create p element for course level
      let courseGridItemContentParagraph = document.createElement("p");
      courseGridItemContentParagraph.classList.add(
        "courses-grid-item-content-paragraph"
      );
      courseGridItemContentParagraph.textContent = `${course.level}`;
      courseGridItemContent.appendChild(courseGridItemContentParagraph);

      //Create p element for course duration
      let courseGridItemContentDuration = document.createElement("span");

      let icon = document.createElement("img");
      icon.src = `../assets/images/videoIcon.png`;
      courseGridItemContentDuration.appendChild(icon);

      let duration = document.createTextNode(`${course.content_duration}`);
      courseGridItemContentDuration.append(duration);
      courseGridItemContent.appendChild(courseGridItemContentDuration);
    });
  }
}

