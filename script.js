// =========================
// MOBILE NAVIGATION
// =========================

document.addEventListener("click", (e) => {

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!menuBtn || !navLinks) return;

  if (e.target.closest("#menuBtn")) {

    navLinks.classList.toggle("active");

  }

});

// =========================
// CHAPTER SIDEBAR
// =========================

const chapterToggle =
document.getElementById("chapterToggle");

const chapterSidebar =
document.getElementById("chapterSidebar");

if (chapterToggle && chapterSidebar) {

  chapterToggle.addEventListener("click", () => {

    chapterSidebar.classList.toggle("sidebar-active");

  });

}

// =========================
// AOS
// =========================

if (typeof AOS !== "undefined") {

  AOS.init({
    duration: 1000,
    once: true
  });

}