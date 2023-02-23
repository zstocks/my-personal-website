const projectTabs = Array.from(document.getElementsByClassName('project-tab'));

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