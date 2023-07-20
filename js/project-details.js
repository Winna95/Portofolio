import { allProjects, getProjectById, getSpareTimeProjectById } from "./projects.js";

const projectId = new URLSearchParams(document.location.search).get("projectId");
const projectType = new URLSearchParams(document.location.search).get("projectType");
console.log(projectId);

if(projectType == 'spare') {
    const thisProject = getSpareTimeProjectById(projectId);
    document.title = thisProject.projectName;
    const spareTimeHtml = `
    <h1 class="projectDetails-header">${thisProject.projectName}</h1>
    <div class="description-grid">
    <p class="project-description">${thisProject.decription}</p>
    <img
    src="${thisProject.img}"
    alt="screenshot of project"
    class="thisproject-img"
    />

    <div class="project-links">
    <p><i class="fa-brands fa-figma"></i> See project in Figma 
    <a href="${thisProject.figmaLink}" class="projectLink">Here</p></a>
    </div>
    </div>
    <div class="img-grid">
    <div>
    <img
    src="${thisProject.imgTwo}"
    alt="screenshot of project"
    class="img-screenshot"
    />
    </div>
    <div>
    <img
    src="${thisProject.imgThree}"
    alt="screenshot of project"
    class="img-screenshot"
    />
    </div>
    <div>
    <img
    src="${thisProject.imgFour}"
    alt="screenshot of project"
    class="img-screenshot"
    />
    </div>
    <div>
    <img
    src="${thisProject.imgFive}"
    alt="screenshot of project"
    class="img-screenshot"
    />
    </div>
    </div>`
    const thisProjectHtml = document.querySelector("#placeholderThisProject");
    thisProjectHtml.innerHTML = spareTimeHtml;


} else {
    const thisProject = getProjectById(projectId);
    document.title = thisProject.projectName;
    const projectHtml = `
    <h1 class="projectDetails-header">${thisProject.projectName}</h1>
    <div class="description-grid">
    <p class="project-description">${thisProject.decription}</p>
    <img
    src="${thisProject.img}"
    alt="screenshot of project"
    class="thisproject-img"
    />

    <div class="project-links">
    <p><i class="fa-brands fa-github"></i> See project on GitHub 
    <a href="${thisProject.gitHubLink}" class="projectLink">Here</p></a>
    <p><i class="fa-brands fa-chrome"></i> Netlify link for project 
    <a href="${thisProject.netlifyLink}" class="projectLink">Here</p></a>
    <p><i class="fa-brands fa-figma"></i> See project in Figma 
    <a href="${thisProject.figmaLink}" class="projectLink">Here</p></a>
    </div>
    </div>
    <div class="img-grid">
    <div>
    <img
    src="${thisProject.imgTwo}"
    alt="screenshot of project"
    class="img-screenshot"
    />
    </div>
    <div>
    <img
    src="${thisProject.imgThree}"
    alt="screenshot of project"
    class="img-screenshot"
    />
    </div>
    </div>`
    const thisProjectHtml = document.querySelector("#placeholderThisProject");
    thisProjectHtml.innerHTML = projectHtml;
}


 




