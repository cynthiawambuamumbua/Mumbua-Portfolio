const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');
const home = document.querySelector('#home');
const exitButton = document.querySelector('.exitButton');
const homeTitle = document.querySelector('.home-title');
const projects = document.querySelector('.projects');
const projectsBtn = document.querySelector('.projectExitBtn');
const projectsTitle = document.querySelector('.projects-title');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Detect if the mouse is hovering over an anchor tag
    const isHoveringOverLink = e.target.tagName === 'A' || e.target.tagName === 'I' || e.target.tagName === 'BUTTON'

    // Toggle a CSS class to hide/show cursorOutline
    if (isHoveringOverLink) {
        cursorOutline.classList.add('invisible');
        cursorDot.classList.add('changeSize');
    } else {
        cursorOutline.classList.remove('invisible');
        cursorDot.classList.remove('changeSize');
    }

    cursorOutline.animate(
        {
            left: `${posX}px`,
            top: `${posY}px`
        },
        { duration: 500, fill: 'forwards' }
    );
})


homeTitle.style.display = 'block'

home.addEventListener('click', (event) => {
    if (event.target === exitButton) {
        home.classList.remove('clicked')
		homeTitle.style.display = 'block'
		setTimeout(() => {
            projects.style.display = 'block';
        }, 400);

    } else if (!home.classList.contains('clicked')) {
        home.classList.add('clicked')
		homeTitle.style.display = 'none'
		projects.style.display = 'none'
    }
})


projectsTitle.style.display = 'block'

projects.addEventListener('click', (event) => {
    if (event.target === projectsBtn) {
        projects.classList.remove('clicked2')
		projectsTitle.style.display = 'block'
		setTimeout(() => {
			home.style.display = 'flex';
			console.log('displayed')
        }, 400);
    } else if (!projects.classList.contains('clicked2')) {
			home.style.display = 'none'
			projects.classList.add('clicked2')
			projectsTitle.style.display = 'none'
    }
})
