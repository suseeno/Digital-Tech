//Toggle Class ACtive

const navbarNav = document.querySelector(".navbar-nav");

//ketika  menu di klik

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
