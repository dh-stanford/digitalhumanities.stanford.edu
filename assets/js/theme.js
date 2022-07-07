// Hide Header on on scroll down
const navbar = document.querySelector(".topnav");
const navbarHeight = navbar.getBoundingClientRect().height;
let lastKnownScrollPosition = 0;
let ticking = false;

const onScroll = (scrollPos) => {
  if (scrollPos > lastKnownScrollPosition && scrollPos > navbarHeight) {
    navbar.classList.remove("nav-down");
    navbar.classList.add("nav-up");
    navbar.style.top = `-${navbarHeight}px`;
  } else {
    navbar.classList.add("nav-down");
    navbar.classList.remove("nav-up");
    navbar.style.top = "0px";
  }
};

document.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      onScroll(window.scrollY);
      ticking = false;
      lastKnownScrollPosition = window.scrollY;
    });
    ticking = true;
  }
});
