const projectTabs = Array.from(document.getElementsByClassName('project-tab'));

projectTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if (e.target.tagName === "A") {
            e.preventDefault();

            projectTabs.forEach(tab => {
                tab.classList.remove('is-active');
            });

            e.target.parentNode.classList.add('is-active');
        }
    });
})