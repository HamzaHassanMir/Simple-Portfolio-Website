const projectList = document.getElementById("project-list");

fetch("https://api.github.com/users/HamzaHassanMir/repos")
  .then(res => res.json())
  .then(repos => {
    projectList.innerHTML = "";

    repos.forEach(repo => {
      const div = document.createElement("div");
      div.className = "project";

      div.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">VIEW PROJECT</a>
      `;

      projectList.appendChild(div);
    });
  })
  .catch(() => {
    projectList.innerHTML = "<p>Unable to load projects.</p>";
  });