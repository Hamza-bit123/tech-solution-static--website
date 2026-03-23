async function loadHeader() {
  const response = await fetch("../components/header.html");
  const header = await response.text();
  document.getElementById("header").innerHTML = header;

  const icon = document.getElementById("menu_icon");
  icon.addEventListener("click", () => {
    const menu = document.getElementById("responsiveNav");
    if (!isMenuVisible) {
      menu.style.display = "block";
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`;
      isMenuVisible = true;
    } else {
      menu.style.display = "none";
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`;
      isMenuVisible = false;
    }
  });
}
async function loadFooter() {
  const response = await fetch("../components/footer.html");
  const footer = await response.text();
  document.getElementById("footer").innerHTML = footer;
}
let isMenuVisible = false;
loadHeader();
loadFooter();

document.addEventListener("click", (e) => {
  if (e.target.id === "menu_icon") {
    alert("hello");
  }
});
