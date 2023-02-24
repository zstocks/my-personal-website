<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Zachary Stocks | Home</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:wght@300&display=swap" rel="stylesheet">
        <!-- Style Sheets -->
        <link rel="stylesheet" href="css/zachary.css">
    </head>
    <body>

        <div id="nav">
            <span id="triple-bar">&equiv;</span>
            <span class="hide" id="cross">X</span>
            <ul id="links">
                <li><a href="#projects">My Projects</a></li>
            </ul>
        </div>

        <div id="hero">
            <div id="hero-content">
                <h1>Hi, I'm <span class="emphasized">Zach</span>,</h1>
                <p class="intro">an experienced front-end and burgeoning full stack <span class="emphasized">web developer</span>, <span class="emphasized">content creator</span>, and <span class="emphasized">lover of learning</span>. You might say, I'm a Zach of all trades...</p>
                <p class="intro">What can I do for you?</p>
                <a href="#" class="intro-button">View Resume</a>
            </div>
        </div>

        <div class="container" id="projects">
            <ul></ul>
        </div>
        
        <script src="js/project-dropdown.js"></script>
        <script>
            const navOpen = document.querySelector('#triple-bar');
            const navClose = document.querySelector('#cross');
            const nav = document.querySelector('#nav');
            const navLinks = Array.from(document.querySelectorAll('#links > li'));

            const open = () => {
                nav.style.height = '22.3rem';
                navClose.style.display = 'block';
                navClose.classList.replace('hide', 'show');
                navOpen.style.display = 'none';
            }

            const close = () => {
                nav.style.height = '2.3rem';
                navOpen.style.display = 'block';
                navClose.classList.replace('show', 'hide');
                navClose.style.display = 'none';
            }
            
            navOpen.addEventListener('click', open);
            navClose.addEventListener('click', close);
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navClose.classList.contains('show')) {
                        close();
                    }
                });
            });
            
        </script>
    </body>
</html>