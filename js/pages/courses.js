//VARIABLES
let courseGrid = document.getElementById("courses-grid");
let categories = document.querySelectorAll(".category");
let searchForm = document.getElementById("search-form");
let coursesMain = document.getElementById("courses-main");
let notIncluded = document.querySelector("#not-included");

if(searchForm){
  function search(callback) {
    searchForm.addEventListener("input", function (e) {
      callback(e.target.value);
    });
  }


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
  fetch("../database/courseDataSet.json")
    .then((res) => res.json())
    .then((courses) => {

      //Search
      search((input) =>{
        const searchList = courses.filter((course) => course.main_technology.toLowerCase().includes(input));
        if(searchList.length !== 0){
          displayCourses(searchList); 
        }else{
          courseGrid.innerHTML = "";
          if (notIncluded) {
              notIncluded.remove();
          } // Cleans the previous message

          // Create a new <p>
          notIncluded = document.createElement("p");
          notIncluded.id = "not-included";
          let span = document.createElement("span");
          span.style.fontWeight = "bold";
          span.textContent = `${input}.`;

          notIncluded.textContent = `Oops! We couldn’t find any courses matching with `;
          
          notIncluded.appendChild(span);
          coursesMain.appendChild(notIncluded);  
        }
      })

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

      // Cleans the value before displaying a new one.
      courseGrid.innerHTML = "";
      if (notIncluded) {
        notIncluded.remove();
      }
      
      coursesList.forEach((course) => {
        //create a div element
        let coursesGridItem = document.createElement("div");
        //add the class
        coursesGridItem.classList.add("courses-grid-item");
        courseGrid.appendChild(coursesGridItem);

        // Stored the course ID in a data attribute
        coursesGridItem.dataset.courseId = course.course_id;

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

        //Create p element for course duration and review
        let courseGridItem = document.createElement("span");
        courseGridItem.classList.add(
          "courses-grid-item-informations"
        );

        let divDuration = document.createElement('div');
        divDuration.classList.add("courses-item-informations")
        courseGridItem.appendChild(divDuration);

    
        let icon = document.createElement("img");
        icon.src = `../assets/images/videoIcon.png`;
        icon.style.paddingRight = "5px"
        divDuration.appendChild(icon);

        let duration = document.createElement('p');
        duration.textContent = `${course.content_duration}`;
        divDuration.append(duration);
        courseGridItemContent.appendChild(courseGridItem);

        let divReviews = document.createElement('div');
        divReviews.classList.add("courses-item-informations")
        courseGridItem.appendChild(divDuration);

        let iconReview = document.createElement("img");
        iconReview.src = `../assets/images/rate-review.png`;
        iconReview.style.paddingRight = "5px";
        divReviews.appendChild(iconReview);

        let review = document.createElement('p');
        review.textContent = `${course.num_reviews} Reviews`;
        divReviews.append(review);
        courseGridItem.appendChild(divReviews);

        
      });

      // When the user clicks a course card, retrieve the course ID stored in its data attribute.
      // This ID will be saved to localStorage and used in courseDetails.js to filter the
      // fetched data and redirect to coursesDetails page.
      let courseCards = document.querySelectorAll(".courses-grid-item");
      if (courseCards) {
          courseCards.forEach((e)=>{
            e.addEventListener("click",(e) => {
              if (e.target.closest(".courses-grid-item")) {
                const course = e.target.closest(".courses-grid-item");
                const courseId = course.dataset.courseId;

                localStorage.setItem("courseId",courseId);

                window.location.href = "../courseDetail/courseDetail.html"
              }
            });
          })
          
        }
      
    }
  }
}
