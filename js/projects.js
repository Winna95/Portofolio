const projectOne = {
    id: 1,
    projectName: "Project Exam 1",
    decription: "In the Project 1 exam, we were tasked to create a blog site. This five-week project shows what we have learned during the first year in front-end development. The theme of the blog is healthy smoothie bowl recipes. The blog includes a homepage, an About page, a list of blog posts, blog post-specific pages, and a contact page. I have used Figma to make a prototype for the blog. HTML, CSS, and JavaScript are used to develop the blog. WordPress is used as API to get the smoothie recipes and images.",
    img: "images/Skjermbilde 2023-05-30 095258.png",
    imgTwo: "images/Skjermbilde 2023-06-05 112753.png",
    imgThree: "images/Skjermbilde 2023-06-05 112808.png",
    netlifyLink: "https://ephemeral-alfajores-046636.netlify.app/",
    gitHubLink: "https://github.com/Winna95/SmoothieBowls",
    figmaLink: "https://www.figma.com/file/QLfbh4XxbBIYuncqxpmjgP/Project-Exam-1_PE1_Winnie-Orbek_fp?type=design&node-id=1%3A11&t=2YAP7prcNqnqgUXL-1",

};

const projectTwo = {
    id: 2,
    projectName: "Semester Project 1",
    decription: "Community Science Museum is a semester project about creating a website for a museum. It's a four-week project showing what we learned the first semester in front-end development. The website's target audience is children between the ages of 7-15 and families with children. The website is created using HTML and CSS. There was also made a prototype in Figma for this project.",
    img: "images/Skjermbilde 2023-05-30 095156.png",
    imgTwo: "images/Skjermbilde 2023-06-05 113249.png",
    imgThree: "images/Skjermbilde 2023-06-05 113309.png",
    netlifyLink: "https://boisterous-halva-bb1034.netlify.app",
    gitHubLink: "https://github.com/Winna95/2022-12-18_Semester-Project-1_CA_Winnie--rbek_fp",
    figmaLink: "https://www.figma.com/file/hWQ0wxyqPNJA8btpXh2bff/2022-12-18_Semester-Project-1_CA_Winnie-%C3%98rbek_fp?type=design&node-id=2%3A6&t=h74UyKFrzYIJQ8Hq-1",

};

const projectThree = {
    id: 3,
    projectName: "Cross-course Project",
    decription: "Rainy Days is an online shop selling men's and women's rain jackets. They are designed for a range of different outdoor activities that enrich people's lives. The target audience for the website is men and women aged 30 to 50 whose interests are: being outdoors, hiking, exploring, skiing, camping, canoeing. I have used Figma to make a prototype for the website. HTML, CSS, and JavaScript are used to develop the site. WordPress is used as API to get the products and images. ",
    img: "images/Skjermbilde 2023-05-30 093629.png",
    imgTwo: "images/Skjermbilde 2023-06-05 113706.png",
    imgThree: "images/Skjermbilde 2023-06-05 113653.png",
    netlifyLink: "https://zesty-selkie-11bd46.netlify.app",
    gitHubLink: "https://github.com/Winna95/Content-Management-Systems_CA_Winnie-Orbek_fp",
    figmaLink: "https://www.figma.com/file/RBgwUjqj9niLNWJxJlK4tm/2022-09-23_Design_CA_Winnie-Orbek_fp?type=design&node-id=0%3A1&t=wyx6WBXRBTeXPhRv-1",

};

const allProjects = [projectOne, projectTwo, projectThree]

function getProjectById(id) {
    return allProjects.find(thisProduct => thisProduct.id === parseInt(id));
}

export {
    allProjects,
    getProjectById
}