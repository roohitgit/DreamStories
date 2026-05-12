// FILE: components/loader.js

async function loadComponent(id, file) {

  const element =
  document.getElementById(id);

  if(!element) return;

  try{

    const response =
    await fetch(file);

    const data =
    await response.text();

    element.innerHTML = data;

    initializeMenu();

  }

  catch(error){

    console.error(
      "Component load failed:",
      error
    );

  }

}

/* =========================
   MOBILE MENU
========================= */

function initializeMenu(){

  const menuBtn =
  document.getElementById("menuBtn");

  const navLinks =
  document.getElementById("navLinks");

  if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle("active");

    });

  }

}

/* =========================
   MOBILE SIDEBAR
========================= */

const chapterToggle =
document.getElementById("chapterToggle");

const chapterSidebar =
document.getElementById("chapterSidebar");

if(chapterToggle && chapterSidebar){

  chapterToggle.addEventListener("click", () => {

    chapterSidebar.classList.toggle(
      "sidebar-active"
    );

  });

}

/* =========================
   LOAD NAVBAR
========================= */

loadComponent(
  "navbar-container",
  "/components/navbar.html"
);

/* =========================
   LOAD FOOTER
========================= */

loadComponent(
  "footer-container",
  "/components/footer.html"
);