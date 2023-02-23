const projectList = document.querySelector('#projects>ul');
const projects = [
    {
        title: 'USU STARS! GEAR UP Website',
        img: 'img/usu-stars.jpg',
        imgAlt: 'Screenshot of USU STARS! GEAR UP Website.',
        link: 'https://www.usu.edu/utahstars/',
        tools: [
            'HTML',
            'CSS',
            'Bootstrap',
            'OmniCMS (Content Management System'
        ],
        summary: 'The primary website used by the USU GEAR UP program. I maintain this website using the OmniCMS content management system and work with Utah State University to ensure it complies with the organization\'s web standards and policies.<br><br>This website provides information to those unfamiliar with the program, equips program partners with the resources they need to succeed, highlights the program\'s past activities, and promotes upcoming camps and activities to students involved in the program.'
    },
    {
        title: 'GEAR UP for College Website',
        img: 'img/gear-up-for-college.jpg',
        imgAlt: 'Screenshot of GEAR UP for College Website.',
        link: 'https://gearupforcollege.com/',
        tools: [
            'HTML + CSS',
            'Foundation Framework',
            'JavaScript + JSON',
            'PHP',
            'Font Awesome + Google Fonts'
        ],
        summary: 'The primary website used by the USU GEAR UP program. I maintain this website using the OmniCMS content management system and work with Utah State University to ensure it complies with the organization\'s web standards and policies.<br><br>This website provides information to those unfamiliar with the program, equips program partners with the resources they need to succeed, highlights the program\'s past activities, and promotes upcoming camps and activities to students involved in the program.'
    },
    {
        title: 'GEAR UP Site Coordinator Manual',
        img: 'img/site-coordinator-manual.jpg',
        imgAlt: 'Screenshot of the Site Coordinator Manual home page.',
        link: 'https://gearupforcollege.com/site-coordinator-manual/index.php',
        tools: [
            'HTML',
            'CSS',
            'Foundation Framework',
            'JavaScript',
            'PHP'
        ],
        summary: 'The primary website used by the USU GEAR UP program. I maintain this website using the OmniCMS content management system and work with Utah State University to ensure it complies with the organization\'s web standards and policies.<br><br>This website provides information to those unfamiliar with the program, equips program partners with the resources they need to succeed, highlights the program\'s past activities, and promotes upcoming camps and activities to students involved in the program.'
    }
]

const renderProjects = arr => {
    let html = ``;
    for (let i = 0; i < arr.length; i++) { 
        html += `<li class="project-tab`;
        if (i === 0) { 
            html += ` is-active`;
        }
        html += `">
                <a href="#" class="project-title">${arr[i].title}</a>
                <div class="project-content">
                <div>
                <div class="project-details">
                <img src="${arr[i].img}" alt="${arr[i].imgAlt}"><br>
                <a class="project-button" href="${arr[i].link}" target="_blank">Launch Project</a><hr>
                <p>Tools used</p>
                <ul>`;
        for (let t = 0; t < arr[i].tools.length; t++) { 
            html += `<li>${arr[i].tools[t]}</li>`;
        }
        html += `</ul>
                </div>
                <div class="project-summary">
                <p>${arr[i].summary}</p>
                </div>
                </div>
                </div>
                </li>
        `;
    }
    projectList.insertAdjacentHTML('beforeend', html);
    projectList.insertAdjacentHTML('afterbegin', '<h2>My Projects</h2>');
}
 
renderProjects(projects);

const projectTabs = Array.from(document.getElementsByClassName('project-tab'));

projectTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-title')) {
            e.preventDefault();

            projectTabs.forEach(tab => {
                tab.classList.remove('is-active');
            });

            e.target.parentNode.classList.add('is-active');
        }
    });
})