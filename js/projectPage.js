import {allProjects} from "./projects.js";

console.log(allProjects);

const htmlElement = document.querySelector("#placeholder");

let projectHTML = '';

allProjects.forEach(thisProject => {
    projectHTML = projectHTML + `<div class="project-grid">
    <div class="project-grid-one project-div">
       <img
        src="${thisProject.img}"
        alt="screenshot of project"
        class="project-img"
      />
      <a href="projectsDetails.html?projectId=${thisProject.id}" class="project-btn">${thisProject.projectName}</a>
    </div>
  </div>`
});
htmlElement.innerHTML = projectHTML;