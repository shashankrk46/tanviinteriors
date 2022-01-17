const ham = document.querySelector(".ham");
const close = document.querySelector(".close");
const body = document.getElementsByTagName("body");
const mobileView = document.querySelector(".mobile-view");
const navBar = document.querySelector(".nav-bar");
const mobileLogo = document.querySelector(".mobile-logo");
const mobileLink = document.querySelectorAll(".m-link");

ham.addEventListener("click", showNavLinks);
close.addEventListener("click", closeNavLinks);

function showNavLinks() {
  mobileView.style.transform = "translateX(0px)";
  document.body.style["overflow-y"] = "hidden";
}
function closeNavLinks() {
  mobileView.style.transform = "translateX(-1000px)";
  document.body.style["overflow-y"] = "auto";
  // close.style.transform = "rotate(360deg)";
  // close.style.transition = "all 0.9s ease-out";
}
