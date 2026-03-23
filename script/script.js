async function loadHeader() {
  const response = await fetch("../components/header.html");
  const header = await response.text();
  document.getElementById("header").innerHTML = header;
}
async function loadFooter() {
  const response = await fetch("../components/footer.html");
  const footer = await response.text();
  document.getElementById("footer").innerHTML = footer;
}

loadHeader();
loadFooter();
