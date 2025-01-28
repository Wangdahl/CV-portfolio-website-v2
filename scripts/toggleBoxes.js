
/* Showing and hiding experience, skills, education on cv page */
document.addEventListener('DOMContentLoaded', () => {

    const clickHeadingExp = document.getElementById('exp-head');
    const infoBoxExp = document.getElementById('exp-box');
    const clickHeadingSkills = document.getElementById('skills-head');
    const infoBoxSkills = document.getElementById('skills-box');
    const clickHeadingEdu = document.getElementById('edu-head');
    const infoBoxEdu = document.getElementById('edu-box');
    const clickHeadingCert = document.getElementById('cert-head');
    const infoBoxCert = document.getElementById('cert-box');

    const toggleInfo = (domElement) => {
        domElement.classList.toggle('hide');
    }

    clickHeadingExp.addEventListener('click', () => {
        toggleInfo(infoBoxExp);
    });
    clickHeadingSkills.addEventListener('click', () => {
        toggleInfo(infoBoxSkills);
    });
    clickHeadingEdu.addEventListener('click', () => {
        toggleInfo(infoBoxEdu);
    });
    clickHeadingCert.addEventListener('click', () => {
        toggleInfo(infoBoxCert);
    });
});

// Flipping heading arrow 
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.rotate').forEach(heading => {
        heading.addEventListener('click', () => {
            heading.querySelector('i').classList.toggle('open');
        });
    });
});