const navElement = document.querySelector("header nav");
function openNav() {
  if (!navElement.classList.value.includes("open")) {
    navElement.classList.add("open");
  } else {
    navElement.classList.remove("open");
  }
}

const navItems = document.querySelectorAll("header a");
navItems.forEach((element) => {
  element.addEventListener("click", () => {
    if (navElement.classList.value.includes("open")) {
      navElement.classList.remove("open");
    }
  });
});
