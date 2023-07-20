import {allProjects, spareTimeProjects} from "./projects.js";


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
      <a href="projectsDetails.html?projectId=${thisProject.id}&projectType=${thisProject.type}" class="project-btn">${thisProject.projectName}</a>
    </div>
  </div>`
});
htmlElement.innerHTML = projectHTML;

const htmlElementSpareTime = document.querySelector("#placeholderSpareTime");

let spareTimeHtml = '';

spareTimeProjects.forEach(thisProject => {
  spareTimeHtml = spareTimeHtml + `<div class="project-grid">
  <div class="project-grid-one project-div">
  <img
  src="${thisProject.img}"
  alt="screenshot of project"
  class="project-img"
  />
  <a href="projectsDetails.html?projectId=${thisProject.id}&projectType=${thisProject.type}" class="project-btn">${thisProject.projectName}</a>
  </div>
  </div>`
});
htmlElementSpareTime.innerHTML = spareTimeHtml;