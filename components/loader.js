async function loadComponent(id, file) {

  const element =
  document.getElementById(id);

  if (!element) return;

  try {

    const response =
    await fetch(BASE_PATH + file);

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