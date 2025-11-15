//VARIABLES
let courseGrid = document.getElementById("courses-grid");
let categories = document.querySelectorAll(".category");

  categories.forEach((element) => {
    element.addEventListener("click", function () {
      let category = "All courses";
      category = this.textContent;
      console.log(category);
      console.log(course[0].category);
    });
      //Fetch the data
      fetch("../dataBase/courseDateSet.json")
        .then((res) => res.json())
        .then((courses) => {
          const filtered = courses.filter(course => course.category === "frontend");
          filtered.forEach((course) => {
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

            let duration = document.createTextNode(
              `${course.content_duration}`
            );
            courseGridItemContentDuration.append(duration);
            courseGridItemContent.appendChild(courseGridItemContentDuration);
          });
        });
    });
 
