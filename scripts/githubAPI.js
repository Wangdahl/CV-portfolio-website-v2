/* Importing projects with Github API*/

document.addEventListener('DOMContentLoaded', async function() {
    const userName = 'Wangdahl';
    const apiUrl = `https://api.github.com/users/${userName}/repos`;

    try {
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`);
        }
        const repos = await response.json();
        //Ensuring no private repos are displayed
        const publicRepos = repos.filter(repo => !repo.private);
        //Container for displaying the projects
        const repoContainer = document.getElementById('portfolio-container');


        repoContainer.innerHTML = publicRepos.map(repo => `
            <h2 class="rotate">${repo.name}<i class="fas fa-chevron-down"></i></h2>
            <div class="hide">
                <h3>${repo.language}</h3>
                <p>${repo.description}</p>
                <a href="${repo.html_url}" target="_blank">Check GitHub repo<i class="fas fa-arrow-right moving-arrow"></i></a>
            </div>
        `).join('');
    } catch(error) {
        console.error('Error loading GitHub repos: ', error);
    }
})