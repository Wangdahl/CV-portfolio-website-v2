/* Functionality to read and display cv.json */

document.addEventListener('DOMContentLoaded', async function() {
    //Fetch th JSON file
    try {
        const response = await fetch('/data/cv.json');
        if(!response.ok) {
            throw new Error('Network error while loading CV data');
        }
        const data = await response.json();
        const expBox = document.getElementById('exp-box');
        expBox.innerHTML = data.experience.map(exp => `
            <h3>${exp.title}</h3>
            <h4>${exp.company}, ${exp.period}</h4>
            <ul>
                ${exp.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        `).join('');

        const skillBox = document.getElementById('skills-box');
        skillBox.innerHTML = Object.entries(data.skills_and_tools).map(([skill, description]) => `
            <h3>${skill}</h3>
            <p>${description}</p>
        `).join('');

        const eduBox = document.getElementById('edu-box');
        eduBox.innerHTML = data.education.map(edu => `
            <h3>${edu.institution}</h3>
            <h4>${edu.course} - ${edu.period}</h4>
            <p>${edu.description}</p>
        `).join('');

        const certBox = document.getElementById('cert-box');
        certBox.innerHTML = data.certifications.map(cert => `
            <h3>${cert.institution}</h3>
            <h4>${cert.title} ${cert.year}</h4>
            <p>${cert.description}</p>
        `).join('');
    } catch(error) {
            console.error('Error loading CV data: ', error);
        };
});