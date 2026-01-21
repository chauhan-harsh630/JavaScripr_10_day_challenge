/* ===== DOM Elements ===== */
const inputProfile = document.getElementById("inputProfile");
const searchBtn = document.getElementById("searchbtn");
const profileSection = document.querySelector(".profileSection");
const userImage = document.getElementById("userImage");
const bio = document.getElementById("user-bio");
const userFollower = document.getElementById("follower");
const repoList = document.getElementById("repoList");
const statusEl = document.getElementById("status");

/* ===== Initial State ===== */
profileSection.style.display = "none";
statusEl.textContent = "";

/* ===== Status Handler ===== */
function setStatus(type, message = "") {
  if (type === "loading") {
    statusEl.textContent = "Loading...";

  }

  if (type === "error") {
    statusEl.textContent = message;
    statusEl.style.backgroundColor = "#d32f2f";
  }

  if (type === "success") {
    statusEl.textContent = "Success";
  }
}

/* ===== Search Handlers ===== */
searchBtn.addEventListener("click", handleSearch);

inputProfile.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
});

function handleSearch() {
  const username = inputProfile.value.trim();

  if (!username) {
    setStatus("error", "Please enter a GitHub username");
    return;
  }

    localStorage.setItem("lastUser", username);
     fetchUser(username);
}

window.addEventListener("DOMContentLoaded", () => {
    const saveduser = localStorage.getItem("lastUser");
    if (saveduser) {
        inputProfile.value = saveduser;
        fetchUser(saveduser);
    }
});

/* ===== Fetch User ===== */
async function fetchUser(username) {
  try {
    setStatus("loading");
    profileSection.style.display = "none";
    repoList.innerHTML = "";

    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      throw new Error("User not found");
    }

    const data = await res.json();

    renderProfile(data);
    fetchRepos(username);
    setStatus("success");
  } catch (error) {
    setStatus("error", error.message);
    profileSection.style.display = "none";
  }
}

/* ===== Render Profile ===== */
function renderProfile(user) {
  profileSection.style.display = "block";

  userImage.src = user.avatar_url;
  userImage.alt = user.login;

  bio.textContent = user.bio || "No bio available";

  userFollower.textContent = `
    Followers: ${user.followers} | Following: ${user.following}
  `;
}

/* ===== Fetch Repositories ===== */
async function fetchRepos(username) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`
    );

    if (!res.ok) {
      throw new Error("Repos not found");
    }

    const repos = await res.json();

    if (repos.length === 0) {
      repoList.innerHTML = "<li>No repositories found</li>";
      return;
    }

    repos.slice(0, 5).forEach((repo) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <strong>
          <a href="${repo.html_url}" target="_blank">
            ${repo.name}
          </a>
        </strong>
        <p>${repo.description || "No description"}</p>
        <small>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</small>
      `;

      repoList.appendChild(li);
    });

  } catch (error) {
    repoList.innerHTML = "<li>Error loading repositories</li>";
  }
}