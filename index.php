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
            <ul>
                <h2>My Projects</h2>
                <li class="project-tab is-active">
                    <a href="#" class="project-title">USU STARS! GEAR UP Website</a>
                    <div class="project-content">
                        <div>
                            <div class="project-details">
                                <img src="img/usu-stars.jpg" alt="project screenshot image."><br>
                                <a class="project-button" href="#">Launch Project</a>
                                <hr>
                                <p>Tools used</p>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>OmniCMS (Content Management System)</li>
                                </ul>
                            </div>
                            <div class="project-summary">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae incidunt iusto unde tempore voluptate officiis rem consequuntur deserunt assumenda perferendis, sunt accusamus, asperiores placeat accusantium porro molestias possimus facilis obcaecati.</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="project-tab">
                    <a href="#" class="project-title">GEAR UP for College Website</a>
                    <div class="project-content">
                        All project info goes here.
                    </div>
                </li>
                <li class="project-tab">
                    <a href="#" class="project-title">GEAR UP Site Coordinator Manual</a>
                    <div class="project-content">
                        All project info goes here.
                    </div>
                </li>
            </ul>
        </div>
        
        <script src="js/project-dropdown.js"></script>
    </body>
</html>