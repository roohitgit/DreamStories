// =========================
// LOAD EVENTS AFTER COMPONENTS
// =========================

window.addEventListener("load", () => {

setTimeout(() => {

// =========================
// MOBILE NAVBAR
// =========================

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

if(menuBtn && navLinks){

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("show-menu");

});

}

// =========================
// CHAPTER SIDEBAR
// =========================

document.addEventListener("click",(e)=>{

if(e.target.closest("#chapterToggle")){

const chapterSidebar =
document.getElementById("chapterSidebar");

if(chapterSidebar){

chapterSidebar.classList.toggle("show-sidebar");

}

}

});

// =========================
// AOS
// =========================

if(typeof AOS !== "undefined"){

AOS.init({

duration:1000,
once:true

});

}

},300);

});