function getBasePath() {

  const isGithub =
  window.location.hostname.includes("github.io");

  if (isGithub) {
    return "/DreamStories/";
  }

  return "/";
}

async function loadComponent(id, file) {

  const element =
  document.getElementById(id);

  if (!element) return;

  try {

    const response =
    await fetch(getBasePath() + file);

    const data =
    await response.text();

    element.innerHTML = data;

  } catch (error) {

    console.error(
      "Component load error:",
      file
    );
  }
}

/* NAVBAR */

loadComponent(
  "navbar-container",
  "components/navbar.html"
);

/* FOOTER */

loadComponent(
  "footer-container",
  "components/footer.html"
);

/* SIDEBAR */

loadComponent(
  "sidebar-container",
  "stories/space-odyssey/season-1/sidebar.html"
);