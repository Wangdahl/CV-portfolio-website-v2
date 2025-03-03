
/* Showing and hiding experience, skills, education on cv page */
document.addEventListener('DOMContentLoaded', () => {
    //For dynamic content loaded with API
    const portfolioContainer = document.getElementById('portfolio-container');
    if(portfolioContainer) {
        portfolioContainer.addEventListener('click', (event) => {
            //Check if clicked element has .rotate class
            const heading = event.target.closest('.rotate');
            if(heading && portfolioContainer.contains(heading)) {
                const contentDiv = heading.nextElementSibling;
                if(contentDiv) {
                    contentDiv.classList.toggle('open');
                }
                const icon = heading.querySelector('i');
                if(icon) {
                    icon.classList.toggle('open');
                }
            }
        })
    }
    //For hardcoded content
    document.querySelectorAll('.rotate').forEach(heading => {
        heading.addEventListener('click', () => {
            const contentDiv = heading.nextElementSibling;
            if(contentDiv) {
                contentDiv.classList.toggle('open');
            }
            const icon = heading.querySelector('i');
            if (icon) {
                icon.classList.toggle('open');
            }
        });
    });
});
