document.addEventListener("DOMContentLoaded", async () => {
    const username = "nurosmanisik";
    const container = document.getElementById("github-projects");

    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

        const repos = await res.json();

        container.innerHTML = repos.map(repo => `
            <div class="project-item">
                <h3>${repo.name}</h3>
                <p>${repo.full_name}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            </div>
        `).join("");

    } catch (err) {
        container.innerHTML = `<p>Failed to load projects: ${err.message}</p>`;
    }
});