const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

for (const link of document.querySelectorAll("[data-page-link]")) {
  if (link.getAttribute("href") === currentPage) {
    link.setAttribute("aria-current", "page");
  }
}

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  }
});
