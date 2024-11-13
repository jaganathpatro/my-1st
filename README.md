<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

</head>
<body>
    <!-- Particles Background -->
<div id="particles-js"></div>

    <!-- Glow Elements -->
    <div class="glow-element"></div>
    <div class="glow-element"></div>
    <div class="glow-element"></div>

    <!-- Header -->
    <header>
        <div class="nav-container">
            <div class="logo">My Portfolio</div>
            <nav>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button id="theme-toggle" class="theme-toggle">
                <span class="toggle-icon">🌙</span>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to My Portfolio</h1>
            <p class="hero-description">Front-end Developer & UI/UX Designer</p>
            <a href="#contact" class="hero-cta">Get in Touch</a>
        </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
        <div class="section-title">My Journey</div>
        <div class="timeline">
            <div class="event">
                <h3>2023</h3>
                <p>Started my journey as a web developer.</p>
            </div>
            <div class="event">
                <h3>2024</h3>
                <p>Completed major projects in front-end development.</p>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="about-container">
            <div class="about-image">
                <img src="jaga2.jpg" alt="Profile Picture">
            </div>
            <div class="about-content">
                <h2 class="section-title">About Me</h2>
                <div class="about-text">
                    <p>I'm a passionate front-end developer with a keen eye for design and user experience.</p>
                    <p>My goal is to create beautiful, functional, and accessible web experiences.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <h2 class="section-title">My Skills</h2>
        <div class="skills-container">
            <div class="skill-item glow-card">
                <h3>HTML5</h3>
                <div class="skill-bar">
                    <div class="bar">
                        <div class="progress" data-width="90%"></div>
                    </div>
                </div>
            </div>
            <div class="skill-item glow-card">
                <h3>CSS3</h3>
                <div class="skill-bar">
                    <div class="bar">
                        <div class="progress" data-width="85%"></div>
                    </div>
                </div>
            </div>
            <div class="skill-item glow-card">
                <h3>JavaScript</h3>
                <div class="skill-bar">
                    <div class="bar">
                        <div class="progress" data-width="80%"></div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <h2 class="section-title">My Projects</h2>
        <div class="projects-container">
            <div class="project-item glow-card">
                <h3>Project 1</h3>
                <p>A responsive web application built with modern technologies.</p>
            </div>
            <div class="project-item glow-card">
                <h3>Project 2</h3>
                <p>An interactive dashboard with real-time data visualization.</p>
            </div>
            <div class="project-item glow-card">
                <h3>Project 3</h3>
                <p>A mobile-first e-commerce platform with modern UI/UX.</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-container">
            <form id="contact-form" class="contact-form" action="/submit" method="POST">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" class="glow-input" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" class="glow-input" required>
                </div>
                <div class="form-group" style="grid-column: 1 / -1;">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" class="glow-input" required></textarea>
                </div>
                <button type="submit" class="form-submit">Send Message</button>
            </form>
        </div>
    </section>
    <footer>
        <p>&copy; 2024 B.jaganath patro<br>Nothing is impossible</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
